<template>
  <div class="main">
    <div class="content">

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
  height: 92%;
  width: 100%;
  flex: 1 0 auto;
  background-color: #2D3C45;


  align-items: center;
}
.content{
  margin-top: 70px;
  width: 85%;
  height: 70%;
  background-color: blue;
  border-radius: 10px;
 

}
</style>