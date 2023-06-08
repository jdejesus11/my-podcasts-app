import React from "react";
import DataGrid, { DataGridProps, NO_DATA_AVAILABLE } from "../data-grid";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { listOfEpisodes } from "../../../helpers/data";
import { Episode } from "../../../models/models";

const mockedUseNavigate = jest.fn();
const mockedUseLocation = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
  useLocation: () => mockedUseLocation,
}));

describe("<Datagrid />", () => {
  let props: DataGridProps<Episode>;
  describe("should render a datagrid with episodes", () => {
    it("when users select to see the detail of a podcast ", () => {
      props = {
        data: listOfEpisodes,
      };
      render(<DataGrid {...props} />);
      const grid = screen.getByTestId("grid-001");
      expect(grid.querySelectorAll("tr.table__row").length).toBe(
        props.data.length + 1
      );

      const titleNode = screen.getByText("Amor para los dos");
      expect(titleNode).not.toBeNull();
    });
  });
  describe("should render message of no available episodes", () => {
    it("when there is no data ", () => {
      props = {
        data: [],
      };
      render(<DataGrid {...props} />);
      const grid = screen.getByTestId("grid-001");
      expect(grid.querySelectorAll("tr.table__row").length).toBe(1);

      const titleNode = screen.getByText(NO_DATA_AVAILABLE);
      expect(titleNode).not.toBeNull();
    });
  });
});
