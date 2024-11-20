"use client";

import { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export const useDateTimePicker = (selector: string) => {
  useEffect(() => {
    flatpickr(selector, {
      //   enableTime: true,
      dateFormat: "YY.MM.DD", // Mimics the "YY.MM.DD" format
    });
  }, [selector]);
};
