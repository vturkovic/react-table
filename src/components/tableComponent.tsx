import ReactTable from "react-table";
import "react-table/react-table.css";
import { TableInterface, TableRowInterface, TableColumnDataInterface, SumInterface } from "../interfaces";

const TableComponent = ({ tableRowData, tableColumnData } : TableInterface) => {

  const sumColumns = (tableData: TableRowInterface[]) => {

    let sum: SumInterface = {
      index: 0, 
      age: 0,
      latitude: 0, 
      longitude: 0
    };

    tableData.forEach((item) => {
      sum.age += item.age;
      sum.index += item.index;
      sum.latitude += item.latitude;
      sum.longitude += item.longitude;
    });

    return sum;
  };

  const addFooter = (newTableColumnsData: TableColumnDataInterface[], sum: SumInterface) => {
    newTableColumnsData.forEach(item => {
      if (item.Header === 'Index') {
        item.Footer = sum.index.toString();
      } else if (item.Header === 'Age') {
        item.Footer = sum.age.toString();
      } else if (item.Header === 'Latitude') {
        item.Footer = sum.latitude.toString();
      } else if (item.Header === 'Longitude') {
        item.Footer = sum.longitude.toString();
      }
    });
    return newTableColumnsData;
  };

  const sum = sumColumns(tableRowData);
  const newTableColumnsData = addFooter(tableColumnData, sum);
  
  return (
    <div>
      <ReactTable
        data={tableRowData}
        showPagination={true}
        defaultPageSize={10}
        className="-striped -highlight"
        columns={newTableColumnsData} />
    </div>
  );
};

export default TableComponent;