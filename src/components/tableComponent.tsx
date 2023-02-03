import ReactTable from "react-table";
import "react-table/react-table.css";
import { TableInterface } from "../interfaces";

const TableComponent = ({ data, tableColumnData } : TableInterface) => {
  return (
    <div>
      <ReactTable
        data={data}
        showPagination={true}
        defaultPageSize={20}
        className="-striped -highlight"
        columns={tableColumnData} />
    </div>
  );
};

export default TableComponent;