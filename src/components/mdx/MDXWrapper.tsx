import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";

import { parsePreBlock } from "./Code";
import Link from "./Link";

const components = {
  pre: parsePreBlock,
  a: Link,
};

interface Props {
  children: string | React.ReactNode;
}

const MDXWrapper: FC<Props> = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXWrapper;
