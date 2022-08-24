import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose: () => void;
}

const CloseButton: FC<Props> = ({ onClose }) => (
  <button className="menu-toggle" onClick={onClose}>
    <FontAwesomeIcon icon={faXmark} />
  </button>
);

export default CloseButton;
