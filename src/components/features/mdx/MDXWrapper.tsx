import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import { parsePreBlock } from "./Code";

const components = {
  pre: parsePreBlock,
  Link,
};

interface Props {
  children: string | React.ReactNode;
}

const MDXWrapper: FC<Props> = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXWrapper;
