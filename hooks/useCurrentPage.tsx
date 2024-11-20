// hooks/useCurrentPageName.ts
"use client";

import { usePathname } from "next/navigation";

const useCurrentPageName = () => {
  const pathname = usePathname();

  // Derive the current page name from the pathname
  const pageName =
    pathname === "/"
      ? "/"
      : pathname
          .split("/")
          .filter(Boolean) // Remove empty strings
          .pop() || "Unknown";

  return pageName.charAt(0).toLowerCase() + pageName.slice(1); // Capitalize the page name
};

export default useCurrentPageName;
