(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(s,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e(189),n=e.n(a),r=function(s){return n()(s).format("YYYY年MM月DD日")}},192:function(s,t,e){},321:function(s,t,e){"use strict";var a=e(192);e.n(a).a},322:function(s,t,e){"use strict";e(189);var a=e(191),n={name:"postlist",props:["post"],data:function(){return{formatChineseDate:a.a}},created:function(){},methods:{}},r=(e(321),e(21)),i=Object(r.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"post flex-c wrap"},[e("img",{staticClass:"post-cover",attrs:{src:s.post.image.src,alt:""}}),e("div",{staticClass:"content"},[e("div",{staticClass:"flex-as flex-js"},[e("div",{staticClass:"tag-list flex-c"},s._l(s.post.tags,(function(t){return e("g-link",{key:t.title,staticClass:"tag",attrs:{to:t.path}},[s._v(s._s(t.title))])})),1),e("div",{staticClass:"date"},[s._v("\n        "+s._s(s.formatChineseDate(s.post.datetime))+"\n      ")])]),e("g-link",{staticClass:"title",attrs:{to:s.post.path}},[s._v(s._s(s.post.series?s.post.series[0].title+"系列"+s.post.seriesIndex+" - ":"")+s._s(s.post.title))]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"desc",domProps:{innerHTML:s._s(s.post.description+"...")}}),e("g-link",{staticClass:"read",attrs:{to:s.post.path}},[s._v("繼續閱讀")])],1)])}),[],!1,null,"228223cc",null);t.a=i.exports},323:function(s,t,e){var a={"./af":193,"./af.js":193,"./ar":194,"./ar-dz":195,"./ar-dz.js":195,"./ar-kw":196,"./ar-kw.js":196,"./ar-ly":197,"./ar-ly.js":197,"./ar-ma":198,"./ar-ma.js":198,"./ar-sa":199,"./ar-sa.js":199,"./ar-tn":200,"./ar-tn.js":200,"./ar.js":194,"./az":201,"./az.js":201,"./be":202,"./be.js":202,"./bg":203,"./bg.js":203,"./bm":204,"./bm.js":204,"./bn":205,"./bn.js":205,"./bo":206,"./bo.js":206,"./br":207,"./br.js":207,"./bs":208,"./bs.js":208,"./ca":209,"./ca.js":209,"./cs":210,"./cs.js":210,"./cv":211,"./cv.js":211,"./cy":212,"./cy.js":212,"./da":213,"./da.js":213,"./de":214,"./de-at":215,"./de-at.js":215,"./de-ch":216,"./de-ch.js":216,"./de.js":214,"./dv":217,"./dv.js":217,"./el":218,"./el.js":218,"./en-SG":219,"./en-SG.js":219,"./en-au":220,"./en-au.js":220,"./en-ca":221,"./en-ca.js":221,"./en-gb":222,"./en-gb.js":222,"./en-ie":223,"./en-ie.js":223,"./en-il":224,"./en-il.js":224,"./en-nz":225,"./en-nz.js":225,"./eo":226,"./eo.js":226,"./es":227,"./es-do":228,"./es-do.js":228,"./es-us":229,"./es-us.js":229,"./es.js":227,"./et":230,"./et.js":230,"./eu":231,"./eu.js":231,"./fa":232,"./fa.js":232,"./fi":233,"./fi.js":233,"./fo":234,"./fo.js":234,"./fr":235,"./fr-ca":236,"./fr-ca.js":236,"./fr-ch":237,"./fr-ch.js":237,"./fr.js":235,"./fy":238,"./fy.js":238,"./ga":239,"./ga.js":239,"./gd":240,"./gd.js":240,"./gl":241,"./gl.js":241,"./gom-latn":242,"./gom-latn.js":242,"./gu":243,"./gu.js":243,"./he":244,"./he.js":244,"./hi":245,"./hi.js":245,"./hr":246,"./hr.js":246,"./hu":247,"./hu.js":247,"./hy-am":248,"./hy-am.js":248,"./id":249,"./id.js":249,"./is":250,"./is.js":250,"./it":251,"./it-ch":252,"./it-ch.js":252,"./it.js":251,"./ja":253,"./ja.js":253,"./jv":254,"./jv.js":254,"./ka":255,"./ka.js":255,"./kk":256,"./kk.js":256,"./km":257,"./km.js":257,"./kn":258,"./kn.js":258,"./ko":259,"./ko.js":259,"./ku":260,"./ku.js":260,"./ky":261,"./ky.js":261,"./lb":262,"./lb.js":262,"./lo":263,"./lo.js":263,"./lt":264,"./lt.js":264,"./lv":265,"./lv.js":265,"./me":266,"./me.js":266,"./mi":267,"./mi.js":267,"./mk":268,"./mk.js":268,"./ml":269,"./ml.js":269,"./mn":270,"./mn.js":270,"./mr":271,"./mr.js":271,"./ms":272,"./ms-my":273,"./ms-my.js":273,"./ms.js":272,"./mt":274,"./mt.js":274,"./my":275,"./my.js":275,"./nb":276,"./nb.js":276,"./ne":277,"./ne.js":277,"./nl":278,"./nl-be":279,"./nl-be.js":279,"./nl.js":278,"./nn":280,"./nn.js":280,"./pa-in":281,"./pa-in.js":281,"./pl":282,"./pl.js":282,"./pt":283,"./pt-br":284,"./pt-br.js":284,"./pt.js":283,"./ro":285,"./ro.js":285,"./ru":286,"./ru.js":286,"./sd":287,"./sd.js":287,"./se":288,"./se.js":288,"./si":289,"./si.js":289,"./sk":290,"./sk.js":290,"./sl":291,"./sl.js":291,"./sq":292,"./sq.js":292,"./sr":293,"./sr-cyrl":294,"./sr-cyrl.js":294,"./sr.js":293,"./ss":295,"./ss.js":295,"./sv":296,"./sv.js":296,"./sw":297,"./sw.js":297,"./ta":298,"./ta.js":298,"./te":299,"./te.js":299,"./tet":300,"./tet.js":300,"./tg":301,"./tg.js":301,"./th":302,"./th.js":302,"./tl-ph":303,"./tl-ph.js":303,"./tlh":304,"./tlh.js":304,"./tr":305,"./tr.js":305,"./tzl":306,"./tzl.js":306,"./tzm":307,"./tzm-latn":308,"./tzm-latn.js":308,"./tzm.js":307,"./ug-cn":309,"./ug-cn.js":309,"./uk":310,"./uk.js":310,"./ur":311,"./ur.js":311,"./uz":312,"./uz-latn":313,"./uz-latn.js":313,"./uz.js":312,"./vi":314,"./vi.js":314,"./x-pseudo":315,"./x-pseudo.js":315,"./yo":316,"./yo.js":316,"./zh-cn":317,"./zh-cn.js":317,"./zh-hk":318,"./zh-hk.js":318,"./zh-tw":319,"./zh-tw.js":319};function n(s){var t=r(s);return e(t)}function r(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}n.keys=function(){return Object.keys(a)},n.resolve=r,s.exports=n,n.id=323},331:function(s,t,e){},332:function(s,t,e){},333:function(s,t){},378:function(s,t,e){"use strict";var a=e(331);e.n(a).a},379:function(s,t,e){"use strict";var a=e(332);e.n(a).a},380:function(s,t,e){"use strict";var a=e(333),n=e.n(a);t.default=n.a},387:function(s,t,e){"use strict";e.r(t);var a=e(322),n=(e(35),e(148),{name:"pagination",props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{isFirstPage:function(s,t){return 1==s},isLastPage:function(s,t){return s==t},isCurrentPage:function(s,t){return s==t},nextPage:function(s,t){return"".concat(this.baseUrl,"/").concat(s+1)},previousPage:function(s,t){return 2===s?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(s-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var s=[],t=this.startPage;t<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);t+=1)s.push({name:t,isDisabled:t===this.currentPage,link:1===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t)});return s}}}),r=(e(378),e(21)),i={components:{Pagination:Object(r.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",{staticClass:"pagination flex-c"},[s.isFirstPage(s.currentPage,s.totalPages)?s._e():e("g-link",{staticClass:"prev-btn page-link",attrs:{to:s.previousPage(s.currentPage,s.totalPages),tabindex:"-1"}},[s._v("«")]),s._l(s.pages,(function(t){return e("g-link",{key:t.name,staticClass:"pagi",class:[s.isCurrentPage(s.currentPage,t.name)?"active":""],attrs:{to:t.link,"aria-label":t.name,"aria-current":t.name}},[s._v(s._s(t.name))])})),s.isLastPage(s.currentPage,s.totalPages)?s._e():e("g-link",{staticClass:"next-btn",attrs:{to:s.nextPage(s.currentPage,s.totalPages),tabindex:"-1"}},[s._v("»")])],2)}),[],!1,null,"008a18ec",null).exports,PostList:a.a},computed:{},metaInfo:function(){return{title:this.$page.tag.title,meta:[{name:"title",content:this.$page.tag.title}]}},created:function(){}},o=(e(379),e(380)),c=Object(r.a)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("Layout",[e("div",{staticClass:"container"},[e("div",{staticClass:"mx-4 sm:mx-0"},[e("div",{staticClass:"block-title"},[s._v(s._s(s.$page.tag.title)+"相關")]),e("p",{staticClass:"text-gray-700 text-xl"},[s._v("\n        共有\n        "),e("span",{staticClass:"self-center"},[s._v(s._s(s.$page.tag.belongsTo.totalCount)+"篇文章")])])]),e("div",{staticClass:"flex wrap"},s._l(s.$page.tag.belongsTo.edges,(function(s){return e("PostList",{key:s.node.id,attrs:{post:s.node}})})),1),s.$page.tag.belongsTo.pageInfo.totalPages>1?e("Pagination",{attrs:{baseUrl:s.$page.tag.path,currentPage:s.$page.tag.belongsTo.pageInfo.currentPage,totalPages:s.$page.tag.belongsTo.pageInfo.totalPages,maxVisibleButtons:5}}):s._e()],1)])}),[],!1,null,"27f8f08f",null);"function"==typeof o.default&&Object(o.default)(c);t.default=c.exports}}]);