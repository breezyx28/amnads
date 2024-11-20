"use client";

import useCurrentPageName from "@/hooks/useCurrentPage";
import React from "react";

const UpperNav = () => {
  const [currentPage, setCurrentPage] = React.useState<string>("Dashboard");
  const pageName = useCurrentPageName();

  React.useEffect(() => {
    if (pageName === "faqs") setCurrentPage("FAQs");
    if (pageName === "coupon") setCurrentPage("My Coupons");
    if (pageName === "offers") setCurrentPage("Offers");
    if (
      [
        "basic-information",
        "email-profile",
        "password-profile",
        "transfer-profile",
      ].includes(pageName)
    )
      setCurrentPage("My Profile");
  }, [pageName]);

  return (
    <div className="page-header navbar navbar-fixed-top navbar_custome">
      <div className="content_header flex items-center clearfix">
        <div className="logo_md">
          <a href="index.html">
            <img src="images/logo.svg" alt="" />
          </a>
        </div>
        <div className="page_title_dsc hidden_mob flex items-center">
          <h2>{currentPage}</h2>
        </div>
        <div className="haeder_userRight ms-auto flex items-center">
          <div className="itm_action_head">
            <a href="#" className="itm_circle_btn hd_btn_notification">
              <img src="images/bell.svg" className="inline" alt="" />
              <span className="num_noti">2</span>
            </a>
          </div>
          <div className="itm_action_head">
            <a href="#" className="itm_circle_btn hd_btn_lang">
              AR
            </a>
          </div>
          <div className="itm_action_head">
            <a href="#" className="itm_circle_btn hd_btn_out"></a>
          </div>
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
