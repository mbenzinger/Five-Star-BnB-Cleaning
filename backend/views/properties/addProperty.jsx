import { useState } from "react";
import React from "react";
const Def = require('../default')
//import { useHistory } from "react-router-dom";

export default function addProperty() {

	//const history = useHistory()

	const [property, setProperty] = useState({
		name: '',
		pic: '',
		city: '',
		footage: ''
		
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/properties`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(property)
		})

		//history.push('/places')
	}

	return (
        <Def>
		<main>
			<h1>Add a New Property</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Property Name</label>
					<input
						required
						value={property.name}
						onChange={e => setProperty({ ...property, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="founded">Square Footage</label>
					<input
						required
						value={property.founded}
						onChange={e => setProperty({ ...property, founded: e.target.value })}
						className="form-control"
						id="footage"
						name="footage"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="pic">Property Picture</label>
					<input
						value={property.pic}
						onChange={e => setProperty({ ...property, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">City</label>
					<input
						value={property.city}
						onChange={e => setProperty({ ...property, city: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Add Property" />
			</form>
		</main>
        </Def>
	)
}
