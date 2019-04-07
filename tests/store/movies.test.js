import moxios from "moxios";

import configureMockStore from "redux-mock-store";
import freeze from "redux-freeze";
import thunk from "redux-thunk";

import * as actions from "store/entities/movies/actions";
import * as types from "store/entities/movies/types";
import * as operations from "store/operations";

import { axiosInstance } from "apis/tmdb/axiosConfig";

import {
  successActionResponse,
  mockAxiosResponse,
  mockNormalizedState
} from "./mocks/movies.mock";

const middlewares = [freeze, thunk];
const mockStore = configureMockStore(middlewares);

describe("test action for movies", () => {
  it("should create an action to start fetching movies", () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_BY_GENRE_START
    };
    expect(actions.fetchMoviesByGenreStart()).toEqual(expectedAction);
  });

  it("should create an action when failing fetching movies", () => {
    const errorText = "unexpected error";
    const expectedAction = {
      type: types.FETCH_MOVIES_BY_GENRE_FAIL,
      error: errorText
    };
    expect(actions.fetchMoviesByGenreFail(errorText)).toEqual(expectedAction);
  });

  it("should create an action when fetching movies success", () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_BY_GENRE_SUCCESS,
      response: successActionResponse
    };
    expect(actions.fetchMoviesByGenreSuccess(successActionResponse)).toEqual(
      expectedAction
    );
  });
});

describe("test async functions fetching movies", () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it("creates FETCH_MOVIES_BY_GENRE_START and FETCH_MOVIES_BY_GENRE_SUCCESS when fetching movies", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockAxiosResponse
      });
    });

    const expectedActions = [
      { type: types.FETCH_MOVIES_BY_GENRE_START },
      {
        type: types.FETCH_MOVIES_BY_GENRE_SUCCESS,
        response: mockNormalizedState
      }
    ];
    const store = mockStore({ movies: { isLoading: false } });

    return store.dispatch(operations.fetchMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("doesn't fecth if it is loading already", () => {
    const expectedActions = [];
    const store = mockStore({ movies: { isLoading: true } });
    return store.dispatch(operations.fetchMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("returns an error if API call fails", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404
      });
    });

    const expectedActions = [
      { type: types.FETCH_MOVIES_BY_GENRE_START },
      {
        type: types.FETCH_MOVIES_BY_GENRE_FAIL,
        error: new Error("Request failed with status code 404")
      }
    ];
    const store = mockStore({ movies: { isLoading: false } });

    return store.dispatch(operations.fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
