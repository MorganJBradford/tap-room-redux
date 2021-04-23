import './App.css';
import Header from "Header";

function App() {
  return (
    <>
      <Header />
      <h2>Name: {names}</h2>
      <h2>Name: {brandName}</h2>
      <h2>Price: {price}</h2>
      <h2>Alcohol: {booze}</h2>
    </>
  );
}

export default App;
