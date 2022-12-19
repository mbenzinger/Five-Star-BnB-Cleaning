import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"

function EditPlaceForm() {

    const history = useHistory()

    const { placeId } = useParams()

    const [place, setPlace] = useState({
        name: '',
        pic: '',
        squarefootage: '',
        address: '',
        city: '',
        state: '',
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/places/${placeId}`)
            const resData = await response.json()
            setPlace(resData)
        }
        fetchData()
    }, [placeId])

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/places/${place.placeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(place)
        })

        history.push(`/places/${place.placeId}`)
    }

    return (
        <main>
            <h1>Edit Place</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input
                        required
                        value={place.name}
                        onChange={e => setPlace({ ...place, name: e.target.value })}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input
                        value={place.pic}
                        onChange={e => setPlace({ ...place, pic: e.target.value })}
                        className="form-control"
                        id="pic"
                        name="pic"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="squareFootage">Square Feet</label>
                    <input
                        value={place.squarefootage}
                        onChange={e => setPlace({ ...place, squarefootage: e.target.value })}
                        className="form-control"
                        id="squareFootage"
                        name="squareFootage"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        value={place.address}
                        onChange={e => setPlace({ ...place, address: e.target.value })}
                        className="form-control"
                        id="address"
                        name="address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        value={place.city}
                        onChange={e => setPlace({ ...place, city: e.target.value })}
                        className="form-control"
                        id="city"
                        name="city"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        value={place.state}
                        onChange={e => setPlace({ ...place, state: e.target.value })}
                        className="form-control"
                        id="state"
                        name="state"
                    />
                </div>
                <input className="btn btn-primary" type="submit" value="Save" />
            </form>
        </main>
    )
}

export default EditPlaceForm