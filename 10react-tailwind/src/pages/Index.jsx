import React from "react";
import Header from "../widgets/Header";
import Hero from "../widgets/Hero";
import Solutions from "../widgets/Solutions";

function Index() {
  return (
    <div className="container mx-auto px-4 py-2">
      <Header></Header>
      <main className="mt-20">
        <Hero></Hero>
        <section>
          <Solutions className="md:p-20"></Solutions>
        </section>
      </main>
    </div>
  );
}

export default Index;
