import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/todo/Todos";

function App() {
  const [theme, setTheme] = useState(true);

  const currentTheme = theme ? "dark" : "light";

  const changeTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <main className={`wrapper ${currentTheme}`}>
      <section className="container">
        <Header theme={theme} onChangeTheme={changeTheme} />

        <Todos />
      </section>

      <Footer />
    </main>
  );
}

export default App;
