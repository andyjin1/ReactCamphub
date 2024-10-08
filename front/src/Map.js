import GoogleMapReact from "google-map-react"
import {useState} from "react"
// maps
const Maps = ({latlng, zoom}) =>{
    // {lat:0,lng:0}

    const [inLatLng, setLatLng] = useState(latlng)
    const [inZoom, setZoom] = useState(zoom)
    const [key] = useState("AIzaSyBYuDfS0EeRyKjYDi5xeWJG4aSG_KJsDP0")
    return(
        <div style={{height:'300px'}}>
            
            <GoogleMapReact
                bootstrapURLKeys={{key}}
                center={inLatLng}
                defaultZoom = {inZoom}
            >
            
            <ReactMapPointComponent
                lat={inLatLng.lat}
                lng={inLatLng.lng}
                text="my marker"

            />
            </GoogleMapReact>


        </div>
    )

}

const ReactMapPointComponent = () =>{
    const markerStyle={
        border:'1px solid white',
        borderRadius: '50%',
        height:10,
        width:10,
        backgroundColor:'red',
        cursor:'pointer',
        zInder: 10
    }
    return(

        <div style={markerStyle}/>
    )
}
export default Maps