import { useContext, useState } from "react"
import { useNavigate } from "react-router"
// import { CurrentUser } from "./Routes/CurrentUser"

function LoginForm() {

    const history = useNavigate()

    
    // const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
       

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

export default LoginForm