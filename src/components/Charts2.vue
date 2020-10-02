<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-7">
      <div class="chart-wrapper">
        <apexchart
          v-if="loaded"
          width="450"
          height="390"
          type="area"
          :options="pvOptions"
          :series="pvSeries"
        ></apexchart>
      </div>
      </div>
      <div class="col-md-5">
      <div class="chart-wrapper">
        <apexchart type="donut" width="400" height="400" :options="chartOptions" :series="series"></apexchart>
      </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <carousel
          :per-page="1"
          :mouse-drag="false"
          :autoplay="true"
          :autoplayTimeout="3500"
          :loop="true"
          :paginationEnabled="false"
          style="  border-radius: 20px;
           background: linear-gradient(to right,#AD1DEB,#6E72FC);
            margin-top:20px; padding: 30px 0px;"
        >
          <slide v-for="fa in fact" :key="fa">
            <span class="car">{{fa.f}}</span>
          </slide>
        </carousel>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loaded: false,
      pvOptions: null,
      pvSeries: null,
      series: null,
      chartOptions: null,
      fact: null,
    };
  },
  
   async created() {
    let response = require("../../static/seasons.json");
    let season = response.seasoninfo;

    let response1 = require("../../static/facts.json");
    this.fact = response1.facts;

    this.pvOptions = {
       title: {
        text: "Probabilities after the teams won the toss in seasons",
        align: "center",
        floating: false,
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
       },
      xaxis: {
        categories: [],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
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

      yaxis:{
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

      stroke: {
        curve: "straight",
      },

      markers: {
        size: [4],
        colors: ["#FFB6C1",'#8326da'],
        strokeColors : ["#FFB6C1","#8326da"]

      },

      colors: ["#FFB6C1","#8326da" ],

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [0, 90, 100],
        },
      },

      grid: {
        show: false,
        row: {
          color: ["#000000"],
        },
      },

      dataLabels: {
        enabled: false,
      },

       legend: {
        show: true,
        labels: {
          colors: ["#fff"],
        },
       },
       tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        }
      },
        responsive: [ {
        breakpoint: 760,
        options:{
          chart: {
            width: "280px",
            height: "300px"
          },
        
        title:{
          style:{
            fontSize:'10px'
          }
        }
        }
      },
          
          {breakpoint: 992,
        options:{
          chart: {
            width: "400px",
            height: "300px"
          },
        
        title:{
          style:{
            fontSize:'15px'
          }
        }
        }
      },
        
      ],
      chart:{
         toolbar:{
         show: false
    },
      }
    };

    this.pvSeries = [
      {
        name: "Probability of Winning",
        data: [],
      },
      {
        name: "Probability of Losing",
        data: [],
      }
    ];

    this.series = [3, 2, 2, 1, 1, 1];
    this.chartOptions = {
      title: {
        text: "Winner Trophy share in IPL",
        align: "center",
        floating: false,
        style: {
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
       },
    
        labels: [
          "Mumbai Indians",
          "Chennai Super Kings",
          "Kolkata Knight Riders",
          "Rajasthan Royals",
          "Deccan Chargers",
          "Sunrisers Hyderabad",
        ],
      
      stroke: {
        show: false,
      },
      plotOptions: {
        pie: {
          startAngle: -45,
        },
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: "gradient",
      },

      colors: [
        "#FFB6C1",
        "#8B008B",
        "#A15CA7",
        "#8326da",
        "#EA5455",
        "#6e62eb"
      ],

      responsive: [ {breakpoint: 992,
        options:{
          chart: {
            width: "700px",
            height: "300px"
          }
        }
      },
        {
        breakpoint: 760,
        options:{
          chart: {
            width: "350px",
            height: "300px"
          }
        }
      },
      ],

      legend:{
        show:false
      }
    };

    season.forEach((pv) => {
      this.pvOptions.xaxis.categories.push(pv.year);
      this.pvSeries[0].data.push(pv.win_af_toss.win);
      this.pvSeries[1].data.push(pv.win_af_toss.lose)
    });

    this.loaded = true;
  },
  
};
</script>



<style scoped>
div.chart-wrapper {
  
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 20px 20px;
  
}

.col-md-7{
  margin-bottom: 10px;
}
.car {
  width: 100%;
  border-radius: 30px;
  color: white;
  font-size:20px;
}
</style>