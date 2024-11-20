"use client";

import { useEffect } from "react";
import $ from "jquery";
import "select2"; // Import the Select2 plugin

type Select2Options = {
  placeholder?: string;
  minimumResultsForSearch?: number;
  [key: string]: any; // Allow additional options
};

export const useSelect2 = (selector: string, options?: Select2Options) => {
  useEffect(() => {
    const $element = $(selector);

    if ($element.length) {
      $element.select2(options);

      // Cleanup on unmount
      return () => {
        $element.select2("destroy");
      };
    }
  }, [selector, options]);
};
