<template>
    <div>
        <div class="car-box">
            <header-tow :data="{name:'心脑血管疾病',nameEn:'Cardiovascular and cerebrovascular diseases'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat  :isMultiply="true"  :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                心脑血管疾病（Cardiovascular Diseases，简称CVDs）是指影响心脏和血管系统的疾病，包括心脏病、高血压、中风、冠心病等。心脑血管疾病的发病原因多种多样，包括高血压、高血脂、吸烟、肥胖、缺乏运动、糖尿病、遗传因素和不良生活习惯等。

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
                1.健康饮食：采用均衡的饮食，限制不健康食物的摄入。
                <br/>2.控制体重：减轻超重或肥胖问题。
                <br/>3.戒烟：尽可能戒烟。
                <br/>4.适度运动：进行有氧运动。
                <br/>5.管理压力：学会应对压力和情绪。
                <br/>6.控制血压和血糖：严格控制血压和血糖水平。
                <br/>7.减少酒精摄入：限制酒精摄入量。

            </div>
            <footer-box :data="'24'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page16',
    data() {







        return {
            tableList:[

            ],
            list:[  ]



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
                this.list = val.filter(e=>e.name == '心脑血管疾病')
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.$axios.post('/admin/report/disease-bacterual',{diseaseName:'心脑血管疾病',   sampleid:this.$route.query.sampleid}).then(res=>{
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
  height: 120px;
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

