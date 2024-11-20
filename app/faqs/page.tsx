"use client";

import DashboardLayout from "@/components/layouts/dashboard-layout";
import Script from "next/script";
import "@/styles/tempusdominus-bootstrap-4.min.css";
import AccordionItem from "@/components/faqs/faqs-accordion-card";

export default function Faqs() {
  const faqGeneral = [
    {
      id: "general-faq1",
      question: "What is AmnAds?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
    {
      id: "general-faq2",
      question: "Why AmnAds exactly?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
    {
      id: "general-faq3",
      question: "When I will get my code after I ordered?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
  ];

  const faqInterface = [
    {
      id: "interface-faq1",
      question: "What is AmnAds?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
    {
      id: "interface-faq2",
      question: "Why AmnAds exactly?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
    {
      id: "interface-faq3",
      question: "When I will get my code after I ordered?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
  ];

  const faqPayments = [
    {
      id: "payment-faq1",
      question: "What is AmnAds?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
    {
      id: "payment-faq2",
      question: "Why AmnAds exactly?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
    {
      id: "payment-faq3",
      question: "When I will get my code after I ordered?",
      answer: (
        <p>
          This is the third item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any
          of this with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the{" "}
          <code>.accordion-body</code>, though the transition does limit
          overflow.
        </p>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <Script src="/js/jquery-1.12.2.min.js" strategy="afterInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />

      <div className="container">
        <div className="page_title_dsc hidden_dsc flex items-center">
          <h2>FAQs</h2>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full">
            <div className="box_card">
              <div className="box_card_body">
                <div className="group_faqs">
                  <h3 className="title_bk">General</h3>
                  <div className="faqs_box">
                    <div
                      className="accordion accordion_sty"
                      id="accordion-general"
                    >
                      {faqGeneral.map((item) => (
                        <AccordionItem
                          key={item.id}
                          id={item.id}
                          question={item.question}
                          answer={item.answer}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="group_faqs">
                  <h3 className="title_bk">Interface</h3>
                  <div className="faqs_box">
                    <div
                      className="accordion accordion_sty"
                      id="accordion-interface"
                    >
                      {faqInterface.map((item) => (
                        <AccordionItem
                          key={item.id}
                          id={item.id}
                          question={item.question}
                          answer={item.answer}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="group_faqs">
                  <h3 className="title_bk">Payments</h3>
                  <div className="faqs_box">
                    <div
                      className="accordion accordion_sty"
                      id="accordion-payments"
                    >
                      {faqPayments.map((item) => (
                        <AccordionItem
                          key={item.id}
                          id={item.id}
                          question={item.question}
                          answer={item.answer}
                        />
                      ))}
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
}
