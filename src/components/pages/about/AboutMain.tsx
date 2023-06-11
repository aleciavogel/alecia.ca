import SiteHeader from "@/components/site/SiteHeader";

export default function AboutMain() {
  return (
    <div className="relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 leading-loose h-full">
      <div className="about-content">
        <div className="about-intro">
          <h2>My happy place</h2>
          <p>
            On the frontend, my favorite projects are built with <strong>ReactJS</strong> and{" "}
            <strong>TypeScript</strong>. I've used a range of frameworks in the backend, but the
            vast majority of my time has been spent working in <strong>Ruby on Rails</strong> and{" "}
            <strong>Node</strong> environments. My portfolio website is built with{" "}
            <strong>GatsbyJS</strong> and you can{" "}
            <a href="https://github.com/aleciavogel/alecia.ca" target="_blank" rel="noreferrer">
              view the source code on GitHub
            </a>{" "}
            for a taste of my development style.
          </p>
          <p>
            While I've always been a very independent worker, I perform my best when there are
            opportunities to collaborate with like-minded designers and developers. I thrive in
            workplaces where I'm given the freedom to be creative, take risks, and experiment.
          </p>
        </div>
      </div>

      <div className="clipped-container-chevron">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  );
}
