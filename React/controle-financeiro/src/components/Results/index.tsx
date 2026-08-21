import { ResultsCard } from "./ResultsCard"
import './style.css'

export function Results({ searchData, filterData }) {

    const armazenados = JSON.parse(localStorage.getItem('transactions'))

    if (armazenados == null) {
        return (
            <p className="without-register-text">Nenhuma transação registrada</p>
        )
    }
    const armazenadosConvertidos = armazenados.filter(item => item.description.toLowerCase().includes(searchData)).filter(item => item.type.includes(filterData)).map(item => (
        <ResultsCard
            key={item.id}
            description={item.description}
            moneyValue={item.moneyValue.replace('.', ',')}
            type={item.type}
            category={item.category}
        />)
    )

    if (armazenadosConvertidos.length < 1) {
        return (<p className="without-register-text">Nenhuma transação encontrada</p>)
    }

    return (
        <>
            <div id="caixa-de-registros">
                {armazenadosConvertidos}
            </div>
        </>
    )
}