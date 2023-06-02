<template>
  <div>
    <div class="car-box">
      <header-one :data="{name:'您的结果总览',nameEn:'OVERVIEW OF YOUR RESULT',No:'NO：BG202304172012',date:'报告生成：2023-04-17'}" />

      <div class="indicator-box" style="height: 50px;line-height: 50px" >
        <img src="@/assets/img/car-pdf/Indicator-thre.png" alt="">
      </div>

      <header-tow :data="{name:'主要营养评估',nameEn:'MAIN NUTRTIONAL ASSESSMENT'}"></header-tow>
      <production-beat :data="listInfo3" />


      <header-tow :data="{name:'睡眠压力及精神状态评估',nameEn:'SLEEP STRESS AND MENTAL STATE ASSSESSMENT'}"></header-tow>
      <production-beat :data="listInfo " />

      <footer-box :data="'04'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
// import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
  components: {FooterBox, ProductionBeat, HeaderOne, HeaderTow},
  name:'page4',
  data() {
    return {
      listInfo:[
        {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'有益菌',
          num:40,
          type:1
        },  {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'有益菌',
          num:40,
          type:1
        }, {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'菌群平衡',
          num:50,
          type:1
        },
      ],
      listInfo2:[
        {
          name:'菌群平衡',
          num:50,
          type:1
        },
      ],
      listInfo3:[
        {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
          num:31,
          type:1
        },
        {
          name:'有益菌',
          num:40,
          type:1
        }, {
          name:'菌群平衡',
          num:50,
          type:1
        },
        {
          name:'菌群多样性',
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

