<template>
  <div class="car-header1">
    <div class="left">
      <div class="title">{{ data.name }}</div>
      <div class="title-en">{{ data.nameEn }}</div>
    </div>
    <div class="right">
      <div class="No">{{data.No}}</div>
      <div class="date" v-show="data.date !=''">{{ data.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerOne",
  props:{
    data:{
      type:Object,
      default:()=>{
        return {
          name:'姓名',
          nameEn:'Name',
          No:'编号',
          date:''
        }

      }
    }
  }

}
</script>

<style lang="scss" scoped>
.car-header1{
  position: relative;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  font-family: YouSheBiaoTiHei-Bold, YouSheBiaoTiHei;
  .left{
    .title{
      font-size: 48px;
      font-family: YouSheBiaoTiHei-Bold, YouSheBiaoTiHei;
      font-weight: 400;
      color: #1C2431;
      line-height: 25px;
    }
    .title-en {
      font-weight: 400;
      color: #6F7F9F;
      line-height: 26px;
      letter-spacing: 1px;
    }
  }
  .right{
    text-align: right;
    .NO{
      font-size: 14px;
      font-weight: bold;
      color: #1C2431;
    }
    .date{
      color: rgba(111, 127, 159, 1);
      font-size: 14px;
    }
  }
  &:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -25px;
    width: 100%;
    height: 14px;
    background: url("../../assets/img/car-pdf/header1-bg.png") no-repeat;
    background-size: cover;
  }

}

</style>
