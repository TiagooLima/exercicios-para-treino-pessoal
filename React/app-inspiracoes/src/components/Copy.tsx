
export default function Copy() {
    const date = new Date
    const ano = date.getFullYear()

    return <span>&#169; {ano}</span>
}