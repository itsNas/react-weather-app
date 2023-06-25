import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Container from "./components/Container";
import { useFetch } from "./hooks";

function App() {
  const [city, setCity] = useState("Kedah");
  const { data, loading, error } = useFetch(city);
  return (
    <div className="App">
      <Header>
        <Nav onCityChange={setCity} />
      </Header>
      <Main className="">
        <Container data={data} loading={loading} error={error} />
      </Main>
    </div>
  );
}

export default App;
