import React from "react";
import { mount } from "enzyme";

import Navbar from "components/UI/Navbar/Navbar";
import NavbarBrand from "components/UI/Navbar/NavbarBrand";
import NavbarItem from "components/UI/Navbar/NavbarItem";
import NavbarMenu from "components/UI/Navbar/NavbarMenu";

import Search from "components/UI/Search";
import Cart from "components/UI/Cart";

describe("test Navbar component", () => {
  it("renders Navbar component", () => {
    const navbar = mount(
      <Navbar>
        <NavbarBrand />
        <NavbarMenu />
      </Navbar>
    );

    expect(navbar.find(".navbar")).toHaveLength(1);
    expect(navbar).toMatchSnapshot();
  });

  it("renders Navbar children and UI subcomponents", () => {
    const navbar = mount(
      <Navbar>
        <NavbarBrand>
          <NavbarItem>Popcorn Movies</NavbarItem>
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
    );
    expect(navbar.find(".navbar")).toHaveLength(1);
    expect(navbar.find(".navbar-brand")).toHaveLength(1);
    expect(navbar.find(".navbar-menu")).toHaveLength(1);
    expect(navbar.find(".navbar-item")).toHaveLength(3);
    expect(navbar.find(".navbar-item input").html()).toEqual(
      '<input class="input" type="text" placeholder="Find a movie">'
    );
  });
});
