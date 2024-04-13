import "./index.css";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import Chip from "./components/Chip";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
    </main>
  );
}

export default Sentry.withProfiler(App);
