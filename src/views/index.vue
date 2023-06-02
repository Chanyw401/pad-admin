<template>
  <div class="welcome-contain">
    <div class="welcome-info">
      <div>WELCOME</div>
      <div>{{systemTitle}}</div>
    </div>
    <img
      class="welcome-person"
      src="@/assets/img/person.gif"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  computed: {
    ...mapGetters(['systemTitle'])
  }
}
</script>
<style lang="scss" scoped>
.welcome-contain {
  height: 100%;
  background-image: url(../assets/img/welcome.png);
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 50%;
  .welcome-person {
    position: absolute;
    top: 15.5%;
    left: 10.5%;
    width: 28%;
  }
  .welcome-info {
    position: absolute;
    top: 50%;
    left: 41%;
    margin-top: -94px;
    color: white;
    font-size: 82px;
    letter-spacing: 5px;
  }
}
</style>