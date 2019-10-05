import * as React from "react";
import Places from "./Places";
import Map from "./Map";
import Header from "./Header";

const App = () => (
  <>
    <Header />
    <main>
      <Places />
      <Map />
    </main>
  </>
);

export default App;
