import React, { FC } from "react";
import { Link } from "gatsby";
import ShareLinks from "./ShareLinks";
import { BlogPostFrontmatter } from "../../../definitions/blog";

interface Props {
  timeToRead: string;
  data: BlogPostFrontmatter;
}

const PostInfo: FC<Props> = ({ data: { primary_color, accent_color, date }, timeToRead }) => {
  return (
    <aside className="author-card">
      <p>
        {"By "}
        <Link to="/about">Alecia Vogel</Link>
      </p>
      <p className="mt-3">
        <time dateTime={date}>{date}</time>
        <span className="mx-3">&#xB7;</span>
        {timeToRead}
      </p>

      <ShareLinks
        accent_color={accent_color ?? "pink"}
        primary_color={primary_color ?? "indigo"}
        location={location}
      />
    </aside>
  );
};

export default PostInfo;
