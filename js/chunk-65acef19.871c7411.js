(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65acef19"],{"3e71":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("PlayListTable",{attrs:{songList:t.songList,loading:t.loading}})],1)},i=[],s=a("2503"),l=a("6d6b"),o={components:{PlayListTable:l["a"]},props:{detail:{type:Object}},data(){return{songList:null,loading:!1}},async created(){this.loading=!0;const t=this.detail.trackIds.map(async t=>await Object(s["j"])(t.id)),e=await Promise.all(t);this.songList=e,this.loading=!1}},r=o,c=a("0b56"),d=Object(c["a"])(r,n,i,!1,null,null,null);e["default"]=d.exports},"43bc":function(t,e,a){"use strict";a("9a6c")},"6d6b":function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.songInfoList,stripe:"",size:"small","element-loading-text":"歌曲加载中"},on:{"row-dblclick":t.changeMusic}},[e("el-table-column",{attrs:{width:"90",type:"index",index:t.indexMethod}}),e("el-table-column",{attrs:{prop:"name",label:"音乐标题",width:"180"}}),e("el-table-column",{attrs:{prop:"singer",label:"歌手"}}),e("el-table-column",{attrs:{prop:"al",label:"专辑"}}),e("el-table-column",{attrs:{prop:"duration",label:"时长"}})],1)],1)},i=[],s=a("7736"),l=a("f9fe"),o={props:{songList:Array,loading:{type:Boolean,default:!1},limit:{type:Number,default:0},page:{type:Number,default:1}},methods:{...Object(s["b"])([l["b"],l["c"]]),changeMusic(t){this.NOW_PLAYER_MUSIC(t),this.playerList!==this.songInfoList&&this.PLAYER_LIST(this.songInfoList)},indexMethod(t){return(this.page-1)*this.limit+t+1}},computed:{...Object(s["c"])(["playerList"]),songInfoList(){return this.songList?this.songList.map((t,e)=>{t=t.songs[0];let a=t.dt;const n=Math.floor(a/1e3/60).toString().padStart(2,0),i=Math.floor(a/1e3%60).toString().padStart(2,0);return a=`${n}:${i}`,{info:t,name:t.name,singer:t.ar.map(t=>t.name).join(" / "),al:t.al.name,duration:a,index:e}}):[]}}},r=o,c=(a("43bc"),a("0b56")),d=Object(c["a"])(r,n,i,!1,null,null,null);e["a"]=d.exports},"9a6c":function(t,e,a){}}]);
//# sourceMappingURL=chunk-65acef19.871c7411.js.map