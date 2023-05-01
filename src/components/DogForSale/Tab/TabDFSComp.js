import React from "react";
import CommonMobNav from "../../CommonMTNav/CommonMobNav";
import FilterBar from "./FilterBar";
import CommonTabNav from "../../CommonMTNav/CommonTabNav";
import useBreakpoint from "../../../hooks/useBreakPoint";

const TabDFSComp = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();

  return (
    <>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav Width="60%" />}
      <FilterBar />
    </>
  );
};

export default TabDFSComp;
