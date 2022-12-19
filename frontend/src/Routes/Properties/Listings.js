import React from "react";
export default function Listings (data) {
  let propertiesFormatted = data.properties.map((property, index) => {
    return (
      <div className="col-sm-6">
        <h2>
        <a href={`/properties/${index}`} >
          {property.name}
        </a>
      </h2>
        <p className="text-center">
          Located in {property.city}, {property.state}
        </p>
        <p className="text-center">
          Square Footage: {property.squarefootage}
        </p>
        <img src={property.pic} alt={property.name}/>
      </div>
    )
  })
  return (
    
        <main>
            <h1>Here are the current listings!</h1>
            <div className='row'>
            {propertiesFormatted}
            </div>
        </main>
    
)
}



  