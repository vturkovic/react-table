import './App.css';
import TableComponent from './components/tableComponent';
import { data } from "./userData";
import { tableColumnData } from './tableColumnsData';

const App = () => {
  return (
    <TableComponent data={data} tableColumnData={tableColumnData}/>
)};

export default App;