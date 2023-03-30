import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>
      <Main>
        <Container />
      </Main>
    </div>
  );
}

export default App;
