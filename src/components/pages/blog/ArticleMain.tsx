import PostInfo from "./ArticleInfo";
import SiteHeader from "@/components/pages/shared/layout/SiteHeader";
import ReadingProgress from "./ReadingProgress";

interface Props {
  timeToRead: string;
  data: any;
  children?: string | React.ReactNode;
}

export default function ArticleMain({ data, children, timeToRead }: Props) {
  return (
    <div
      id="article-main"
      className="relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 leading-loose h-full"
    >
      <ReadingProgress />
      <PostInfo data={data} timeToRead={timeToRead} />
      <div>
        <div className="page-content">{children}</div>
      </div>

      <div className="clipped-container">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  );
}