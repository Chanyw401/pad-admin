<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'抑郁症',nameEn:'depression'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat  :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                抑郁症是一种常见的心理健康问题，也被称为临床抑郁症或抑郁性障碍。它是一种持续的心境障碍，导致患者感到持久的悲伤、消极、丧失兴趣或喜悦感的情绪。抑郁症不仅会影响情绪，还可能对患者的思维、行为、身体健康和社交功能产生负面影响。

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
                关注自己的身体健康，保持规律的睡眠和饮食习惯，进行适度的体育锻炼。这些生活方式的改变可以提升身心健康，并有助于缓解抑郁症状。

            </div>
            <footer-box :data="'32'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import ProductionBeat from "components/common/production-beat.vue";

export default {
    components: {ProductionBeat, FooterBox, HeaderTow},
    name:'page32',
    data() {
        return {




            tableList:[
                {name: " 罗氏菌属 Roseburia",value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'芽孢杆菌属 Bacillus',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'粪球菌属 Coprococcus',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'粪杆菌属 Faecalibacterium',value:'59.545%',value2:0.1914-14.598,state: 2},
            ],
            list:[{   name:'抑郁症',
                num:50,
                type:1}]



        }
    },
    created() {
        this.$axios.post('/admin/report/disease-bacterual',{diseaseName:'抑郁症'}).then(res=>{
            this.tableList = res
            console.log(res,'111')
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

