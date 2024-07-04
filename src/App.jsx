import "./App.scss";
import Header from "./components/Header";
import Photos from "./components/Photos";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Photos />
        </div>
      </main>
    </>
  );
};

export default App;
