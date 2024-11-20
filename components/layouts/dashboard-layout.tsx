"use client";

import React from "react";
import UpperNav from "../navs/upper-nav";
import DashFooter from "../footers/dash-footer";
import DashSideNav from "../navs/dash-side-nav";
import { useJQuery } from "@/hooks/useJQuery";
import Script from "next/script";
import "select2/dist/css/select2.css";
import { useChart } from "@/public/js/chart-js";
import { useSelect2 } from "@/hooks/useSelect2";
import { TPages } from "@/globals";
import { useDateTimePicker } from "@/hooks/useDateTimePicker";
import useScript from "@/hooks/useScript";
import TransferSideNav from "../navs/transfer-side-nav";

export default function DashboardLayout({
  children,
  currentPage,
}: Readonly<{
  children: React.ReactNode;
  currentPage?: TPages;
}>) {
  useJQuery();
  useChart();
  useSelect2(".js-select", {
    placeholder: "Select an option",
    minimumResultsForSearch: Infinity,
  });
  useDateTimePicker("#datetimepicker4");
  useScript();

  return (
    <>
      <Script src="/js/script.js" strategy="afterInteractive" />
      <Script src="/js/jquery-1.12.2.min.js" strategy="afterInteractive" />
      <Script src="/js/fancybox.umd.js" strategy="afterInteractive" />

      <div className="slide_transfer_screen">
        <div className="slide_transfer_method">
          <div className="head_slide_transfer flex items-center">
            <span className="back_btn">
              <img src="/images/arrow.svg" alt="Back" />
            </span>
            <h3>Add New Transfer Method</h3>
          </div>
          <TransferSideNav />
        </div>
      </div>

      <div className="page-wrapper">
        {/* <!-- BEGIN HEADER --> */}
        <UpperNav />
        {/* <!-- END HEADER --> */}
        {/* <!-- BEGIN CONTAINER --> */}
        <div className="page-container">
          {/* Side Nav */}
          <DashSideNav />
          {/* End Side Nav */}

          <div className="page-content-layout">
            <div className="page-content-wrapper flex flex-col">
              <div className="content_page flex flex-col flex-1">
                {children}
              </div>
              {/* Footer */}
              <DashFooter />
              {/* <!--footer--> */}
            </div>
          </div>
        </div>
        {/* <!-- END CONTAINER --> */}
      </div>
    </>
  );
}
