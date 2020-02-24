<template>
    <div>
      <h1>{{num}}{{abc}}{{num2}}{{isEvenOrOdd}}</h1>
       {{name}} {{$store.state.n}}
       <button @click="$store.commit('ADD',5)">add</button>
       <button @click="click()">add2</button>
        <button @click="add">add2</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex' //辅助函数
export default {
  data () {
    return {
     name:'find'
    }
  }, 
  // computed:mapState({
  //   num:state=>state.n,
  //   abc:state => state.a
  // }),
  // computed:{
  //   ...mapState({
  //     num:state=>state.n,
  //     abc:state => state.a
  //   }),
  //   num2(){
  //     return this.$store.state.n % 2==0?'偶数':'奇数';
  //   }
  // },
  computed:mapGetters(['num','isEvenOrOdd']),
  methods:{
    ...mapActions(['add']),
    // click(){
    //   this.$store.dispatch("add")
    // }
  }
}

</script>
<style scoped>

</style>
