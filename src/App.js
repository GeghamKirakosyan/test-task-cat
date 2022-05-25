import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import { Cat } from "./pages/cat/Cat";
import { store } from "./redux/store";
import "./globalStyle/style.css"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Cat/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
