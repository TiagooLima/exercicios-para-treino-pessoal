import { SearchFilter } from "../SearchFilter";
import "./style.css";

export function Search({setSearchData, setFilterData}) {
  function handleChange(e){
    setSearchData(e.target.value)
  }
  
  return (
    <>
        <input type="text" onChange={handleChange} placeholder="Pesquise a descrição do seu registro" />
        <SearchFilter setFilterData={setFilterData}>
            Filtro
        </SearchFilter>
    </>
  );
}
