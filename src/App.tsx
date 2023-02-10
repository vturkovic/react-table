import './App.css';
import TableComponent from './components/tableComponent';
import { tableRowData } from "./data/tableRowData";
import { tableColumnData } from './data/tableColumnsData';

const App = () => {
  return (
    <TableComponent tableRowData={tableRowData} tableColumnData={tableColumnData}/>
)};

export default App;