import Link from "next/link";

import Logo from "@/components/images/vectors/Logo";
import styles from "./Brand.module.css";

interface Props {
  hover: boolean;
}

export default function SiteLogo({ hover }: Props) {
  if (hover) {
    return (
      <Link id="site-brand" className={styles.headerIcon} href="/" title="Home">
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
