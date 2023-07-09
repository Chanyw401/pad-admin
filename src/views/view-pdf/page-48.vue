<template>
    <div>
        <div class="car-box">
            <header-one
                    :data="{name:'您的肠道菌群构造',nameEn:'Your gut microbiota structure',No:'NO：BG202304172012',date:'报告生成：2023-04-17'}"/>
            <div class="content-box">
                <div class="content-header">门（DOOR）</div>
                <div class="content">
                    <div class="content-item">门是细菌最初的分类，肠道菌群最主要的细菌构成是以下三类:</div>
                    <div class="content-item2">
                        <div class="item-btn">
                            <div>厚壁菌门</div>
                            <div>(Firmicutes)</div>
                        </div>

                        <div class="item-btn">
                            <div>厚壁菌门</div>
                            <div>(Firmicutes)</div>
                        </div>
                        <div class="item-btn">
                            <div>厚壁菌门</div>
                            <div>(Firmicutes)</div>
                        </div>
                    </div>
                    <div class="content-foorter">
                        *变形菌门是大部分致病菌所在的门
                    </div>
                </div>
            </div>
            <header-tow :data="{name:'检测结果',nameEn:'DETECTION RESULT'}"/>
            <div class="content2-box">
                <div class="left">
                    <PieContainerChart :dataList="list"/>
                </div>
                <div class="right">
                    <img src="../../assets/img/bacteria-bg.png" class="bacteria-bg" alt="">
                    <img src="../../assets/img/bacteria-text-bg.png" class="bacteria-text-bg" alt="">
                    <div class="right-content">
                        <div class="right-header">您的主要菌群构成</div>
                        <div class="li-content">
                            <div v-for="(item,index) in tableList" :key="index">
                                <span class="point point-red" :class="'point-'+ (index+1)"></span> <span
                                    class="name">{{ item.name.split(' ')[0] }}</span> <span :class="'btn-'+ (index+1)"
                                                                                            class="btn ">{{ toFixed(item.value) }}%</span>
                            </div>
                            <!--                            <div>-->
                            <!--                                <span class="point point-2"></span> <span  class="name">厚壁菌门</span> <span class="btn btn-2">59.6%</span>-->
                            <!--                            </div>-->
                            <!--                            <div>-->
                            <!--                                <span class="point point-3"></span> <span  class="name">厚壁菌门</span> <span class="btn btn-3">59.6%</span>-->
                            <!--                            </div>-->
                            <!--                            <div>-->
                            <!--                                <span class="point point-4"></span> <span  class="name">厚壁菌门</span> <span class="btn btn-3">59.6%</span>-->
                            <!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="theader">
                    <div style="width: 40%;text-align: center">名称</div>
                    <div style="width: 20%;text-align: center ">丰度%</div>
                    <div style="width: 40%;text-align:center">人群水平%</div>
                    <div style="width: 20%;text-align:center">%人检出</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div style="width: 40%;text-align: left;padding-left: 10px">{{ item.name }}</div>
                        <div style="width: 20%;text-align: center ">{{ toFixed(item.value) }}%</div>
                        <div style="width: 40%;text-align:center;    padding-top: 9px;padding-right: 25px;">
                            <el-progress :percentage="Number(item.percent)" :stroke-width="8"
                                         color="#2E5CBB"></el-progress>
                        </div>
                        <div style="width: 20%;text-align: center">{{ item.population }}
                        </div>
                    </div>
                </div>

            </div>


            <footer-box :data="'48'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import HeaderOne from "@/components/pdf-common/header-one.vue";
// import InstrumentPanel from "@/components/Echart/instrument-panel.vue";
// import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";
import PieContainerChart from "@/components/Echart/pieContainerChart.vue";

