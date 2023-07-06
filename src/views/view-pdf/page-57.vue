<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'如何应用微生物医疗',nameEn:'How to apply microbial medicine'}"/>
            <div class="content-text">
                <div>
                    肠道菌群移植属于医疗技术范畴，应在符合管理规范情况下开展。

                </div>
                <div>
                    菌群移植是将从健康人群肠道中提取的功能菌群制备成菌液，通过鼻饲管、肠镜、胶囊等方式移植入患者体内。随着菌群移植产业的蓬勃发展，技术迭代更新，菌群移植胶囊可实现超洁净、无异味，服用方式简易、作用温和，大幅减轻患者心理负担，广受临床及用户青睐。
                </div>

            </div>
            <div class="header-three" style="margin-top: 100px"><span><img src="../../assets/img/car-pdf/title-oblique.png" alt=""></span>
                实施流程
            </div>


            <div class="content">
                <div class="text-item">
                    <div class="num">01</div>
                    <div class="left"> 确定症状</div>
                    <div class="right">通过医学检测及肠道菌群检测，明确疾病与症状，判定是否符合菌群移植适应症范畴
                    </div>
                </div>
                <div class="text-item">
                    <div class="num">02</div>
                    <div class="left"> 知情同意</div>
                    <div class="right">了解菌群移植内容，并签署知情同意书包括实施内容、适应症、禁忌症、副作用等</div>
                </div>
                <div class="text-item">
                    <div class="num">03</div>
                    <div class="left"> 开展实施</div>
                    <div class="right">确定应用菌群移植技术，做好实施前准备，调整肠道状态，遵循医嘱指导实施</div>
                </div>
                <div class="text-item">
                    <div class="num">04</div>
                    <div class="left"> 随访跟进</div>
                    <div class="right">遵循医嘱维护肠道健康，随访记录症状改善情况，在实施周期后检测菌群定植效果</div>
                </div>
            </div>


            <footer-box :data="'57'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: {FooterBox, HeaderTow},
    name: 'page57',
    data() {


        return {
            tableList: [
                {name: "弯曲杆菌属 Campylobacter", value: '59.545%', value2: '0.1914-14.598', state: 1},
                {name: '艰难梭菌(C. difficile)', value: '59.545%', value2: '0.1914-14.598', state: 0},
                {name: '肠沙门氏菌(S. enterica)', value: '59.545%', value2: 0.1914 - 14.598, state: 2},
                {name: '埃希氏菌属 Escherichia', value: '59.545%', value2: 0.1914 - 14.598, state: 2},


            ],
            list: [{
                name: '感染型腹泻',
                num: 50,
                type: 1
            }]


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
    height: 45px;
    line-height: 45px;
    background-size: cover;
    border-radius: 4px;
    margin-bottom: 20px;
}

.t-body {
    width: 100%;
    margin-bottom: 40px;

    .item {
        display: flex;
        align-content: center;
        width: 100%;
        height: 45px;
        line-height: 45px;
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

.content-text {
    width: 100%;
    padding: 20px 20px 50px 20px;
    background: linear-gradient(180deg, #EAECED 0%, rgba(234, 236, 237, 0) 100%);
    border-radius: 6px 6px 6px 6px;
    opacity: 1;
    text-align: justify;
    margin-bottom: 25px;
    line-height: 25px;
    color: #254A96;

    div {
        text-indent: 32px;
    }
}

.content {
    margin-top: 20px;
    width: 100%;

    .text-item {
        height: 100px;
        background: url("../../assets/img/car-pdf/Instructions-bg.png") no-repeat;
        background-size: 100%;
        display: flex;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            bottom: 10px;
            left: 345px;
            width: 24px;
            height: 24px;
            background: url("../../assets/img/car-pdf/down-bg.png") no-repeat;
        }

        &:last-child:after {
            display: none;
        }

        .num {
            position: absolute;
            left: 0;
            top: 0;
            color: rgba(255, 255, 255, .2);
        }

        .left {
            padding-left: 25px;
            padding-top: 12px;
            width: 25%;
            color: #ffffff;
        }

        .right {
            font-size: 14px;
            color: #254A96;
            padding-top: 10px;
            padding-right: 10px;
            line-height: 14px;
        }
    }

}

.content-box2 {
    width: 100%;
    height: 93px;
    background: linear-gradient(180deg, #EAECED 0%, rgba(234, 236, 237, 0) 100%);
    border-radius: 6px 6px 6px 6px;
    opacity: 1;
    color: #254A96;
    padding: 20px;

    div {
        padding: 10px 0;
    }
}


</style>

