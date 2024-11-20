"use client";
import DashboardLayout from "@/components/layouts/dashboard-layout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="container">
        <div className="page_title_dsc hidden_dsc flex items-center">
          <h2>Dashboard</h2>
        </div>
        <div className="bk_filter_group">
          <div className="flex flex-wrap -mx-2">
            <div className="flex-xl-3 lg:w-3/12 px-2 md:w-3/12 px-2 sm:w-5/12 px-2">
              <div className="form-group input_icon">
                <select
                  className="form-control js-select"
                  data-placeholder="Display Offers"
                >
                  <option></option>
                  <option>This Month</option>
                  <option>This Month</option>
                  <option>This Month</option>
                  <option>This Month</option>
                </select>
                <span className="filter_icon icon_date"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="flex-xl-4 lg:w-7/12 md:w-7/12 px-2 w-full">
            <div className="box_card">
              <div className="box_card_head flex items-center">
                <h2 className="size_sm">Recent Notification</h2>
              </div>
              <div className="box_card_body box_notification">
                <div className="group_notification_list">
                  <a href="#" className="noti_item">
                    <div className="noti_txt">
                      <h3>Abdulaziz hasanen</h3>
                      <p>
                        Use Coupon <span>7wad</span>
                      </p>
                    </div>
                    <div className="noti_date">11 hours ago</div>
                  </a>
                  <a href="#" className="noti_item">
                    <div className="noti_txt">
                      <h3>Abdulaziz hasanen</h3>
                      <p>
                        Use Coupon <span>7wad</span>
                      </p>
                    </div>
                    <div className="noti_date">11 hours ago</div>
                  </a>
                  <a href="#" className="noti_item">
                    <div className="noti_txt">
                      <h3>Abdulaziz hasanen</h3>
                      <p>
                        Use Coupon <span>7wad</span>
                      </p>
                    </div>
                    <div className="noti_date">11 hours ago</div>
                  </a>
                  <a href="#" className="noti_item">
                    <div className="noti_txt">
                      <h3>Abdulaziz hasanen</h3>
                      <p>
                        Use Coupon <span>7wad</span>
                      </p>
                    </div>
                    <div className="noti_date">11 hours ago</div>
                  </a>
                </div>
                <a href="#" className="btn btn_seeMore text-center">
                  See More
                </a>
              </div>
            </div>
          </div>

          <div className="flex-xl-4 lg:w-5/12 md:w-5/12 px-2 w-full">
            <div className="box_card">
              <div className="box_card_body flex justify-center">
                <div className="state_txt_chart text-center">
                  <h3>Total Orders</h3>
                  <p>
                    120K<span></span>
                  </p>
                  <h4>It is a long established fact</h4>
                </div>
                <div className="chart_line ms-auto">
                  <div id="spark1"></div>
                </div>
              </div>
            </div>
            <div className="box_card">
              <div className="box_card_body flex justify-center">
                <div className="state_txt_chart text-center">
                  <h3>Payout</h3>
                  <p>
                    15<span>SR</span>
                  </p>
                  <h4>It is a long established fact</h4>
                </div>
                <div className="chart_line ms-auto">
                  <div id="spark2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-xl-4 lg:w-full px-2 w-full">
            <div className="box_card">
              <div className="box_card_head flex items-center">
                <h2 className="size_sm">Performers</h2>
                <div className="drop_action relative ms-auto">
                  <button
                    className="btn_filter dropdown-toggle px-4 py-2 text-base font-medium border border-transparent rounded-md shadow-sm"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Last 6 Month
                  </button>
                  <div
                    className="dropdown-menu dropdown_sort drop_sty absolute mt-2 z-10 bg-white rounded-md shadow-lg"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <a
                      className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      Last 3 Month <i className="fal fa-angle-right"></i>
                    </a>
                    <a
                      className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      Last 6 Month <i className="fal fa-angle-right"></i>
                    </a>
                    <a
                      className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      Last Year <i className="fal fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="box_card_body body_chart">
                <div id="chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <div className="box_card box_app">
              <div className="box_card_body">
                <div className="flex items-center">
                  <div className="md:w-7/12 px-2">
                    <div className="head_app">
                      <h3>Earn More Easily With AmnAds App</h3>
                      <p>View And Request Live Coupons, Promo Codes & Deals</p>
                    </div>
                  </div>
                  <div className="md:w-5/12 px-2">
                    <ul className="app_links clearfix">
                      <li>
                        <a href="#" target="_blank">
                          <img src="images/app.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="images/google.svg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
