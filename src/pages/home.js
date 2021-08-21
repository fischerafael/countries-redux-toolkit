import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountry, deleteCountry, setCountries } from "../store/slices";

export const Home = () => {
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state.countries);

  const [country, setCountry] = useState("");
  console.log(country);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(addCountry(country));
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      const countries = data.map((country) => country.name);
      dispatch(setCountries(countries));
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Países ({countries.length})</h1>
      <input value={country} onChange={(e) => setCountry(e.target.value)} />
      <button onClick={onClick}>Adicionar País</button>
      {!loading ? (
        <ul>
          {countries &&
            countries.map((country) => (
              <li key={country}>
                <p>{country}</p>
                <button onClick={() => dispatch(deleteCountry(country))}>
                  Remover País
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <ul>Carregando...</ul>
      )}
    </div>
  );
};
