const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.property.name }</h1>
            <h2>{ data.property.squarefootage }</h2>
            <h2>{ data.property.city }, { data.property.state }</h2>
          </main>
        </Def>
    )
}

module.exports = show

