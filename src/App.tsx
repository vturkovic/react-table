import './App.css';
import Table from './components/tableComponent';
import { tableRowData } from "./data/tableRowData";
import { tableColumnData } from './data/tableColumnsData';

const App = () => {
  return (
    <Table tableRowData={tableRowData} tableColumnData={tableColumnData}/>
)};

export default App;