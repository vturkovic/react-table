import ReactTable from "react-table";
import "react-table/react-table.css";

interface Data {
  name: string;
  age: number;
  friend: {
    name: string;
    age: number;
  };
  columns: string[];
}

const data: Data[] = [
  {
    name: "John Doe",
    age: 26,
    friend: {
      name: "Jane Doe",
      age: 23
    },
    columns: [
      "Column 1",
      "Column 2",
      "Column 3",
      "Column 4",
      "Column 5",
      "Column 6",
      "Column 7",
      "Column 8",
      "Column 9",
      "Column 10",
      "Column 11",
      "Column 12",
      "Column 13",
      "Column 14",
      "Column 15",
      "Column 16",
      "Column 17",
      "Column 18",
      "Column 19",
      "Column 20"
    ]
  },
  {
    name: "Jane Doe",
    age: 32,
    friend: {
      name: "John Doe",
      age: 29
    },
    columns: [
      "Column 1",
      "Column 2",
      "Column 3",
      "Column 4",
      "Column 5",
      "Column 6",
      "Column 7",
      "Column 8",
      "Column 9",
      "Column 10",
      "Column 11",
      "Column 12",
      "Column 13",
      "Column 14",
      "Column 15",
      "Column 16",
      "Column 17",
      "Column 18",
      "Column 19",
      "Column 20"
    ]
  }
];

const columns = [  
  {    
    Header: "Name",    
    accessor: "name",    
    width: 150,    
    style: {      
      position: "sticky",      
      left: 0,      
      background: "#fff"    
    }  
  },  
  {    
    Header: "Age",    
    accessor: "age",    
    width: 100,    
    style: {      
      position: "sticky",      
      left: 150,      
      background: "#fff"    
    }  
  },  
  {    
    Header: "Friend Name",    
    accessor: "friend.name",    
    width: 150,    
    style: {      
      position: "sticky",      
      left: 250,      
      background: "#fff"    
    }  
  },  
  ...data[0].columns.map((column, index) => ({
    Header: column,
    accessor: `columns.${index}`,
    width: 150
  }))
];

const ExampleTable = () => (
  <div style={{ overflowX: "scroll" }}>
    <ReactTable
      data={data}
      columns={columns}
      showPagination={false}
      minRows={0}
    />
  </div>
);

export default ExampleTable;
