import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>
      <Main>
        <CurrentWeather />
        <Forecast />
      </Main>
    </div>
  );
}

export default App;
