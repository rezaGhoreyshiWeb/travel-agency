import Destination from "./components/Destination";
import DownloadApp from "./components/DownloadApp";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Services />
        <Destination />
        <Offer />
        <Tours />
        <Testimonial />
        <DownloadApp />
      </div>
    </>
  );
}

export default App;
