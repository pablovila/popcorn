import React from "react";
import { shallow, mount } from "enzyme";

import Cast from "containers/Cast";
import CastCard from "components/Cards/CastCard";

const mockCast = [
  {
    id: 60073,
    name: "Brie Larson",
    character: "Carol Danvers / Vers / Captain Marvel"
  }
];

describe("test Cast container", () => {
  it("renders Cast container", () => {
    const cast = shallow(<Cast cast={mockCast} />);

    expect(cast.find("div.columns")).toHaveLength(1);
    expect(cast).toMatchSnapshot();
  });

  it("renders Cast children", () => {
    const cast = mount(<Cast cast={mockCast} />);

    expect(cast.find(CastCard)).toHaveLength(1);
    expect(cast).toMatchSnapshot();
  });
});
