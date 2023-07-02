<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'目',nameEn:'The Orders'}" />
            <div class="header-three" style="margin: 20px 0"> 检查结果</div>

            <div>
                <div class="theader">
                    <div style="width: 40%;text-align: center">名称</div>
                    <div style="width: 20%;text-align: center ">丰度%</div>
                    <div style="width: 40%;text-align:center">人群水平%</div>
                    <div style="width: 20%;text-align:center">%人检出</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div class="Table-name" style="width: 40%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 20%;text-align: center ">{{toFixed(item.value)}}%</div>
                        <div style="width: 40%;text-align:center;    padding-top: 9px;padding-right: 25px;">
                            <el-progress :percentage="Number(item.percent)" :stroke-width="8" color="#2E5CBB"></el-progress>
                        </div>
                        <div style="width: 20%;text-align: center">{{item.population}}
                        </div>
                    </div>
                </div>

            </div>
            <footer-box :data="'50'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page50',
    data() {
        return {
            tableList:[


            ],




        }
    },

    methods: {
        toFixed(num){
            return Number(num).toFixed(3)
        },
        getData(){
            this.$axios.post('/admin/report/bacter-details',{
                sampleid:'596908438',
                level:'目'
            }).then(res=>{
                this.tableList = []
                res.map((item,index)=>{
                    if(index<14){
                        this.tableList.push(item)
                    }
                })
            })
        },
    },
    created() {
        this.getData()
    }
}
</script>

<style scoped lang="scss">
.theader{
  width: 100%;
  display: flex;
  color: #ffffff;
  background: url(../../assets/img/car-pdf/car-content2-header.png) no-repeat;
  height: 45px;
  line-height: 45px;
  background-size: cover;
  border-radius: 4px;
  margin-bottom: 20px;
}
.t-body{
  width: 100%;
  margin-bottom: 40px;

  .item{
    display: flex;
    align-content: center;
    width: 100%;
    height: 45px;
    line-height: 45px;
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





</style>

