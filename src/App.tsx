import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
// import { Route, Switch } from "react-router-dom";
//TODO:
//use the switch and the route to navigate to the desired pages.
//so the landing page should have the a button to take us to the
//screen with the form having the fields to enter details and at the end print a document for the quote.

const App = () => {
  //state hook

  return (
    <div>
      <NavBar/>
      <HeroSection />
    </div>
  );
};

export default App;
