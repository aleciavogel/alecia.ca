import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  to: string;
  srOnly?: boolean;
  children?: React.ReactNode | string;
}

export function NavLink({ to, children, srOnly = false }: NavLinkProps) {
  const LINK_CLASSES =
    "text-white-rgba hover:text-white text-base pointer-events-auto relative transition-color duration-300 ease-in-out nextDiv:text-transparent";
  const pathname = usePathname();
  const isActive = useMemo(() => {
    const samePath = pathname === to;
    const isSubPath = pathname.includes(to);
    return samePath || isSubPath;
  }, [pathname, to]);

  return (
    <li
      className={`${srOnly ? "sr-only " : ""}grow-0 pointer-events-auto font-sans-serif relative`}
    >
      <Link className={`${LINK_CLASSES} ${isActive ? "active" : ""}`.trim()} href={to}>
        {children}
      </Link>
      <div className="absolute top-full left-0 [font-size:10px] w-full text-center">&#11042;</div>
    </li>
  );
}

export default function StaticMenu() {
  return (
    <nav
      aria-label="Main"
      className="static-menu absolute top-0 left-0 z-10 py-4 w-full pointer-events-none md:py-6"
    >
      <ul className="space-x-10 text-base h-10 flex justify-center items-center">
        <NavLink to="/" srOnly={true}>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/speaking">Speaking</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
