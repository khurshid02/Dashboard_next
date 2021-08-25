import React, { useState } from "react";
import OverviewWrapper from "./OverviewWrapper";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
                    <div
                      className="payCard"
                      style={{ backgroundColor: card.color }}
                    >
                      <div className="d-flex justify-content-between">
                        <p className="cards">Card 1</p>
                        <div>
                          <p className="cloud">cloudcash</p>
                          <p className="premium">PREMIUM ACCOUNT</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p>{card.numberstart}</p>
                        <p> **** </p>
                        <p> **** </p>
                        <p>{card.numberend}</p>
                      </div>
                      <div className="d-flex">
                        <div>
                          <p className="holder">Card holder</p>
                          <p className="name">{card.cardname}</p>
                        </div>
                        <div>
                          <p className="data">Expire data</p>
                          <p className="datas">{card.data}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="payCard"
                      style={{ backgroundColor: card.color }}
                    >
                      <div className="d-flex justify-content-between">
                        <p className="cards">Card 2</p>
                        <div>
                          <p className="cloud">cloudcash</p>
                          <p className="premium">PREMIUM ACCOUNT</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p>{card.numberstart}</p>
                        <p> **** </p>
                        <p> **** </p>
                        <p>{card.numberend}</p>
                      </div>
                      <div className="d-flex">
                        <div>
                          <p className="holder">Card holder</p>
                          <p className="name">{card.cardname}</p>
                        </div>
                        <div>
                          <p className="data">Expire data</p>
                          <p className="datas">{card.data}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="payCard" style={{ background: card.color }}>
                      <div className="d-flex justify-content-between">
                        <p className="cards">Card 3 </p>
                        <div>
                          <p className="cloud">cloudcash</p>
                          <p className="premium">PREMIUM ACCOUNT</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p>{card.numberstart}</p>
                        <p> **** </p>
                        <p> **** </p>
                        <p>{card.numberend}</p>
                      </div>
                      <div className="d-flex">
                        <div>
                          <p className="holder">Card holder</p>
                          <p className="name">{card.cardname}</p>
                        </div>
                        <div>
                          <p className="data">Expire data</p>
                          <p className="datas">{card.data}</p>
                        </div>
                      </div>
                    </div>
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
          <div div className="shadow rounded p-3 mb-3">
            <p className="fw-bold">Transaction history</p>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Reciever</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Tesco Market</TableCell>
                  <TableCell>Shopping</TableCell>
                  <TableCell>13 Dec 2020</TableCell>
                  <TableCell>$ {card.tesco}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ElectroMen Market</TableCell>
                  <TableCell>Shopping</TableCell>
                  <TableCell>14 Dec 2020</TableCell>
                  <TableCell>${card.electron}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fiorgio Restaurant</TableCell>
                  <TableCell>Food</TableCell>
                  <TableCell>07 Dec 2020</TableCell>
                  <TableCell>${card.food}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>John Mathew Kayne</TableCell>
                  <TableCell>Sport</TableCell>
                  <TableCell>06 Dec 2020</TableCell>
                  <TableCell>${card.sport}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ann Marlin</TableCell>
                  <TableCell>Shopping</TableCell>
                  <TableCell>31 Nov 2020</TableCell>
                  <TableCell>${card.marlin}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="shadow rounded p-3 mb-3 ">
            <p className="fw-bold">Goals</p>
            <div className="d-flex">
              <div className="goal">
                <h4 className="m-2">${card.holiday}</h4>
                <p>12/20/20</p>
                <br />
                <br />
                <h5 className="m-1">Holidays</h5>
              </div>
              <div className="goal">
                <h4 className="m-2">${card.renovat}</h4>
                <p>12/20/20</p>
                <br />
                <br />
                <h5 className="m-1">Renovation</h5>
              </div>
              <div className="goal">
                <h4 className="m-2">${card.xbox}</h4>
                <p>12/20/20</p>
                <br />
                <br />
                <h5 className="m-1">Xbox</h5>
              </div>
            </div>
          </div>
          <div className="shadow rounded p-3 mb-3">
            <p className="fw-bold">Outcome Statistics</p>
            <div>
              <div className="d-flex alig">
                <div className="static">
                  <div className="stats" style={{ width: card.shwidth }}></div>
                </div>
                <p className="foiz">{card.shfoiz}</p>
              </div>
              <p className="wopping">Shopping</p>
            </div>
            <div>
              <div className="d-flex alig">
                <div className="static">
                  <div
                    className="stats stats2"
                    style={{ width: card.ewidth }}
                  ></div>
                </div>
                <p className="foiz">{card.efoiz}</p>
              </div>
              <p className="wopping">Electronics</p>
            </div>
            <div>
              <div className="d-flex alig">
                <div className="static">
                  <div
                    className="stats stats3"
                    style={{ width: card.twidth }}
                  ></div>
                </div>
                <p className="foiz">{card.tfoiz}</p>
              </div>
              <p className="wopping">Travels</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="shadow rounded p-3 mb-3">
              <p className="fw-bold">New transaction</p>
              <div className="d-flex">
                <div className="fotos">
                  <img src="Ellipse48.jpg" alt="" />
                  <p className className="names">
                    John
                  </p>
                </div>
                <div className="fotos">
                  <img src="Ellipse49.jpg" alt="" />
                  <p className="names">Monica</p>
                </div>
                <div className="fotos">
                  <img src="Ellipse50.jpg" alt="" />
                  <p className="names">Ann</p>
                </div>
                <div className="fotos">
                  <img src="Ellipse51.jpg" alt="" />
                  <p className="names">Mike</p>
                </div>
                <div className="fotos">
                  <img src="Ellipse52.jpg" alt="" />
                  <p className="names">Mia</p>
                </div>
                <div className="fotos ">
                  <div className="fotos1">
                    <FontAwesomeIcon
                      className="fotos2"
                      icon={faPlus}
                      style={{ background: "#FFC145" }}
                    />
                  </div>
                  <p className="names">Add New</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="buttons">
                  <p className="text1">0</p>
                  <p className="text2">$</p>
                </div>
                <div className="buttons2">
                  <p className="text3">Send the transfer</p>
                </div>
              </div>
            </div>
            <div className="shadow rounded p-3 mb-3">
              <div className="get">
                <p>Get great loan!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OverviewWrapper>
  );
};

export default Overview;
