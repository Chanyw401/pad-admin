<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'抑郁症',nameEn:'depression'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">
                根据世界卫生组织（WHO）的估计，全球有超过3.4亿人患有抑郁症。抑郁症的原因可能是多种多样的，包括基因遗传、生化因素、脑部结构和功能的改变，以及心理社会因素（如压力、创伤、家庭环境等）。

            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                1.心境低落:显著而持久的情感低落，抑郁悲观。典型患者的抑郁心境有晨重夜轻的节律变化。
                <br/>2.思维迟缓:思维联想速度缓慢，反应迟钝思路闭塞。
                <br/>3.意志活动减退:表现行为缓慢，生活被动、疏懒，不想做事，不愿和周围人接触交往，回避社交。
                <br/>4.认知功能损害:主要表现为记事记忆力下降、注意力障碍、反应时间延长、警觉性增高、抽象思维能力差、学习困难、语言流畅性差、空间知觉、眼手协调及思维灵活性等能力减退。
                <br/>5.躯体症状:主要有睡眠障碍乏力、食欲减退、体重下降、便秘、身体任何部位的疼痛
            </div>   <div class="content-header">参考文献</div>
                <div class="content-literature">
                    1.Sonali S, Ray B, Ahmed Tousif H, et al. Mechanistic Insights into the Link between Gut Dysbiosis and Major Depression: An Extensive Review. Cells. 2022;11(8):1362. Published 2022 Apr 16. doi:10.3390/cells11081362.
                 <br/>   2.Chinna Meyyappan A, Forth E, Wallace CJK, Milev R. Effect of fecal microbiota transplant on symptoms of psychiatric disorders: a systematic review. BMC Psychiatry. 2020;20(1):299. Published 2020 Jun 15. doi:10.1186/s12888-020-02654-5.

                </div>
                <footer-box :data="'33'"/>
            </div>

        </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page33',
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