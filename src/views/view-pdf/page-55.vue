<template>
  <div>
    <div class="car-box">
      <header-tow :data="{name:'微量元素评估',nameEn:'MAIN NUTRTIONAL ASSESSMENT'}"></header-tow>

       <production-beat :data="listInfo" />

      <header-tow :data="{name:'氨基酸评估',nameEn:'MAIN NUTRTIONAL ASSESSMENT'}"></header-tow>
      <production-beat :data="listInfo2" />



      <footer-box :data="'55'"/>
    </div>

  </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
  components: {FooterBox, ProductionBeat, HeaderTow},
  name:'page55',
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
        },
      ],
      listInfo2:[
        {
          name:'菌群平衡',
          num:50,
          type:1
        },
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
    created() {
        this.getData()
    },
    methods:{
        getData(){
            this.$axios.post('/admin/report/nutrition-wl',{
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
            this.$axios.post('/admin/report/nutrition-ag',{
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

