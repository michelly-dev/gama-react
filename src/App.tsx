// import Home from "./views/Home";
import Router from "./routes";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Router />
    </BrowserRouter>
  );
}

export default App;
