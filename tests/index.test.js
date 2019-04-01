import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Index from "../pages/index";

describe("can render initial setup", () => {
  it("App shows 'Initial setup'", () => {
    const app = shallow(<Index />);

    expect(app.find("section").text()).toEqual("Initial setup");
  });
});
