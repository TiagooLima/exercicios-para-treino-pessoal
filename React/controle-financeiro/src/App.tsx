import { useState } from "react"
import { NewInput } from "./components/NewInput"
import { Results } from "./components/Results"
import { Search } from "./components/Search"

function App() {
  const [searchData, setSearchData] = useState('')
  const [filterData, setFilterData] = useState('')
  
  return (
    <div id="container">
      <h1 style={{fontSize: '2.5em', marginBottom: '35px'}}>Registros Financeiros</h1>
      <Search setSearchData={setSearchData} setFilterData={setFilterData}/>
      <NewInput />
      <Results searchData={searchData} filterData={filterData} />
    </div>
  )
}

export default App
