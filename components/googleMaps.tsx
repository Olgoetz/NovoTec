import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  DirectionsRenderer,
  InfoWindow,
} from "@react-google-maps/api";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Hourglass, Navigation } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [addressInfos, setAddressInfos] = useState({
    distance: "",
    duration: "",
  });
  const [startAddress, setStartAddress] = useState("");
  const [targetAddress, setTargetAddress] = useState(
    "Friedrich-Sertürner-Str. 18, 51377 Leverkusen"
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
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
          setAddressInfos({
            distance: result?.routes[0]?.legs[0]?.distance?.text || "",
            duration: result?.routes[0]?.legs[0]?.duration?.text || "",
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
          <p className="w-20">Start:</p>
          <Input
            type="text"
            value={startAddress}
            onChange={handleOnChangeStart}
          />
        </div>
        <div className="w-full flex items-center space-x-2">
          <p className="w-20">Ziel:</p>
          <Input
            type="text"
            value={targetAddress}
            onChange={handleOnChangeTarget}
          />
        </div>
        <div className="w-full">
          <Button
            type="submit"
            className="w-full bg-novo-red text-white"
            onClick={calculateDirections}
          >
            Route planen
          </Button>
        </div>
      </div>

      {addressInfos.distance && (
        <div className="flex my-4">
          <Hourglass size={24} className="mr-5" />
          <p>{addressInfos.duration}</p>
          <Navigation size={24} className="ml-5 mr-5" />
          <p>{addressInfos.distance}</p>
        </div>
      )}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 51.040023361961985, lng: 7.017935010509205 }}
        zoom={18}
      >
        <Marker
          position={{ lat: 51.040023361961985, lng: 7.017935010509205 }}
        />
        <InfoWindow position={{ lat: 51.04005, lng: 7.01794 }}>
          <div className="text-xs">
            <p className="font-bold">NovoTec GmbH & Co. KG</p>
            <p>Friedrich-Sertürner-Str. 18</p>
            <p>51377 Leverkusen</p>
          </div>
        </InfoWindow>
        {directions && <DirectionsRenderer options={{ directions }} />}
      </GoogleMap>
    </div>
  ) : null;
}

export default GoogleMaps;
