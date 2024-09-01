import React, { useEffect } from 'react';

const GoogleMap = () => {

  useEffect(() => {
    const initMap = () => {
      // Create a new map centered on Cisco's U.S. location
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.3349, lng: -121.8881 }, 
        zoom: 14, // You can adjust the zoom level as needed
      });

      // Add a marker to Cisco's location
      new window.google.maps.Marker({
        position: { lat: 37.3349, lng: -121.8881 }, 
        map: map,
        title: "Cisco Systems, Inc.",
      });
    };

    // Initialize the map
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=#&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.addEventListener('load', initMap);
    } else {
      initMap();
    }
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Our Location</h2>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default GoogleMap;
