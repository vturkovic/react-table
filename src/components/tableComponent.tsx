import ReactTable from "react-table";
import "react-table/react-table.css";
import { TableInterface, TableRowInterface, TableColumnDataInterface, TableSumInterface } from "../interfaces";

const TableComponent = ({ tableRowData, tableColumnData } : TableInterface) => {

  const sumProperties = (tableData: TableRowInterface[]): {[key: string]: number} => {
    const result: {
      [key: string]: number
    } = {};

    tableData.forEach(obj => {
      Object.keys(obj).forEach(key => {
        const k: keyof TableRowInterface = key as keyof TableRowInterface;
        if (typeof obj[k] === 'number') {
          result[k] = (result[k] || 0) + Number(obj[k]);
        }
      });
    });

    return result;
  };

  const addFooter = (data: TableColumnDataInterface[], sum: TableSumInterface ) => {
    return data.map((obj: TableColumnDataInterface) => {
      const header = obj.Header.toLowerCase();
      if (header in sum) {
        return { ...obj, Footer: sum[header].toString() };
      } else if (header === '') {
        return { ...obj, Footer: 'Total' };
      }
      return obj;
    })
  };
  
  return (
    <div>
      <ReactTable
        data={tableRowData}
        showPagination={true}
        defaultPageSize={20}
        className="-striped -highlight"
        columns={addFooter(tableColumnData, sumProperties(tableRowData))} />
    </div>
  );
};

export default TableComponent;