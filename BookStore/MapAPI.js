let map;

async function initMap() {
  //@ts-ignore
  console.log("UnderApi");
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: 47.21725, lng: -1.55336 },
    zoom: 8,
  });
  marker = new Marker({
    postion: { lat: 47.21, lng: -1.55 },
    map: map,
    label: "A",
  });
}
