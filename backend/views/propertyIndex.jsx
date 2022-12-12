const React = require('react')
const Def = require('./default')

export default function propertyIndex () {
    return (
      <Def>
          <main>
              <h1>Click here to check out the property listings!</h1>
              <a href="/properties">
  <button className="btn-primary">Properties Page</button>
</a>

<h1>Click here to add a new property!</h1>
              <a href="/properties/new">
  <button className="btn-primary">Add Property</button>
</a>

          </main>
      </Def>
    );
  }
  


