<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'感染型腹泻',nameEn:'Infectious diarrhea'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                包括由细菌性感染导致的腹泻，尤其是艰难梭菌感染导致的顽固性腹泻；诺如和轮状病毒导致的病毒性腹泻；由寄生虫如阿米巴原虫、疟原虫和血吸虫等引起的寄生虫性腹泻；菌群失调引起的腹泻。


            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                症状包括腹泻、呕吐、腹痛、发热和脱水。腹泻表现为排便次数增多、稀便，可能带有黏液、血液或脓液。呕吐、腹痛和发热常常伴随腹泻。持续腹泻和呕吐可能导致脱水，表现为口渴、口干、尿量减少、皮肤干燥等。其他可能的症状包括食欲不振、恶心、体重下降和全身不适。
            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1、Navaneethan U, Giannella RA. Mechanisms of infectious diarrhea. Nat Clin Pract Gastroenterol Hepatol. 2008;5(11):637-647. doi:10.1038/ncpgasthep1264.
                <br/>2、McClarren RL, Lynch B, Nyayapati N. Acute infectious diarrhea. Prim Care. 2011;38(3):539-ix. doi:10.1016/j.pop.2011.05.008.
                <br/> 3、Siciliano V, Nista EC, Rosà T, Brigida M, Franceschi F. Clinical Management of Infectious Diarrhea. Rev Recent Clin Trials. 2020;15(4):298-308. doi:10.2174/1574887115666200628144128.
            </div>
            <footer-box :data="'17'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page17',
    data() {
        return {
            tableList:[
                {name:'厚壁菌门 Firmicutes',value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'拟杆菌门 Bacteroidetes',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'变形菌门 Proteobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'放线菌门 Actinobacteria',value:'59.545%',value2:0.1914-14.598,state: 2},


            ],
            list:[{   name:'疾病名称',
                num:50,
                type:1}]



        }
    },
}
</script>

<style scoped lang="scss">
.header-point{
  font-size: 24px;
  font-weight: 400;
  color: #1A356B;
  line-height: 19px;
  letter-spacing: 1px;
  padding: 10px;
  position: relative;
  margin-bottom: 10px;
  &:before{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #2E5CBB;
    left: 0;
    top: 50%;
  }
}
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
.content-box{
  width: 100%;
  height: 180px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  padding: 20px;
  text-align: justify;

  color: #254A96;
}
.content-text{
  width: 100%;
  height: 168px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  padding: 20px;
  text-align: justify;

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
.content-header{
  color: #8989A3;
  font-size: 24px;
}
.content-literature{
  margin-top: 20px;
  font-size: 14px;
  font-family: Alibaba PuHuiTi 2.0-35 Thin, Alibaba PuHuiTi 20;
  font-weight: 250;
  color: #8989A3;
  line-height: 24px;
  word-wrap: break-word;
  text-align: justify;
}





</style>

f