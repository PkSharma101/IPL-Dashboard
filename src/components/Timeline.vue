<template>
  <div class="row justify-content-center align-items-center d-none d-md-block">

      
        <h1>HALL OF FAME: 2008-2017</h1>
      <br>
      
        <div class="timeline-wrapper clearfix">
          <div class="timeline-content-day">
            <div class="timeline-line"></div>
            <div class="timeline-content-item active" data-timeline="hour-8">
              <span>2008</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Rajasthan_Royals.png" />
                  <span>Rajasthan Royals</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item">
              <span>2009</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Deccan_Chargers.png" />
                  <span>Deccan Chargers</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item" data-timeline="hour-10">
              <span>2010</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Chennai_Super_Kings.png" />
                  <span>Chennai Super Kings</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item" data-timeline="hour-11">
              <span>2011</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Chennai_Super_Kings.png" />
                  <span>Chennai Super Kings</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item" data-timeline="hour-12">
              <span>2012</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Kolkata_Knight_Riders.png" />
                  <span>Kolkata Knight Riders</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item" data-timeline="hour-13">
              <span>2013</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Mumbai_Indians.png" />
                  <span>Mumbai Indians</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item" data-timeline="hour-14">
              <span>2014</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Kolkata_Knight_Riders.png" />
                  <span>Kolkata Knight Riders</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item" data-timeline="hour-15">
              <span>2015</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Mumbai_Indians.png" />
                  <span>Mumbai Indians</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item" data-timeline="hour-16">
              <span>2016</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Sunrisers_Hyderabad.png" />
                  <span>Sunrisers Hyderabad</span>
                </a>
              </div>
            </div>

            <div class="timeline-content-item" data-timeline="hour-17">
              <span>2017</span>
              <div class="timeline-content-item-reveal">
                <a href="#">
                  <img src="../../static/team-logo/Mumbai_Indians.png" />
                  <span>Mumbai Indians</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      
  
    
      
  
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap");

h1 {
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  text-shadow: 5px 5px 15px rgb(137, 137, 241);
}

img {
  max-width: 100%;
  height: auto;
  width: 250px;
}





.row {
   margin-right: auto;
  margin-left:auto;
  align-content: center;
  justify-content: center;
  background: linear-gradient(to right, rgb(53, 53, 53), #000);
  width: 100%;
  border-radius: 30px;
  margin-top:10px;
  margin-bottom: 10px;
}

.timeline-wrapper {

  padding: 0;
  display: block;
  width: 80%;
  height: 15rem;
  position: relative;
  color: #6e62eb;
  text-align: center;
  margin: auto;

  .timeline-line {
    display: block;
    width: 93.9%;
    height: 4px;
    background: linear-gradient(to right, #ea5455, #6e62eb);
    position: absolute;
    top: 50%;
    -webkit-box-shadow: 0 0 1px black;
    -moz-box-shadow: 0 0 1px black;
    box-shadow: 0 0 1px black;
    left: 3%;
    margin-left: 5px;
  }

  .timeline-content-day {
    height: 100%;
  }

  .timeline-content-item {
    width: 8%;
    display: inline-block;
    position: relative;
    height: 100%;
    
    -webkit-transition: width 0.5s;
    -moz-transition: width 0.5s;
    -o-transition: width 0.5s;
    transition: width 0.5s;
    z-index: 1;

    > span {
      color: white;
      height: 2rem;
      display: block;
      font-weight: bold;
      position: absolute;
      top: 50%;
      margin-top: -0.25em;
      width: 100%;
      text-shadow: 0 0 2px black;
      cursor: pointer;

      &:before {
        content: " ";
        display: block;
        width: 0.75em;
        height: 0.75em;
        background: #a5a4a4;
        margin: 0 auto 0.5em auto;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        -webkit-box-shadow: 0 0 1px black;
        -moz-box-shadow: 0 0 1px black;
        box-shadow: 0 0 1px black;
      }
    }

    .timeline-content-item-reveal {
      display: none;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -50%;
      width: 100%;

      a {
        display: block;
        width: 100%;
        height: 100%;
        color: white;

        img {
          position: relative;
          top: -60px;
          left: 0;
          bottom: 0;
          margin-bottom: 10px;

          right: 0;
          height: 80px;
          width: 80px;
          max-height: 100%;
          max-width: 100%;
          border: 3px transparent white;
        }

        span {
          position: absolute;
          width: 250%;
          margin-left: -75%;

          bottom: -2rem;
          left: 0;
          font-family: serif;
          font-size: 1.5em;
          font-style: italic;
          text-decoration: none;
          white-space: nowrap;
          color: white;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 1px black;
         
        }
      }
    }

    &.active {
      width: 10%;
      .timeline-content-item-reveal {
        display: block;
      }
    }
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 15px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  h1 {
    font-size: 25px;
  }
}
@media (min-width: 992px) {
  h1 {
    font-size: 30px;
  }
}
</style>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      seasons: null,
    };
  },

  mounted: function () {
    let response = require("../../static/seasons.json");
    this.seasons = response.seasoninfo;
    $(".timeline-wrapper .timeline-content-item > span").on(
      "mouseenter mouseleave",
      function (e) {
        $(".timeline-wrapper .timeline-content-item.active").removeClass(
          "active"
        );
        $(this).parent().addClass("active");
      }
    );
  },
};
</script>