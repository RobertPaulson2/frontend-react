import AppRouter from "./utils/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
