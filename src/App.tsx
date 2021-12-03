// import Home from "./views/Home";
import Router from "./routes";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
