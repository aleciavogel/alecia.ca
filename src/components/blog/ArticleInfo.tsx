import Link from "next/link";

import { DefaultColor } from "@/definitions/colors";
import ShareLinks from "./ShareLinks";
import Date from "../Date";

interface Props {
  timeToRead: string;
  data: {
    primary_color?: DefaultColor;
    accent_color?: DefaultColor;
    date: string;
    title: string;
  };
}

export default function PostInfo({
  data: { primary_color, accent_color, date, title },
  timeToRead,
}: Props) {
  return (
    <aside className="author-card">
      <p>
        {"By "}
        <Link href="/">Alecia Vogel</Link>
      </p>
      <p className="mt-3">
        <Date dateString={date} />
        <span className="mx-3">&#xB7;</span>
        {timeToRead}
      </p>

      <ShareLinks
        accent_color={accent_color ?? "pink"}
        primary_color={primary_color ?? "indigo"}
        title={title}
      />
    </aside>
  );
}
