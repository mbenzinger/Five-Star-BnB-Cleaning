import { useState } from "react"
import { useHistory } from "react-router"

function AddPropertyForm() {

	const history = useHistory()

	const [place, setProperty] = useState({
		name: '',
		pic: '',
		location: '',
        area: "",
		
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/properties`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(place)
		})

		history.push('/properties')
	}

	return (
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
					<label htmlFor="location">Location</label>
					<input
						required
						value={property.location}
						onChange={e => setProperty({ ...property, location: e.target.value })}
						className="form-control"
						id="location"
						name="location"
					/>
				</div>
                <div className="form-group">
					<label htmlFor="area">Square Fottage</label>
					<input
						required
						value={property.area}
						onChange={e => setProperty({ ...property, area: e.target.value })}
						className="form-control"
						id="area"
						name="area"
					/>
				</div>
				
				<input className="btn btn-primary" type="submit" value="Add Property" />
			</form>
		</main>
	)
}

export default AddPropertyForm;