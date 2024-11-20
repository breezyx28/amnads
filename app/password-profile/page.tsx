import DashboardLayout from "@/components/layouts/dashboard-layout";
import ProfileNav from "@/components/navs/profile-nav";
import React from "react";

const PasswordProfile = () => {
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
                  <div className="flex-xl-4 lg:w-5/12 md:w-5/12 px-2 w-full">
                    <ProfileNav />
                  </div>
                  <div className="flex-xl-8 lg:w-7/12 px-2 md:w-7/12 w-full">
                    <div className="head_title_sm flex items-center">
                      <h3>Password</h3>
                    </div>
                    <form className="form_sty" action="#">
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-2">
                          <div className="form-group mb-3">
                            <label className="label_sty">Old Password</label>
                            <input
                              type="password"
                              className="form-control input-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-2">
                          <div className="form-group mb-3">
                            <label className="label_sty">New Password</label>
                            <input
                              type="password"
                              className="form-control input-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-2">
                          <div className="form-group mb-3">
                            <label className="label_sty">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              className="form-control input-sm w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-grid mt-40">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg w-full"
                        >
                          Save information
                        </button>
                      </div>
                    </form>
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

export default PasswordProfile;
