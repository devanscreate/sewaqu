import type { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  // Set default dates: tomorrow for pickup, day after tomorrow for return
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3); // Default 2 nights

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  Alpine.store('rental', {
    startDate: formatDate(tomorrow),
    endDate: formatDate(dayAfter),
    cart: [] as Array<{
      id: string;
      name: string;
      pricePerNight: number;
      quantity: number;
      isBundle?: boolean;
    }>,
    isDrawerOpen: false,
    renterName: '',
    renterPhone: '',
    guaranteeConfirmed: true,

    get nights(): number {
      if (!this.startDate || !this.endDate) return 1;
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    },

    get totalItemsCount(): number {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },

    get dailySubtotal(): number {
      return this.cart.reduce((sum, item) => sum + (item.pricePerNight * item.quantity), 0);
    },

    get grandTotal(): number {
      return this.dailySubtotal * this.nights;
    },

    get downPayment(): number {
      return Math.round(this.grandTotal * 0.3);
    },

    addItem(item: { id: string; name: string; pricePerNight: number; isBundle?: boolean }) {
      const existing = this.cart.find((c) => c.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.cart.push({
          id: item.id,
          name: item.name,
          pricePerNight: item.pricePerNight,
          quantity: 1,
          isBundle: item.isBundle || false,
        });
      }
    },

    removeItem(id: string) {
      this.cart = this.cart.filter((c) => c.id !== id);
    },

    updateQuantity(id: string, delta: number) {
      const item = this.cart.find((c) => c.id === id);
      if (!item) return;
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        this.removeItem(id);
      } else {
        item.quantity = newQty;
      }
    },

    getItemQuantity(id: string): number {
      const item = this.cart.find((c) => c.id === id);
      return item ? item.quantity : 0;
    },

    formatRupiah(value: number): string {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(value);
    },

    formatDateDisplay(dateStr: string): string {
      if (!dateStr) return '-';
      const d = new Date(dateStr);
      return d.toLocaleDateString('id-ID', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    },

    get whatsappUrl(): string {
      const adminWa = '6281234567890';
      const startFormatted = this.formatDateDisplay(this.startDate);
      const endFormatted = this.formatDateDisplay(this.endDate);
      const nightsText = `${this.nights} Malam`;

      let itemsList = '';
      this.cart.forEach((item) => {
        const itemTotal = this.formatRupiah(item.pricePerNight * item.quantity);
        itemsList += `- ${item.quantity}x ${item.name} (${this.formatRupiah(item.pricePerNight)}/mlm) = ${itemTotal}/mlm\n`;
      });

      const message = `Halo Admin Puncak Raya Outdoor, saya ingin booking alat pendakian:

📅 Ambil: ${startFormatted} (Sore/Fleksibel)
📅 Kembali: ${endFormatted} (Sore) — [${nightsText}]

🎒 Rincian Sewa:
${itemsList || '- (Belum memilih alat)\n'}
⏱️ Durasi Sewa: ${nightsText}
💰 Total Estimasi: ${this.formatRupiah(this.grandTotal)}
💵 DP 30% Kunci Jadwal: ${this.formatRupiah(this.downPayment)}

👤 Nama Penyewa: ${this.renterName.trim() || '-'}
📱 Kontak: ${this.renterPhone.trim() || '-'}
🪪 Syarat Jaminan: KTP / SIM Asli Siap Dibawa saat pengambilan.

Apakah ketersediaan unit untuk tanggal tersebut masih ada?`;

      return `https://wa.me/${adminWa}?text=${encodeURIComponent(message)}`;
    },
  });
};

