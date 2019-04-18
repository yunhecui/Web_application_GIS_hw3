
mapboxgl.accessToken = 'pk.eyJ1IjoieXVuaGVjdWkiLCJhIjoiY2p1NDhncHp3MGJwNTQ1bnd5aTEyODdxNCJ9.8XO2bpiop4ue0tLtzDbcig';
var map = new mapboxgl.Map({
container: 'mapContainer',
style: 'mapbox://styles/mapbox/streets-v9',
center: [-95, 35],
zoom: 1,
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


map.on('load', function() {
 map.addLayer({
    'id': 'immi population',
    'source': {
      type: 'vector',
      url: 'mapbox://yunhecui.dl0osnql'},
    'source-layer' : 'world_border-dvzyjk',
    'type': 'fill',
    'paint': {
      'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'POP2005'],
          0, '#F2F12D',
          100000, '#EED322',
          1000000, '#E6B71E',
          5000000, '#DA9C20',
          10000000, '#CA8323',
          50000000, '#B86B25',
          100000000, '#A25626',
          500000000, '#8B4225',
          1000000000, '#723122'
        ],
        'fill-opacity': 1
      }

    });
});


var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Welcome to the library location map!');


libDemo.forEach(function(libraryBio) {

  new mapboxgl.Marker({
    color: 'green',
    size: 'small'
  })
    .setLngLat([libraryBio.long, libraryBio.lat])
    .setPopup(new mapboxgl.Popup({ offset: 5 })
    .setText(`library name is: ${libraryBio.name}; Contact: ${libraryBio.phone}`))
    .addTo(map);
})
