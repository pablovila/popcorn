import React from "react";
import { mount } from "enzyme";

import configureMockStore from "redux-mock-store";
import freeze from "redux-freeze";
import thunk from "redux-thunk";

import Movies from "../../pages/movies";

const middlewares = [freeze, thunk];
const mockStore = configureMockStore(middlewares);

describe("test Index page", () => {
  const mockData = {
    entities: {
      movies: { byId: { 299537: { id: 299537, title: "Captain Marvel" } } }
    },
    movies: { isLoading: false, items: [299537] }
  };

  /*it("renders list of genres", async () => {
    const store = mockStore(mockData);
    const props = await Index.getInitialProps({ store });
    const app = mount(<Index {...props} />);
    expect(app.find(GenreCard)).toHaveLength(1);
  });*/

  it("gets initial props for the page", async () => {
    const store = mockStore(mockData);
    const props = await Movies.getInitialProps({ store, query: { slug: 1 } });
    expect(props).toEqual({
      movies: [{ id: 299537, title: "Captain Marvel" }]
    });
  });
});
