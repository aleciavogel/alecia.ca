import Link from "next/link";
import { usePathname } from "next/navigation";

import { DefaultColor } from "@/definitions/colors";
import ShareLinks from "./ShareLinks";

interface Props {
  timeToRead: string;
  data: {
    primary_color?: DefaultColor;
    accent_color?: DefaultColor;
    date: string;
  };
}

export default function PostInfo({
  data: { primary_color, accent_color, date },
  timeToRead,
}: Props) {
  const pathname = usePathname();

  return (
    <aside className="author-card">
      <p>
        {"By "}
        <Link href="/about">Alecia Vogel</Link>
      </p>
      <p className="mt-3">
        <time dateTime={date}>{date}</time>
        <span className="mx-3">&#xB7;</span>
        {timeToRead}
      </p>

      <ShareLinks accent_color={accent_color ?? "pink"} primary_color={primary_color ?? "indigo"} />
    </aside>
  );
}
