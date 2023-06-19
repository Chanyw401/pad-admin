<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'感染型腹泻',nameEn:'Infectious diarrhea'}"/>
            <div class="header-point">检测结果 </div>
            <production-beat  :data="list" />
            <div class="header-point">疾病描述 </div>
            <div class="content-text">
                感染型腹泻(Infective diarrhea)是由细菌、病毒或寄生虫等微生物感染引起的一种消化系统疾病。感染性腹泻（也称急性胃肠炎）系指各种病原体肠道感染而引起的腹泻。根据腹泻的持续时间长短，可将其分为急性（小于14天），持续性（14～29天）或慢性（≥30天）。病原体主要包括细菌、病毒、寄生虫和真菌等。其染病途径主要通过口部进入。发病机制为毒素和（或）病原体直接侵犯胃肠道黏膜而致病。
            </div>
            <div>
                <div class="theader">
                    <div style="width: 40%;text-align: left;padding-left: 30px">菌名</div>
                    <div style="width: 15%;text-align: center ">检查结果</div>
                    <div style="width: 25%;text-align: center "> 正常范围</div>
                    <div style="width: 20%;text-align:center">对疾病有益/有害</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 40%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 15%;text-align: center ">{{item.value}}</div>
                        <div style="width: 25%;text-align:center;">
                            {{item.value2}}
                        </div>
                        <div style="width: 20%;text-align: center ">
                            {{item.state == 0 ?'有益菌':'有害菌'}}
                        </div>

                    </div>
                </div>

            </div>
            <div class="header-point">建议</div>
            <div class="content-box2">
                治疗建议包括补充水分和电解质、饮食调整和必要时药物治疗。预防建议包括良好的个人卫生、饮用安全水源、食品安全、接种疫苗和旅行时采取预防措施。
            </div>
            <footer-box :data="'16'"/>
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
                {name: "弯曲杆菌属 Campylobacter",value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'艰难梭菌(C. difficile)',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'肠沙门氏菌(S. enterica)',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'埃希氏菌属 Escherichia',value:'59.545%',value2:0.1914-14.598,state: 2},


            ],
            list:[{   name:'感染型腹泻',
                num:50,
                type:1}]



        }
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

