<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'肠易激综合征',nameEn:'Irritable bowel syndrome'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                IBS分为腹泻型（IBS-D）、便秘型（IBS-C）、混合型（IBS-M）及不定型四种，通常在大便排空后腹痛会减轻。目前的研究认为，“菌-脑-肠”轴失调是IBS发病的主要因素。患者在压力大时症状往往会加剧恶化。其他潜在原因可能包括：
               <br/>胃肠道中菌群失调；
               <br/>肠壁通透性异常（漏肠综合征）；
               <br/>对食物敏感性的免疫反应

            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                IBS症状包括腹痛、腹胀、排便习惯改变（腹泻、便秘或交替出现）、粪便变化、粘液附着、食欲改变，可能伴有背部疼痛、头痛、疲劳、睡眠障碍等。这是一种功能性肠道紊乱，没有明显的结构异常或炎症，症状因个体差异而异。
            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1、Fond G, Loundou A, Hamdani N, et al. Anxiety and depression comorbidities in irritable bowel syndrome (IBS): a systematic review and meta-analysis. Eur Arch Psychiatry Clin Neurosci. 2014;264(8):651-660. doi:10.1007/s00406-014-0502-z.
                <br/>2、Bonetto S, Fagoonee S, Battaglia E, Grassini M, Saracco GM, Pellicano R. Recent advances in the treatment of irritable bowel syndrome. Pol Arch Intern Med. 2021;131(7-8):709-715. doi:10.20452/pamw.16067

            </div>
            <footer-box :data="'15'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page15',
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