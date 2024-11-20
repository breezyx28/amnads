"use client";

import { useEffect } from "react";
import $ from "jquery";

export const useDatePicker = () => {
  useEffect(() => {
    $("#datetimepicker")?.datepicker({
      dateFormat: "YY.MM.DD",
    });
  }, []);
};
