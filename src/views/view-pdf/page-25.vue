<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'心脑血管疾病',nameEn:'Cardiovascular and cerebrovascular diseases'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                心脑血管疾病是心脏血管和脑血管疾病的统称，泛指由于高脂血症、血液黏稠、动脉粥样硬化、高血压等所导致的心脏、大脑及全身组织发生的缺血性或出血性疾病。


            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                心血管疾病的常见症状有：心悸、气短、端坐呼吸、夜间阵发性呼吸困难胸骨后的压迫性或紧缩性疼痛、胸闷不适、水肿、发绀、昏厥、咳嗽咯血虚弱、嗳气、上腹痛、恶心、呕吐、左后背痛、左手臂痛等。脑血管疾病的症状可有偏瘫、偏身感觉障碍、偏盲、失语，或者交叉性瘫痪、交叉性感觉障碍、外眼肌麻痹、眼球震颤、吞咽困难、共济失调、眩晕等。或肢体无力、麻木，面部、上下肢感觉障碍、单侧肢体运动不灵活；语言障碍，说话不利索、记忆力下降、看物体突然不清楚，或眼球转动不灵活、小便失禁、平衡能力失调，站立不稳、意识障碍；头痛或者恶心呕吐、头晕、耳鸣等。

            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1. Zhu Weifei et al. "Gut Microbial Metabolite TMAO Enhances plateletHyperreactivity and Thrombosis Risk." Cell 165.1 (2016): 111-124.
              <br/>  2. Tilg, Herbert. "A Gut Feeling about Thrombosis." New England Journalof medicine374.25(2016):2494-2496.


            </div>
            <footer-box :data="'25'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page25',
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
  height: 280px;
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