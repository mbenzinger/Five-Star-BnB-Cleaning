const React = require('react')
const Def = require('./default')

export default function propertyIndex () {
    return (
      <Def>
          <main>
              <h1 className='listHead'>Click here to check out the property listings!</h1>
              <a href="/properties">
              <button type="button" class="btn btn-primary">Listings</button>
              </a>

              <h1 className='addHead'>Click here to add a new property!</h1>
              <a href="/properties/new">
              <button type="button" class="btn btn-danger">Add Property</button>
              </a>

          </main>
      </Def>
    );
  }
  


