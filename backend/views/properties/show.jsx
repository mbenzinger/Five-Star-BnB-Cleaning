const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.property.name }</h1>
            <h2>{ data.property.squarefootage }</h2>
            <h2>{ data.property.city }, { data.property.state }</h2>
            <a href={`/properties/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>     
            
            <form method="POST" action={`/properties/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form>     

          </main>
        </Def>
    )
}

module.exports = show

