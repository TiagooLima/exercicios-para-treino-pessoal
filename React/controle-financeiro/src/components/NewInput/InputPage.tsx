import { SearchFilter } from "../SearchFilter";

export function InputPage({ setInputPage }) {
  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const description = data.get("description");
    const moneyValue = data.get("money-value");
    const searchFilter = data.get("search-filter");
    const category = data.get("category");

    //pegou o array armazenado do localstorage
    const arrayLocalStorage = JSON.parse(
      localStorage.getItem("transactions") ?? "[]",
    );

    const transactions = {
      id: arrayLocalStorage.length + 1,
      description: description,
      moneyValue: moneyValue,
      type: searchFilter,
      category: category,
    };

    arrayLocalStorage.push(transactions);
    localStorage.setItem("transactions", JSON.stringify(arrayLocalStorage));
    console.log(localStorage.transactions);
    setInputPage(false);
    window.location.reload()
  }

  return (
    <div className="input-page">
      <h2>Insira o novo registro</h2>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          required
          placeholder="Insira a descrição do registro:"
          name="description"
        />

        <label htmlFor="">Valor</label>
        <input
          type="number"
          step={0.01}
          required
          placeholder="Insira o valor do registro:"
          name="money-value"
        />

        <label htmlFor="">Tipo</label>
        <SearchFilter>Selecione o tipo</SearchFilter>

        <label htmlFor="">Categoria</label>
        <input
          type="text"
          required
          placeholder="Insira a categoria do registro:"
          name="category"
          maxLength={25}
        />

        <button>Confirmar</button>
      </form>
    </div>
  );
}
