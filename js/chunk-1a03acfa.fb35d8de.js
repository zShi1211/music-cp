(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a03acfa"],{"202f":function(t,a,e){},"3d12":function(t,a,e){},8234:function(t,a,e){"use strict";e("202f")},c15e:function(t,a,e){"use strict";e("3d12")},e6cb:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[t.detail?[a("div",[a("SongListTitle",{attrs:{detail:t.detail.playlist}}),a("el-menu",{attrs:{mode:"horizontal",router:"","default-active":t.defaultActive}},[a("el-menu-item",{attrs:{index:"playList"}},[t._v("歌曲列表")]),a("el-menu-item",{attrs:{index:"musicListcommentList"}},[t._v("评论("+t._s(t.detail.playlist.commentCount)+")")]),a("el-menu-item",{attrs:{index:"collector"}},[t._v("收藏者")])],1),a("router-view",{attrs:{detail:t.detail.playlist}})],1)]:t._e()],2)},i=[],l=e("2503"),n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"picture"},[a("img",{attrs:{src:t.detail.coverImgUrl,alt:""}})]),a("div",{staticClass:"content"},[a("div",{staticClass:"top"},[a("div",{staticClass:"title"},[a("h1",{staticClass:"name"},[t._v(t._s(t.detail.name))]),a("div",{staticClass:"count"},[a("div",{staticClass:"songCount"},[a("p",[t._v("歌曲数")]),a("span",[t._v(t._s(t.detail.trackIds.length))])]),a("div",{staticClass:"playerCount"},[a("p",[t._v("播放数")]),a("span",[t._v(t._s(t._f("playCount")(t.detail.playCount)))])])])]),a("div",{staticClass:"creator-info"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.detail.creator.avatarUrl,alt:""}})]),a("span",{staticClass:"creator-name"},[t._v(" "+t._s(t.detail.creator.nickname)+" ")]),a("span",{staticClass:"create-date"},[t._v(t._s(t._f("date")(t.detail.createTime))+"创建")])])]),a("div",{staticClass:"bottom"},[a("p",{staticClass:"label"},[t._v("标签："+t._s(t.detail.tags.join("/")))]),a("p",{staticClass:"introduction"},[t._v("简介："+t._s(t.detail.description))])])])])},c=[],r={props:{detail:{type:Object,default(){return{}}}},filters:{playCount(t){return t<1e4?t:Math.floor(t/1e4)+"万"},date(t){const a=new Date(t),e=a.getFullYear(),s=(a.getMonth()+1).toString().padStart(2,0),i=a.getDay().toString().padStart(2,0);return`${e}-${s}-${i}`}}},o=r,d=(e("8234"),e("0b56")),u=Object(d["a"])(o,n,c,!1,null,"5e38b380",null),p=u.exports,v=e("8ae6"),_={components:{SongListTitle:p},props:{id:{type:[String,Number]}},data(){return{detail:null,defaultActive:""}},async created(){const t=await Object(l["e"])(this.id);this.detail=t;const a=Object(v["a"])(this.$route.path);this.defaultActive=a[2]}},f=_,m=(e("c15e"),Object(d["a"])(f,s,i,!1,null,"f3e5eec0",null));a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-1a03acfa.fb35d8de.js.map