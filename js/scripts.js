
mapboxgl.accessToken = 'pk.eyJ1IjoieXVuaGVjdWkiLCJhIjoiY2p1NDhncHp3MGJwNTQ1bnd5aTEyODdxNCJ9.8XO2bpiop4ue0tLtzDbcig';
var map = new mapboxgl.Map({
container: 'mapContainer',
style: 'mapbox://styles/mapbox/streets-v9',
center: [-95, 35],
zoom: 1.5,
});
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

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
