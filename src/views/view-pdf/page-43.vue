<template>
    <div>
        <div class="car-box">
            <header-tow :data="{name:'详细构造',nameEn:'Detailed construction'}"/>
            <div class="content-box">
                <div class="content-header">相关信息</div>
                <div class="content">
                    每个人的肠道菌群差异很大，普通人的粪便通常会检出200~2000种菌。根据细菌的分类学可以分为门、纲、目、科、属、种几个分类层级。数据库中包括7万5千种菌，70%的菌能鉴定到种。自然界中仍然存在大量尚未鉴定或分类命名的细菌。大部分的肠道菌群能分类命名到属，部分常见菌可以命名到种。根据序列和种属的注释，我们目前能鉴定超过850种具有命名的细菌。

                </div>

            </div>
            <header-tow :data="{name:'核心菌属表',nameEn:'Core bacteria list'}"/>
            <div>
                <div class="theader">
                    <div style="width: 20%;text-align: left;padding-left: 10px">检测菌属</div>
                    <div style="width: 10%;text-align: center ">丰度%</div>
                    <div style="width: 10%;text-align: center "> 状态</div>
                    <div style="width: 15%;text-align:center">参考范围</div>
                    <div style="width: 20%;text-align: left;padding-left: 10px">检测菌属</div>
                    <div style="width: 10%;text-align: center ">丰度%</div>
                    <div style="width: 10%;text-align: center "> 状态</div>
                    <div style="width: 15%;text-align:center">参考范围</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 20%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 10%;text-align: center ">{{item.value}}</div>
                        <div style="width: 10%;text-align: center ">
                            {{item.state == 0 ?'-': item.state ==1? '↓' : '↑'}}
                        </div>
                        <div style="width: 15%;text-align:center;">
                            {{item.value2}}
                        </div>
                        <div style="width: 20%;text-align: left;padding-left: 10px">{{item.name}}</div>
                        <div style="width: 10%;text-align: center ">{{item.value}}</div>
                        <div style="width: 10%;text-align: center ">
                            {{item.state == 0 ?'-': item.state ==1? '↓' : '↑'}}
                        </div>
                        <div style="width: 15%;text-align:center;">
                            {{item.value2}}
                        </div>
                    </div>
                </div>

            </div>


            <footer-box :data="'43'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
// import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
// import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
// import PieContainerChart from "@/components/Echart/pieContainerChart.vue";

export default {
    components: {FooterBox, HeaderTow},
    name: 'page43',
    data() {
        return {
            tableList: [
                {name: '厚壁菌门 Firmicutes', value: '59.545%', value2: 15},
                {name: '拟杆菌门 Bacteroidetes', value: '59.545%', value2: 35},
                {name: '变形菌门 Proteobacteria', value: '59.545%', value2: 45},
                {name: '放线菌门 Actinobacteria', value: '59.545%', value2: 55},
                {name: '螺旋体 Spirochaetes', value: '59.545%', value2: 100},
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
    height: 55px;
    align-items: center;
    color: #434F65;
    background: #e1e4ea;
    margin: 15px 0;
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
    color: #254A96;
    text-indent: 32px;
    text-align: justify;




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

