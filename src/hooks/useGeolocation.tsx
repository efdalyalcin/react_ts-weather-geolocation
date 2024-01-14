import { useState, useEffect } from 'react';

type GeolocationDataT = {
  latitude: number;
  longitude: number;
  error: string | null;
};

const useGeolocation = (): GeolocationDataT => {
  const [geolocationData, setGeolocationData] = useState<GeolocationDataT>({
    latitude: 52.3983,
    longitude: 13.0609,
    error: null,
  });

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setGeolocationData({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => {
            setGeolocationData({
              ...geolocationData,
              error: `Error: ${error.message}`,
            });
          }
        );
      } else {
        setGeolocationData({
          ...geolocationData,
          error:
            'Geolocation is not supported by your browser. The data represents the HarvestAI headquarters.',
        });
      }
    };

    getLocation();
  }, []);

  return geolocationData;
};

export default useGeolocation;
