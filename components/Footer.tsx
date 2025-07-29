import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white flex justify-center section-spacing z-[3]">
      {/* Top border line */}
      <div className="absolute top-0 left-0 w-full border-t border-white/10" />

      <div className="responsive-container grid-responsive-2 items-start">
        {/* ========== Left Column ========== */}
        <div className="flex flex-col justify-start mb-12 lg:mb-0">
          <Link href="/" className="inline-block">
            <Image
              src="/tsalla_logo2.svg"
              alt="Tsalla Aerospace"
              width={260}
              height={120}
              className="h-24 sm:h-32 md:h-40 w-auto brightness-0 invert"
              priority
            />
          </Link>
        </div>

        {/* ========== Right Column ========== */}
        <div className="flex flex-col justify-between h-full w-full">
          {/* Footer Navigation */}
          <div className="grid-responsive-4 gap-y-8 md:gap-y-10 text-small">
            {/* COMPANY */}
            <div>
              <p className="font-clash text-white uppercase mb-4 tracking-wider text-base md:text-lg font-medium">COMPANY</p>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-white transition font-clash">About Us</Link></li>
                <li><Link href="/mission-autonomy" className="text-white/70 hover:text-white transition font-clash">Mission Autonomy</Link></li>
                <li><Link href="/our-team" className="text-white/70 hover:text-white transition font-clash">Our Team</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-white transition font-clash">Careers</Link></li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div>
              <p className="font-clash text-white uppercase mb-4 tracking-wider text-base md:text-lg font-medium">PRODUCTS</p>
              <ul className="space-y-2">
                <li><Link href="/products/roadrunner" className="text-white/70 hover:text-white transition font-clash">Roadrunner</Link></li>
                <li><Link href="/products/hardware" className="text-white/70 hover:text-white transition font-clash">Hardware</Link></li>
                <li><Link href="/products/mission-systems" className="text-white/70 hover:text-white transition font-clash">Mission Systems</Link></li>
              </ul>
            </div>

            {/* MEDIA */}
            <div>
              <p className="font-clash text-white uppercase mb-4 tracking-wider text-base md:text-lg font-medium">MEDIA</p>
              <ul className="space-y-2">
                <li><Link href="/media-coverage" className="text-white/70 hover:text-white transition font-clash">Media Coverage</Link></li>
                <li><Link href="/press-releases" className="text-white/70 hover:text-white transition font-clash">Press Releases</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-white transition font-clash">Blog</Link></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <p className="font-clash text-white uppercase mb-4 tracking-wider text-base md:text-lg font-medium">LEGAL</p>
              <ul className="space-y-2">
                <li><Link href="/legal/security" className="text-white/70 hover:text-white transition font-clash">Security</Link></li>
                <li><Link href="/legal/privacy" className="text-white/70 hover:text-white transition font-clash">Privacy</Link></li>
                <li><Link href="/legal/suppliers" className="text-white/70 hover:text-white transition font-clash">Suppliers</Link></li>
              </ul>
            </div>
          </div>

          {/* CTA + Social + Copyright */}
          <div className="mt-12 lg:mt-16 flex flex-col items-start gap-6 md:gap-8">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="border border-white/20 bg-white/5 text-white py-3 px-5 font-clash text-sm md:text-base uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition text-center"
              >
                CONTACT US
              </Link>
              <Link
                href="/careers"
                className="border border-white/20 bg-white/5 text-white py-3 px-5 font-clash text-sm md:text-base uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition text-center"
              >
                OPEN ROLES
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-x-6 md:gap-x-8">
              <Link href="https://www.instagram.com/tsallaaerospace/?hl=en" target="_blank" className="hover:text-white/70 transition">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/tsallaaerospace/" target="_blank" className="hover:text-white/70 transition">
                <Image
                  src="https://img.icons8.com/?size=512&id=447&format=png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] invert"
                />
              </Link>
              <Link href="https://www.youtube.com/@tsallaaerospace6378" target="_blank" className="hover:text-white/70 transition">
                <Image
                  src="https://img.icons8.com/?size=100&id=37326&format=png&color=000000"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] invert"
                />
              </Link>
              <Link href="https://x.com/TsallaAerospace" target="_blank" className="hover:opacity-80 transition">
                <Image
                  src="https://img.icons8.com/?size=512&id=fJp7hepMryiw&format=png"
                  alt="Twitter X"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] invert"
                />
              </Link>
            </div>

            {/* Copyright */}
            <small className="text-xs md:text-sm font-clash uppercase text-white/50">
              &copy; {new Date().getFullYear()} Tsalla Aerospace. All rights reserved.
            </small>

            {/* Spacer */}
            <div className="h-8 md:h-12 bg-[#0a0a0a] w-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
