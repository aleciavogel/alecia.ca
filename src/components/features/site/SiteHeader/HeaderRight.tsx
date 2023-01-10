import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const HeaderRight: FC<Props> = ({ children }) => (
  <div className="visibleChild:mt-6 visibleChild:mb-0">{children}</div>
);

export default HeaderRight;
