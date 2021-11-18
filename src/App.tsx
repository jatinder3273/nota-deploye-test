import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import StreamTracks from "./pages/StreamTracks";
import "./assets/scss/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaConnectionContextProvider from "./contexts/MetaConnectionContext";
const App = () => {
  return (
    <>
      <Router>
        <MetaConnectionContextProvider>
          <Switch>
            <AppRoutes exact path="/" Layout={MainLayout} Component={Home} />
            <AppRoutes exact path="/about" Layout={MainLayout} Component={About} />
            <AppRoutes exact path="/detail/:id" Layout={MainLayout} Component={Detail} />
            <AppRoutes exact path="/stream-tracks" Layout={MainLayout} Component={StreamTracks} />
          </Switch>
        </MetaConnectionContextProvider>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
