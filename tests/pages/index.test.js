import React from "react";
import { shallow } from "enzyme";

import configureMockStore from "redux-mock-store";
import freeze from "redux-freeze";
import thunk from "redux-thunk";

import Index from "../../pages/index";

const middlewares = [freeze, thunk];
const mockStore = configureMockStore(middlewares);

describe("test Index page", () => {
  it("renders Popcorn title", () => {
    const mockData = { genres: [] };
    const app = shallow(<Index {...mockData} />);
    expect(app.find("h1").text()).toEqual("Popcorn Movies");
  });

  it("gets initial props for the page", async () => {
    const store = mockStore({ entities: { genres: { byId: { 1: { id: 1, name: "Action" } } } }, genres: { isLoading: false, items: [1] } });
    const props = await Index.getInitialProps({ store });
    expect(props).toEqual({ genres: [{ id: 1, name: "Action" }] });
  });
});
