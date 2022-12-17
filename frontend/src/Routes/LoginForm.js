import { useContext, useState } from "react"
import { useNavigate } from "react-router"
// import { CurrentUser } from "../contexts/CurrentUser"

export default function LoginForm() {

    

    const history = useNavigate()

    // const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            // setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            //console.log(data.token)
            history.push(`/`)
        } else {
            setErrorMessage(data.message)
        }

    //     console.log(data)

     }

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            id="email"
                            name="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input type="submit" value="Login" />
            </form>
        </main>
    )
}

//export default LoginForm