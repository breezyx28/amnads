"use client";

import React from "react";

const UpperNav = () => {
  return (
    <div className="page-header navbar navbar-fixed-top navbar_custome">
      <div className="content_header flex items-center clearfix">
        <div className="logo_md">
          <a href="index.html">
            <img src="images/logo.svg" alt="" />
          </a>
        </div>
        <div className="page_title_dsc hidden_mob flex items-center">
          <h2>Dashboard</h2>
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
