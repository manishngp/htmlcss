

import './App.css'
import DataTable from './Database'
import { sampleData, columnConfig } from './data/Data'



function App() {


  return (
    <>
   <DataTable  data={sampleData} columns={columnConfig} />
    </>
  )
}

export default App
