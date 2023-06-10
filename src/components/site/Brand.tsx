import Link from "next/link";

import Logo from "@/components/vectors/Logo";

interface Props {
  hover: boolean;
}

export default function SiteLogo({ hover }: Props) {
  if (hover) {
    return (
      <Link id="site-brand" href="/" title="Alecia Vogel Logo">
        <Logo />
      </Link>
    );
  }

  return (
    <div className="pointer-events-none text-current">
      <Logo />
    </div>
  );
}
