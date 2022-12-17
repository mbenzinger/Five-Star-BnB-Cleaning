import { useState } from "react";
import React from "react";
const Def = require('../default')
//import { useNavigate } from "react-router-dom";

export default function addProperty() {
	return (
        <Def>
		<main>
        <h1>Add a New Property</h1>
			<form method="POST" action="/properties">
              <div className="form-group">
                <label htmlFor="name">Property Name</label>
                <input className="form-control" id="name" name="name" required/>
              </div>
              <div className="form-group">
               <label htmlFor="cuisines">Square Footage</label>
                <input className="form-control" id="footage" name="footage" requried />
              </div>
              <div className="form-group">
                <label htmlFor="pic">Property Picture</label>
                <input className="form-control" id="pic" name="pic" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input className="form-control" id="city" name="city" required />
              </div>
              <div className="form-group">
               <label htmlFor="state">State</label>
               <input className="form-control" id="state" name="state" required />
             </div>
             
				<input className="btn btn-primary" type="submit" value="Add Property" />
			</form>
		</main>
        </Def>
	)
}