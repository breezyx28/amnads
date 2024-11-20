import DashboardLayout from "@/components/layouts/dashboard-layout";
import React from "react";

const OfferDetails = () => {
  return (
    <DashboardLayout>
      <div className="container">
        <div className="page_title_dsc hidden_dsc flex items-center">
          <h2>Offers</h2>
          <h3>Flyin</h3>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full">
            <div className="box_card">
              <div className="box_card_head flex items-center">
                <h2>
                  <a href="#" className="back_page">
                    <img src="images/arrow.svg" />
                  </a>
                  Flyin
                </h2>
                <a href="#" className="btn btn-primary ms-auto">
                  Request Code
                </a>
              </div>
              <div className="box_card_body">
                <div className="flex flex-wrap -mx-2">
                  <div className="lg:w-5/12 px-2 md:w-6/12 px-2">
                    <div className="offer_main_pic">
                      <img src="images/fly.jpg" alt="" />
                      <div className="logo_offer">
                        <img src="images/logo-fly.png" alt="" />
                      </div>
                    </div>
                    <div className="offer_pic_attachment offer_details_editor">
                      <h3>Attachments</h3>
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-6/12 px-2">
                          <a
                            data-fancybox="demo"
                            href="images/attch1.jpg"
                            className="attch_pic"
                          >
                            <img src="images/attch1.jpg" alt="" />
                          </a>
                        </div>
                        <div className="w-6/12 px-2">
                          <a
                            data-fancybox="demo"
                            href="images/attch2.jpg"
                            className="attch_pic"
                          >
                            <img src="images/attch2.jpg" alt="" />
                            <div className="attch_count">
                              <span>+10</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-7/12 px-2 md:w-6/12 px-2">
                    <div className="offer_details_editor">
                      <h3>About Flyin</h3>
                      <p>
                        The expert team at Brightscout specializes in building
                        innovative technology solutions for enterprises. Our
                        products and services unleash new levels of
                        productivity, enhance collaboration amongst team
                        members, and streamline large-scale communication.
                      </p>
                      <br />
                      <h3>Rule</h3>
                      <ul>
                        <li>
                          The expert team at Brightscout specializes in building
                          innovative technology{" "}
                        </li>
                        <li>
                          solutions for enterprises. Our products and services
                          unleash new levels
                        </li>
                        <li>
                          of productivity, enhance collaboration amongst team
                          members,{" "}
                        </li>
                        <li>and streamline large-scale communication.</li>
                      </ul>
                      <br />
                      <h3>Ads Content</h3>
                      <p>
                        The expert team at Brightscout specializes in building
                        innovative technology solutions for enterprises. Our
                        products and services unleash new levels of
                        productivity, enhance collaboration amongst team
                        members, and streamline large-scale communication.
                      </p>
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

export default OfferDetails;
