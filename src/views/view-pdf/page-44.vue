<template>
    <div>
        <div class="car-box">
            <header-tow :data="{name:'有害菌属构成表',nameEn:'Composition table of harmful bacteria'}"/>
            <div>
                <div class="theader">
                    <div class="table-name" >检测菌属</div>
                    <div style="width: 60px;text-align: center ">丰度%</div>
                    <div style="width: 10%;text-align: center "> 状态</div>
                    <div style="width: 15%;text-align:center">参考范围</div>
                    <div  class="table-name" >检测菌属</div>
                    <div style="width: 10%;text-align: center ">丰度%</div>
                    <div style="width: 10%;text-align: center "> 状态</div>
                    <div style="width: 15%;text-align:center">参考范围</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList   " :key="index" class="item">
                        <div class="table-name" style="width:120px;text-align: left;padding-left: 10px">
                            {{ item.name1 }}
                        </div>
                        <div style="width: 60px;text-align: center ">{{ toFixed3(item.value1) }}</div>
                        <div style="width: 10%;text-align: center ">
                            <div v-show="item.state1== 0"><img src="../../assets/img/car-pdf/down.png" alt=""></div>
                            <div v-show="item.state1== 1">-</div>
                            <div v-show="item.state1== 2"><img src="../../assets/img/car-pdf/rise.png" alt=""></div>
                        </div>
                        <div class="rand" style="width: 15%;text-align:center;">
                            {{ item.range1 }}
                        </div>
                        <div class="table-name" style="width: 120px;text-align: left;padding-left: 10px">
                            {{ item.name2 }}
                        </div>
                        <div style="width: 60px;text-align: center ">{{ toFixed3(item.value2) }}</div>
                        <div style="width: 10%;text-align: center ">
                            <div v-show="item.state2=== 0"><img src="../../assets/img/car-pdf/down.png" alt=""></div>
                            <div v-show="item.state2== 1">-</div>
                            <div v-show="item.state2== 2"><img src="../../assets/img/car-pdf/rise.png" alt=""></div>
                        </div>
                        <div class="rand" style="width: 15%;text-align:center;">
                            {{ item.range2 }}
                        </div>
                    </div>
                </div>

            </div>
            <header-tow :data="{name:'其他重要菌属构成表',nameEn:'Composition table of other important bacteria genera'}"/>
            <div>
                <div class="theader">
                    <div class="table-name" >检测菌属</div>
                    <div style="width: 60px;text-align: center ">丰度%</div>
                    <div style="width: 10%;text-align: center "> 状态</div>
                    <div style="width: 15%;text-align:center">参考范围</div>
                    <div  class="table-name" >检测菌属</div>
                    <div style="width: 10%;text-align: center ">丰度%</div>
                    <div style="width: 10%;text-align: center "> 状态</div>
                    <div style="width: 15%;text-align:center">参考范围</div>
                </div>
                <div class="t-body">
                    <div v-for="(item,index) in tableList2   " :key="index" class="item">
                        <div class="table-name" style="width:120px;text-align: left;padding-left: 10px">
                            {{ item.name1 }}
                        </div>
                        <div style="width: 60px;text-align: center ">{{ toFixed3(item.value1) }}</div>
                        <div style="width: 10%;text-align: center ">
                            <div v-show="item.state1== 0"><img src="../../assets/img/car-pdf/down.png" alt=""></div>
                            <div v-show="item.state1== 1">-</div>
                            <div v-show="item.state1== 2"><img src="../../assets/img/car-pdf/rise.png" alt=""></div>
                        </div>
                        <div class="rand" style="width: 15%;text-align:center;">
                            {{ item.range1 }}
                        </div>
                        <div class="table-name" style="width: 120px;text-align: left;padding-left: 10px">
                            {{ item.name2 }}
                        </div>
                        <div style="width: 60px;text-align: center ">{{ toFixed3(item.value2) }}</div>
                        <div style="width: 10%;text-align: center ">
                            <div v-show="item.state2=== 0"><img src="../../assets/img/car-pdf/down.png" alt=""></div>
                            <div v-show="item.state2== 1">-</div>
                            <div v-show="item.state2== 2"><img src="../../assets/img/car-pdf/rise.png" alt=""></div>
                        </div>
                        <div class="rand" style="width: 15%;text-align:center;">
                            {{ item.range2 }}
                        </div>
                    </div>
                </div>

            </div>


            <footer-box :data="'44'"/>
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
    name: 'page44',
    data() {
        return {
            tableList: [],
            tableList2: [],



        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData(){
            this.$axios.post('/admin/report/abundance-all',
                {sampleid:this.$route.query.sampleid}
            ).then(

                res => {
                    console.log(res,'43')
                    this.tableList = []
                    this.tableList2 = []
                    //向上取整
                    let middle = Math.ceil(res.b1.length/2)
                    let middle2 = Math.ceil(res.b3.length/2)
                    res.b1.map((item,index)=>{
                            if(index<middle){
                                this.tableList.push({
                                    name1:item.name,
                                    value1:item.value,
                                    range1:item.range,
                                    state1:item.status,
                                    name2:index+middle<res.b1.length?res.b1[index+middle].name:'',
                                    value2:index+middle<res.b1.length?res.b1[index+middle].value:'',
                                    range2:index+middle<res.b1.length?res.b1[index+middle].range:'',
                                    state2:index+middle<res.b1.length?res.b1[index+middle].status:'',

                                })
                            }

                        })
                    res.b3.map((item,index)=>{
                            if(index<middle2){
                                this.tableList2.push({
                                    name1:item.name,
                                    value1:item.value,
                                    range1:item.range,
                                    state1:item.status,
                                    name2:index+middle2<res.b3.length?res.b3[index+middle2].name:'',
                                    value2:index+middle2<res.b3.length?res.b3[index+middle2].value:'',
                                    range2:index+middle2<res.b3.length?res.b3[index+middle2].range:'',
                                    state2:index+middle2<res.b3.length?res.b3[index+middle2].status:'',

                                })
                            }

                        }
                    )
                }
            )
        },
        toFixed3(num) {
            return num !== '' ? Number(num).toFixed(3) : ''
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
    font-size: 13px;

    .item {
        display: flex;
        align-content: center;
        width: 100%;
        height: 45px;
        align-items: center;
        color: #434F65;
        background: #e1e4ea;
        margin: 5px 0;
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
.table-name {
    width: 120px;
    text-align: left;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;


}
.rand{
    width: 100px;
    text-align: center;
    white-space: nowrap;
}


</style>

