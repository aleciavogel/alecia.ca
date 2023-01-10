import { useContext } from "react";
import MenuControlContext from "./MenuControlContext";

const useMenuControl = () => useContext(MenuControlContext);

export default useMenuControl;
