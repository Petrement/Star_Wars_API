import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Context
import injectContext from "./store/appContext";

//Views
import { Home } from "../js/views/Home.js";
import { Films } from "../js/views/Films.js";
import { FilmsDetails } from "../js/views/FilmsDetails.js";
import { People } from "../js/views/People.js";
import { PeopleDetails } from "../js/views/PeopleDetails.js";
import { Planets } from "../js/views/Planets.js";
import { PlanetsDetails } from "../js/views/PlanetsDetails.js";
import { Species } from "../js/views/Species.js";
import { SpeciesDetails } from "../js/views/SpeciesDetails.js";
import { Starships } from "../js/views/Starships.js";
import { StarshipsDetails } from "./views/StarshipsDetails.js";
import { Vehicles } from "../js/views/Vehicles.js";
import { VehiclesDetails } from "../js/views/VehiclesDetails.js";

//Components
import { Navbar } from "../js/component/Navbar.js";
import { Footer } from "../js/component/Footer.js";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:planetID" element={<PlanetsDetails />} />
          <Route path="/characters" element={<People />} />
          <Route path="/characters/:peopleID" element={<PeopleDetails />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:specieID" element={<SpeciesDetails />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:starshipID" element={<StarshipsDetails />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:vehicleID" element={<VehiclesDetails />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmID" element={<FilmsDetails />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
