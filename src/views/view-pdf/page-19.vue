<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'胃病',nameEn:'gastropathy'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                三餐不规律、暴饮暴食、抽烟酗酒、感染幽门螺旋杆菌，此外情绪也会导 致功能性消化不良。通过C14呼气检测可以检测幽门螺旋杆菌感染。胃镜可以检测胃癌和胃溃疡的胃部疾病。胃病可以由多种因素引起，包括感染、炎症、饮食习惯、遗传因素、药物使用和应激等。


            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                常见症状包括腹部疼痛、消化不良、恶心、呕吐、胃灼热感、食欲减退、上腹痛、嗳气、吞咽困难、喉咙痛、体重下降和贫血等。
            </div >
            <div class="header-three">胃病有哪些原因造成?如何避免?</div>
            <div class="content-text" style="height: 280px;">
                1、三餐规律
               <br/>2、避免暴饮暴食
               <br/>3、不抽烟、少喝酒
               <br/>4、少吃肠胃不舒服的东西
               <br/>5、少吃或不吃腌制食物
               <br/>6、慎用「养胃」偏方，合理均衡的食物才是良方
               <br/>7、注意食品、餐具卫生，避免感染幽门螺旋杆菌
               <br/>8、放轻松，调整情绪，胃不舒服也可能是功能性消化不良，减轻压力就会缓解
               <br/>9、胃不舒服，尽早看医生，专业的诊断和正确的治疗可以完全治愈你的胃部问题

            </div>

            <div class="content-header">参考文献</div>
            <div class="content-literature">
                1、Navaneethan U, Giannella RA. Mechanisms of infectious diarrhea. Nat Clin Pract Gastroenterol Hepatol. 2008;5(11):637-647. doi:10.1038/ncpgasthep1264.
                <br/>2、McClarren RL, Lynch B, Nyayapati N. Acute infectious diarrhea. Prim Care. 2011;38(3):539-ix. doi:10.1016/j.pop.2011.05.008.
                <br/> 3、Siciliano V, Nista EC, Rosà T, Brigida M, Franceschi F. Clinical Management of Infectious Diarrhea. Rev Recent Clin Trials. 2020;15(4):298-308. doi:10.2174/1574887115666200628144128.
            </div>
            <footer-box :data="'19'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page19',
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
  height: 130px;
  background: linear-gradient(180deg, #EAECED 0%, rgba(234,236,237,0) 100%);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  padding: 20px;
  text-align: justify;

  color: #254A96;
}
.content-text{
  width: 100%;
  height: 110px;
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