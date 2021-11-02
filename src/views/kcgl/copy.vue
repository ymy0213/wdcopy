<template>
  <div id="app">
    <h1>购物清单</h1>
    <!--表格内容-->
    <table style="width: 100%">
      <tr>
        <th>
          <label><input type="checkbox" :checked="sss" @click="quanxuanaa">全选</label>
        </th>
        <th>商品</th>
        <th>数量</th>
        <th>单价(元)</th>

        <th>金额(元)</th>

        <th>操作</th>
      </tr>

      <tr style="text-align: center" v-for="(item,index) in gwc" :key="index">
        <td>
          <input type="checkbox" :checked="item.cz" @click="danjiquan(index)">
        </td>
        <td>
          <h5>{{ item.name }}</h5>
        </td>
        <td style="display: flex;justify-content:space-around;margin-top: 24px">
          <div style="width: 10px;height: 10px;border: 1px solid black;line-height: 10px"
          @click="jisuan(index,-1)">-</div>
          <span>{{item.sl}}</span>
          <div style="width: 10px;height: 10px;border: 1px solid black;line-height: 10px"
          @click="jisuan(index,1)">+</div>
        </td>
        <td style="color: orange">
          {{ item.dj }}
        </td>
        <td style="color: orange">
          {{item.sl*item.dj}}
        </td>
        <td @click="sc(index)">
          删除
        </td>
      </tr>
    </table>

    <div>
      <span @click="shanchua">删除</span>
    <h1>总计选中<span style="color: red">{{ zongjia.length }}</span>总计选中件，合计￥<span style="color: red">{{ zongjib }}</span></h1>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      sss:this.$store.state.gwc.filter(i=>i.cz==true).length==this.$store.state.gwc.length,
    };
  },
  computed: {
    ...mapState(['gwc']),
    qxa(){
      return this.gwc.filter(i=>i.cz==false).length==0;
    },
    zongjia(){
      return this.gwc.filter(i=>i.cz==true);
    },
    zongjib(){
      var a = 0;
      this.zongjia.forEach(function (v){
        a+=v.sl*v.dj;
      })
      return a;
    }
  },
  methods:{
    ...mapMutations(['aaaaa','shanchu','qunaxuan','danjiquana','shanchub']),
    jisuan(a,b){
      this.aaaaa({a:a,b:b})
    },
    sc(a){
      this.shanchu({
        a:a,
      })
      this.sss=this.qxa
    },
    quanxuanaa(){
      this.sss=!this.sss;
      this.qunaxuan({a:this.sss});
    },
    danjiquan(a){
      this.danjiquana({a:a});
      this.sss=this.qxa
    },
    shanchua(){
      this.shanchub({a:this.gwc.filter(i=>i.cz==false)})
    }
  }
}
</script>

<style>
#app {
  height: auto;
  margin: 0 auto;
  border: 1px solid #ccc;
}
</style>