import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProjectForm from "./components/form";
import ProjectView from "./components/projectview";

const routing = (
  <StrictMode>
    <ChakraProvider>
      <Router>
        <Navbar />  
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route exact path='/create' element={<ProjectForm />} />
          <Route path='/view/:id' element={<ProjectView />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  </StrictMode>
);

ReactDOM.render(routing, document.getElementById('root'));
