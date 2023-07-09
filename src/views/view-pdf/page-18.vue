<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'胃病',nameEn:'gastropathy'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat  :isMultiply="true"  :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                胃病，实际上是许多病的统称。它们有相似的症状。临床上常见的胃病有急性胃炎、慢性胃炎、 胃溃疡、十二指肠溃疡、胃十二指肠复合溃疡、胃息肉、胃结石、胃的良 恶性肿瘤，还有胃粘膜脱垂症、急性胃扩张、幽门梗阻等
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
                建议三个月做一次检测可有效检测胃病风险以及变化。40岁以上人群是胃肠病的高发人群，应每年做一次胃肠健康检查。
            </div>
            <footer-box :data="'18'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page18',
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
                this.list = val.filter(e=>e.name == '胃病')
            },
            deep: true,
            immediate: true
        }
    },
    created() {

        this.$axios.post('/admin/report/disease-bacterual',{diseaseName:'胃病',   sampleid:this.$route.query.sampleid}).then(res=>{
            this.tableList = res
            this.tableList.map(i=>{
                i.value = Number(i.value).toFixed(4)
            })
        })
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

