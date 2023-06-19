<template>
  <div>
    <div class="car-box">
      <header-one :data="{name:'抗生素风险分析',nameEn:'Antibiotic risk analysis',No:'',date:''}" />

      <div class="indicator-box"
       >
        <img src="@/assets/img/car-pdf/Indicator-thre.png" alt="">
      </div>


      <production-beat :data="listInfo" />




      <footer-box :data="'06'"/>
    </div>

  </div>
</template>

<script>
// import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
  components: {FooterBox, ProductionBeat, HeaderOne},
  name:'page6',
  data() {
    return {









      listInfo:[
        {
          name:'β-内酰胺酶类',
          num:50,
          type:1
        },
        {
          name:'氨基糖苷类',
          num:31,
          type:1
        },
        {
          name:'大环内酯类',
          num:40,
          type:1
        },  {
          name:'呋喃类',
          num:50,
          type:1
        },
        {
          name:'喹诺酮类',
          num:31,
          type:1
        },
        {
          name:'磺胺类',
          num:40,
          type:1
        }, {
          name:'甲氧苄啶类',
          num:50,
          type:1
        },
        {
          name:'氯霉素类',
          num:31,
          type:1
        },
        {
          name:'四环素类',
          num:50,
          type:1
        },

      ],


    }
  },
}
</script>

<style scoped lang="scss">



</style>

