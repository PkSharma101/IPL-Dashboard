<template>
  <div>
    <div class="row">
      <div class="box">
        <div class="col" style="margin-top:auto; margin-bottom:auto;">
          <h1>SEASONS</h1>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-6 col-lg-3" v-for="s in seasons" v-bind:key="s.year">
        <div class="card" style="background: #000">
          <button type="button" class="btn" @click="showModal(s)">
            <h2>Season {{ s.year }}</h2>
          </button>
        </div>
      </div>
    </div>
    <modal1 v-show="isModalVisible" @close="closeModal" v-bind:modalData1="modalData1" />
  </div>
</template>

<script>
import modal1 from "./Modal1.vue";
export default {
  components: {
    modal1,
  },
  data() {
    return {
      seasons: null,
      isModalVisible: false,
      modalData1: null,
    };
  },

  methods: {
    showModal(data) {
      this.modalData1 = data;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },

  created: function () {
    let data = require("../../static/seasons.json");
    this.seasons = data.seasoninfo;
  },
};
</script>


<style   scoped>
h2{
 font-size: 25px;
}
.row {
  justify-content: center;
  align-items: center;
}
.card {
  color: white;
  width: 200px;
  height: 100px;
  perspective: 1000px;
}
img {
  border-radius: 150px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.box {
  margin-top: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  background: #000;
  width: 100%;
  border-radius: 30px;
  padding: 10px 10px;
}

h1 {
  color: white;
  margin-top: auto;
  margin-bottom: auto;
}

h2 {
  padding: 10px 20px;
  color: white;
}

.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

::-webkit-scrollbar {
  display: none;
}

.card {
  width:200px;
  margin:20px 20px;
  align-items: center;
  justify-content: center;
  background: #000000;
  border-radius: 30px;
  display: flex;
  position: relative;
  border: 4px solid rgb(247, 112, 202);
  text-align: center;
  background-color: #2e2b2b;
}

@media screen and (max-width:992px)
{
  .card{
    width:250px;
    margin:20px 50px;
  }
}

@media screen and (max-width:600px)
{   .card{
   width:160px;
    margin:15px 15px;
}
}

@media screen and (max-width:370px)
{   .card{
   width:140px;
    margin:5px 5px;
}
}



</style>