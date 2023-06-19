<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'胆病',nameEn:'Gallbladder disease'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                胆结石又称胆石症，是指胆道系统包括胆囊或胆管内发生结石的疾病;胆道感染是属于常见的疾病。按发病部位分为胆囊炎和胆管炎。结石在胆囊内形成后，可刺激胆囊黏膜，不仅可引起胆囊的慢性炎症，而且当结石嵌顿在胆囊颈部或胆囊管后，还可以引起继发感染，导致胆囊的急性炎症。胆囊炎是细菌性感染或化学性刺激(胆汁成分改变)引起的胆囊炎性病变，为胆囊的常见病。本病多见于35~55岁的中年人，男性发病较少，女性为多，尤多见于肥胖的妇女。胆囊炎应以预防为主，发病后应即时治疗。


            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                主要是腹痛，有时还会伴有恶心、呕吐等反应。慢性胆囊炎多数表现为胆源性消化不良，厌油腻食物、上腹部闷胀、嗳气、胃部灼热等，与溃疡病或慢性阑尾炎近似。
            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1、 Wu, Tao, et al. " Gut microbiota dysbiosis and bacterial community assembly associated with cholesterol gallstones in large-scale study. " BMC 14.1(2013):1 2. Ridlon, Jason M, et al." Bile acids and the gut microbiome'Current.
                <br/>2、Lam R, Zakko A, Petrov JC, Kumar P, Duffy AJ, Muniraj T. Gallbladder Disorders: A Comprehensive Review. Dis Mon. 2021;67(7):101130. doi:10.1016/j.disamonth.2021.101130.

            </div>
            <footer-box :data="'21'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page21',
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