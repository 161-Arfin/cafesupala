"use client";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

type FormData = {
  name: string;
  date: string;
  time: string;
  guests: string;
  note: string;
};

function buildWAMessage(data: FormData): string {
  const lines = [
    `Halo ${siteConfig.name}! Saya ingin melakukan reservasi 🙏`,
    ``,
    `*Nama:* ${data.name}`,
    `*Tanggal:* ${data.date}`,
    `*Jam:* ${data.time}`,
    `*Jumlah Tamu:* ${data.guests} orang`,
    data.note ? `*Catatan:* ${data.note}` : null,
    ``,
    `Mohon konfirmasi ketersediaan meja. Terima kasih!`,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return encodeURIComponent(lines);
}

export function ReservationSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    date: "",
    time: "",
    guests: "2",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = buildWAMessage(form);
    setSubmitted(true);
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${msg}`, "_blank");
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Min date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservation" className="py-20 md:py-28 bg-[#0e0e11]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Info */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-accent">
              Reservasi
            </span>
            <h2 className="mt-3 font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight">
              Pesan Meja
              <br />
              Sekarang
            </h2>
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-md">
              Isi formulir di samping, lalu kami akan langsung terhubung via WhatsApp
              untuk konfirmasi ketersediaan meja Anda.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: "🕐", label: "Jam Buka", value: `${siteConfig.contact.hoursWeekday}\n${siteConfig.contact.hoursWeekend}` },
                { icon: "📍", label: "Lokasi", value: siteConfig.contact.address },
                { icon: "📱", label: "WhatsApp", value: siteConfig.contact.whatsappDisplay },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">{item.label}</p>
                    <p className="mt-0.5 text-sm text-white/70 whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-luxury p-8 sm:p-10">
            <h3 className="font-serif-heading text-xl font-bold text-white mb-6">
              Detail Reservasi
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="booking-name" className="block text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-accent/60 focus:bg-white/8 transition-colors"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                    Tanggal *
                  </label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    style={{ backgroundColor: '#1c1c20', colorScheme: 'dark' }}
                    className="w-full rounded-xl border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="booking-time" className="block text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                    Jam *
                  </label>
                  <select
                    id="booking-time"
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    style={{ backgroundColor: '#1c1c20', colorScheme: 'dark' }}
                    className="w-full rounded-xl border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition-colors cursor-pointer"
                  >
                    <option value="" disabled style={{ backgroundColor: '#1c1c20' }}>Pilih jam</option>
                    {["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
                      "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"].map((t) => (
                      <option key={t} value={t} style={{ backgroundColor: '#1c1c20' }}>{t} WIB</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="booking-guests" className="block text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                  Jumlah Tamu *
                </label>
                <select
                  id="booking-guests"
                  name="guests"
                  required
                  value={form.guests}
                  onChange={handleChange}
                  style={{ backgroundColor: '#1c1c20', colorScheme: 'dark' }}
                  className="w-full rounded-xl border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition-colors cursor-pointer"
                >
                  {["1","2","3","4","5","6","7","8","9","10+"].map((n) => (
                    <option key={n} value={n} style={{ backgroundColor: '#1c1c20' }}>{n} orang</option>
                  ))}
                </select>
              </div>

              {/* Note */}
              <div>
                <label htmlFor="booking-note" className="block text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
                  Catatan (opsional)
                </label>
                <textarea
                  id="booking-note"
                  name="note"
                  rows={3}
                  placeholder="Contoh: area outdoor, ada yang ulang tahun, dll."
                  value={form.note}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 text-sm focus:outline-none focus:border-accent/60 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#c69a52] to-[#eed07c] text-[#121214] font-extrabold text-xs uppercase tracking-widest py-4 shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:brightness-110 hover:shadow-[0_6px_28px_rgba(212,175,55,0.6)] transition-all active:scale-[.98]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.523 5.857L0 24l6.335-1.493A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.006-1.368l-.359-.214-3.72.877.946-3.618-.235-.372A9.792 9.792 0 012.182 12C2.182 6.57 6.569 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
                {submitted ? "Membuka WhatsApp…" : "Booking via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
