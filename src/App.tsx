import {
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subcribe,
  Footer,
  Hero,
} from "./Sections";

import { NavBar } from "./components";

const App = () => {
  return (
    <main>
      <NavBar />
      <section className="padding">
        <Hero />
      </section>
      <section className="padding">
        {" "}
        <PopularProducts />
      </section>
      <section className="padding">
        {" "}
        <SuperQuality />y
      </section>
      <section className="padding">
        {" "}
        <Services />
      </section>
      <section className="padding">
        {" "}
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        {" "}
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py16 w-full">
        {" "}
        <Subcribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
