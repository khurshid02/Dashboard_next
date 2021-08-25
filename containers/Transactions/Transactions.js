import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TransactionsWrapp from "./TransactionsWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation]);

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Transactions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = useSelector((state) => state.cards);
  const card = cards[activeIndex];
  return (
    <TransactionsWrapp>
      <div className="row">
        <div className="col-md-12">
          <p className="fw-bold">Transaction history</p>
          <div className="row">
            <div className="col-md-4">
              <Swiper
                navigation={true}
                className="MySwiper"
                onSlideChange={(e) => {
                  setActiveIndex(e.activeIndex);
                }}
              >
                <SwiperSlide>
                  <p className="cards">Card 1</p>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="cards">Card 2</p>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="cards">Card 3</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
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
    </TransactionsWrapp>
  );
};

export default Transactions;
