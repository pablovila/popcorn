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
      genres: { byId: { 1: { id: 1, name: "Action" } } },
      movies: { byId: { 1: { id: 1, title: "Captain Marvel" } } },
      movie: { byId: { 1: { id: 1, title: "Captain Marvel" } } }
    },
    genres: { isLoading: false, items: [1] },
    movies: { isLoading: false, items: [1] },
    movie: { isLoading: false, item: 1 }
  };

  it("renders movie info", async () => {
    const store = mockStore(mockData);
    const props = await Movie.getInitialProps({
      store,
      query: { genreId: 1, slug: 1 }
    });
    const movies = mount(<Movie {...props} />);
    expect(movies.find(MovieInfo)).toHaveLength(1);
  });

  it("renders movie info even without previous store", async () => {
    const badMockData = {
      entities: {
        genres: { byId: {} },
        movies: { byId: {} },
        movie: { byId: { 1: { id: 1, title: "Captain Marvel" } } }
      },
      genres: { isLoading: false, items: [] },
      movies: { isLoading: false, items: [] },
      movie: { isLoading: false, item: 1 }
    };
    const store = mockStore(badMockData);
    const props = await Movie.getInitialProps({
      store,
      query: { genreId: 1, slug: 1 }
    });
    //mocking response
    props.genre = { id: 1, name: "Action" };
    const movies = mount(<Movie {...props} />);
    expect(movies.find(MovieInfo)).toHaveLength(1);
  });

  it("gets initial props for the page", async () => {
    const store = mockStore(mockData);
    const props = await Movie.getInitialProps({
      store,
      query: { genreId: 1, slug: 1 }
    });
    expect(props).toEqual({
      genre: { id: 1, name: "Action" },
      movie: { id: 1, title: "Captain Marvel" }
    });
  });
});
