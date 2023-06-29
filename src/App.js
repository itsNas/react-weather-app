import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import CurrentWeather from "./components/CurrentWeather";
import InfoSide from "./components/InfoSide";
import { useFetch } from "./hooks";

function App() {
  const [city, setCity] = useState("Kedah");
  const { data, loading, error } = useFetch(city);

  if (loading) {
    return <div className="text-center">Loading ............</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="App">
      <Header>
        <Nav onCityChange={setCity} />
      </Header>
      <Main>
        <div className="container">
          <CurrentWeather data={data} />
          <InfoSide data={data} />
        </div>
      </Main>
    </div>
  );
}

export default App;
