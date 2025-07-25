import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white flex justify-center pt-32 z-[3]">
      {/* Top border line */}
    <div className="absolute top-0 left-0 w-full border-t border-white/10" />

      <div className="w-full max-w-[1440px] px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* ========== Left Column ========== */}
        <div className="flex flex-col justify-start">
          <Link href="/" className="mt-4 px-0 mr-64 mb-56">
            <Image
              src="/tsalla_logo2.svg"
              alt="Tsalla Aerospace"
              width={50} // reduced by 15% from 900
              height={50} // reduced proportionally from 320
              className="h-40 w-auto brightness-0 invert" // reduced height for consistency
              priority
            />
          </Link>
        </div>

        {/* ========== Right Column ========== */}
        <div className="flex flex-col justify-between h-full w-full">
          {/* Footer Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 lg:gap-x-12 xl:gap-x-20 text-base">
            {/* COMPANY */}
            <div>
              <p className="font-mono text-white uppercase mb-4 tracking-wider text-lg">COMPANY</p>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-white transition">About Us</Link></li>
                <li><Link href="/mission-autonomy" className="text-white/70 hover:text-white transition">Mission Autonomy</Link></li>
                <li><Link href="/our-team" className="text-white/70 hover:text-white transition">Our Team</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-white transition">Careers</Link></li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div>
              <p className="font-mono text-white uppercase mb-4 tracking-wider text-lg">PRODUCTS</p>
              <ul className="space-y-2">
                <li><Link href="/products/roadrunner" className="text-white/70 hover:text-white transition">Roadrunner</Link></li>
                <li><Link href="/products/hardware" className="text-white/70 hover:text-white transition">Hardware</Link></li>
                <li><Link href="/products/mission-systems" className="text-white/70 hover:text-white transition">Mission Systems</Link></li>
              </ul>
            </div>

            {/* MEDIA */}
            <div>
              <p className="font-mono text-white uppercase mb-4 tracking-wider text-lg">MEDIA</p>
              <ul className="space-y-2">
                <li><Link href="/media-coverage" className="text-white/70 hover:text-white transition">Media Coverage</Link></li>
                <li><Link href="/press-releases" className="text-white/70 hover:text-white transition">Press Releases</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-white transition">Blog</Link></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <p className="font-mono text-white uppercase mb-4 tracking-wider text-lg">LEGAL</p>
              <ul className="space-y-2">
                <li><Link href="/legal/security" className="text-white/70 hover:text-white transition">Security</Link></li>
                <li><Link href="/legal/privacy" className="text-white/70 hover:text-white transition">Privacy</Link></li>
                <li><Link href="/legal/suppliers" className="text-white/70 hover:text-white transition">Suppliers</Link></li>
              </ul>
            </div>
          </div>

          {/* CTA + Social + Copyright */}
          <div className="mt-12 flex flex-col items-start gap-6">
            {/* Buttons */}
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="border border-white/20 bg-white/5 text-white py-3 px-5 font-mono text-base uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition"
              >
                CONTACT US
              </Link>
              <Link
                href="/careers"
                className="border border-white/20 bg-white/5 text-white py-3 px-5 font-mono text-base uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition"
              >
                OPEN ROLES
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-between gap-x-16">
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
            <small className="text-sm font-mono uppercase text-white/50 px-0">
              &copy; {new Date().getFullYear()} Tsalla Aerospace. All rights reserved.
            </small>

            {/* Spacer */}
            <div style={{ height: "1cm", backgroundColor: "#0a0a0a", width: "100%" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
