import DashboardLayout from "@/components/layouts/dashboard-layout";
import ProfileNav from "@/components/navs/profile-nav";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <div className="container">
        <div className="page_title_dsc hidden_dsc flex items-center">
          <h2>My Profile</h2>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full">
            <div className="box_card">
              <div className="box_card_body">
                <div className="flex flex-wrap -mx-2">
                  <div className="flex-xl-4 lg:w-5/12 px-2 w-full">
                    <ProfileNav />
                  </div>
                  <div className="flex-xl-8 lg:w-7/12 px-2 md:w-7/12 px-2">
                    <div className="head_title_sm flex items-center">
                      <h3 className="md:mb-[0px] mb-[0.75rem]">
                        Transfer Method
                      </h3>
                      <a
                        href="#"
                        className="btn btn-primary btn-bg-prim ms-auto btn_addTransfer"
                      >
                        <i className="far fa-plus-circle"></i>Add Transfer
                        Method
                      </a>
                    </div>
                    <div className="table-responsive md:max-w-full max-w-[300px]">
                      <table className="table table_sty">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Bank Name</th>
                            <th>IBAN</th>
                            <th>Swift Code</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="method_pic">
                                <img src="/images/bank.svg" alt="" />
                              </div>
                            </td>
                            <td>Mohammed Awad</td>
                            <td>Bank Alrajhi</td>
                            <td>128390542388119832848</td>
                            <td>2314</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="method_pic">
                                <img src="/images/stc.svg" alt="" />
                              </div>
                            </td>
                            <td>STC Pay</td>
                            <td></td>
                            <td></td>
                            <td>128390542388119832848</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="method_pic">
                                <img src="/images/paypal.svg" alt="" />
                              </div>
                            </td>
                            <td>Paypal</td>
                            <td></td>
                            <td></td>
                            <td>128390542388119832848</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
