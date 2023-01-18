import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Satistics from "./Components/Satistics/Satistics";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import WhatTheySay from "./Components/WhatTheySay/WhatTheySay";
import WhyUs from "./Components/WhyUs/WhyUs";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Title title="الخدمات التي نقدمها" />
      <Services />
      <Title title="لماذا تختارنا" />
      <WhyUs />
      <Satistics />
      <Title title="ماذا يقول عملائنا " />

      <WhatTheySay />
      <Footer />
    </>
  );
}

export default App;
