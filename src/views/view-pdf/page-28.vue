<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'甲状腺疾病',nameEn:'Thyroid disease'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat :isMultiply="true"   :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                甲状腺疾病是指影响甲状腺功能的各种疾病。甲状腺是位于颈部前方的一个腺体，它产生和释放甲状腺激素，对身体的新陈代谢、能量消耗、心脏功能和其他重要过程起着调节作用。包括甲亢、甲减，以及甲状腺肿瘤、甲状腺炎、甲状腺结节等。

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
                留意观察自己是否出现甲状腺相关的症状，如体重变化、疲劳、心悸、焦虑、皮肤干燥等。记录下症状的出现时间、频率和严重程度。保持良好的生活方式，包括饮食、睡眠、情绪管理等。
            </div>
            <footer-box :data="'28'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page28',
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
                this.list = val.filter(e=>e.name == '甲状腺疾病')
            },
            deep: true,
            immediate: true
        }
    },
    created() {
        this.$axios.post('/admin/report/disease-bacterual',{diseaseName:'甲状腺疾病',   sampleid:this.$route.query.sampleid}).then(res=>{
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

