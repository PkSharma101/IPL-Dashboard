<template>
  <div class="row">
      <div class="col-12 chart-wrapper">
        <apexchart v-if="loaded" width="800" height="400" type="bar" :options="O1" :series="S1"></apexchart>
      </div>
  </div>
  
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loaded: false,
      O1: null,
      S1: null,
    };
  },
  async created() {
    let response2 = require("../../static/team.json");
    let team = response2.teaminfo;

    this.O1 = {
      title: {
        text: "Total matches won in IPL history",
        align: "center",
        floating: false,
        style: {
          fontSize: "19px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
      },
      xaxis: {
        categories: [],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
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

      colors: [
        "#EA5455",
        "#DF5560",
        "#D5566C",
        "#CA5778",
        "#C05884",
        "#B55990",
        "#AB5B9C",
        "#A15CA7",
        "#965DB3",
        "#8C5EBF",
        "#815FCB",
        "#7760D7",
        "#6D62E3",
        "#6e62eb",
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
          distributed: true,
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
            "#EA5455",
            "#DF5560",
            "#D5566C",
            "#CA5778",
            "#C05884",
            "#B55990",
            "#AB5B9C",
            "#A15CA7",
            "#965DB3",
            "#8C5EBF",
            "#815FCB",
            "#7760D7",
            "#6D62E3",
            "#6e62eb",
          ],
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
     
     chart: {
      toolbar:{
        show:false
      },
     },
      
      responsive: [ {breakpoint: 768,
        options:{
          chart: {
            width: "310px",
            height: "400px"
          },
        },
          title: {
            size: {
              fontSize: "10px",
            }
          }

        

      },
       {breakpoint: 992,
        options:{
          chart: {
            width: "600px",
            height: "400px"
          },

        }

      },
      ]
    };

    this.S1 = [
      {
        name: "Wins",
        data: [],
      },
    ];

    team.forEach((t) => {
      this.O1.xaxis.categories.push(t.team);
      this.S1[0].data.push(t.match);
    });

    this.loaded = true;
  },
};
</script>

<style scoped>
.chart-wrapper {
  background: #000000;
  
  display: flex;
  align-items: center;
  justify-content: center;
 padding: 20px 20px;
  border-radius: 30px;
}

@media(min-width: 1200px)
{
  h1{
    font-size: 30px;
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
    font-size: 13px;
  }
}



</style>