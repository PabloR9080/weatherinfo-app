import { useEffect, useState } from 'react';

interface LocationData{
    lat: number;
    lon: number;
  };
  
type useDataLocation = [LocationData, Boolean, Boolean];

export const useLocation = (): useDataLocation => {
  const [data, setData] = useState({lat:0, lon:0});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    (async () => {
      const options: PositionOptions = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      };

      function success(pos: GeolocationPosition) {
        setIsLoading(false);

        setData({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      }

      function error(_: GeolocationPositionError) {
        setIsLoading(false);
        setIsError(true);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    })();
  }, []);

  return [data, isLoading, isError];
};