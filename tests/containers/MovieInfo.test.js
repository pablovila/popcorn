import React from "react";
import { shallow, mount } from "enzyme";

import MovieInfo from "containers/MovieInfo";
import Cast from "containers/Cast";

import { goodMovie, badMovie } from "./mocks/MovieInfo.mock";

describe("test MovieInfo container", () => {
  it("renders MovieInfo container", () => {
    const movieInfo = shallow(<MovieInfo movie={goodMovie} />);

    expect(movieInfo.find("h2").text()).toEqual(`${goodMovie.title} (2019)`);
    expect(movieInfo).toMatchSnapshot();
  });

  it("renders MovieInfo children and UI subcomponents", () => {
    const movieInfo = mount(<MovieInfo movie={goodMovie} />);

    expect(movieInfo.find(Cast)).toHaveLength(1);
    expect(movieInfo).toMatchSnapshot();
  });

  it("renders MovieInfo children even with a bad movie", () => {
    const movieInfo = mount(<MovieInfo movie={badMovie} />);

    expect(movieInfo.find(Cast)).toHaveLength(0);
    expect(movieInfo).toMatchSnapshot();
  });
});
