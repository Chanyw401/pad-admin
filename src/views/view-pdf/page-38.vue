<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'自体免疫疾病',nameEn:'Autoimmune disease'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat  :isMultiply="true"  :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                自体免疫病指主要侵犯关节、肌肉、骨骼及关节周围的软组织，如肌腱、韧带、滑囊、筋膜等部位的疾病。自体免疫病是一类由免疫系统异常攻击身体自身组织和器官的疾病。通常情况下，免疫系统的功能是识别和攻击入侵的病原体，以保护身体免受感染。然而，在自体免疫病中，免疫系统错误地将身体自身的组织和器官视为外来物质，因此发起攻击。
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
                应加强锻炼，增强身体素质，尤其应避免运动出汗后吹风，注意身体保暖拒绝主动吸烟 及被动吸烟，避免暴露于烟草环境。保持轻松愉快的心情，避免精神过度紧张或心理压 力过大。预防病毒感染，尽早接种疫并保持良好的生活习惯，戒烟限酒，清淡饮食。

            </div>
            <footer-box :data="'38'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page38',
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
                this.list = val.filter(e=>e.name == '自体免疫疾病')
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.$axios.post('/admin/report/disease-bacterual',{diseaseName:'自体免疫疾病',   sampleid:this.$route.query.sampleid}).then(res=>{
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

