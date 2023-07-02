<template>
    <div>
        <div class="car-box">

            <header-tow :data="{name:'疾病风险分析',nameEn:'DISEASE RISK ASSESSMENT'}"></header-tow>
            <div class="indicator-box">
                <img src="@/assets/img/car-pdf/Indicator-one.png" alt="">

            </div>

            <div class="car-content3">
                <production-beat :isMultiply="true" :data="listInfo"/>

            </div>
            <footer-box :data="'04'"/>
        </div>

    </div>
</template>

<script>
import HeaderTow from "@/components/pdf-common/header-tow.vue";
import ProductionBeat from "@/components/common/production-beat.vue";
import FooterBox from "@/components/pdf-common/footer-box.vue";

export default {
    components: {FooterBox, ProductionBeat, HeaderTow},
    name: 'pageTwo',
    data() {
        return {


            listInfo: [
            ]
        }
    },
    created() {
        this.$axios.post('/admin/report/disease', {
            sampleid: '596908438'
        }).then(res => {
            let list =[]
            res.resultVos.map(i => {
                let type =0 // 0 为eroor 1 为正常
                let btnName = '低风险'
                if(i.valueDecimal<0.3){
                    type = 1
                    btnName = '低风险'
                }
                if(i.valueDecimal>=0.3 && i.valueDecimal<0.5){
                    type = 0
                    btnName = '注意'
                }
                if(i.valueDecimal>=0.5 && i.valueDecimal<0.7){
                    type = 0
                    btnName = '中等风险'
                }
                if(i.valueDecimal>=0.7){
                    type = 0
                    btnName = '高风险'
                }
                list.push({
                    num:i.valueDecimal.toFixed(2),
                    name:i.name,
                    type:type,
                    btnName:btnName
                })
            })
            this.listInfo = list
        })
    }
}
</script>

<style scoped lang="scss">


</style>

