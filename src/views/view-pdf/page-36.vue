<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'肾病',nameEn:'nephropathy'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat :isMultiply="true"   :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                肾病是指肾脏出现结构或功能异常的疾病，可以影响肾脏的滤过功能、尿液产生、排除废物和液体平衡等重要功能。肾脏是人体的重要器官之一，主要功能包括排除体内废物和过剩液体、维持体内电解质和酸碱平衡、产生荷尔蒙等。

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
                如确诊肾病，需控制血压、血糖和血脂水平，定期进行体检和监测以预防和管理慢性疾病，如高血压和糖尿病。遵医嘱正确使用药物，避免滥用非处方药和长期使用对肾脏有毒性的药物。必要时咨询医生，了解药物对肾脏的影响。

            </div>
            <footer-box :data="'36'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page36',
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
                this.list = val.filter(e=>e.name == '肾病')
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.$axios.post('/admin/report/disease-bacterual',{diseaseName:'肾病',   sampleid:this.$route.query.sampleid}).then(res=>{
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

