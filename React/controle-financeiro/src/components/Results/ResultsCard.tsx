interface ResultsCardProps {
    description: string;
    moneyValue: string;
    type: string;
    category: string;
}

export function ResultsCard({ description, moneyValue, type, category }: ResultsCardProps) {
    return (
        <div className="results-card">
            <h3>{description}</h3>
            <h4>R$ {moneyValue}</h4>
            <p>{type}</p>
            <span>{category}</span>
        </div>
    )
}