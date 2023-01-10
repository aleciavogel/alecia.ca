import React, { FC } from "react";

const NotFoundHeader: FC = () => {
  return (
    <header className={`not-found-header`}>
      <div className={`not-found-header-wrapper`}>
        <h1>Page Not Found</h1>
        <p className="text-white-rgba">What happened?</p>
      </div>
    </header>
  );
};

export default NotFoundHeader;
