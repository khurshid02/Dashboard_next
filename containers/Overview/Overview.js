import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import OverviewWrapper from "./OverviewWrapper";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation]);

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Overview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = useSelector((state) => state.cards);
  const card = cards[activeIndex];
  return (
    <OverviewWrapper>
      <h1>Home</h1>

      <div class="row">
        <div className="col-md-6">
          <div className="shadow rounded p-3 mb-3">
            <p className="fw-bold">Cards</p>
            <div className="row">
              <div className="col-md-8">
                <Swiper
                  navigation={true}
                  className="MySwiper"
                  onSlideChange={(e) => {
                    setActiveIndex(e.activeIndex);
                  }}
                >
                  <SwiperSlide>
                    <div className="payCard">
                      <p>Card 1</p>
                      <div className="d-flex">
                        <p>{card.numberstart}</p>
                        <p> **** </p>
                        <p> **** </p>
                        <p>{card.numberend}</p>
                      </div>
                      <div className="d-flex">
                        <div>
                          <p>Card holder</p>
                          <p>{card.cardname}</p>
                        </div>
                        <div>
                          <p>Expire date</p>
                          <p>{card.data}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="payCard">Card 2</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="payCard">Card 3</div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-md-4">
                <p>Card: {activeIndex + 1}</p>
                <p>Current balance: {card.currentBalance}</p>
                <p>Income: {card.income}</p>
                <p>Outcome: {card.outcome}</p>
              </div>
            </div>
          </div>
          <div className="shadow rounded p-3 mb-3">
            <p className="fw-bold">Transaction history</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="shadow rounded p-3 mb-3">
            <p className="fw-bold">Goals</p>
          </div>
          <div className="shadow rounded p-3 mb-3">
            <p className="fw-bold">Outcome Statistics</p>
          </div>
          <div className="shadow rounded p-3 mb-3">
            <p className="fw-bold">New transaction</p>
          </div>
        </div>
      </div>
    </OverviewWrapper>
  );
};

export default Overview;
