<template>
    <div>
        <div class="car-box">
            <header-one :data="{name:'技术说明',nameEn:'Technical specification',No:'',date:''}"/>
            <div class="content">
                <div>
                    肠道微生物检测使用技术为16S rRNA基因测序，16S rRNA基因测序以细菌16S rRNA基因测序为主,核心是研究样品中的物种分类、物种丰度系统、以及微生物与疾病互作关系等。即从粪便样本中提取DNA，通过PCR技术扩增16S rRNA基因，再使用如illumina等高通量测序平台进行16S rRNA基因测序。
                </div>
                <div>
                    16S rRNA 基因是编码原核生物核糖体小亚基的基因，长度约为1542bp，其分子大小适中，突变率小，是细菌系统分类学研究中最常用和最有用的标志。
                </div>
                <div>
                    通过16S检测技术，我们能够以便捷形式了解您肠道内的主要菌群构造，包括细菌分类、种属及各种菌属的丰度情况，获得实验室充分的数据报告。
                </div>
                <div>
                    同时我们可以得到一个肠道微生物的"指纹"，这对于理解肠道微生物如何影响人体健康非常有价值，我们通过鉴定样本中的微生物群组成，从而把菌种和它们的“功能”对应起来。例如，研究人员已经发现肠道微生物与肠道疾病、肥胖、糖尿病、免疫疾病、心脑血管疾病等多种疾病有关。
                </div>

            </div>
            <footer-box :data="'01'"/>
        </div>

    </div>
</template>

<script>
import HeaderOne from "@/components/pdf-common/header-one.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: {FooterBox, HeaderOne},
    name: 'page-Instructions',
    data() {
        return {


        }
    },
}
</script>

<style scoped lang="scss">




  .content {
      font-family: YouShe;
    position: relative;
    height: 800px;
    background: linear-gradient(180deg, #EAECED 0%, rgba(234, 236, 237, 0) 100%);
    border-radius: 6px 6px 6px 6px;;
    padding: 20px;
    color: #254A96;
    div {
      text-indent: 32px;
      text-align: justify;
      font-size:24px;
      line-height: 35px;
    }




  }




</style>

