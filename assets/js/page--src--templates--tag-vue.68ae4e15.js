(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{190:function(s,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e(188),n=e.n(a),r=function(s){return n()(s).format("YYYY年MM月DD日")}},191:function(s,t,e){},320:function(s,t,e){"use strict";var a=e(191);e.n(a).a},321:function(s,t,e){"use strict";e(188);var a=e(190),n={name:"postlist",props:["post"],data:function(){return{formatChineseDate:a.a}},created:function(){},methods:{}},r=(e(320),e(21)),i=Object(r.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"post flex-c wrap"},[e("img",{staticClass:"post-cover",attrs:{src:s.post.image.src,alt:""}}),e("div",{staticClass:"content"},[e("div",{staticClass:"flex-as flex-js"},[e("div",{staticClass:"tag-list flex-c"},s._l(s.post.tags,(function(t){return e("g-link",{key:t.title,staticClass:"tag",attrs:{to:t.path}},[s._v(s._s(t.title))])})),1),e("div",{staticClass:"date"},[s._v("\n        "+s._s(s.formatChineseDate(s.post.datetime))+"\n      ")])]),e("g-link",{staticClass:"title",attrs:{to:s.post.path}},[s._v(s._s(s.post.series?s.post.series[0].title+"系列"+s.post.seriesIndex+" - ":"")+s._s(s.post.title))]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"desc",domProps:{innerHTML:s._s(s.post.description+"...")}}),e("g-link",{staticClass:"read",attrs:{to:s.post.path}},[s._v("繼續閱讀")])],1)])}),[],!1,null,"228223cc",null);t.a=i.exports},322:function(s,t,e){var a={"./af":192,"./af.js":192,"./ar":193,"./ar-dz":194,"./ar-dz.js":194,"./ar-kw":195,"./ar-kw.js":195,"./ar-ly":196,"./ar-ly.js":196,"./ar-ma":197,"./ar-ma.js":197,"./ar-sa":198,"./ar-sa.js":198,"./ar-tn":199,"./ar-tn.js":199,"./ar.js":193,"./az":200,"./az.js":200,"./be":201,"./be.js":201,"./bg":202,"./bg.js":202,"./bm":203,"./bm.js":203,"./bn":204,"./bn.js":204,"./bo":205,"./bo.js":205,"./br":206,"./br.js":206,"./bs":207,"./bs.js":207,"./ca":208,"./ca.js":208,"./cs":209,"./cs.js":209,"./cv":210,"./cv.js":210,"./cy":211,"./cy.js":211,"./da":212,"./da.js":212,"./de":213,"./de-at":214,"./de-at.js":214,"./de-ch":215,"./de-ch.js":215,"./de.js":213,"./dv":216,"./dv.js":216,"./el":217,"./el.js":217,"./en-SG":218,"./en-SG.js":218,"./en-au":219,"./en-au.js":219,"./en-ca":220,"./en-ca.js":220,"./en-gb":221,"./en-gb.js":221,"./en-ie":222,"./en-ie.js":222,"./en-il":223,"./en-il.js":223,"./en-nz":224,"./en-nz.js":224,"./eo":225,"./eo.js":225,"./es":226,"./es-do":227,"./es-do.js":227,"./es-us":228,"./es-us.js":228,"./es.js":226,"./et":229,"./et.js":229,"./eu":230,"./eu.js":230,"./fa":231,"./fa.js":231,"./fi":232,"./fi.js":232,"./fo":233,"./fo.js":233,"./fr":234,"./fr-ca":235,"./fr-ca.js":235,"./fr-ch":236,"./fr-ch.js":236,"./fr.js":234,"./fy":237,"./fy.js":237,"./ga":238,"./ga.js":238,"./gd":239,"./gd.js":239,"./gl":240,"./gl.js":240,"./gom-latn":241,"./gom-latn.js":241,"./gu":242,"./gu.js":242,"./he":243,"./he.js":243,"./hi":244,"./hi.js":244,"./hr":245,"./hr.js":245,"./hu":246,"./hu.js":246,"./hy-am":247,"./hy-am.js":247,"./id":248,"./id.js":248,"./is":249,"./is.js":249,"./it":250,"./it-ch":251,"./it-ch.js":251,"./it.js":250,"./ja":252,"./ja.js":252,"./jv":253,"./jv.js":253,"./ka":254,"./ka.js":254,"./kk":255,"./kk.js":255,"./km":256,"./km.js":256,"./kn":257,"./kn.js":257,"./ko":258,"./ko.js":258,"./ku":259,"./ku.js":259,"./ky":260,"./ky.js":260,"./lb":261,"./lb.js":261,"./lo":262,"./lo.js":262,"./lt":263,"./lt.js":263,"./lv":264,"./lv.js":264,"./me":265,"./me.js":265,"./mi":266,"./mi.js":266,"./mk":267,"./mk.js":267,"./ml":268,"./ml.js":268,"./mn":269,"./mn.js":269,"./mr":270,"./mr.js":270,"./ms":271,"./ms-my":272,"./ms-my.js":272,"./ms.js":271,"./mt":273,"./mt.js":273,"./my":274,"./my.js":274,"./nb":275,"./nb.js":275,"./ne":276,"./ne.js":276,"./nl":277,"./nl-be":278,"./nl-be.js":278,"./nl.js":277,"./nn":279,"./nn.js":279,"./pa-in":280,"./pa-in.js":280,"./pl":281,"./pl.js":281,"./pt":282,"./pt-br":283,"./pt-br.js":283,"./pt.js":282,"./ro":284,"./ro.js":284,"./ru":285,"./ru.js":285,"./sd":286,"./sd.js":286,"./se":287,"./se.js":287,"./si":288,"./si.js":288,"./sk":289,"./sk.js":289,"./sl":290,"./sl.js":290,"./sq":291,"./sq.js":291,"./sr":292,"./sr-cyrl":293,"./sr-cyrl.js":293,"./sr.js":292,"./ss":294,"./ss.js":294,"./sv":295,"./sv.js":295,"./sw":296,"./sw.js":296,"./ta":297,"./ta.js":297,"./te":298,"./te.js":298,"./tet":299,"./tet.js":299,"./tg":300,"./tg.js":300,"./th":301,"./th.js":301,"./tl-ph":302,"./tl-ph.js":302,"./tlh":303,"./tlh.js":303,"./tr":304,"./tr.js":304,"./tzl":305,"./tzl.js":305,"./tzm":306,"./tzm-latn":307,"./tzm-latn.js":307,"./tzm.js":306,"./ug-cn":308,"./ug-cn.js":308,"./uk":309,"./uk.js":309,"./ur":310,"./ur.js":310,"./uz":311,"./uz-latn":312,"./uz-latn.js":312,"./uz.js":311,"./vi":313,"./vi.js":313,"./x-pseudo":314,"./x-pseudo.js":314,"./yo":315,"./yo.js":315,"./zh-cn":316,"./zh-cn.js":316,"./zh-hk":317,"./zh-hk.js":317,"./zh-tw":318,"./zh-tw.js":318};function n(s){var t=r(s);return e(t)}function r(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}n.keys=function(){return Object.keys(a)},n.resolve=r,s.exports=n,n.id=322},330:function(s,t,e){},331:function(s,t,e){},332:function(s,t){},377:function(s,t,e){"use strict";var a=e(330);e.n(a).a},378:function(s,t,e){"use strict";var a=e(331);e.n(a).a},379:function(s,t,e){"use strict";var a=e(332),n=e.n(a);t.default=n.a},386:function(s,t,e){"use strict";e.r(t);var a=e(321),n=(e(35),e(147),{name:"pagination",props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{isFirstPage:function(s,t){return 1==s},isLastPage:function(s,t){return s==t},isCurrentPage:function(s,t){return s==t},nextPage:function(s,t){return"".concat(this.baseUrl,"/").concat(s+1)},previousPage:function(s,t){return 2===s?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(s-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var s=[],t=this.startPage;t<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);t+=1)s.push({name:t,isDisabled:t===this.currentPage,link:1===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t)});return s}}}),r=(e(377),e(21)),i={components:{Pagination:Object(r.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",{staticClass:"pagination flex-c"},[s.isFirstPage(s.currentPage,s.totalPages)?s._e():e("g-link",{staticClass:"prev-btn page-link",attrs:{to:s.previousPage(s.currentPage,s.totalPages),tabindex:"-1"}},[s._v("«")]),s._l(s.pages,(function(t){return e("g-link",{key:t.name,staticClass:"pagi",class:[s.isCurrentPage(s.currentPage,t.name)?"active":""],attrs:{to:t.link,"aria-label":t.name,"aria-current":t.name}},[s._v(s._s(t.name))])})),s.isLastPage(s.currentPage,s.totalPages)?s._e():e("g-link",{staticClass:"next-btn",attrs:{to:s.nextPage(s.currentPage,s.totalPages),tabindex:"-1"}},[s._v("»")])],2)}),[],!1,null,"008a18ec",null).exports,PostList:a.a},computed:{},metaInfo:function(){return{title:this.$page.tag.title,meta:[{name:"title",content:this.$page.tag.title}]}},created:function(){}},o=(e(378),e(379)),c=Object(r.a)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("Layout",[e("div",{staticClass:"container"},[e("div",{staticClass:"mx-4 sm:mx-0"},[e("div",{staticClass:"block-title"},[s._v(s._s(s.$page.tag.title)+"相關")]),e("p",{staticClass:"text-gray-700 text-xl"},[s._v("\n        共有\n        "),e("span",{staticClass:"self-center"},[s._v(s._s(s.$page.tag.belongsTo.totalCount)+"篇文章")])])]),e("div",{staticClass:"flex wrap"},s._l(s.$page.tag.belongsTo.edges,(function(s){return e("PostList",{key:s.node.id,attrs:{post:s.node}})})),1),s.$page.tag.belongsTo.pageInfo.totalPages>1?e("Pagination",{attrs:{baseUrl:s.$page.tag.path,currentPage:s.$page.tag.belongsTo.pageInfo.currentPage,totalPages:s.$page.tag.belongsTo.pageInfo.totalPages,maxVisibleButtons:5}}):s._e()],1)])}),[],!1,null,"27f8f08f",null);"function"==typeof o.default&&Object(o.default)(c);t.default=c.exports}}]);