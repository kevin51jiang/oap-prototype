import React from "react";
import { Header } from "on-ds";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const TopHeader = (props) => {
  const [showMenuButton, setShowMenuButton] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname.includes("ps/") || loc.pathname === "/") {
      setShowMenuButton(true);
    } else {
      setShowMenuButton(false);
    }
  }, [loc]);

  return <Header noMenu={!showMenuButton} data={{ language: "en" }} />;
};

export default TopHeader;
