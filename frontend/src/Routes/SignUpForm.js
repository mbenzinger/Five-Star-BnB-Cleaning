import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

function SignUpForm() {

	const navigate = useNavigate()

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		role: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`${process.env.REACT_APP_SERVER_URL}users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		navigate(`/`)
	}

	return (
		<main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div>
						<label htmlFor="firstName">First Name</label>
						<input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, firstName: e.target.value })}
							id="firstName"
							name="firstName"
						/>
					</div>
					<div>
						<label htmlFor="lastName">Last Name</label>
						<input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							id="email"
							name="email"
						/>
					</div>
				</div>
				<div>
					<div>
						<label htmlFor="role">User Type</label>
						<select
							type="role"
							required
							value={user.role}
							onChange={e => setUser({ ...user, role: e.target.value })}
							id="role"
							name="role"
						>
							<option value=""></option>
							<option value="Property Owner">Property Owner</option>
							<option value="Sub Contractor">Sub Contractor</option>
						</select>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							required
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-control"
							id="password"
							name="password"
						/>
					</div>
				</div>
				<input type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default SignUpForm