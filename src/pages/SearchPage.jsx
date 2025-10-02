import { useSearchParams } from "react-router";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.elements.query.value;
    setSearchParams({ q: input });
  };

  return (
    <div>
      <h2>🔍 Página de búsqueda</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>

      {query && <p>Mostrando resultados para: <strong>{query}</strong></p>}
    </div>
  );
}

export default SearchPage;
