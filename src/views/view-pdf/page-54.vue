<template>
  <div>
    <div class="car-box">
      <header-one :data="{name:'营养代谢评估',nameEn:'Nutritional metabolism assessment',No:'',date:''}" />

      <div class="indicator-box" style="height: 50px;line-height: 50px" >
        <img src="@/assets/img/car-pdf/Indicator-thre.png" alt="">
      </div>

      <header-tow :data="{name:'主要营养评估',nameEn:'MAIN NUTRTIONAL ASSESSMENT'}"></header-tow>
      <production-beat :data="listInfo" />


      <header-tow :data="{name:'维生素评估',nameEn:'Vitamin evaluation'}"></header-tow>
      <production-beat :data="listInfo2 " />

      <footer-box :data="'54'"/>
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
  name:'page54',
  data() {
    return {
      listInfo:[],
      listInfo2:[

      ]
    }
  },
    created() {
      this.getData()
    },
    methods:{
      getData(){
        this.$axios.post('/admin/report/nutrition-zy',{
          sampleid:'596908438',
        }).then(res=>{
            let list =[]
            res.resultVos.map(i => {
                let type =0 // 0 为eroor 1 为正常
                let btnName = '缺乏'
                if(i.valueDecimal<5){
                    type = 0
                    btnName = '缺乏'
                }
                if(i.valueDecimal>= 5 && i.valueDecimal<15){
                    type = 0
                    btnName = '偏低'
                }
                if(i.valueDecimal>=15){
                    type = 1
                    btnName = '正常'
                }
                list.push({
                    num:i.valueDecimal.toFixed(2),
                    name:i.name,
                    type:type,
                    btnName:btnName
                })
            })
            this.listInfo = list


        })
          this.$axios.post('/admin/report/nutrition-ws',{
              sampleid:'596908438',
          }).then(res=>{
              console.log(res,54)
              let list =[]
              res.resultVos.map(i => {
                  let type =0 // 0 为eroor 1 为正常
                  let btnName = '缺乏'
                  if(i.valueDecimal<5){
                      type = 0
                      btnName = '缺乏'
                  }
                  if(i.valueDecimal>= 5 && i.valueDecimal<15){
                      type = 0
                      btnName = '偏低'
                  }
                  if(i.valueDecimal>=15){
                      type = 1
                      btnName = '正常'
                  }
                  list.push({
                      num:i.valueDecimal.toFixed(2),
                      name:i.name,
                      type:type,
                      btnName:btnName
                  })
              })
              this.listInfo2 = list


          })
      },
      }
}
</script>

<style scoped lang="scss">



</style>

