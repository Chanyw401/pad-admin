<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'炎症性肠病',nameEn:'Inflammatory bowel disease'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat :isMultiply="true"  :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                炎症性肠病（inflammationboweldisease，IBD）是一种病因未明的肠道炎症性疾病，和普通肠炎有较大区别。普通肠炎一般是急性的，进行抗感染治疗后可以治愈。而IBD病程迁延，反复发作，目前仍无法治愈。近20年来，我国IBD发病率快速增长。病人一旦得病，诊断、治疗方面要花费大量的费用，这会给患者、家庭、社会带来巨大的负担，IBD也因此得名——绿色的癌症。
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
                <div>
                    ① &nbsp;&nbsp;&nbsp;保持良好心情能降低发病率和复发率。
                </div>
                <div>
                    ② &nbsp;&nbsp;&nbsp;    病原物感染也是一个极重要的发病因素，注意饮食卫生

                </div>

            </div>







            <footer-box :data="'12'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page12',
    data() {
        return {




            tableList:[
                {name:'拟杆菌属 Bacteroides',value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'双歧杆菌属Bifidobacterium',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'肠杆菌属 Enterobacter',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'克雷伯氏菌属 Klebsiella',value:'59.545%',value2:0.1914-14.598,state: 2},


            ],
            list:[{   name:'炎症性肠病',
                num:50,
                type:1}]



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
                this.list = val.filter(e=>e.name == '炎症性肠病')
            },
            deep: true
        }
    },
    created() {

            this.$axios.post('/admin/report/disease-bacterual',{diseaseName:'炎症性肠病',   sampleid:this.$route.query.sampleid}).then(res=>{
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

