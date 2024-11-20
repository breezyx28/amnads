import { useState, useEffect } from "react";

type TabConfig = {
  id: string;
  target: string;
};

export const useTabs = (initialTab: string, tabs: TabConfig[]) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    tabs.forEach((tab) => {
      const tabButton = document.querySelector(`#${tab.id}`);
      const tabContent = document.querySelector(tab.target);

      if (tab.id === activeTab) {
        tabButton?.classList.add("active");
        tabButton?.setAttribute("aria-selected", "true");
        tabContent?.classList.add("show", "active");
      } else {
        tabButton?.classList.remove("active");
        tabButton?.setAttribute("aria-selected", "false");
        tabContent?.classList.remove("show", "active");
      }
    });
  }, [activeTab, tabs]);

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return { activeTab, switchTab };
};
