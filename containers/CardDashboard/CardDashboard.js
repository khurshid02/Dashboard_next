import React from "react";
import { Button, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/actions";
import {
  faBars,
  faBell,
  faEllipsisH,
  faEllipsisV,
  faHome,
  faImages,
  faNewspaper,
  faSms,
  faTasks,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import CardDashboardWrapper from "./CardDashboardWrapper";
const menus = [
  { id: "home", to: "/", title: "Home", icon: faHome },
  { id: "overview", to: "/Overview", title: "Overview", icon: faNewspaper },
  {
    id: "transactions",
    to: "/transactions",
    title: "Transactions",
    icon: faNewspaper,
  },
  { id: "cards", to: "/cards", title: "Cards", icon: faNewspaper },
  { id: "invoices", to: "/invoices", title: "Invoices", icon: faNewspaper },
  { id: "goals", to: "/goals", title: "Goals", icon: faNewspaper },
  { id: "settings", to: "/settings", title: "Settings", icon: faNewspaper },
];

const CardDashboard = ({ children, menu }) => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.isSidebarShow);
  return (
    <CardDashboardWrapper>
      <div className={`sidebar ${(show && "show") || ""}`}>
        <div className="d-flex text">
          <img src="vector.jpg" alt="logo" />
          <p className="text">Cloudcash</p>
        </div>
        <List component="nav">
          {menus.map((v, i) => (
            <li>
              <Slide delay={i * 30}>
                <Link key={v.to} href={`${v.to}`}>
                  <a className={`${menu === v.id ? "active" : ""}`}>
                    <ListItem button>
                      <FontAwesomeIcon icon={v.icon} className="me-2" />{" "}
                      {v.title}
                    </ListItem>
                  </a>
                </Link>
              </Slide>
            </li>
          ))}
        </List>
      </div>
      <div className="rightside">
        <header className="shadow d-flex">
          <div className="d-flex">
            <div>
              <Button
                onClick={() => toggleMenu(dispatch)}
                variant="contained"
                disableElevation
                className="me-3 mnyu"
              >
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <div>
                <h3>Weekly sumup</h3>
                <p>Get summary of your weekly online transactions here</p>
              </div>
            </div>
          </div>
          <div className="d-flex just">
            <FontAwesomeIcon icon={faSms} className="mr-2" />
            <FontAwesomeIcon icon={faBell} className="mr-2" />
            <div className="d-flex groups">
              <img src="Group.png" alt="" className="group" />
              <div>
                <h6>Andrew</h6>
                <p className="admin">Admin account</p>
              </div>
            </div>
          </div>
        </header>
        <div className="content">{children}</div>
      </div>
    </CardDashboardWrapper>
  );
};

export default CardDashboard;
