"use client";

import { useEffect } from "react";

const useScript = () => {
  useEffect(() => {
    // Handle open transfer method
    const btnAddTransfer = document.querySelectorAll(".btn_addTransfer");
    const backBtn = document.querySelectorAll(".back_btn");

    btnAddTransfer.forEach((button) =>
      button.addEventListener("click", () => {
        document.body.classList.add("transfer-toggle");
        btnAddTransfer.forEach((btn) => btn.classList.add("active"));
      })
    );

    backBtn.forEach((button) =>
      button.addEventListener("click", () => {
        document.body.classList.remove("transfer-toggle");
        document.documentElement?.classList.remove("transfer-toggle"); // remove from html element
        btnAddTransfer.forEach((btn) => btn.classList.remove("active"));
      })
    );

    // Handle menu toggle
    const menuTrigger = document.querySelector(".menu-trigger");
    if (menuTrigger) {
      menuTrigger.addEventListener("click", () => {
        if (!menuTrigger.classList.contains("active")) {
          menuTrigger.classList.add("active");
          document.body.classList.add("menu-toggle");
        } else {
          menuTrigger.classList.remove("active");
          document.body.classList.remove("menu-toggle");
        }
      });
    }

    // Handle custom dropdown behavior
    const dropdownSortLinks = document.querySelectorAll(".dropdown_sort a");
    dropdownSortLinks.forEach((link) =>
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const btnFilter = document.querySelector(
          ".btn_filter:first-child"
        ) as HTMLButtonElement;
        if (btnFilter) {
          btnFilter.textContent = link.textContent ?? "";
          btnFilter.value = link.textContent ?? "";
        }
        const dropdownSort = document.querySelector(".dropdown_sort");
        const btnFilterParent = document.querySelector(".btn_filter");
        if (dropdownSort) dropdownSort.classList.remove("show");
        if (btnFilterParent) btnFilterParent.classList.remove("show");
      })
    );

    // Clean up event listeners when the component unmounts
    return () => {
      btnAddTransfer.forEach((button) =>
        button.removeEventListener("click", () => {})
      );
      backBtn.forEach((button) =>
        button.removeEventListener("click", () => {})
      );
      if (menuTrigger) menuTrigger.removeEventListener("click", () => {});
      dropdownSortLinks.forEach((link) =>
        link.removeEventListener("click", () => {})
      );
    };
  }, []);
};

export default useScript;
