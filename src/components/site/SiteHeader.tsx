import SiteLogo from "./Brand";
import ThemeSettings from "./ThemeSettings";

function HeaderRight({ children }: { children: React.ReactNode }) {
  return <div className="visibleChild:mt-6 visibleChild:mb-0">{children}</div>;
}

interface Props {
  hasColor?: boolean;
  hover?: boolean;
}

export default function SiteHeader({ hover = false, hasColor = false }: Props) {
  const hoverClass = hover ? "site-header-hover" : "";
  const colorClass = hasColor ? "site-header-color" : hover ? "text-transparent" : "text-white";
  const className = `site-header ${colorClass} ${hoverClass}`;

  if (hover) {
    return (
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#site-wrapper"
        aria-hidden={!hover}
        className={className}
      >
        <SiteLogo hover={hover} />
        <HeaderRight>
          {/* <MenuIcon hover={hover} /> */}
          <ThemeSettings hover={hover} />
        </HeaderRight>
      </div>
    );
  }

  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#site-wrapper"
      aria-hidden={false}
      className={className}
    >
      <SiteLogo hover={hover} />
      <HeaderRight>
        {/* <MenuIcon hover={hover} /> */}
        <ThemeSettings hover={hover} />
      </HeaderRight>
    </div>
  );
}
