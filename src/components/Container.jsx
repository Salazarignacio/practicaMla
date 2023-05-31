import { useEffect, useState } from "react";

function Input() {
  const [buscar, setBuscar] = useState("");
  const [result, setResult] = useState("");

  function Search() {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`)
      .then((response) => response.json())
      .then((jony) =>
        setResult(
          jony.results.map((a) => (
            <div key={a.id}>
            <ul>
              <li>{a.title}</li>
              <li><img src={a.thumbnail} /></li>
              <li>$ {a.price}</li>
              </ul>
            </div>
          ))
        )
      );
  }

  return (
    <>
      
      <input
        name="Buscar"
        placeholder="Busqueda"
        onChange={(e) => setBuscar(e.target.value)}
      />
      <button onClick={Search}>Search</button>
      <div>{result}</div>
    </>
  );
}

export default function Mla() {
  return (
    <>
      <Input></Input>
    </>
  );
}
