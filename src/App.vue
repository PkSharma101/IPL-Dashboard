<template>
  <div class="container">
    <Intro />
    <Timeline />
    <Charts1 />
    <News />
    <Charts2/>
    
      <Teams />
    
      <Seasons />
    
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import News from "./components/News.vue";
import Teams from "./components/Teams.vue";
import Seasons from "./components/Seasons.vue";
import Timeline from "./components/Timeline.vue";
import Charts1 from "./components/Charts1.vue";
import Charts2 from "./components/Charts2.vue";

export default {
  name: "App",
  components: {
    Charts1,
    Charts2,
    Intro,
    News,
    Teams,
    Seasons,
    Timeline,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap");
html,
body {
  background: #292929;
  height: 100%;
  margin: 0;
  padding: 0;
}

.row {
   margin-right: auto;
  margin-left:auto;
  align-content: center;
  justify-content: center;
  width: 100%;
  margin-top:10px;
  margin-bottom: 10px;
}

.col-lg-9, .col-12 , .col-lg-3{
  padding: 0px 0px;
  align-items: center;
  justify-content: center;
  background: #292929;
  width: 100%;
  border-radius: 30px;
}





.container {
  align-items: center;
  justify-content: center;
  padding: 0px;
  font-family: "IBM Plex Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7367f0;
  margin-top: 40px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}


</style>
