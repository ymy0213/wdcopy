import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gwc:[
      {cz:true,name:'A',sl:1,dj:800},
      {cz:true,name:'B',sl:2,dj:600},
      {cz:true,name:'C',sl:3,dj:400},
      {cz:true,name:'A',sl:1,dj:800},
      {cz:true,name:'B',sl:2,dj:600},
      {cz:true,name:'C',sl:3,dj:400},
    ]
  },
  mutations: {
aaaaa(state,jiehsou){
  var xia = jiehsou.a;
  var xiab = jiehsou.b;
if(state.gwc[xia].sl==1 && xiab==-1){
  state.gwc[xia].sl=1;
  return;
}
  state.gwc[xia].sl=state.gwc[xia].sl+xiab;

},
    shanchu(a,b){
      a.gwc.splice(b.a,1)
    },
    qunaxuan(a,b){
  for(var i=0;i<a.gwc.length;i++){
    a.gwc[i].cz=b.a;
  }
    },
    danjiquana(a,b){
  a.gwc[b.a].cz = !a.gwc[b.a].cz;
    },
    shanchub(a,b){
  a.gwc=b.a
    }
  },
  actions: {
  },
  modules: {
  }
})
