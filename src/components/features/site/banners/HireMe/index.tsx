import React, { FC } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const HireMeBanner: FC = () => {
  return (
    <div id="banner-hire-me" className={`hero-pattern-circuit-board`}>
      <div className="content-block">
        <h3 className="font-serif text-6xl tracking-wide mb-3">Need an extra hand?</h3>
        <p className="text-xl leading-relaxed mb-8 w-3/4 mx-auto">
          Well, I just so happen to have two of 'em.
        </p>
        <Link to="/work-with-me" className={`btn-contained bg-static hover:bg-static-hover`}>
          Work with me
          <FontAwesomeIcon className={"ml-3"} icon={faArrowRightLong} />
        </Link>
      </div>
    </div>
  );
};

export default HireMeBanner;
