import axios from "axios"
import { useState, useEffect } from "react"

export function Nasa() {

    const [marsObject, setMarsObject] = useState([])

    function loadData() {
        axios.get(
            "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
        )
        .then(response => {
            setMarsObject(response.data.photos)
        })
        .catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className="container-fluid">
            <h2>Space Object</h2>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo ID</th>
                        <th>Preview</th>
                        <th>Camera</th>
                        <th>Rover</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        marsObject.map(item => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <img 
                                        width="100" 
                                        height="100" 
                                        src={item.img_src} 
                                        alt="mars"
                                    />
                                </td>
                                <td>{item.camera.full_name}</td>
                                <td>{item.rover.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}