import AleciaCouch from "@/components/vectors/AleciaCouchSvg";
import RotatingText from "./RotatingText";

export default function AboutHeader() {
  return (
    <section className={`about-header`}>
      <RotatingText className="spinning-text" />
      <div className="w-full couch-svg" data-scroll data-scroll-speed="2">
        <AleciaCouch />
      </div>
    </section>
  );
}
