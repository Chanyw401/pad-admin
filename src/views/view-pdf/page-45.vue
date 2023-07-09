<template>
    <div>
        <div class="car-box">
            <header-tow :data="{name:'病原菌',nameEn:'Pathogenic bacteria'}" />
            <div class="header-three" style="margin: 20px 0">检查结果</div>

            <div>
                <div class="theader">
                    <div class="Table-name" style="width: 50%;text-align: center">名称</div>
                    <div style="width: 20%;text-align: center ">丰度%</div>
                    <div style="width: 40%;text-align:center">人群水平%</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div class="Table-name" style="width: 50%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 20%;text-align: center ">{{item.value}}</div>
                        <div style="width: 40%;text-align:left;    padding-top: 9px;padding-right: 25px;">
                            <el-progress :percentage="item.population" :stroke-width="8" color="#2E5CBB"></el-progress>
                        </div>
                    </div>
                </div>

            </div>






            <footer-box :data="'45'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
// import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
// import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox,  HeaderTow},
    name:'page45',
    data() {
        return {
            tableList:[


            ]



        }
    },
    created() {
    this.getData()
    },
    methods:{
        getData(){
            this.$axios.post('/admin/report/abundance-all',
                {sampleid:this.$route.query.sampleid}
            ).then(
                res=>{
                    this.tableList=res.b4
                    this.tableList.map(i=>{
                        i.value=Number(i.value).toFixed(4)
                        //population 如果有%号去掉 再转化成数字
                        i.population=Number(i.population.replace('%',''))


                    })
                    console.log(res,'ress55555')
                }

            )
        },
    }
}
</script>

<style scoped lang="scss">
.theader{
  width: 100%;
  display: flex;
  color: #ffffff;
  background: url(../../assets/img/car-pdf/car-content2-header.png) no-repeat;
  height: 34px;
  line-height: 34px;
  background-size: cover;
  border-radius: 4px;
}
.t-body{
  width: 100%;

  .item{
    display: flex;
    align-content: center;
    width: 100%;
    height: 34px;
    line-height: 34px;
    color: #434F65;
    background: #e1e4ea;
    margin: 10px 0;
    border-radius: 4px;
    div{
    }
  }
  .item:nth-child(2n){
    background: rgba(37, 74, 150, .2);
  }

  ::v-deep.el-progress__text {
    color: #2E5CBB !important;
    font-size: 11px !important;
  }
}
.content-box{
  height: 200px;
  margin-bottom: 30px;
  .content-header{
    color: #1A356B;
    padding-bottom: 10px;

  }
  .content{
    height: 157px;
    background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
    border-radius: 6px 6px 6px 6px;
    padding: 20px;
    .content-item{
      height: 14px;
      font-size: 14px;
      color: #667995;
      margin-bottom: 10px ;
    }
    .content-item2{
      display: flex;
      height: 100px;
      align-items: center;
      justify-content: space-around;
      .item-btn{
        box-sizing: border-box;
        width: 144px;
        height: 48px;
        text-align: center;
        border: 1px dashed rgba(37, 74, 150, 1);
        color: rgba(37, 74, 150, 1);
        background: rgba(37, 74, 150, .1);
        border-radius: 51px 51px 51px 51px;
        padding-top: 5px;
      }
    }
    .content-foorter{
      display: flex;
      justify-content: flex-end;
      color: #667995;
      font-size: 10px;
      padding-right: 25px;
    }
  }

}
.content2-box{
  display: flex;
  width: 100%;
  height: 250px;
  align-items: center;
  .left{
    width: 50%;
    height: 100%;
    border-radius: 6px 0 0 6px;
  }
  .right{
    position: relative;
    width: 50%;
    height: 100%;
    background: #e1e4ea;
    border-radius: 0 6px 6px 0;
    .right-content{
      text-align: right;
    }
    .bacteria-bg{
      position: absolute;
      top: 53px;
      left: 50px;
    }
    .bacteria-text-bg{
      position: absolute;
      bottom: 50px;
      left: 50px;
    }
    .right-header{
      color: #6F7F9F;
      font-size: 25px;
    }

  }
}





</style>

