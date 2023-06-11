import ReadMoreArrowIcon from "@/components/icons/ReadMoreIcon";

interface Props {
  data: any;
}

export default function ArticleHeader({ data }: Props) {
  const { title, category, description } = data;

  return (
    <section className={`hero`}>
      <div className={`hero-wrapper`}>
        <span className={`article-category`}>{category}</span>
        <h1>{title}</h1>
        <p className="text-white-rgba">{description}</p>
      </div>

      <ReadMoreArrowIcon />
    </section>
  );
}
