<template>
  <div>
    <div class="row">
      <div class="box">
        <div class="col" style="margin-top:auto; margin-bottom:auto;">
          <h1>TEAMS</h1>
        </div>
      </div>
    </div>
    <br />

    <div class="row">
      <div class="col-6 col-lg-3" v-for="t in va" v-bind:key="t.team">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front" style="background: linear-gradient(135deg,#B621FE,#A15CA7">
              <img :src="t.image" />
            </div>
            <div class="flip-card-back" style="background: #000;">
              <br>
              <div style="color:#39ff14; " v-if="t.status === 'Active' ">
                The team is currently : <h2> {{t.status}} </h2>
              </div>
               <div style="color:red; " v-if="t.status === 'Inactive' ">
                The team is currently : <h2> {{t.status}} </h2>
              </div>
              <button type="button" class="btn" @click="showModal(t)">See Highlights</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
       <modal v-show="isModalVisible" @close="closeModal" v-bind:modalData="modalData"/>


    
  </div>
</template>

<script>
import modal from "./Modal.vue";
export default {
  name: "Teams",
  components: {
    modal,
  },
  data() {
    return {
      va: null,
      isModalVisible: false,
      modalData: null
    };
  },

  methods: {
    showModal(data) {
      this.modalData = data
      this.isModalVisible = true

    },
    closeModal() {
      this.isModalVisible = false;
    },

    
  },

  

  created: function () {
    let data = require("../../static/team.json");
   

    this.va = data.teaminfo;

  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap");
h1{
color:white;
}


.row {
  align-items: center;
  justify-content: center;
}
img {
  border-radius: 0px;
  height: 150px;
  width: 150px;
}

.box {
  margin-top:20px;
  display: flex;
  align-content: center;
  justify-content: center;
  background: #000;
  width: 100%;
  border-radius: 30px;
  padding: 10px 10px;
}

.flip-card {
  padding-left:20px;
  background-color: transparent;
  width: 230px;
  height: 150px;
  perspective: 1000px;
}

.flip-card-inner {
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  margin:auto;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}

h1 {
  margin-top: auto;
  margin-bottom: auto;
}

h5 {
  font-family: "Josefin Sans", sans-serif;
  color: rgb(146, 145, 145);
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 10px;
}

h5:hover {
  color: whitesmoke;
}

.col-6 {
  margin-bottom: 20px;
}

@media screen and (max-width: 991px)
{
   .flip-card{
     width:300px;
     padding-left: 50px;
   }
}


@media screen and (max-width: 600px) {
  .col-6 {
    margin-bottom: 10px;
  }

  .flip-card{
    width: 180px;
     padding-left:5px;
  }
  img{
    height: 150px;
    width: 130px;
  }

}

@media screen and (max-width: 370px)
{
  .flip-card{
    width:150px;
    padding-left:10px;
  }

   h2{
    font-size:30px;
  }

  .flip-card-back{
    font-size: 12px;
  }
}

.btn {
    color: white;
    background: linear-gradient(135deg,#B621FE,#A15CA7);
    border: transparent;
    border-radius: 10px;
  }
</style>