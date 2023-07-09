<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'肺部疾病',nameEn:'Pulmonary disease'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat :isMultiply="true"   :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                肺部疾病是指影响人体肺部结构和功能的各种疾病。包括慢性阻塞性肺疾病（COPD）、支气管哮喘、肺炎、肺结石、肺癌等。肺部还可能受到肺血栓栓塞症、肺动脉高压、肺纤维化、间质性肺病等其他疾病的影响。

            </div>
            <div>
                <div class="theader">
                    <div style="width: 35%;text-align: left;padding-left: 30px">菌名</div>
                    <div style="width: 20%;text-align: center ">检查结果</div>
                    <div style="width: 25%;text-align: center "> 正常范围</div>
                    <div style="width: 20%;text-align:center">对疾病有益/有害</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 35%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 20%;text-align: center ">{{item.value}}</div>
                        <div style="width: 25%;text-align:center;">
                            {{item.range}}
                        </div>
                        <div style="width: 20%;text-align: center ">
                            {{item.badgood }}
                        </div>

                    </div>
                </div>

            </div>
            <div class="header-point">建议</div>
            <div class="content-box2">
                注意饮食和相关疾病症状并了解相关疾病知识，及早预防。避免吸烟和暴露于雾霾环境。注意气候变化和流感等呼吸道传染病。

            </div>
            <footer-box :data="'30'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page30',
    data() {
            return {
            tableList:[

            ],
            list:[]



        }
    },
    props: {
        listInfo: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        listInfo: {
            handler(val) {
                this.list = val.filter(e=>e.name == '肺部疾病')
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.$axios.post('/admin/report/disease-bacterual',{diseaseName:'肺部疾病',   sampleid:this.$route.query.sampleid}).then(res=>{
            this.tableList = res

            this.tableList.map(i=>{
                i.value = Number(i.value).toFixed(4)
            })
        })
    },

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
.content-text{
  width: 100%;
  height: 168px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  padding: 20px;
  text-align: justify;
  margin-bottom: 25px;

  color: #254A96;
}
.content-box2{
  width: 100%;
  height: 93px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  color: #254A96;
  padding: 20px;
  div{
    padding: 10px 0 ;
  }
}





</style>

