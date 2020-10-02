<template>
  <div class="row">
    <h1>IPL STADIUMS WORLDWIDE</h1>

    <div class="row">
      <gmap-map
        :center="center"
        :zoom="1"
        map-type-id="terrain"
        v-bind:options="mapStyle"
        style="width: 1000px; height: 450px; object-fit:fill"
      >
        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
        ></gmap-info-window>
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="toggleInfoWindow(m,index)"
        />
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: "",
        maxWidth: 200,
        pixelOffset: {
          width: 0,
          height: -50,
        },
      },
      mapStyle: {
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#212121",
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#212121",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "poi.business",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#181818",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1b1b1b",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#2c2c2c",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8a8a8a",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#373737",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#3c3c3c",
              },
            ],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
              {
                color: "#4e4e4e",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#3d3d3d",
              },
            ],
          },
        ],
      },
      center: {
        lat: 20.5937,
        lng: 78.9629,
      },
      markers: [
        {
          position: {
            lat: 17.4066,
            lng: 78.5505,
          },
          infoText: "Rajiv Gandhi International Stadium, Uppal",
        },
        {
          position: {
            lat: 20.7197,
            lng: 70.983994,
          },
          infoText: "Maharashtra Cricket Association Stadium",
        },
        {
          position: {
            lat: "Holkar Cricket Stadium",
            lng: 22.362855865555503,
          },
          infoText: "Saurashtra Cricket Association Stadium",
        },
        {
          position: {
            lat: 12.9739461042,
            lng: 77.5930642944,
          },
          infoText: "M Chinnaswamy Stadium",
        },
        {
          position: {
            lat: 18.9366795866,
            lng: 72.8220967116,
          },
          infoText: "Wankhede Stadium",
        },
        {
          position: {
            lat: 22.558664432,
            lng: 88.339331976,
          },
          infoText: "Eden Gardens",
        },
        {
          position: {
            lat: 28.635997456,
            lng: 77.23916571,
          },
          infoText: "Feroz Shah Kotla",
        },
        {
          position: {
            lat: 30.6878455819,
            lng: 76.7356853906,
          },
          infoText: "Punjab Cricket Association IS Bindra Stadium, Mohali",
        },
        {
          position: {
            lat: 28.558899,
            lng: 77.202805,
          },
          infoText: "Green Park",
        },
        {
          position: {
            lat: 20.6878455819,
            lng: 70.7356853906,
          },
          infoText: "Punjab Cricket Association Stadium, Mohali",
        },
        {
          position: {
            lat: 26.8897481077,
            lng: 75.8019317923,
          },
          infoText: "Sawai Mansingh Stadium",
        },
        {
          position: {
            lat: 13.057666436,
            lng: 80.274332236,
          },
          infoText: "MA Chidambaram Stadium, Chepauk",
        },
        {
          position: {
            lat: 19.038499846,
            lng: 73.022666576,
          },
          infoText: "Dr DY Patil Sports Academy",
        },
        {
          position: {
            lat: 53.767735,
            lng: -0.368377,
          },
          infoText: "Newlands",
        },
        {
          position: {
            lat: 52.809,
            lng: -1.756,
          },
          infoText: "St George's Park",
        },
        {
          position: {
            lat: -29.8500315999,
            lng: 31.0233549066,
          },
          infoText: "Kingsmead",
        },
        {
          position: {
            lat: -25.8559449095,
            lng: 28.1905575711,
          },
          infoText: "SuperSport Park",
        },
        {
          position: {
            lat: 35.985512,
            lng: -92.757652,
          },
          infoText: "Buffalo Park",
        },
        {
          position: {
            lat: -26.1314,
            lng: 28.0571,
          },
          infoText: "New Wanderers Stadium",
        },
        {
          position: {
            lat: -28.7387887115,
            lng: 24.7919634988,
          },
          infoText: "De Beers Diamond Oval",
        },
        {
          position: {
            lat: -29.087217,
            lng: 26.154898,
          },
          infoText: "OUTsurance Oval",
        },
        {
          position: {
            lat: 18.9311,
            lng: 72.8244,
          },
          infoText: "Brabourne Stadium",
        },
        {
          position: {
            lat: 23.08833298,
            lng: 72.591830966,
          },
          infoText: "Sardar Patel Stadium, Motera",
        },
        {
          position: {
            lat: 20.475331432,
            lng: 85.867829862,
          },
          infoText: "Barabati Stadium",
        },
        {
          position: {
            lat: 21.0081433008,
            lng: 79.0370948516,
          },
          infoText: "Vidarbha Cricket Association Stadium, Jamtha",
        },
        {
          position: {
            lat: 32.1976,
            lng: 76.3259,
          },
          infoText: "Himachal Pradesh Cricket Association Stadium",
        },
        {
          position: {
            lat: 28.582873,
            lng: 77.23438,
          },
          infoText: "Nehru Stadium",
        },
        {
          position: {
            lat: 17.7917451663,
            lng: 83.351165262,
          },
          infoText: "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
        },
        {
          position: {
            lat: 18.6745,
            lng: 73.7064,
          },
          infoText: "Subrata Roy Sahara Stadium",
        },
        {
          position: {
            lat: 28.59214,
            lng: 77.046051,
          },
          infoText: "JSCA International Stadium Complex",
        },
        {
          position: {
            lat: 24.391165102,
            lng: 54.537664516,
          },
          infoText: "Sheikh Zayed Stadium",
        },
        {
          position: {
            lat: 25.3251586994,
            lng: 55.419238323,
          },
          infoText: "Sharjah Cricket Stadium",
        },
        {
          position: {
            lat: 25.041333168,
            lng: 55.217999128,
          },
          infoText: "Dubai International Cricket Stadium",
        },
      ],
    };
  },

  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
};
</script>

<style scoped>
div {
  background: #000000;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  border-radius: 30px;
}

h1 {
  padding: 10px 10px;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 35px;
  }
}
@media (max-width: 1200px) {
  h1 {
    font-size: 25px;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
}
@media (max-width: 430px) {
  h1 {
    font-size: 20px;
  }
}
</style>


   