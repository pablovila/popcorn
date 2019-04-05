import moxios from "moxios";

import configureMockStore from "redux-mock-store";
import freeze from "redux-freeze";
import thunk from "redux-thunk";

import * as actions from "store/entities/genres/actions";
import * as types from "store/entities/genres/types";
import * as operations from "store/operations";

import { axiosInstance } from "apis/tmdb/axiosConfig";

import {
  successActionResponse,
  mockAxiosResponse,
  mockNormalizedState
} from "./mocks/genres.mock";

const middlewares = [freeze, thunk];
const mockStore = configureMockStore(middlewares);

describe("test action for genres", () => {
  it("should create an action to start fetching genres", () => {
    const expectedAction = {
      type: types.FETCH_GENRES_START
    };
    expect(actions.fetchGenresStart()).toEqual(expectedAction);
  });

  it("should create an action when failing fetching genres", () => {
    const errorText = "unexpected error";
    const expectedAction = {
      type: types.FETCH_GENRES_FAIL,
      error: errorText
    };
    expect(actions.fetchGenresFail(errorText)).toEqual(expectedAction);
  });

  it("should create an action when fetching genres success", () => {
    const expectedAction = {
      type: types.FETCH_GENRES_SUCCESS,
      response: successActionResponse
    };
    expect(actions.fetchGenresSuccess(successActionResponse)).toEqual(
      expectedAction
    );
  });
});

describe("test async functions fetching genres", () => {
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it("creates FETCH_GENRES_START and FETCH_GENRES_SUCCESS when fetching genres", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockAxiosResponse
      });
    });

    const expectedActions = [
      { type: types.FETCH_GENRES_START },
      {
        type: types.FETCH_GENRES_SUCCESS,
        response: mockNormalizedState
      }
    ];
    const store = mockStore({ genres: { isLoading: false } });

    return store.dispatch(operations.fetchGenres()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("doesn't fecth if it is loading already", () => {
    const expectedActions = [];
    const store = mockStore({ genres: { isLoading: true } });
    return store.dispatch(operations.fetchGenres()).then(() => {
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
      { type: types.FETCH_GENRES_START },
      {
        type: types.FETCH_GENRES_FAIL,
        error: new Error("Request failed with status code 404")
      }
    ];
    const store = mockStore({ genres: { isLoading: false } });

    return store.dispatch(operations.fetchGenres()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
