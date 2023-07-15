import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import CurrentWeather from "./components/CurrentWeather";
import InfoSide from "./components/InfoSide";
import { useFetch } from "./hooks";
import ReactLoading from "react-loading";

function App({ type, color }) {
  const [city, setCity] = useState("Kedah");
  const { data, loading, error } = useFetch(city);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <ReactLoading type={type} color={color} height={60} width={100} />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="max-w-3xl bg-slate-600/50 xs:h-screen md:m-10 md:rounded-xl md:h-auto ">
      <Header>
        <Nav onCityChange={setCity} />
      </Header>
      <Main>
        <div className="flex flex-col p-2 md:flex-row">
          <CurrentWeather data={data} />
          <InfoSide data={data} />
        </div>
      </Main>
    </div>
  );
}

export default App;
