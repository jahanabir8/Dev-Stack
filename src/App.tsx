import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./Component/Hero/Hero";
import Nav from "./Component/Nav/Nav";
import Technologies from "./Component/Technologies/Technologies";

const fetchTechData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techDataPromise] = useState(() => fetchTechData());
  // console.log(techDataPromise);
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback= {<p>Loading...</p>}>
        <Technologies techDataPromise={techDataPromise}></Technologies>
      </Suspense>
    </>
  );
}

export default App;
