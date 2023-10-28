import Community from "./components/Community";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Course />
        <Subscribe />
        <Community />
      </main>

      <Footer />
    </>
  );
}

export default App;
