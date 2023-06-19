<template>
  <div>
    <div class="car-box">
      <header-tow :data="{name:'短链脂肪酸SCFA评估',nameEn:'EVALUATION OF SHORT CHAIN FATTY ACID SCFAS'}"></header-tow>

      <div class="indicator-box" >
        <img src="@/assets/img/car-pdf/Indicator-two.png" alt="">
      </div>
      <div class="car-content3">
        <production-beat :data="listInfo" />

      </div>
      <header-tow :data="{name:'睡眠压力及精神状态评估',nameEn:'SLEEP STRESS AND MENTAL STATE ASSSESSMENT'}"></header-tow>

      <div style="height: 150px;">
        <production-beat :data="listInfo2" />

      </div>

      <header-tow :data="{name:'主要消化道致病菌',nameEn:'Major digestive tract pathogens'}"></header-tow>
<!--      <production-beat :data="listInfo3" />-->
    <progress-box :data="listInfo3"/>


      <footer-box :data="'05'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
// import HeaderOne from "@/components/pdf-common/header-one.vue";
// import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import ProgressBox from "@/components/common/progress-box.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";


export default {
  components: {FooterBox, ProgressBox, ProductionBeat, HeaderTow},
  name:'pageThre',
  data() {
    return {
      listInfo:[
        {
          name:'乙酸',
          num:50,
          type:1
        },
        {
          name:'丙酸',
          num:31,
          type:1
        },
        {
          name:'丁酸',
          num:40,
          type:1
        },
      ],
      listInfo2:[
        {
          name:'肠道菌群血清素合成能力',
          num:50,
          type:1
        },
      ],

      listInfo3:[
        {
          name:'幽门螺旋杆菌',
          num:50,
          type:1
        },
        {
          name:'艰难梭菌',
          num:31,
          type:1
        },
        {
          name:'沙门氏菌',
          num:40,
          type:1
        }, {
          name:'志贺氏菌',
          num:50,
          type:1
        },
        {
          name:'弯曲杆菌',
          num:31,
          type:1
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">



</style>

