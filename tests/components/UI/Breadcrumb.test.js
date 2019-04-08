import React from "react";
import { shallow } from "enzyme";

import Breadcrumb from "components/UI/Breadcrumb";

describe("test Breadcrumb component", () => {
  it("renders Breadcrumb component", () => {
    const breadcrumb = shallow(<Breadcrumb levels={[]} />);

    expect(breadcrumb.find(".breadcrumb")).toHaveLength(1);
    expect(breadcrumb).toMatchSnapshot();
  });

  it("renders breadcrumb children and UI subcomponents", () => {
    const levels = [
      {
        name: "Genres",
        route: "/"
      },
      {
        name: "Action",
        route: "movies",
        href: "/movies/1",
        params: { slug: 1 }
      },
      {
        name: "Captain Marvel",
        route: "movie",
        href: `/movies/1/1`,
        params: { slug: 1, genreId: 1 }
      }
    ];

    const breadcrumb = shallow(<Breadcrumb levels={levels} />);
    expect(breadcrumb.find(".breadcrumb")).toHaveLength(1);
    expect(breadcrumb.find("ul")).toHaveLength(1);
    expect(breadcrumb.find("li")).toHaveLength(3);
    expect(breadcrumb.find("li.is-active")).toHaveLength(1);
    expect(breadcrumb.find("a")).toHaveLength(3);
  });
});
