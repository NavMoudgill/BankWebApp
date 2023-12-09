import styles from "./style";
import ErrorBoundaryApp from "./errorHandling/ErrorBoundary";
import SomeErrorPage from "./errorHandling/SomeError";

import {
  Stats,
  Navbar,
  Billing,
  CardDeals,
  Testimonials,
  Clients,
  Business,
  CTA,
  Footer,
  Hero,
} from "./components";
const App = () => {
  return (
    <ErrorBoundaryApp fallback={<SomeErrorPage />}>
      <div className="bg-primary w-full overflow-hidden">
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={` ${styles.boxWidth}`}>
            <Stats /> <Business /> <Billing />
            <CardDeals /> <Testimonials /> <Clients /> <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </ErrorBoundaryApp>
  );
};

export default App;
