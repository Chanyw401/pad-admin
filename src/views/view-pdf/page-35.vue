<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'自闭症',nameEn:'autism'}"/>
            <div class="header-point">相关信息 </div>
            <div class="content-box">

                研究表明，肠道菌群的失调可能与自闭症的发展有关。有些研究发现自闭症患者的基因表达异常，这可能导致大脑神经元的异常发育和功能障碍。此外，某些生化物质的不平衡也可能与自闭症有关，比如血清素和多巴胺等神经递质的异常。环境因素如毒物暴露、感染、早产、饮食、抗生素使用等也可能与自闭症的发生有关。

            </div>
            <div class="header-point">症状 </div>
            <div class="content-text">
                自闭症的症状包括社交困难、语言障碍、沉迷于特定的兴趣爱好、强迫行为和刻板行为等。这些症状通常在儿童3岁之前就可以被诊断出来，有时甚至可以在婴儿期就发现迹象。
            </div>
                <div class="content-header">参考文献</div>
                <div class="content-literature">
                    1. Kang DW, Adams JB, Coleman DM, etal. Long-term benefit of Microbiota Transfer Therapy on autism symptoms and gut microbiota.Sci Rep. 2019;9(1):5821. Published 2019 Apr 9. doi:10.1038/s41598-019-42183-0.
                   <br/> 2. Qureshi F, Adams J, Hanagan K, etal. Multivariate Analysis of Fecal Metabolites from Children with Autism Spectrum Disorder and Gastrointestinal Symptoms before and after Microbiota Transfer Therapy. J Pers Med. 2020 Oct 2;10(4):152. doi: 10.3390/jpm10040152.
                   <br/> 3. Li N, Chen H, Cheng Y, etal. Fecal Microbiota Transplantation Relieves Gastrointestinal and Autism Symptoms by Improving the Gut Microbiota in an Open-Label Study. Front Cell Infect Microbiol. 2021 Oct 19;11:759435. doi: 10.3389/fcimb.2021.759435.

                </div>
                <footer-box :data="'35'"/>
            </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: { FooterBox, HeaderTow},
    name:'page35',
    data() {
        return {




            tableList:[
                {name:'双歧杆菌属 Bifidobacterium',value:'59.545%',value2:'0.1914-14.598',state:1},
                {name:'罗氏菌属 Roseburia',value:'59.545%',value2:'0.1914-14.598',state:0},
                {name:'瘤胃球菌属 Ruminococcus',value:'59.545%',value2:0.1914-14.598,state: 2},
                {name:'拟杆菌属 Bacteroides',value:'59.545%',value2:0.1914-14.598,state: 2},


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