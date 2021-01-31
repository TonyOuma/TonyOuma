import React from "react";
import Layout from "../shared/layout/layout";
import Contact from "./content";
import Hero from "./content/hero";

const HomePage: React.FC<{}> = () => {
  return (
    <Layout>
      <main className="fillHeight">
        <Hero />
        <Contact />
      </main>
    </Layout>
  );
};

export default HomePage;
