import React from "react";
import { mount } from "enzyme";

import configureMockStore from "redux-mock-store";
import freeze from "redux-freeze";
import thunk from "redux-thunk";

import Index from "../../pages/index";
import GenreCard from "components/Cards/GenreCard";

const middlewares = [freeze, thunk];
const mockStore = configureMockStore(middlewares);

describe("test Index page", () => {
  const mockData = {
    entities: { genres: { byId: { 1: { id: 1, name: "Action" } } } },
    genres: { isLoading: false, items: [1] }
  };

  it("renders list of genres", async () => {
    const store = mockStore(mockData);
    const props = await Index.getInitialProps({ store });
    const app = mount(<Index {...props} />);
    expect(app.find(GenreCard)).toHaveLength(1);
  });

  it("gets initial props for the page", async () => {
    const store = mockStore(mockData);
    const props = await Index.getInitialProps({ store });
    expect(props).toEqual({ genres: [{ id: 1, name: "Action" }] });
  });
});
