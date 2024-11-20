"use client";

import { useEffect } from "react";
import $ from "jquery";
import "select2"; // Import the Select2 library CSS/JS

const useSelect2Initializer = () => {
  useEffect(() => {
    // Ensure the script runs only on the client
    if (typeof window !== "undefined") {
      $(".js-select").each(function () {
        const placeholder = $(this).data("placeholder");
        $(this)?.select2({
          placeholder,
          minimumResultsForSearch: Infinity,
        });
      });
    }
  }, []);

  return null; // This component doesn't render any JSX
};

export default useSelect2Initializer;
