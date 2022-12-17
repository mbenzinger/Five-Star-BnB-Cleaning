import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser";

function PlaceDetails() {

    const { placeId } = useParams()

    const history = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    const [place, setPlace] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/places/${placeId}`)
            const resData = await response.json()
            setPlace(resData)
        }
        fetchData()
    }, [placeId])

    if (place === null) {
        return <h1>Loading</h1>
    }

    function editPlace() {
        history.push(`/places/${place.placeId}/edit`)
    }

    async function deletePlace() {
        await fetch(`http://localhost:5000/places/${place.placeId}`, {
            method: 'DELETE'
        })
        history.push('/places')
    }

    let placeActions = null

    if (currentUser?.role === 'Property Owner') {
        placeActions = (
            <>
                <a className="btn btn-warning" onClick={editPlace}>
                    Edit
                </a>
                <button type="submit" className="btn btn-danger" onClick={deletePlace}>
                    Delete
                </button>
            </>
        )
    }

    return (
        <main>
            <div className="row">
                <div className="col-sm-6">
                    <img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
                    <h3>
                        Located in {place.city}, {place.state}
                    </h3>
                </div>
                <div className="col-sm-6">
                    <h1>{place.name}</h1>
                    <br />
                    <h2>
                        Description
                    </h2>
                    <h3>
                        {place.name} located in {place.city}, {place.state}.
                    </h3>
                    <br />
                    <a className="btn btn-warning" onClick={editPlace}>
                        Edit
                    </a>{` `}
                    <button type="submit" className="btn btn-danger" onClick={deletePlace}>
                        Delete
                    </button>
                </div>
            </div>
        </main>
    )
}

export default PlaceDetails