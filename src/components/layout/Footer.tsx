import { Container } from "@/components/ui/Container";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative bg-[#0e0e10] border-t border-white/10 py-10 text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <a href="#home" aria-label="Cafeko Coffee and Space, kembali ke atas">
            <BrandLockup compact />
          </a>
          
          <p className="text-xs text-white/50 max-w-sm text-center md:text-right">
            Ruang singgah dan peracik kopi berkualitas di Babarsari, Sleman, Yogyakarta.
          </p>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-accent transition-colors">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-accent transition-colors">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/60 hover:text-accent transition-colors">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/60 hover:text-accent transition-colors">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>

          {/* Copyright */}
          <div>
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-5 text-xs uppercase tracking-wider">
            <a href="#home" className="hover:text-white transition-colors">Beranda</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#location" className="hover:text-white transition-colors">Lokasi</a>
            <a href="#reservation" className="text-accent hover:underline">Reservasi</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

