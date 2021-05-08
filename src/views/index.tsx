import React from "react";
import Layout from "../shared/layout/layout";
import Contact from "./content";
// import AboutSection from "./content/about";
import Hero from "./content/hero";
import JobsSection from "./content/Jobs";

const HomePage: React.FC<{}> = () => {
  return (
    <Layout>
      <main className="fillHeight">
        <Hero />
        {/* <AboutSection /> */}
        <JobsSection />
        <Contact />
      </main>
    </Layout>
  );
};

export default HomePage;
