"use client";

import useScript from "@/hooks/useScript";
import { useTabs } from "@/hooks/useTabs";
import React from "react";

const TransferSideNav = () => {
  useScript();
  const { activeTab, switchTab } = useTabs("bank-tab", [
    { id: "bank-tab", target: "#bank" },
    { id: "stc-tab", target: "#stc" },
    { id: "paypal-tab", target: "#paypal" },
  ]);

  return (
    <div className="slide_transfer_screen">
      <div className="slide_transfer_method">
        <div className="head_slide_transfer flex items-center">
          <span className="back_btn">
            <img src="/images/arrow.svg" alt="Back" />
          </span>
          <h3>Add New Transfer Method</h3>
        </div>
        <div className="body_slide_transfer">
          <div className="tabs_transfer">
            <ul className="nav nav-tabs tabs_pay" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="bank-tab"
                  type="button"
                  role="tab"
                  aria-controls="bank"
                  aria-selected={activeTab === "bank-tab"}
                  onClick={() => switchTab("bank-tab")}
                >
                  <img src="/images/bank.svg" alt="Bank" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="stc-tab"
                  type="button"
                  role="tab"
                  aria-controls="stc"
                  aria-selected={activeTab === "stc-tab"}
                  onClick={() => switchTab("stc-tab")}
                >
                  <img src="/images/stc.svg" alt="STC" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="paypal-tab"
                  type="button"
                  role="tab"
                  aria-controls="paypal"
                  aria-selected={activeTab === "paypal-tab"}
                  onClick={() => switchTab("paypal-tab")}
                >
                  <img src="/images/paypal.svg" alt="PayPal" />
                </button>
              </li>
            </ul>
          </div>
          <div className="tabs_transfer_content">
            <div className="tab-content" id="myTabContent">
              {/* Bank Tab */}
              <div
                className="tab-pane"
                id="bank"
                role="tabpanel"
                aria-labelledby="bank-tab"
              >
                <form className="form_sty" action="#">
                  <div className="form-group mb-3">
                    <label className="label_sty">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Mohammed Awad"
                      readOnly
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label_sty">Bank Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Alrajhi Bank"
                      readOnly
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label_sty">Swift Code</label>
                    <input
                      type="text"
                      className="form-control"
                      value="2312"
                      readOnly
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label_sty">IBAN</label>
                    <input
                      type="text"
                      className="form-control"
                      value="8378423478503487322347"
                      readOnly
                    />
                  </div>
                  <div className="d-grid mt-10">
                    <button
                      type="submit"
                      className="btn btn-primary btn-bg-prim btn-lg"
                    >
                      Add New Transfer Method
                    </button>
                  </div>
                </form>
              </div>
              {/* STC Tab */}
              <div
                className="tab-pane fade"
                id="stc"
                role="tabpanel"
                aria-labelledby="stc-tab"
              >
                <form className="form_sty" action="#">
                  <div className="form-group mb-3">
                    <label className="label_sty">STC Pay</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Number"
                    />
                  </div>
                  <div className="d-grid mt-10">
                    <button
                      type="submit"
                      className="btn btn-primary btn-bg-prim disabled btn-lg"
                    >
                      Add New Transfer Method
                    </button>
                  </div>
                </form>
              </div>
              {/* PayPal Tab */}
              <div
                className="tab-pane fade"
                id="paypal"
                role="tabpanel"
                aria-labelledby="paypal-tab"
              >
                <form className="form_sty" action="#">
                  <div className="form-group mb-3">
                    <label className="label_sty">PayPal</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write Email"
                    />
                  </div>
                  <div className="d-grid mt-10">
                    <button
                      type="submit"
                      className="btn btn-primary btn-bg-prim disabled btn-lg"
                    >
                      Add New Transfer Method
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSideNav;
