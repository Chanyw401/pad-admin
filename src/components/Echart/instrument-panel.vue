<template>
    <div>
        <div class="item1_content">
            <div class="left">
                <div ref="beat" class="beat"></div>
                <div class="beat_bg_before">
                    <img src="../../assets/img/car-pdf/beat_bg_before.svg" alt="">
                </div>
                <div class="beat_bg_after">
                    <img src="../../assets/img/car-pdf/beat_bg_after.png" alt="">
                </div>
                <div class="beat_bg">
                    <img src="../../assets/img/car-pdf/beat-bg.svg" alt="">
                </div>
                <div class="left_text">
                    <!-- {{ data.proportion }} -->
                    {{ this.number }}
                    <span style="font-size: 14px; color: #9f6aa2; font-weight: 400"
                    >分</span
                    >
                </div>
                <div class="left_name">
                    {{ this.state }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "InstrumentPanel",
    props: {
        number: {
            type: Number,
            default: 0
        }
    },
    watch: {},
    computed: {
        state() {
            let str = ''
            if (this.number < 40) {
                str = '多项风险疾病整体健康状况不佳'
            }
            if (this.number >= 40 && this.number < 50) {
                str = '整体健康状况不佳有疾病高风险'
            }
            if (this.number >= 50 && this.number < 60) {
                str = '需针对性检查有个别疾病高风险'
            }
            if (this.number >= 60 && this.number < 70) {
                str = '亚健康及营养饮食不合理'
            }
            if (this.number >= 70 && this.number < 80) {
                str = '注意生活方式及营养'
            }
            if (this.number >= 80 && this.number < 90) {
                str = '营养均衡'
            }
            if (this.number >= 90) {
                str = '健康'
            }
            return str
        }
    },


    data() {
        return {
            echarts: null,
            option: {
                angleAxis: {
                    show: false,
                    max: (100 * 360) / 180, //-45度到225度，二者偏移值是270度除360度
                    type: "value",
                    startAngle: 180, //极坐标初始角度
                    splitLine: {
                        show: false,
                    },
                },
                barMaxWidth: 8, //圆环宽度
                radiusAxis: {
                    show: false,
                    type: "category",
                },
                //圆环位置和大小
                polar: {
                    center: ["50%", "70%"],
                    radius: "160%",
                },
                series: [
                    {
                        type: "bar",
                        data: [
                            {
                                //上层圆环，显示数据
                                value: 75,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                        {
                                            offset: 0,
                                            color: "#E88F61",
                                        },
                                        {
                                            offset: 1,
                                            color: "#9F6AA2",
                                        },
                                    ]),
                                },
                            },
                        ],
                        barGap: "-100%", //柱间距离,上下两层圆环重合
                        coordinateSystem: "polar",
                        roundCap: true, //顶端圆角
                        z: 3, //圆环层级，同zindex
                    },
                    {
                        //下层圆环，显示最大值
                        type: "bar",
                        data: [
                            {
                                value: 100,
                                itemStyle: {
                                    color: "#EFEFEF",
                                    borderWidth: 10,
                                },
                            },
                        ],
                        barGap: "-100%",
                        coordinateSystem: "polar",
                        roundCap: true,
                        z: 1,
                    },
                ],
            },
        };
    },
    mounted() {
        this.echarts = echarts.init(this.$refs.beat);
        this.option.series[0].data[0].value = this.number;
        this.echarts.setOption(this.option);
    },
};
</script>

<style scoped lang="scss">
.item1_content {
  height: 187px;
  width: 390px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .left {
    position: relative;

    .beat {
      left: -70px;
      top: -120px;
      width: 220px;
      height: 220px;
      position: absolute;
      //background-color: pink;
    }

    .beat_bg_before {
      position: absolute;
      left: -61px;
      width: 204px;
      top: -67px;

      img {
        width: 100%;
      }
    }

    .beat_bg_after {
      position: absolute;
      left: -35px;
      width: 150px;
      top: -38px;

      img {
        width: 100%;
      }
    }

    .beat_bg {
      position: absolute;
      left: -20px;
      width: 120px;
      top: -28px;

      img {
        width: 100%;
      }
    }

    .left_text {
      color: #362b33;
      left: -18px;
      font-size: 22px;
      bottom: -39px;
      position: absolute;
      font-weight: 700;
      width: 120px;
      text-align: center;
    }

    .left_name {
      position: absolute;
      width: 235px;
      bottom: -78px;
      left: -70px;
      text-align: center;
      color: #6F7F9F;
    }

    img {
      width: 140px;
    }
  }

  .right {
    color: #ac9caa;
    font-size: 10px;

    .left_item {
      padding: 10px 20px 10px 20px;
    }

    .value_text {
      color: #9f6aa2;
      font-size: 28px;
      font-weight: 700;
    }
  }
}

.item_header {
  width: 100%;
  height: 50px;
  display: flex;
  background: rgba(162, 144, 161, 0.45);
  border-radius: 8px 8px 0px 0px;
  align-items: center;

  .header_img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
      width: 70%;
      height: 70%;
    }
  }

  .header_text_top {
    font-size: 20px;
    font-weight: 700;
    color: #2c2c2c;
  }

  .header_text_bottom {
    color: #9f6aa2;
    font-weight: 700;
    font-size: 14px;
    opacity: 0.8;
  }
}
</style>
