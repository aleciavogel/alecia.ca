import React, { FC } from "react";

const MyH1: FC = (props) => <h1 className={"text-red-600"} {...props} />;
const MyParagraph: FC = (props) => <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />;

export default {
  h1: MyH1,
  p: MyParagraph,
};
