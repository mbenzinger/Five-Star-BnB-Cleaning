const React = require('react')
const Def = require('../default')

export default function index (data) {
  let propertiesFormatted = data.properties.map((place) => {
    return (
      <div>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}/>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Properties INDEX PAGE</h1>
            {propertiesFormatted}
        </main>
    </Def>
)
}

  