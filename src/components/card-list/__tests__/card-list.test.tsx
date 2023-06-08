import React from "react";
import CardList, { CardListProps } from "../card-list";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<CardList />", () => {
  let props: CardListProps;
  describe("should render a podcast list", () => {
    it("when users search podcasts", () => {
      props = {
        podcasts: [
          {
            id: "1",
            title: "Amor para los dos",
            author: "a punto cinco",
          },
          {
            id: "1",
            title: "Como saber",
            author: "a punto cinco",
          },
          {
            id: "1",
            title: "Supervisor de tus sueños",
            author: "a punto cinco",
          },
        ],
      };
      render(<CardList {...props} />);
      const list = screen.getByTestId("list-001");
      expect(list.querySelectorAll("li").length).toBe(props.podcasts.length);
    });
  });
  describe("should not render a podcast list", () => {
    it("when users search podcasts and there is no result", () => {
      props = {
        podcasts: [],
      };
      render(<CardList {...props} />);
      const list = screen.getByTestId("list-001");
      expect(list.querySelectorAll("li").length).toBe(props.podcasts.length);
    });
  });
});
