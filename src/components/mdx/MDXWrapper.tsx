import { MDXRemote } from "next-mdx-remote/rsc";

import { parsePreBlock } from "./Code";
import Link from "./Link";

const components = {
  pre: parsePreBlock,
  a: Link,
};

export default function MDXWrapper({ source }: { source: any }) {
  return <MDXRemote source={source} components={components} />;
}
