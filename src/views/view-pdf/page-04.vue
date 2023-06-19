<template>
  <div>
    <div class="car-box">

      <header-tow :data="{name:'疾病风险分析',nameEn:'DISEASE RISK ASSESSMENT'}"></header-tow>
      <div class="indicator-box">
        <img src="@/assets/img/car-pdf/Indicator-one.png" alt="">

      </div>

      <div class="car-content3">
        <production-beat :data="listInfo" />

      </div>


      <footer-box :data="'04'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
// import HeaderOne from "@/components/pdf-common/header-one.vue";
// import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
  components: {FooterBox, ProductionBeat,  HeaderTow},
  name:'pageTwo',
  data() {
    return {
















     listInfo:[
       {
         name:'结直肠癌',
         num:50,
         type:1
       },
       {
         name:'炎症性肠病',
         num:31,
         type:1
       },
       {
         name:'肠易激综合征',
         num:40,
         type:1
       },
       {
         name:'感染型腹泻',
         num:50,
         type:1
       },
       {
         name:'胃病',
         num:50,
         type:1
       },
       {
         name:'胆病',
         num:31,
         type:1
       },
       {
         name:'肝病',
         num:40,
         type:1
       },
       {
         name:'心脑血管疾病',
         num:50,
         type:1
       },
       {
         name:'II型糖尿病',
         num:50,
         type:1
       },
       {
         name:'甲状腺疾病',
         num:31,
         type:1
       },
       {
         name:'肺部疾病',
         num:40,
         type:1
       },
       {
         name:'抑郁症',
         num:50,
         type:1
       },  {
         name:'自闭症',
         num:50,
         type:1
       },
       {
         name:'肾病',
         num:31,
         type:1
       },
       {
         name:'自体免疫疾病',
         num:40,
         type:1
       },
       {
         name:'认知障碍（老年痴呆预兆)',
         num:50,
         type:1
       }
     ]
    }
  },
}
</script>

<style scoped lang="scss">



</style>

