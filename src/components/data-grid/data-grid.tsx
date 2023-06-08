import React from "react";
import { Episode } from "../../models/models";
import "./data-grid.scss";

export interface DataGridProps<T extends Episode> {
  data: T[];
}

export const NO_DATA_AVAILABLE = "No episodes available";

export type RowProps = { className?: string } & React.PropsWithChildren;
export type CellProps = { className?: string } & React.PropsWithChildren;
export type LinkProps = { onClick: () => void } & React.PropsWithChildren;

const isEven = (index: number) => {
  return index % 2 === 0;
};

const Cell = ({ children, className }: CellProps) => {
  return <td className={className}>{children}</td>;
};

const Row = ({ children, className }: RowProps) => {
  return <tr className={className}>{children}</tr>;
};

const Link = ({ onClick, children }: LinkProps) => {
  return <a onClick={onClick}>{children}</a>;
};

const renderNoDataAvailable = () => (
  <Row className="table__no-data">
    <Cell>
      {NO_DATA_AVAILABLE}
    </Cell>
  </Row>
);

const Grid = ({ children }: React.PropsWithChildren) => {
  return (
    <table className="table" data-testid="grid-001">
      <thead className="table__header">
        <tr className="table__row">
          <th className="table__header-cell table--expanded">Title</th>
          <th className="table__header-cell table--centered">Date</th>
          <th className="table__header-cell table--centered">Duration</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

const DataGrid = ({ data }: DataGridProps<Episode>) => {
  return (
    <Grid>
      {data.map((item, key) => {
        return (
          <Row key={key} className={`table__row ${!isEven(key + 1) ? "table--background-filled" : ""}`}>
            <Cell className="table__cell table--expanded table--detail">
              <Link
                onClick={() => {
                  console.log("click");
                }}
              >
                {item.title}
              </Link>
            </Cell>
            <Cell className="table__cell table--centered">{item.date}</Cell>
            <Cell className="table__cell table--centered">{item.duration}</Cell>
          </Row>
        );
      })}
      {data?.length === 0 && renderNoDataAvailable()}
    </Grid>
  );
};

export default DataGrid;
