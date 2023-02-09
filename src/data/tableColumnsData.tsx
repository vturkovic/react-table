import { TableColumnDataInterface } from "../interfaces";

const DEFAULT_COLUMN_WIDTH = 150;

export const tableColumnData: TableColumnDataInterface[] = [
    {
      Header: "",
      accessor: "total",
      className: "sticky",
      headerClassName: "sticky",
      width: DEFAULT_COLUMN_WIDTH - 100,
    },
    {
      Header: "Id",
      accessor: "id",
      className: "sticky",
      headerClassName: "sticky",
      width: DEFAULT_COLUMN_WIDTH + 80,
    },
    {
      Header: "Index",
      accessor: "index",
      className: "sticky",
      headerClassName: "sticky",
      width: DEFAULT_COLUMN_WIDTH - 100,
    },
    {
      Header: "Guid",
      accessor: "guid",
      className: "sticky",
      headerClassName: "sticky",
      width: DEFAULT_COLUMN_WIDTH + 170,
    },
    {
      Header: "isActive",
      accessor: "isActive",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Balance",
      accessor: "balance",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Picture",
      accessor: "picture",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Age",
      accessor: "age",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "EyeColor",
      accessor: "eyeColor",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Name",
      accessor: "name",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Gender",
      accessor: "gender",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Company",
      accessor: "company",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Email",
      accessor: "email",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Phone",
      accessor: "phone",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Address",
      accessor: "address",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "About",
      accessor: "about",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Registered",
      accessor: "registered",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Latitude",
      accessor: "latitude",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Longitude",
      accessor: "longitude",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "Greeting",
      accessor: "greeting",
      width: DEFAULT_COLUMN_WIDTH,
    },
    {
      Header: "FavoriteFruit",
      accessor: "favoriteFruit",
      width: DEFAULT_COLUMN_WIDTH,
    }
  ];