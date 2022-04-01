import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card content={{ 
              imageUrl: "http://placekitten.com/g/300/200",
              title: "First Post",
              published: "06 feb 2020"
             }} />
          </div>
          <div className="col-md-4">
            <Card content={{ 
              imageUrl: "http://placekitten.com/300/200",
              title: "Second Post",
              published: "12 mar 2021"
             }} />
          </div>
          <div className="col-md-4">
            <Card content={{ 
              imageUrl: "http://placekitten.com/g/300/200",
              title: "Third Post",
              published: "22 nov 2022"
             }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 