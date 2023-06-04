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

</style>
