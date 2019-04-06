import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Link from "next/link";

import Navbar from "../UI/Navbar/Navbar";
import NavbarBrand from "../UI/Navbar/NavbarBrand";
import NavbarItem from "../UI/Navbar/NavbarItem";
import NavbarMenu from "../UI/Navbar/NavbarMenu";

import Search from "../UI/Search";
import Cart from "../UI/Cart";

const layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <Link href="/">
              <a>Popcorn Movies 🍿</a>
            </Link>
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarItem>
            <Search />
          </NavbarItem>
          <NavbarItem>
            <Cart />
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </Fragment>
  );
};

layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default layout;
