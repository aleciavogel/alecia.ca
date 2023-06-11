export default function RotatingText({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
      >
        <defs>
          <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
        </defs>
        <circle cx="150" cy="100" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text>
            <textPath xlinkHref="#circlePath" className="font-sans-serif">
              developer • designer • dreamer • problem solver • self-starter • doer •
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}
