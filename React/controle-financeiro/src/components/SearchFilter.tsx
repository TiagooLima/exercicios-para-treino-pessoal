interface Props {
    setFilterData?: React.Dispatch<React.SetStateAction<string>>
}

export function SearchFilter({children, setFilterData}: React.PropsWithChildren<Props>){
    return (
        <>
            <select name="search-filter" id="search-filter" onChange={e => setFilterData(e.target.value)}>
                <option value="">{children}</option>
                <option value="Entrada">Entrada</option>
                <option value="Saida">Saida</option>
            </select>
        </>
    )
}