const React = require('react')
const Def = require('../default')

export default function index (data) {
  let propertiesFormatted = data.properties.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
        <img src={place.pic} alt={place.name}/>
        <p className="text-center">
          Square Footage: {place.squarefootage}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Here are the current listings!</h1>
            <div className='row'>
            {propertiesFormatted}
            </div>
        </main>
    </Def>
)
}

  