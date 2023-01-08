import { DefaultColor } from "./colors";

interface BlogProps {
  data: {
    mdx: BlogPost;
    previous: PreviousPost | null;
    next: NextPost | null;
    site: ISite;
  };
  location: Location;
}

interface BlogPost {
  excerpt: string;
  body: string;
  fields: {
    slug: string;
    timeToRead: TimeToRead;
    banner: string;
  };
  frontmatter: BlogPostFrontmatter;
}

interface BlogPostFrontmatter {
  date: string;
  title: string;
  tags?: string;
  description: string;
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
  text_color?: DefaultColor;
  category: string;
  banner?: string;
  authorTwitter?: string;
}

interface TimeToRead {
  minutes: number;
}

interface PreviousPost {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}
interface NextPost extends PreviousPost {}

interface ISite {
  siteMetadata: {
    title: string;
    siteUrl: string;
    description: string;
    author: {
      name: string;
      email: string;
      summary: string;
    };
    social: {
      twitter: string;
      linkedIn: string;
      github: string;
      dribbble: string;
    };
  };
}
