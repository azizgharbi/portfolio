(function(t){function e(e){for(var a,o,l=e[0],r=e[1],c=e[2],d=0,p=[];d<l.length;d++)o=l[d],i[o]&&p.push(i[o][0]),i[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,l=1;l<s.length;l++){var r=s[l];0!==i[r]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={1:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;n.push([8,0]),s()})({"0JQA":function(t,e,s){},"1pyR":function(t,e,s){},8:function(t,e,s){t.exports=s("Vtdi")},AJcS:function(t,e,s){},AK6i:function(t,e,s){},IlwN:function(t,e,s){"use strict";var a=s("vK4D"),i=s.n(a);i.a},JQGV:function(t,e,s){},MmNg:function(t,e,s){"use strict";var a=s("0JQA"),i=s.n(a);i.a},"Ri+r":function(t,e,s){"use strict";var a=s("JQGV"),i=s.n(a);i.a},Vtdi:function(t,e,s){"use strict";s.r(e);s("VRzm");var a=s("Kw5r"),i=s("P6ep"),n=s.n(i),o=(s("jgpq"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header",{attrs:{portfolioName:"aziz Gharbi"}}),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-fifth"},[s("Sidebar")],1),s("div",{staticClass:"column"},[s("router-view")],1)]),s("Footer")],1)}),l=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[t._m(0),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[t._v(t._s(t.portfolioName))]),s("small",[s("router-link",{attrs:{to:{name:"login"}}},[t._v("\n            @aziz_grh\n            ")])],1),s("br"),t._v("\n          Developer, Passionate about learning new technologies and especially the open source.\n          "),s("strong",[t._v("JavaScript")]),t._v(" and "),s("strong",[t._v("linux")]),t._v(" lover.\n        ")])]),t._m(1)])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:"https://pbs.twimg.com/profile_images/1005230690865119232/vBUCb1Jo_400x400.jpg",alt:"Me"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[s("a",{staticClass:"level-item",attrs:{"aria-label":"like"}},[s("span",{staticClass:"icon is-small"},[s("a",{attrs:{href:"https://twitter.com/aziz_grh"}},[s("i",{staticClass:"fab fa-twitter"})])])]),s("a",{staticClass:"level-item",attrs:{"aria-label":"like"}},[s("span",{staticClass:"icon is-small"},[s("a",{attrs:{href:"http://github.com/azizgharbi"}},[s("i",{staticClass:"fab fa-github"})])])]),s("a",{staticClass:"level-item",attrs:{"aria-label":"like"}},[s("span",{staticClass:"icon is-small"},[s("a",{attrs:{href:"https://www.linkedin.com/in/aziz-gharbi-3b6397137/"}},[s("i",{staticClass:"fab fa-linkedin-in"})])])])])])}],u=(s("pIFo"),s("iqUP")),d=s.n(u),p={apiKey:"AIzaSyAxGipdc4vFGs0352cow-QZ9K4nrOmSolQ",authDomain:"portfolio-6105d.firebaseapp.com",databaseURL:"https://portfolio-6105d.firebaseio.com",projectId:"portfolio-6105d",storageBucket:"portfolio-6105d.appspot.com",messagingSenderId:"68792222551"},m=d.a.initializeApp(p),f={name:"Header",data:function(){return{error:{}}},props:{portfolioName:String},computed:{user:function(){return m.auth().currentUser}},methods:{signOut:function(){var t=this;m.auth().signOut().then(function(){t.$router.replace("/login")}).catch(function(e){t.error=e})}}},v=f,h=s("KHd+"),b=Object(h["a"])(v,r,c,!1,null,null,null),C=b.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[t._v("Build")]),t._v(" with "),s("i",{staticClass:"fas fa-heart"}),t._v(". The source code is on Github.\n      ")])])])])}],w={name:"Footer"},k=w,y=(s("qAaX"),Object(h["a"])(k,g,_,!1,null,null,null)),x=y.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"menu"},[s("p",{staticClass:"menu-label"},[t._v("\n      Somthing\n   ")]),s("ul",{staticClass:"menu-list"},[s("li",[s("router-link",{attrs:{to:{name:"home"}}},[t._v("home")])],1),s("li",[s("router-link",{attrs:{to:{name:"blog"}}},[t._v(" Blog ")])],1)])])},O=[],$={name:"Sidebar"},j=$,P=(s("MmNg"),Object(h["a"])(j,E,O,!1,null,null,null)),S=P.exports,q={name:"app",components:{Header:C,Footer:x,Sidebar:S}},A=q,T=Object(h["a"])(A,o,l,!1,null,null,null),z=T.exports,D=s("jE9Z"),R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},t._l(t.posts,function(e){return s("div",{key:e.id,staticClass:"card"},[s("div",{staticClass:"card-content"},[s("p",{staticClass:"title"},[t._v("\n      "+t._s(e.title)+"\n    ")])]),s("footer",{staticClass:"card-footer"},[s("p",{staticClass:"card-footer-item"},[s("span",[s("router-link",{staticClass:"button is-link is-small",attrs:{to:{name:"details",params:{id:e.id}}}},[t._v("\n          Read more  "),s("i",{staticClass:"fas fa-angle-right"})])],1)])])])}))])},N=[],J=s("yT7P"),K=m.database(),G=K.ref("posts"),I={name:"Posts",data:function(){return{posts:[]}},created:function(){var t=this;G.on("child_added",function(e){return t.posts.push(Object(J["a"])({},e.val(),{id:e.key}))})}},M=I,B=(s("uT0a"),Object(h["a"])(M,R,N,!1,null,null,null)),Q=B.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.post.description)}}),s("router-link",{staticClass:"button is-link is-small",attrs:{to:{name:"home"}}},[s("i",{staticClass:"fas fa-angle-left"}),t._v("   Go back \n")])],1)},H=[],V={name:"Details",data:function(){return{post:null}},created:function(){var t=this;G.child(this.$route.params.id).once("value",function(e){t.post=e.val()})}},U=V,Z=Object(h["a"])(U,F,H,!1,null,null,null),L=Z.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-gapless is-multiline is-mobile project"},t._l(t.projects,function(e){return e.fork?t._e():s("div",{key:e.id,staticClass:"column is-one-third "},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("p",{staticClass:"title"},[t._v("\n     "+t._s(e.name)+"\n    ")])]),s("footer",{staticClass:"card-footer"},[s("p",{staticClass:"card-footer-item"},[s("span",[s("a",{staticClass:"button is-link is-small",attrs:{href:e.html_url,target:"_blank"}},[t._v(" check code  "),s("i",{staticClass:"fas fa-angle-right"})])])])])])])}))])])},W=[],Y=s("vDqi"),tt=s.n(Y),et={name:"Github",data:function(){return{projects:[]}},created:function(){var t=this;tt.a.get("https://api.github.com/users/azizgharbi/repos").then(function(e){t.projects=e.data})}},st=et,at=(s("IlwN"),Object(h["a"])(st,X,W,!1,null,null,null)),it=at.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("form",{on:{submit:function(e){e.preventDefault(),t.addPost()}}},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Title")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",attrs:{type:"text",placeholder:"Title..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Description")]),s("div",{staticClass:"control"},[s("quill-editor",{ref:"myTextEditor",attrs:{config:t.editorOption},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)]),t._m(0)]),s("router-link",{staticClass:"button is-link is-small",attrs:{to:{name:"show"}}},[t._v("\n          show all posts  "),s("i",{staticClass:"fas fa-angle-right"})])],1)])},ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field is-grouped is-pulled-right"},[s("div",{staticClass:"control"},[s("input",{staticClass:"button is-link",attrs:{type:"submit",value:"Submit"}})])])}],lt=s("lT11"),rt=(s("gJae"),{name:"create",data:function(){return{title:null,description:null,editorOption:{debug:"info",modules:{toolbar:!1},placeholder:"Compose an epic...",readOnly:!0,theme:"snow"}}},components:{quillEditor:lt["quillEditor"]},methods:{addPost:function(){this.title&&this.description?(G.push().set({title:this.title,description:this.description}),this.title="",this.description="",this.$toast.open("Post created")):this.$toast.open("Title and description are required")}}}),ct=rt,ut=(s("kKZB"),Object(h["a"])(ct,nt,ot,!1,null,null,null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("b-tabs",[s("b-tab-item",{attrs:{label:"Table"}},[s("b-table",{attrs:{data:t.data,paginated:"","per-page":"5","checked-rows":t.checkedRows,checkable:""},on:{"update:checkedRows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b-table-column",{attrs:{field:"title",label:"Posts title"}},[t._v("\n            "+t._s(e.row.title)+"\n        ")]),s("b-table-column",{attrs:{label:"Action"}},[s("router-link",{staticClass:"button",attrs:{to:{name:"edit",params:{id:e.row.id}}}},[s("i",{staticClass:"fas fa-edit"}),t._v("  Edit")])],1)]}}])},[s("template",{slot:"bottom-left"},[t.checkedRows.length?s("a",{staticClass:"button is-danger",on:{click:function(e){t.deletePosts()}}},[s("i",{staticClass:"fas fa-trash-alt"}),t._v(" Delete ")]):t._e()])],2)],1)],1),s("router-link",{staticClass:"button is-link is-small",attrs:{to:{name:"create"}}},[t._v("\n        Create more  "),s("i",{staticClass:"fas fa-angle-right"})])],1)])},mt=[],ft=(s("rGqo"),{data:function(){return{data:[],checkedRows:[]}},methods:{deletePosts:function(){var t=this;this.$dialog.confirm({message:"Continue on this action?",onConfirm:function(){t.checkedRows.forEach(function(e){G.child(e.id).remove(),t.data.splice(e.id,1)}),t.$toast.open("Post Deleted")}})}},created:function(){var t=this;G.on("child_added",function(e){return t.data.push(Object(J["a"])({},e.val(),{id:e.key}))})}}),vt=ft,ht=Object(h["a"])(vt,pt,mt,!1,null,null,null),bt=ht.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("form",{on:{submit:function(e){e.preventDefault(),t.editPost()}}},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Title")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Title..."},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Description")]),s("div",{staticClass:"control"},[s("quill-editor",{ref:"myTextEditor",attrs:{config:t.editorOption},model:{value:t.post.description,callback:function(e){t.$set(t.post,"description",e)},expression:"post.description"}})],1)]),t._m(0)]),s("router-link",{staticClass:"button is-link is-small",attrs:{to:{name:"show"}}},[t._v("\n          show all posts  "),s("i",{staticClass:"fas fa-angle-right"})])],1)])},gt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field is-grouped is-pulled-right"},[s("div",{staticClass:"control"},[s("input",{staticClass:"button is-link",attrs:{type:"submit",value:"Submit"}})])])}],_t={name:"edit",data:function(){return{post:{},editorOption:{debug:"info",modules:{toolbar:!1},placeholder:"Compose an epic...",readOnly:!0,theme:"snow"}}},components:{quillEditor:lt["quillEditor"]},methods:{editPost:function(){this.post.title&&this.post.description?(G.child(this.$route.params.id).update({title:this.post.title,description:this.post.description}),this.$toast.open("Post edited")):this.$toast.open("Title and description are required")}},created:function(){var t=this;G.child(this.$route.params.id).once("value",function(e){t.post=e.val()})}},wt=_t,kt=(s("Ri+r"),Object(h["a"])(wt,Ct,gt,!1,null,null,null)),yt=kt.exports,xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("form",{on:{submit:function(e){e.preventDefault(),t.signIn()}}},[s("div",{staticClass:"columns is-mobile"},[s("div",{staticClass:"column is-8"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email or Phone")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter your email or phone..."},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"help is-danger"},[t._v(t._s(t.error.message))])])])]),s("div",{staticClass:"columns is-mobile"},[s("div",{staticClass:"column is-8"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Enter your password..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])])]),t._m(0)])])])},Et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-mobile"},[s("div",{staticClass:"column is-8"},[s("div",{staticClass:"field is-grouped is-pulled-right"},[s("div",{staticClass:"control"},[s("input",{staticClass:"button is-link",attrs:{type:"submit",value:"Login"}})])])])])}],Ot={name:"login",data:function(){return{email:null,password:null,error:{}}},components:{},methods:{signIn:function(){var t=this;m.auth().signInWithEmailAndPassword(this.email,this.password).then(function(){t.$router.replace("/dashboard/show")}).catch(function(e){t.error=e})}}},$t=Ot,jt=Object(h["a"])($t,xt,Et,!1,null,null,null),Pt=jt.exports;a["a"].use(D["a"]);var St=[{path:"",name:"home",component:it},{path:"/blog",name:"blog",component:Q},{path:"/post/:id",name:"details",component:L},{path:"/dashboard/create",name:"create",component:dt,meta:{requiresAuth:!0}},{path:"/dashboard/show",name:"show",component:bt,meta:{requiresAuth:!0}},{path:"/dashboard/edit/:id",name:"edit",component:yt,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Pt}],qt=new D["a"]({mode:"history",routes:St}),At=null;m.auth().onAuthStateChanged(function(t){At=t||null}),qt.beforeEach(function(t,e,s){var a=t.matched.some(function(t){return t.meta.requiresAuth});a&&!At?s("/login"):s()}),a["a"].config.productionTip=!1,a["a"].use(n.a),new a["a"]({router:qt,render:function(t){return t(z)}}).$mount("#app")},kKZB:function(t,e,s){"use strict";var a=s("AJcS"),i=s.n(a);i.a},qAaX:function(t,e,s){"use strict";var a=s("AK6i"),i=s.n(a);i.a},uT0a:function(t,e,s){"use strict";var a=s("1pyR"),i=s.n(a);i.a},vK4D:function(t,e,s){}});
//# sourceMappingURL=app.5448bf86.js.map