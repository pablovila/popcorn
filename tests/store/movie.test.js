import moxios from "moxios";

import configureMockStore from "redux-mock-store";
import freeze from "redux-freeze";
import thunk from "redux-thunk";

import * as actions from "store/entities/movie/actions";
import * as types from "store/entities/movie/types";
import * as operations from "store/operations";

import { axiosInstance } from "apis/tmdb/axiosConfig";

import {
  successActionResponse,
  mockAxiosResponse,
  mockAxiosSecondResponse,
  mockNormalizedState
} from "./mocks/movie.mock";

const middlewares = [freeze, thunk];
const mockStore = configureMockStore(middlewares);

describe("test action for movie", () => {
  it("should create an action to start fetching movie", () => {
    const expectedAction = {
      type: types.FETCH_MOVIE_START
    };
    expect(actions.fetchMovieStart()).toEqual(expectedAction);
  });

  it("should create an action when failing fetching movie", () => {
    const errorText = "unexpected error";
    const expectedAction = {
      type: types.FETCH_MOVIE_FAIL,
      error: errorText
    };
    expect(actions.fetchMovieFail(errorText)).toEqual(expectedAction);
  });

  it("should create an action when fetching movie success", () => {
    const expectedAction = {
      type: types.FETCH_MOVIE_SUCCESS,
      response: successActionResponse
    };
    expect(actions.fetchMovieSuccess(successActionResponse)).toEqual(
      expectedAction
    );
  });
});

describe("test async functions fetching movie", () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it("creates FETCH_MOVIE_START and FETCH_MOVIE_SUCCESS when fetching genres", () => {
    moxios.wait(() => {
      const firstRequest = moxios.requests.at(0);
      const secondRequest = moxios.requests.at(1);

      firstRequest.respondWith({
        status: 200,
        response: mockAxiosResponse
      });

      secondRequest.respondWith({
        status: 200,
        response: mockAxiosSecondResponse
      });
    });

    const expectedActions = [
      { type: types.FETCH_MOVIE_START },
      {
        type: types.FETCH_MOVIE_SUCCESS,
        response: mockNormalizedState
      }
    ];
    const store = mockStore({ movie: { isLoading: false } });

    return store.dispatch(operations.fetchMovie(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("doesn't fecth if it is loading already", () => {
    const expectedActions = [];
    const store = mockStore({ movie: { isLoading: true } });
    return store.dispatch(operations.fetchMovie(1)).then(() => {
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
      { type: types.FETCH_MOVIE_START },
      {
        type: types.FETCH_MOVIE_FAIL,
        error: new Error("Request failed with status code 404")
      }
    ];
    const store = mockStore({ movie: { isLoading: false } });

    return store.dispatch(operations.fetchMovie(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
