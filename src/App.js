import './App.css';
import DataTable from 'react-data-table-component'

const data = [
  {
    id:1,
    name: 'Carmen',
    age: 52 
  },
  {
    id:2,
    name: 'Jonathan',
    age: 35
  },
  {
    id:3,
    name: 'Miriam',
    age: 34
  },
  {
    id:4,
    name: 'Liliana',
    age: 27
  }  
]

const columns = [
  {
    name: 'ID',
    selector: row => row.id
  },
  {
    name: 'NOMBRE',
    selector: row => row.name
  },
  {
    name: 'EDAD',
    selector: row => row.age
  },
]

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>

      <DataTable 
      columns = {columns}
      data = {data}
      />
    </div>
  );
}

export default App;
