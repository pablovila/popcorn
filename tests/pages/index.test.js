import React from "react";
import { shallow } from "enzyme";

import Index from "../../pages/index";

describe("Render title", () => {
  it("Index page renders Popcorn title", () => {
    const mockData = { genres: [] };
    const app = shallow(<Index {...mockData} />);
    expect(app.find("h1").text()).toEqual("Popcorn Movies");
  });
});
