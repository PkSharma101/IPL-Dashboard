<template>
  <div class="row">
    <div class="col-2 offset-lg-1 col-lg-2" style="margin-top:auto; margin-bottom:auto;">
      <img alt="Vue logo" src="../assets/ipl.png" />
    </div>

    <div class="col-7 col-lg-7" style="margin-top:auto; margin-bottom:auto;">
      <h1>INDIAN PREMIERE LEAGUE</h1>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap");

img {
  width: 70px;
  max-width: 100%;
  height: auto;
  border-radius: 30px;
  margin: auto;
}

.row {
  margin-right: auto;
  margin-left:auto;
  margin-top: 10px;
  margin-bottom:10px;
  font-family: "IBM Plex Sans", sans-serif;
  align-content: center;
  justify-content: center;
  background: black;
  width: 100%;
  border-radius: 30px;
}

h1 {
  color: white;
  text-shadow: 4px 4px 10px rgb(247, 138, 156);
  margin-top: auto;
  margin-bottom: auto;
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
    font-size: 18px;
  }
}


</style>