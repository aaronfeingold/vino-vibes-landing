import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BackgroundGradient from "../components/BackgroundGradient";
import MainContainer from "../components/MainContainer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-stone-900 text-white isolate overflow-hidden">
      <Navbar />
      <BackgroundGradient />
      <MainContainer />
      <Footer />
    </div>
  );
}
