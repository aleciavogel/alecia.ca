export default function RotatingText({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="74.7 43.303 148.243 148.12"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <defs>
          <path id="a" d="M-60 0A60 60 0 0160 0 60 60 0 01-60 0" shapeRendering="crispEdges" />
        </defs>
        <path
          d="M-60 0A60 60 0 0160 0 60 60 0 01-60 0"
          shapeRendering="crispEdges"
          fill="none"
          transform="translate(148.821 117.411)"
        />
        <text
          style={{
            whiteSpace: "pre",
          }}
          transform="translate(148.821 117.411)"
        >
          <textPath shapeRendering="crispEdges" xlinkHref="#a">
            {
              "developer \u2022 designer \u2022 dreamer \u2022 problem solver \u2022 self-starter \u2022 doer \u2022"
            }
          </textPath>
        </text>
      </svg>
    </div>
  );
}
