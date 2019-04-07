import React from "react";
import { mount } from "enzyme";

import configureMockStore from "redux-mock-store";
import freeze from "redux-freeze";
import thunk from "redux-thunk";

import Movie from "../../pages/movie";
import MovieInfo from "containers/MovieInfo";

const middlewares = [freeze, thunk];
const mockStore = configureMockStore(middlewares);

describe("test Movie page", () => {
  const mockData = {
    entities: {
      movie: { byId: { 1: { id: 1, title: "Captain Marvel" } } }
    },
    movie: { isLoading: false, item: 1 }
  };

  it("renders movie info", async () => {
    const store = mockStore(mockData);
    const props = await Movie.getInitialProps({ store, query: { slug: 1 } });
    const movies = mount(<Movie {...props} />);
    expect(movies.find(MovieInfo)).toHaveLength(1);
  });

  it("gets initial props for the page", async () => {
    const store = mockStore(mockData);
    const props = await Movie.getInitialProps({ store, query: { slug: 1 } });
    expect(props).toEqual({ movie: { id: 1, title: "Captain Marvel" } });
  });
});
