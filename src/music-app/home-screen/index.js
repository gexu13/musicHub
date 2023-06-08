import React from "react";
import Nav from "../navigation/nav";

function Home() {
  return(
    <div> 
      <div className="flex flex-col">
          <Nav/>
          <h2 className="font-bold text-2xl">Home</h2>
      </div>
    </div>
  );
 };
 export default Home;