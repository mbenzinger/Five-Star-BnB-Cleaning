import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

function SignUpForm() {

	const history = useNavigate()

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		userType: '',
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

		history.push(`/`)
	}

	return (
		<main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div>
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
				<div>
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
						<label htmlFor="userType">User Type</label>
						<select
							type="userType"
							required
							value={user.userType}
							onChange={e => setUser({ ...user, userType: e.target.value })}
							id="userType"
							name="userType"                            
						>
                        <option value=""></option>
                        <option value="Property Owner">Property Owner</option>
                        <option value="Sub Contractor">Sub Contractor</option>
                        </select>
					</div>
				</div>
				<input type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default SignUpForm