import React, { FC } from "react";

interface Props {
  onClose: () => void;
}

const CloseButton: FC<Props> = ({ onClose }) => (
  <button className="menu-toggle" onClick={onClose}>
    &times;
  </button>
);

export default CloseButton;
