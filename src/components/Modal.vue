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
  name: "modal",
  data() {
    return {};
  },
  props: ["modalData"],
  methods: {
    close() {
      this.$emit("close");
    },
    loaded(modelData) {
      let c = modelData.bar;
      this.O1 = {
         title: {
        text: "Match Statistics",
        align: "center",
        floating: false,
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
      },
        xaxis: {
          categories: [
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
          ],
          labels: {
            style: {
              colors: [
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ],
            },
          },
        },

        yaxis: {
          labels: {
            style: {
              colors: [
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ],
            },
          },
        },

       legend: {
        show: true,
        labels: {
          colors: ["#fff"],
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      tooltip: {
       
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        }
      },
      

        colors: [
          LightenDarkenColor(c, 50),
          LightenDarkenColor(c, 100),
          LightenDarkenColor(c, 200),
        ],

        grid: {
          show: false,
          row: {
            color: ["#000000"],
          },
        },

        plotOptions: {
          bar: {
            startingShape: "rounded",
            endingShape: "rounded",
            columnWidth: "40%",
            distributed: false,
            dataLabels: {
              position: "top",
            },
          },
        },

        dataLabels: {
          enabled: true,
          offsetY: -30,

          style: {
            colors: [
              LightenDarkenColor(c, 50),
              LightenDarkenColor(c, 100),
              LightenDarkenColor(c, 200),
            ],
          },
        },
       
      };

      this.S1 = [
        {
          name: "Matches",
          data: [],
        },
        {
          name: "Wins",
          data: [],
        },
        {
          name: "Lost",
          data: [],
        },
      ];

      modelData.matches.forEach((t) => {
        this.S1[0].data.push(t);
      });

      modelData.wins.forEach((t) => {
        this.S1[1].data.push(t);
      });

      modelData.lost.forEach((t) => {
        this.S1[2].data.push(t);
      });

      return true;
    },
  },
};
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
           <h2> {{modalData.team}} </h2>
            <span style=" color: #A88BEB; font-size: 100px;">
              <img src="gold.png" />
              {{modalData.trophy.first}}
              <img src="silver.png" />
              {{modalData.trophy.runner}}
            </span>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="chart-wrapper">
              <apexchart
                v-if="loaded(modalData)"
              
                height="300"
                type="bar"
                :options="O1"
                :series="S1"
              ></apexchart>
            </div>
            <h1> Matches Won: {{modalData.match}}</h1>
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
  align-items: center;
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
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #A88BEB;

}

.btn-1{
    padding: 10px;
  border-radius:10px;
   color: #fff;
  background: linear-gradient(135deg,#B621FE,#A15CA7);
}


</style>