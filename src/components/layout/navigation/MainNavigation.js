import Link from "next/link";
import classes from "./MainNavigation.module.css";

import Bars3Icon from "@/components/icons/bars-3-icon";
import Xmark from "@/components/icons/x-mark-icon";
import { useState } from "react";

function MainNavigation() {
  const [toggleNavbar, setToggleNavbar] = useState("menu");

  const toggleNavbarHandle = () => {
    setToggleNavbar(toggleNavbar === "menu" ? "close" : "menu");
  };

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes["navbar-container"]}>
            <div className={classes["navbar-top"]}>
              <Link href='/' className={classes["navbar-brand"]}>
                LOGO
              </Link>
              <button
                className={classes["navbar-toggler"]}
                onClick={toggleNavbarHandle}
              >
                {toggleNavbar === "menu" ? <Bars3Icon /> : <Xmark />}
              </button>
            </div>
            <div
              className={
                toggleNavbar === "close"
                  ? classes["navbar-collapse"]
                  : classes["collapse"]
              }
            >
              <ul className={classes["navbar-nav"]}>
                <li className={classes["nav-item"]}>
                  <Link href='/' className={classes["nav-item-link"]}>
                    HOME
                  </Link>
                </li>
                <li className={`${classes["nav-item"]} ${classes["dropdown"]}`}>
                  <Link href='/' className={classes["nav-item-link"]}>ABOUT US</Link>
                  <ul className={classes["dropdown-menu"]}>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>WORKSHOP</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>COLLABORATION</Link>
                    </li>
                  </ul>
                </li>
                <li className={`${classes["nav-item"]} ${classes["dropdown"]}`}>
                  <Link href='/upcoming-conferences' className={classes["nav-item-link"]}>UPCOMMING CONFERENCES</Link>
                  {/* <ul className={classes["dropdown-menu"]}>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>EXHIBITORS PROFILE</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>VISITORS PROFILE</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>WHY SHOULD YOU EXHIBIT</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>BOOK YOUR SPACE</Link>
                    </li>
                  </ul> */}
                </li>
                <li className={`${classes["nav-item"]} ${classes["dropdown"]}`}>
                  <Link href='/past-conferences' className={classes["nav-item-link"]}>PAST CONFERENCES</Link>
                  {/* <ul className={classes["dropdown-menu"]}>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>WHY VISIT</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>VISITORS PROFILE</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>VENUE</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>VISITOR REGISTRATION</Link>
                    </li>
                  </ul> */}
                </li>
                <li className={`${classes["nav-item"]} ${classes["dropdown"]}`}>
                  <Link href='/' className={classes["nav-item-link"]}>WEBINARS</Link>
                  {/* <ul className={classes["dropdown-menu"]}>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>AGENDA</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>ENQUIRE</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>VENUE</Link>
                    </li>
                    <li className={classes["dropdown-item"]}>
                      <Link href='/' className={classes["dropdown-item-link"]}>VISITOR REGISTRATION</Link>
                    </li>
                  </ul> */}
                </li>
                <li className={classes["nav-item"]}>
                  <Link href='/' className={classes["nav-item-link"]}>GALLERY</Link>
                </li>
                <li className={classes["nav-item"]}>
                  <Link href='/' className={classes["nav-item-link"]}>CONTACT US</Link>
                </li>
                <li className={classes["nav-item"]}>
                  <Link href='/' className={`${classes["nav-item-link"]} ${classes['cta']}`}>REGISTER</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
