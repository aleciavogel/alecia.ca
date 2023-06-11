import SiteHeader from "@/components/site/SiteHeader";

export default function AboutMain() {
  return (
    <div className="relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 leading-loose h-full">
      <div className="about-content">
        <div className="about-intro">
          <h2 className="font-serif">Hi, I'm Alecia.</h2>
          <p>
            I'm a developer and designer with a passion for creating delightful, accessible, and
            functional websites.
          </p>
        </div>
      </div>

      <div className="clipped-container-chevron">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  );
}
