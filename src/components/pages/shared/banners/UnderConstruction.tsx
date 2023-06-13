import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function UnderConstructionBanner() {
  return (
    <section
      id="banner-under-construction"
      className={`hero-pattern-squiggles bottom-banner`}
      role="complementary"
    >
      <div className="sm:content-block">
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-3">
          Under Construction
        </h3>
        <p className="max-sm:px-6 text-sm sm:text-lg md:text-xl leading-relaxed sm:w-3/4 w-full mx-auto">
          Thank you for your patience while I continue working on my website!
        </p>
      </div>
    </section>
  );
}
