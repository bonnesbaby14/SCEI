<template>
  <div class="main">
    <div class="content">
      <div class="contentLeft">
        <div class="text">
          <h1>SCEI</h1>
          <hr />
          <h3>Sistema de control de egresos e ingresos</h3>
        </div>
        
      </div>
      <div class="contentRight">
        <img src="/images/home2.jpg" class="imageHome" />
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      data: "hello",
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 1 0 auto;
  background-color: #2d3c45;

  align-items: center;
}
.content {
  margin-top: 50px;
  width: 80%;
  height: 80%;
  background: rgb(23, 41, 131);
  background: linear-gradient(
    90deg,
    rgba(23, 41, 131, 0.969625350140056) 50%,
    rgba(2, 33, 182, 1) 100%
  );
  border-radius: 10px;
  outline: 5px solid rgb(35, 35, 212);
  outline-offset: 10px;
  display: flex;
  flex-direction: row;
}
.contentLeft {
  height: 100%;
  width: 70%;
  color: white;
  text-align: center;
  /* background-color: red; */
  padding: 20px;
  padding-top: 70px;
  font-family: "Jura", sans-serif;
  display: flex;
  flex-direction: column;
}
.contentRight {
  height: 100%;
  width: 30%;
  /* background-color: green; */
}
.contentLeft .text hr {
  width: 70%;
  color: white;
  border-top: 3px solid rgb(255, 255, 255);
  margin: auto;
}
.contentLeft .text h1 {
  font-size: 6rem;
}
.text {
  height: 40%;
}
.imageHome {

  height: 100%;
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
    object-fit: none;
}
</style>