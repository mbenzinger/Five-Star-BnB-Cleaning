const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/properties/${data.property.id}?_method=PUT`}>
              <div className="form-group">
                <label htmlFor="name">Property Name</label>
                <input 
                className="form-control" 
                id="name" 
                name="name"
                value={data.property.name} 
                required/>
              </div>
              <div className="form-group">
               <label htmlFor="cuisines">Square Footage</label>
                <input 
                className="form-control" 
                id="footage" 
                name="footage"
                value={data.property.squarefootage} 
                requried />
              </div>
              <div className="form-group">
                <label htmlFor="pic">Property Picture</label>
                <input 
                className="form-control" 
                id="pic" 
                name="pic"
                value={data.property.pic} />
                
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input 
                className="form-control" 
                id="city" 
                name="city"
                value={data.property.city} 
                required />
              </div>
              <div className="form-group">
               <label htmlFor="state">State</label>
               <input 
               className="form-control" 
               id="state" 
               name="state"
               value={data.property.state} 
               required />
             </div>
             
				<input className="btn btn-primary" type="submit" value="Edit Property" />
			</form>
          </main>
        </Def>
    )
}

module.exports = edit_form
