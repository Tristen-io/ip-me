import React from 'react'
import {
    interaction, layer, custom, control,
    Interactions, Overlays, Controls,
    Map, Layers, Overlay, Util
} from "react-openlayers";


const MapComponent = () => {
    return (
    <div className="">
        <Map view={{center:[0,0], zoom:2}}>
            <Layers>
                <layer.Tile></layer.Tile>
            </Layers>
        </Map>
    </div>
  )
}

export default MapComponent