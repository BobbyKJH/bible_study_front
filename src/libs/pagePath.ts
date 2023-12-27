import { useLocation } from "react-router-dom";

const pagePath = (location: string): boolean => {
  const { pathname } = useLocation();
  
  if(location === "home") {
    return pathname === "/home";
  } else {
    return pathname.includes(location)
  }
};

export default pagePath;