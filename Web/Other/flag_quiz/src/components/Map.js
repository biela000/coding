import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from "react-simple-maps";
import "./css/map.css";

export default function Map(props) {
    return (
        <div className="map">
            <ComposableMap data-tip="">
                <ZoomableGroup zoom={1}>
                    {" "}
                    <Geographies geography={props.geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onClick={() =>
                                            props.handleClick(
                                                geo.properties.NAME
                                            )
                                        }
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
}
