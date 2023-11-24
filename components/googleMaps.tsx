import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Hourglass, Navigation } from "lucide-react";

const containerStyle = {
  width: "w-full",
  height: "500px",
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  const onLoad = (map: google.maps.Map) => {
    // Handle map load event here if needed
    console.log("loaded");
  };

  const [directions, setDirections] = useState<any>(null);
  const [addressInfos, setAddressInfos] = useState<any>({
    distance: "",
    duration: "",
  });
  const [startAddress, setStartAddress] = useState<any>("");
  const [targetAddress, setTargetAddress] = useState<any>(
    "Walter-Meckauer-Str. 33a, 51067 Köln"
  );

  const handleOnChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartAddress(e.target.value);
  };
  const handleOnChangeTarget = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetAddress(e.target.value);
  };
  const calculateDirections = () => {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: startAddress,
        destination: targetAddress,
        travelMode: google.maps.TravelMode.DRIVING, // Change as needed
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);

          setAddressInfos({
            distance: result?.routes[0].legs[0].distance?.text,
            duration: result?.routes[0].legs[0].duration?.text,
          });
        } else {
          console.error(`Directions request failed with status: ${status}`);
        }
      }
    );
  };

  return isLoaded ? (
    <div>
      <div className="grid md:grid-cols-3 gap-3 items-center md:justify-between mb-4">
        <div className="flex items-center w-full space-x-2">
          <p className="w-20">Start: </p>

          <Input
            type="text"
            value={startAddress}
            onChange={handleOnChangeStart}
          />
        </div>
        <div className="w-full flex items-center space-x-2">
          <p className="w-20">Ziel: </p>
          <Input
            type="text"
            value={targetAddress}
            onChange={handleOnChangeTarget}
          />
        </div>

        <div className="w-full">
          <Button
            type="submit"
            name="calculate"
            className="w-full bg-novo-red text-white"
            onClick={calculateDirections}
          >
            Route planen
          </Button>
        </div>
      </div>

      <div className="flex">
        {addressInfos.distance !== "" && (
          <>
            <Hourglass size={24} className="mr-5" />
            <p>{addressInfos.duration}</p>
          </>
        )}
      </div>
      <div className="flex my-4">
        {addressInfos.distance !== "" && (
          <>
            <Navigation size={24} className="mr-5" />
            <p>{addressInfos.distance}</p>
          </>
        )}
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: 50.973138,
          lng: 7.052829,
        }}
        zoom={18}
        onLoad={onLoad}
      >
        <Marker
          position={{
            lat: 50.972969,
            lng: 7.052836,
          }}
          visible={true}
          clickable={false}
        />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default GoogleMaps;