export default {
    components: {FooterBox, HeaderOne, HeaderTow, PieContainerChart},
    name: 'page48',
    data() {
        return {
            tableList: [],
            colorList: ['#CA3E54', '#475276', '#8989A3', '#2E5CBB', '#E1E4EA'],
            list: [{
                "name": "拟杆菌门",
                "value": 50,
                "number": 100,
                itemStyle: {
                    // 透明度
                    opacity: 1,
                    // 扇形颜色
                    color: '#CA3E54',
                }
            }, {
                "name": "厚壁菌门",
                "value": 30,
                "number": 100,
                itemStyle: {
                    // 透明度
                    opacity: 1,
                    // 扇形颜色
                    color: '#475276',
                }
            }, {
                "name": "变形菌门",
                "value": 15,
                "number": 100,
                itemStyle: {
                    // 透明度
                    opacity: 1,
                    // 扇形颜色
                    color: '#8989A3',
                }
            }, {
                "name": "梭杆菌门",
                "value": 5,
                "number": 100,
                itemStyle: {
                    // 透明度
                    opacity: 1,
                    // 扇形颜色
                    color: '#ACACC1',
                }
            },
                {
                    "name": "放线菌门",
                    "value": 5,
                    "number": 100,
                    itemStyle: {
                        // 透明度
                        opacity: 1,
                        // 扇形颜色
                        color: '#ACACC1',
                    }
                }]


        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            this.$axios.post('/admin/report/bacter-details', {
                sampleid: this.$route.query.sampleid,
                level: '门'
            }).then(res => {
                this.tableList = res
                console.log(res, 48)
                let list = []
                this.tableList.map((i, index) => {
                    list.push(
                        {
                            "name": i.name,
                            "value": Number(i.value),
                            "number": 100,
                            itemStyle: {
                                // 透明度
                                opacity: .8,
                                // 扇形颜色
                                color: this.colorList[index] || '#ACACC1',
                            }
                        }
                    )
                })
                this.list = list
            })
        },
        toFixed(num) {
            return Number(num).toFixed(3)
        },
    }
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
  margin-bottom: 30px;

  .content-header {
    color: #1A356B;
    padding-bottom: 10px;

  }

  .content {
    height: 157px;
    background: linear-gradient(180deg, #EAECED 0%, rgba(234, 236, 237, 0) 100%);
    border-radius: 6px 6px 6px 6px;
    padding: 20px;

    .content-item {
      height: 14px;
      font-size: 14px;
      color: #667995;
      margin-bottom: 10px;
    }

    .content-item2 {
      display: flex;
      height: 100px;
      align-items: center;
      justify-content: space-around;

      .item-btn {
        box-sizing: border-box;
        width: 163px;
        height: 64px;
        text-align: center;
        color: #254a96;
        background: url("../../assets/img/car-pdf/dash-bg.png") no-repeat;
        padding-top: 8px;
        background-size: contain;

      }
    }

    .content-foorter {
      display: flex;
      justify-content: flex-end;
      color: #667995;
      font-size: 10px;
      padding-right: 25px;
    }
  }

}

.content2-box {
  display: flex;
  width: 100%;
  height: 280px;
  align-items: center;

  .left {
    width: 50%;
    height: 100%;
    border-radius: 6px 0 0 6px;
  }

  .right {
    position: relative;
    width: 50%;
    height: 100%;
    //background: #e1e4ea;
    border-radius: 0 6px 6px 0;

    .right-content {
      padding-top: 40px;
      padding-right: 40px;
      text-align: right;

      .li-content {
        div {
          height: 30px;
          line-height: 30px;
        }
      }

      .point {
        width: 10px;
        height: 10px;
        background: #2E5CBB;
        border-radius: 50%;
        display: inline-block;
        margin-right: 3px;
      }

      .point-red {
        background: #CA3E54;
      }

      .point-2 {
        background: #475276;
      }

      .point-3 {
        background: #8989A3;
      }

      .point-4 {
        background: #ACACC1;
      }

      .point-5 {
        background: #E1E4EA;
      }

      .name {
        padding: 0 2px;
        width: 68px;
      }

      .btn {
        width: 81px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        background: rgba(202, 62, 84, .1);
        border-radius: 4px;
        color: rgba(202, 62, 84, 1);
        margin-bottom: 20px;
        display: inline-block;
      }

      .btn-2 {
        background: rgba(71, 82, 118, .1);
        color: rgba(71, 82, 118, 1);
      }

      .btn-3 {
        background: rgba(137, 137, 163, .1);
        color: rgba(137, 137, 163, 1);
      }

      .btn-4 {
        background: rgba(172, 172, 193, .1);
        color: rgba(172, 172, 193, 1);
      }

      .btn-5 {
        background: rgba(172, 172, 193, .1);
        color: rgba(172, 172, 193, 1);
      }
    }

    .bacteria-bg {
      position: absolute;
      top: 53px;
      left: 50px;
    }

    .bacteria-text-bg {
      position: absolute;
      bottom: 50px;
      left: 50px;
    }

    .right-header {
      color: #6F7F9F;
      font-size: 25px;
      margin-bottom: 10px;
    }

  }
}


</style>

