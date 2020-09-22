<script>
function LightenDarkenColor(colorCode, amount) {
  var usePound = false;

  if (colorCode[0] == "#") {
    colorCode = colorCode.slice(1);
    usePound = true;
  }

  var num = parseInt(colorCode, 16);

  var r = (num >> 16) + amount;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  var b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  var g = (num & 0x0000ff) + amount;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
export default {
  name: "modal1",
  data() {
    return {};
  },
  props: ["modalData1"],
  methods: {
    close() {
      this.$emit("close");
    },
  }
}
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        @click.stop
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
          <h1 style="color:white;"> Season: {{ modalData1.year }} </h1>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="row">
              <div class="col-6">

          <h1>Winner</h1>
         
          <img :src="modalData1.winner.image">
              </div>
              <div class="col-6">
          <h1>Runner-up</h1>
          
             <img :src="modalData1.winner.image2">
              </div>
            </div>
            <br>
          <h1>Most Valuable Player</h1>
         <h3> {{modalData1.max_pom}} </h3>
         <br>
            <h1 style="color:orange">Orange Cap </h1>
         <h3> {{modalData1.orange_cap}} </h3>
         <br>
          <h1 style="color:purple">Purple Cap</h1>
         <h3> {{modalData1.purple_cap}} </h3>
         <br>
          <h1>Maximum matches umpired by</h1>
          <span v-for="i in modalData1.max_umpired" v-bind:key="i">
         <h3> {{i}} </h3>
          </span>
        
          

          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-1"
              @click="close"
              aria-label="Close modal"
            >Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
h1{
  color: #A88BEB;
}
img {
  height: 100px;
  widows: 100px;
}
.modal-backdrop {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  top: auto;
  left: auto;
  background: #000000;
  box-shadow: 2px 2px 20px 1px rgb(53, 52, 52);
  height: 70%;
  width: auto;
  display: block;
  overflow: scroll;
  flex-direction: column;
  justify-content: center;
  color: white;
}
::-webkit-scrollbar {
       display: none; }

.modal-header,
.modal-footer {
  align-items: center;
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #424040;
  color: #A88BEB;
  justify-content: center;
}

.modal-footer {
  border-top: 1px solid  #424040;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #A88BEB;
  background: transparent;
}

.btn-1 {
  color: white;
  background: linear-gradient(#B621FE,#A15CA7);
  padding:10px;
  border-radius: 2px;
}


</style>