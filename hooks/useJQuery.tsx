"use client";

import { useEffect } from "react";
import $ from "jquery";

export const useJQuery = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = $;
      window.jQuery = $;
    }
  }, []);
};
