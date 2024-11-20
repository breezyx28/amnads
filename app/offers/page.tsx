"use client";

import DashboardLayout from "@/components/layouts/dashboard-layout";
import Script from "next/script";
import "@/styles/tempusdominus-bootstrap-4.min.css";

export default function Offers() {
  return (
    <DashboardLayout>
      <Script src="/js/jquery-1.12.2.min.js" strategy="afterInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />

      <div className="container">
        <div className="page_title_dsc hidden_dsc flex items-center">
          <h2>Offers</h2>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full">
            <div className="box_card">
              <div className="box_card_body">
                <div className="bk_filter_group">
                  <div className="flex flex-wrap -mx-2">
                    <div className="flex-xl-3 lg:w-4/12 px-2 md:w-4/12 px-2">
                      <div className="form-group input_icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search here"
                        />
                        <span className="filter_icon icon_zoom"></span>
                      </div>
                    </div>
                    <div className="flex-xl-2 lg:w-3/12 px-2 md:w-3/12 px-2">
                      <div className="form-group">
                        <select
                          className="form-control js-select"
                          data-placeholder="Display Offers"
                        >
                          <option></option>
                          <option>Display 01</option>
                          <option>Display 02</option>
                          <option>Display 03</option>
                          <option>Display 04</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex-xl-3 lg:w-4/12 px-2 md:w-4/12 px-2">
                      <div className="form-group input_icon">
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          id="datetimepicker4"
                          data-toggle="datetimepicker"
                          data-target="#datetimepicker4"
                          placeholder="DD.MM.YY"
                        />
                        <span className="filter_icon icon_date"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive w-full">
                  <table className="table table_sty w-full">
                    <thead>
                      <tr>
                        <th>Offers</th>
                        <th>Discount</th>
                        <th>Commission</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="/offer-details" className="offer_itm">
                            <img src="images/noon.jpg" alt="" />
                            <h3>NooN</h3>
                          </a>
                        </td>
                        <td>
                          <strong>7.5SR</strong>
                        </td>
                        <td>
                          <span className="color_prim">
                            <strong>12%</strong>
                          </span>
                        </td>
                        <td className="algin_right">
                          <a href="#" className="btn btn-primary ms-auto">
                            Get Code
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/offer-details" className="offer_itm">
                            <img src="images/noon.jpg" alt="" />
                            <h3>NooN</h3>
                          </a>
                        </td>
                        <td>
                          <strong>7.5SR</strong>
                        </td>
                        <td>
                          <span className="color_prim">
                            <strong>12%</strong>
                          </span>
                        </td>
                        <td className="algin_right">
                          <a href="#" className="btn btn-primary ms-auto">
                            Request Code
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/offer-details" className="offer_itm">
                            <img src="images/noon.jpg" alt="" />
                            <h3>NooN</h3>
                          </a>
                        </td>
                        <td>
                          <strong>7.5SR</strong>
                        </td>
                        <td>
                          <span className="color_prim">
                            <strong>12%</strong>
                          </span>
                        </td>
                        <td className="algin_right">
                          <a href="#" className="btn btn-primary ms-auto">
                            Request Code
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/offer-details" className="offer_itm">
                            <img src="images/noon.jpg" alt="" />
                            <h3>NooN</h3>
                          </a>
                        </td>
                        <td>
                          <strong>7.5SR</strong>
                        </td>
                        <td>
                          <span className="color_prim">
                            <strong>12%</strong>
                          </span>
                        </td>
                        <td className="algin_right">
                          <a href="#" className="btn btn-primary ms-auto">
                            Request Code
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="pagination pagination_sty flex justify-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="far fa-long-arrow-left"></i>Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      8
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      9
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      10
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next<i className="far fa-long-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
