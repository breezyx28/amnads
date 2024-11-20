"use client";

import useCurrentPageName from "@/hooks/useCurrentPage";
import React from "react";
import { twMerge } from "tailwind-merge";

type TProfileNavListItem = {
  id: number;
  title: string;
  href: string;
  icon: "prf_user" | "prf_email" | "prf_password" | "prf_transfer";
  active: boolean;
};

const profilePages: TProfileNavListItem[] = [
  {
    id: 1,
    title: "Basic information",
    href: "/basic-information",
    icon: "prf_user",
    active: false,
  },
  {
    id: 2,
    title: "Email",
    href: "/email-profile",
    icon: "prf_email",
    active: false,
  },
  {
    id: 3,
    title: "Password",
    href: "/password-profile",
    icon: "prf_password",
    active: false,
  },
  {
    id: 4,
    title: "Transfer Method",
    href: "/transfer-profile",
    icon: "prf_transfer",
    active: false,
  },
];

const ProfileListItem = ({
  id,
  active,
  href,
  icon,
  title,
}: TProfileNavListItem) => (
  <li key={id} className={twMerge("", active ? "active" : "")}>
    <a href={href}>
      <span className={`icon_prf ${icon}`}></span>
      {title}
    </a>
  </li>
);

const ProfileNav = () => {
  const currentPage = useCurrentPageName();
  return (
    <div className="box_menu_profile">
      <ul className="menu_profile">
        {profilePages?.map((item: TProfileNavListItem) => (
          <ProfileListItem
            id={item?.id}
            href={item?.href}
            title={item?.title}
            icon={item?.icon}
            active={"/" + currentPage === item.href ? true : false}
            key={item?.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProfileNav;
