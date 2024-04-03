import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-screen h-[70px] bg-white flex items-center justify-end pr-4 gap-4 lg:gap-8">
      {navLinks.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
