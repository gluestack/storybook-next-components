import React, { useEffect, useState, useRef } from 'react';
import { Box, View, Text } from '@gluestack-ui/themed';
// import Constants from 'expo-constants';
// import { ViewProps } from 'react-native';
// const GOOGLE_MAPS_API_KEY = Constants?.manifest?.extra?.GOOGLE_MAPS_API_KEY;
// const MAP_SCRIPT_WITH_API_KEY = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;

export default function Map() {
  // const [mapLoaded, setMapLoaded] = useState(false);

  // const mapContainerRef = useRef<ViewProps>(null);

  // useEffect(() => {
  //   if (!document.body.dataset.mapLoaded) {
  //     const mapScript = document.createElement('script');
  //     mapScript.src = MAP_SCRIPT_WITH_API_KEY;
  //     mapScript.onload = () => {
  //       document.body.dataset.mapLoaded = 'true';
  //       setMapLoaded(true);
  //     };
  //     document.head.appendChild(mapScript);
  //   } else {
  //     setMapLoaded(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (mapLoaded) {
  //     new window.google.maps.Map(mapContainerRef.current as any, {
  //       zoom: 16.5,
  //       mapTypeId: 'terrain',
  //       center: { lat: 12.90805437167937, lng: 77.60180353953143 },
  //       zoomControl: false,
  //       fullscreenControl: false,
  //     });
  //   }
  // }, [mapLoaded]);
 return <View w={754} h={594} bg="$green600" />;
    return (
      <Box
        bg="$backgroundLight200"
        flex={1}
        alignItems="center"
        justifyContent="center"
        sx={{ _dark: { bg: '$backgroundDark700' } }}
      >
        <Text fontSize="$lg"> Loading...</Text>
      </Box>
    );
}
