"use client";

import { TPages } from "@/globals";
import useCurrentPageName from "@/hooks/useCurrentPage";
import React, { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

type SideNavProps = {
  activePage: TPages;
};

const DashSideNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pageName = useCurrentPageName();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const style: CSSProperties | undefined = {
    position: "absolute",
    inset: "auto auto 0px 0px",
    margin: "0px",
    transform: "translate(0px, -81.6667px)",
  };

  return (
    <div className="page-sidebar-wrapper">
      <div className="page-sidebar navbar-collapse">
        <div className="head_sidebar">
          <a href="/" className="logo_link">
            <img src="images/logo.svg" alt="" />
          </a>
        </div>
        <div className="block_cn_menu">
          <ul
            className="page-sidebar-menu page-header-fixed"
            data-keep-expanded="false"
            data-auto-scroll="true"
            data-slide-speed="200"
          >
            <li
              className={twMerge("nav-item", pageName === "/" ? "active" : "")}
            >
              <a href="/" className="nav-link">
                <span className="icon_ms icon_home"></span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li
              className={twMerge(
                "nav-item",
                pageName === "offers" ? "active" : ""
              )}
            >
              <a href="/offers" className={"nav-link"}>
                <span className="icon_ms icon_offers"></span>
                <span className="title">Offers</span>
              </a>
            </li>
            <li
              className={twMerge(
                "nav-item",
                pageName === "coupon" ? "active" : ""
              )}
            >
              <a href="/coupon" className={"nav-link"}>
                <span className="icon_ms icon_coupon"></span>
                <span className="title">My Coupons</span>
              </a>
            </li>
            <li
              className={twMerge(
                "nav-item",
                pageName === "tools" ? "active" : ""
              )}
            >
              <a href="/tools" className={"nav-link"}>
                <span className="icon_ms icon_tools"></span>
                <span className="title">Tools</span>
              </a>
            </li>
            <li
              className={twMerge(
                "nav-item",
                pageName === "faqs" ? "active" : ""
              )}
            >
              <a href="/faqs" className={"nav-link"}>
                <span className="icon_ms icon_faqs"></span>
                <span className="title">FAQs</span>
              </a>
            </li>
          </ul>
          <div className="box_addMethod">
            <h3>
              Start to add<span>Transfer Method</span>
            </h3>
            <a href="#" className="btn btn-primary btn-bg-prim btn_addTransfer">
              Add Transfer Method
            </a>
          </div>
          <div className="user_profile_slide dropdown">
            <a
              href="#"
              className={
                "dropdown-toggle inline-flex items-center justify-start px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm drop_userProfile w-full"
              }
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded={isOpen}
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              <div className="cc_thumb">
                <img src="images/abd.jpg" />
              </div>
              <h3>
                Abdulaziz <span>Admin</span>
              </h3>
            </a>

            <ul
              className={twMerge(
                "menu_profile dropdown-menu drop_sty",
                isOpen && "show"
              )}
              aria-labelledby="navbarDarkDropdownMenuLink"
              style={isOpen ? style : undefined}
              data-popper-placement="top-start"
            >
              <li>
                <a href="basic-information">
                  <span className="icon_prf prf_user"></span>Basic information
                </a>
              </li>
              <li>
                <a href="email-profile">
                  <span className="icon_prf prf_email"></span>Email
                </a>
              </li>
              <li>
                <a href="password-profile">
                  <span className="icon_prf prf_password"></span>Password
                </a>
              </li>
              <li>
                <a href="transfer-profile">
                  <span className="icon_prf prf_transfer"></span>Transfer Method
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSideNav;
