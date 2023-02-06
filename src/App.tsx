import './App.css';
import TableComponent from './components/tableComponent';
import { data } from "./data/userData";
import { tableColumnData } from './data/tableColumnsData';

const App = () => {
  return (
    <TableComponent data={data} tableColumnData={tableColumnData}/>
)};

export default App;