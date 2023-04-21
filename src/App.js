import Home from "./components/Home/Home";
import Log from "./components/Log/Log";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Log />}></Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<CartContent />} />
        </Routes>
      </BrowserRouter>
      </DataProvider>
  
  );
}

export default App;
