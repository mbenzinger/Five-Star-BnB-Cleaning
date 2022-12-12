import React from "react";

function PropertyIndex() {
    return (
      <main>
        <h1>Here are the Current Property Listings!</h1>
        <a href="/properties/NewPropertyForm">
          <button className="btn-primary">Add Property</button>
        </a>
      </main>
    );
  }
  
  export default PropertyIndex;