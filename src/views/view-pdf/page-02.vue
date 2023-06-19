<template>
    <div>
        <div class="car-box">
            <header-one :data="{name:'您的检测报告总览',nameEn:'Overview of your test report',No:'NO：BG202304172012',date:''}"/>
            <div class="content-box">
                <div class="content-header">基本信息</div>
                <div class="content">
                    <div class="left">
                        <div><span>姓名：</span> 王麻子</div>
                        <div><span>年龄：</span> 30 岁</div>
                        <div><span>性别：</span> 男</div>
                    </div>
                    <div class="right">
                        <div><span>样本编号：</span> BG202304172012</div>
                        <div><span>报告日期：</span> 2023-04-17</div>
                        <div><span>备注：</span> 有直肠炎病史，注意饮食规律，保持充足睡眠。</div>
                    </div>
                    <div class="bg">
                        <img src="../../assets/img/car-pdf/Basicinformation.png" alt="">
                    </div>
                </div>

            </div>
            <header-tow :data="{name:'报告总结',nameEn:'Report Summary'}"/>
            <div class="content2-box"
            >
                <div class="li-item">
                    <div class="number-btn">1</div>
                    <div class="li-content">
                        肠道菌群多样性稳定、有益菌丰度偏低、条件致病菌、有害菌丰度偏高；
                    </div>
                </div>
                <div class="li-item">
                    <div class="number-btn">2</div>
                    <div class="li-content">
                        肠道致病菌的检测：显示弯曲菌属检测异常。
                    </div>
                </div>
                <div class="li-item">
                    <div class="number-btn">3</div>
                    <div class="li-content">
                        风险疾病注意事项：炎症性肠炎、甲状腺疾病、抑郁症。
                    </div>
                </div>
                <div class="li-item">
                    <div class="number-btn">4</div>
                    <div class="li-content">
                        短链脂肪酸合成偏少，肠道菌群血清素水平25分，属于正常范围，更高的分值显示更好的睡眠质量以及更多的幸福感和愉悦。
                    </div>
                </div>
                <div class="li-item">
                    <div class="number-btn">5</div>
                    <div class="li-content">
                        发育及营养部分，主要营养成分摄入乳制品偏少/正常。维生素部分检测显示异常。微量元素显示正常。耐药性显示正常。
                    </div>
                </div>

            </div>


            <footer-box :data="'02'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
// import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
// import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
// import PieContainerChart from "@/components/Echart/pieContainerChart.vue";

export default {
    components: {FooterBox, HeaderOne, HeaderTow},
    name: 'page0',
    data() {
        return {
            tableList: [
                {name: '厚壁菌门 Firmicutes', value: '59.545%', value2: 15},
                {name: '拟杆菌门 Bacteroidetes', value: '59.545%', value2: 35},
                {name: '变形菌门 Proteobacteria', value: '59.545%', value2: 45},
                {name: '放线菌门 Actinobacteria', value: '59.545%', value2: 55},
                {name: '螺旋体 Spirochaetes', value: '59.545%', value2: 100},
            ]


        }
    },
}
</script>

<style scoped lang="scss">
.theader {
  width: 100%;
  display: flex;
  color: #ffffff;
  background: url(../../assets/img/car-pdf/car-content2-header.png) no-repeat;
  height: 34px;
  line-height: 34px;
  background-size: cover;
  border-radius: 4px;
}

.t-body {
  width: 100%;

  .item {
    display: flex;
    align-content: center;
    width: 100%;
    height: 34px;
    line-height: 34px;
    color: #434F65;
    background: #e1e4ea;
    margin: 10px 0;
    border-radius: 4px;

    div {
    }
  }

  .item:nth-child(2n) {
    background: rgba(37, 74, 150, .2);
  }

  ::v-deep.el-progress__text {
    color: #2E5CBB !important;
    font-size: 11px !important;
  }
}

.content-box {
  height: 200px;
  margin-bottom: 60px;

  .content-header {
    color: #1A356B;
    font-size: 24px;
    font-family: Fotor HelloFont GongYiTi-Regular, Fotor HelloFont GongYiTi;
    letter-spacing: 4px;
    padding-bottom: 10px;

  }

  .content {
    position: relative;
    height: 210px;
    background: linear-gradient(180deg, #EAECED 0%, rgba(234, 236, 237, 0) 100%);
    border-radius: 6px 6px 6px 6px;;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    color: #434F65;

    span {
      color: #8989A3;
      letter-spacing: 4px;
    }

    div {
      padding: 10px 0;
    }

    .left {
      width: 50%;
      height: 100%;
      border-radius: 6px 0 0 6px;
      padding: 0 20px;

    }

    .right {
      width: 50%;
      height: 100%;
      padding: 0 20px;
    }

    .bg {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 160px;

      img {
        width: 100%;
        height: 100%;
      }
    }


  }

}

.content2-box {
  width: 100%;

  .li-item {
    display: flex;
    justify-content: space-between;
      padding: 20px 0;
  }

  .number-btn {
    width: 33px;
    height: 33px;
    background: #254A96;
    border-radius: 4px 4px 4px 4px;
    color: #ffffff;
    line-height: 32px;
    text-align: center;
  }

  .li-content {
    width: 600px;
    background: rgba(37, 74, 150, 0.05);
    border-radius: 4px 4px 4px 4px;
    line-height: 33px;
    padding: 0 10px;
    color: #353F51;
  }

}


</style>

