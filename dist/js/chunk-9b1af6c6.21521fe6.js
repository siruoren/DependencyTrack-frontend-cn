(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b1af6c6"],{"114c":function(t,e,a){t.exports=a.p+"img/dt-logo-white-text.74c0e8bd.svg"},"192b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-group",{attrs:{id:t.id,label:t.label,"label-for":t.id+"-input","label-class":t.labelClasses}},[a("b-input-group",{class:t.inputGroupSize},[t.icon?a("b-input-group-prepend",[a("b-input-group-text",[a("i",{class:t.icon})])],1):t._e(),a("b-form-input",t._g({class:t.inputClasses,attrs:{id:t.id+"-input",type:t.type,placeholder:t.label,state:t.feedbackState(),autocomplete:t.autocomplete,autofocus:t.isFocused,required:t.isRequired,readonly:t.readonly,disabled:t.isDisabled,trim:""},on:{blur:function(e){t.hadFocus=!0}},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},t.inputListeners)),t.tooltip?a("b-input-group-append",[a("b-input-group-text",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.tooltip}},[a("i",{staticClass:"cui-info font-lg"})])],1):t._e()],1),"true"===this.feedback?a("b-form-invalid-feedback",{attrs:{state:t.feedbackState()}},[t._v("\n    "+t._s(t.feedbackText)+"\n  ")]):t._e()],1)},n=[],r=a("900c"),s={props:{id:String,label:String,value:String,inputGroupSize:String,icon:String,type:String,autocomplete:String,autofocus:String,tooltip:String,feedbackText:String,feedback:String,lazy:String,required:String,readonly:Boolean,disabled:String,state:{default:void 0,type:Boolean}},data:function(){return{isFocused:!1,isRequired:!1,isDisabled:!1,hadFocus:!1}},beforeMount:function(){this.isFocused=r["a"].toBoolean(this.autofocus),this.isRequired=r["a"].toBoolean(this.required),this.isDisabled=r["a"].toBoolean(this.disabled)},computed:{innerValue:{get:function(){return this.value&&this.value.length,this.value},set:function(t){return t}},inputListeners:function(){var t=this;return Object.assign({},this.$listeners,{input:function(e){t.$emit("input",e)}})},inputClasses:function(){return this.isRequired?"required":null},labelClasses:function(){return this.isRequired?"required":null}},methods:{feedbackState:function(){if(!this.isDisabled||this.isRequired)return void 0!==this.state?this.state:r["a"].toBoolean(this.lazy)&&r["a"].toBoolean(this.required)?!!(this.value&&this.value.length>0)||!this.hadFocus&&void 0:!!(this.value&&this.value.length>0)||void 0}}},o=s,l=a("2877"),u=Object(l["a"])(o,i,n,!1,null,null,null);e["a"]=u.exports},"3a91":function(t,e,a){"use strict";a("6c68")},"561d":function(t,e,a){t.exports=a.p+"img/dt-logo-symbol.e68316a7.svg"},"6c68":function(t,e,a){},"73ba":function(t,e,a){},8009:function(t,e,a){"use strict";a("73ba")},e8c5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("DefaultHeader"),a("div",{staticClass:"app-body"},[a("AppSidebar",{attrs:{fixed:""}},[a("SidebarHeader"),a("SidebarForm"),a("SidebarNav",{attrs:{navItems:t.permissibleNav}}),a("SidebarFooter"),a("SidebarMinimizer")],1),a("main",{staticClass:"main"},[a("Breadcrumb",{attrs:{list:t.list}}),a("div",{staticClass:"container-fluid"},[a("router-view")],1)],1)],1),a("DefaultFooter"),a("profile-edit-modal"),a("snapshot-modal")],1)},n=[],r=a("f1fb"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AppHeaderDropdown",{attrs:{right:"","no-caret":""}},[a("template",{slot:"header"},[a("i",{staticClass:"fa fa-user-circle-o",staticStyle:{"font-size":"1.6em"}})]),a("template",{slot:"dropdown"},[a("b-dropdown-header",{staticClass:"text-center",attrs:{boundary:"viewport",tag:"div"}},[t._v("\n      "+t._s(t.$t("message.connected_as"))+"\n      "),a("strong",[t._v(t._s(t.user))])]),t.canUpdateProfile()?a("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.profileEditModal",modifiers:{profileEditModal:!0}}]},[a("i",{staticClass:"fa fa-user text-primary"}),t._v(" "+t._s(t.$t("message.profile_update")))]):t._e(),t.canChangePassword()?a("b-dropdown-item",{attrs:{to:"/change-password"}},[a("i",{staticClass:"fa fa-key text-primary"}),t._v(" "+t._s(t.$t("message.change_password")))]):t._e(),t.canUpdateProfile()||t.canChangePassword()?a("b-dropdown-divider"):t._e(),a("b-dropdown-item",{on:{click:t.logout}},[a("i",{staticClass:"fa fa-sign-out text-primary"}),t._v(" "+t._s(t.$t("message.logout")))])],1)],2)},o=[],l=a("f547"),u=a("a4c1"),c=a("a026"),d=a("cee4"),f={data:function(){return{dtrack:Object,currentUser:Object}},created:function(){var t=this;this.$dtrack?this.dtrack=this.$dtrack:d["a"].get("".concat(c["default"].prototype.$api.BASE_URL,"/").concat(c["default"].prototype.$api.URL_ABOUT)).then((function(e){t.dtrack=e.data})),this.$currentUser?this.currentUser=this.$currentUser:l["a"].$emit("profileUpdated")},mounted:function(){var t=this;l["a"].$on("profileUpdated",(function(){d["a"].get("".concat(c["default"].prototype.$api.BASE_URL,"/").concat(c["default"].prototype.$api.URL_USER_SELF)).then((function(e){t.currentUser=e.data}))}))}},m={name:"DefaultHeaderProfileDropdown",mixins:[f],components:{AppHeaderDropdown:r["g"]},data:function(){return{itemsCount:42,identityProvider:Object(u["l"])(Object(u["m"])()).idp}},computed:{user:function(){return this.currentUser.fullname||this.currentUser.username}},methods:{logout:function(){localStorage.setItem("sessionInvalidate",Date.now().toLocaleString()),localStorage.removeItem("sessionInvalidate"),l["a"].$emit("authenticated",null),this.$router.replace({name:"Login"})},canChangePassword:function(){return"LOCAL"==this.identityProvider},canUpdateProfile:function(){return"LOCAL"==this.identityProvider}}},p=m,h=(a("3a91"),a("2877")),b=Object(h["a"])(p,s,o,!1,null,null,null),v=b.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("AppHeader",{attrs:{fixed:""}},[i("SidebarToggler",{staticClass:"d-lg-none",attrs:{display:"md",mobile:""}}),i("img",{staticClass:"d-lg-inline d-md-none d-sm-none bv-d-xs-down-none",staticStyle:{"margin-left":"10px"},attrs:{src:a("561d"),width:"30",height:"30",alt:"Dependency-Track Logo"}}),i("SidebarToggler",{staticClass:"d-md-down-none",attrs:{display:"lg",defaultOpen:!0}}),i("b-navbar-nav",{staticClass:"ml-auto"},[i("DefaultHeaderProfileDropdown")],1)],1)},_=[],y={name:"DefaultHeader",components:{AsideToggler:r["b"],AppHeader:r["f"],DefaultHeaderProfileDropdown:v,SidebarToggler:r["n"]}},k=y,$=Object(h["a"])(k,g,_,!1,null,null,null),S=$.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("TheFooter",[a("div"),a("div",{staticClass:"ml-auto"},[a("a",{directives:[{name:"b-modal",rawName:"v-b-modal.aboutModal",modifiers:{aboutModal:!0}}],attrs:{href:"#"}},[t._v(t._s(t.dtrack.application))]),t._v(" \n    "),a("span",{staticClass:"mr-1"},[t._v("v"+t._s(t.dtrack.version))])]),a("about-modal")],1)},C=[],x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{id:"aboutModal",size:"lg","hide-header-close":"","no-stacking":"",title:t.$t("message.about")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[i("div",{staticClass:"mx-auto"},[t._v("Copyright © Steve Springett. All Rights Reserved.")]),i("b-button",{attrs:{size:"md",variant:"outline-primary"},on:{click:function(t){return a()}}},[t._v(t._s(t.$t("message.close")))])]}}])},[i("b-row",[i("b-col",[i("img",{attrs:{src:a("114c"),width:"200"}})]),i("b-col",{attrs:{align:"right"}},[i("img",{attrs:{src:a("ff6d"),width:"120"}})])],1),i("hr"),i("p",[t._v("\n    OWASP Dependency-Track is an intelligent Component Analysis platform that allows organizations to identify and reduce risk in the software supply chain.\n  ")]),i("b-row",[i("b-col",[t._v("\n      "+t._s(this.dtrack.application)+" v"+t._s(this.dtrack.version)),i("br"),t._v("\n      Build ID: "+t._s(this.dtrack.uuid)),i("br"),t._v("\n      Built On: "+t._s(t.serverTimestamp)+"\n    ")]),i("b-col",[t._v("\n      Frontend v"+t._s(this.$version.version)),i("br"),t._v("\n      Build ID: "+t._s(this.$version.uuid)),i("br"),t._v("\n      Built On: "+t._s(t.frontendTimestamp)+"\n    ")])],1),i("hr"),i("b-row",[i("b-col",[i("h6",[t._v("Community Resources")]),i("ul",{staticClass:"fa-ul"},[i("li",[i("i",{staticClass:"fa-li fa fa-link",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://dependencytrack.org/"}},[t._v("Website")])]),i("li",[i("i",{staticClass:"fa-li fa fa-book",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://docs.dependencytrack.org/"}},[t._v("Documentation")])]),i("li",[i("i",{staticClass:"fa-li fa fa-github",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://github.com/DependencyTrack"}},[t._v("GitHub")])]),i("li",[i("i",{staticClass:"fa-li fa fa-slack",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://dependencytrack.org/slack"}},[t._v("Slack")]),t._v(" ("),i("a",{attrs:{href:"https://dependencytrack.org/slack/invite"}},[t._v("invite")]),t._v(")")]),i("li",[i("i",{staticClass:"fa-li fa fa-twitter",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://twitter.com/dependencytrack"}},[t._v("Twitter")])]),i("li",[i("i",{staticClass:"fa-li fa fa-link",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://infosec.exchange/@DependencyTrack"}},[t._v("Mastodon")])]),i("li",[i("i",{staticClass:"fa-li fa fa-youtube-play",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://www.youtube.com/c/OWASPDependencyTrack"}},[t._v("YouTube")])])])]),i("b-col",[i("h6",[t._v("Datasource Providers")]),i("ul",{staticClass:"fa-ul"},[i("li",[i("i",{staticClass:"fa-li fa fa-link",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://nvd.nist.gov/"}},[t._v("National Vulnerability Database")])]),i("li",[i("i",{staticClass:"fa-li fa fa-link",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://ossindex.sonatype.org/"}},[t._v("Sonatype OSS Index")])]),i("li",[i("i",{staticClass:"fa-li fa fa-link",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://github.com/advisories"}},[t._v("GitHub Advisories")])]),i("li",[i("i",{staticClass:"fa-li fa fa-link",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://snyk.io/"}},[t._v("Snyk")])]),i("li",[i("i",{staticClass:"fa-li fa fa-link",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://osv.dev/"}},[t._v("OSV")])]),i("li",[i("i",{staticClass:"fa-li fa fa-link",attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"https://vulndb.cyberriskanalytics.com"}},[t._v("VulnDB")])])])])],1)],1)},D=[],A=a("900c"),T={name:"AboutModal",mixins:[f],computed:{serverTimestamp:function(){return A["a"].formatTimestamp(this.dtrack.timestamp,!0)},frontendTimestamp:function(){return A["a"].formatTimestamp(this.$version.timestamp,!0)}}},U=T,O=Object(h["a"])(U,x,D,!1,null,null,null),B=O.exports,E={name:"DefaultFooter",mixins:[f],components:{AboutModal:B,TheFooter:r["e"]}},M=E,P=(a("8009"),Object(h["a"])(M,w,C,!1,null,"d1d5455c",null)),j=P.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{id:"profileEditModal",size:"md","hide-header-close":"","no-stacking":"",title:t.$t("message.profile_update")},on:{show:t.getSelf,hidden:t.resetValues},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var i=e.cancel;return[a("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return i()}}},[t._v(t._s(t.$t("message.close")))]),a("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){return t.updateUser()}}},[t._v(t._s(t.$t("message.update")))])]}}])},[a("b-input-group-form-input",{attrs:{id:"fullname-input","input-group-size":"mb-3",type:"text",lazy:"true",required:"true",feedback:"true",autofocus:"false",label:t.$t("message.fullname"),"feedback-text":t.$t("admin.required_fullname")},model:{value:t.fullname,callback:function(e){t.fullname=e},expression:"fullname"}}),a("b-input-group-form-input",{attrs:{id:"email-input","input-group-size":"mb-3",type:"text",lazy:"true",required:"true",feedback:"true",autofocus:"false",label:t.$t("message.email"),"feedback-text":t.$t("admin.required_email")},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)},z=[],F=a("192b"),H={name:"ProfileEditModal",mixins:[f],components:{BInputGroupFormInput:F["a"]},data:function(){return{username:null,fullname:null,email:null}},methods:{getSelf:function(){this.username=this.currentUser.username,this.fullname=this.currentUser.fullname,this.email=this.currentUser.email},updateUser:function(){var t=this,e="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_USER_MANAGED);this.axios.post(e,{username:this.username,fullname:this.fullname,email:this.email}).then((function(e){l["a"].$emit("profileUpdated"),t.$emit("refreshTable"),t.$toastr.s(t.$t("message.profile_updated"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))})),this.$root.$emit("bv::hide::modal","profileEditModal")},resetValues:function(){this.username=null,this.fullname=null,this.email=null}}},L=H,R=Object(h["a"])(L,q,z,!1,null,null,null),I=R.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{id:"snapshotModal",size:"md","hide-header-close":"","no-stacking":"",title:t.$t("message.snapshot_notification")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[i("b-button",{attrs:{size:"md",variant:"outline-primary"},on:{click:function(t){return a()}}},[t._v(t._s(t.$t("message.close")))])]}}])},[i("b-row",[i("b-col",[i("img",{attrs:{src:a("114c"),width:"200"}})])],1),i("hr"),i("p",[t._v("\n    This version of Dependency-Track is a snapshot release that is dynamically\n    generated from continuous integration or from manually compiling from a branch.\n    It is likely beta-quality software and has not undergone extensive testing.\n    It may contain defects and incomplete features and functionality.\n  ")]),i("p",[t._v("\n    Links to production-quality releases can be found at\n    "),i("a",{attrs:{href:"https://dependencytrack.org/"}},[t._v("https://dependencytrack.org/")])]),i("p",[t._v("\n    Please consider contributing feedback and pull requests to help improve\n    the project. All contributions are appreciated. Visit Dependency-Track on\n    "),i("a",{attrs:{href:"https://github.com/DependencyTrack"}},[t._v("GitHub")]),t._v(" "),i("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]),i("p",[i("strong",[t._v("Do not use snapshot releases on production data.")])])],1)},V=[],G={name:"SnapshotModal"},W=G,J=Object(h["a"])(W,N,V,!1,null,null,null),Y=J.exports;function K(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Q(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return s=t.done,t},e:function(t){o=!0,r=t},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw r}}}}function Q(t,e){if(t){if("string"===typeof t)return X(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?X(t,e):void 0}}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}var Z={name:"DefaultContainer",components:{ProfileEditModal:I,SnapshotModal:Y,AppSidebar:r["h"],AppAside:r["a"],Breadcrumb:r["c"],DefaultHeaderProfileDropdown:v,SidebarForm:r["j"],SidebarFooter:r["i"],SidebarHeader:r["k"],SidebarNav:r["m"],SidebarMinimizer:r["l"],DefaultFooter:j,DefaultHeader:S},data:function(){return{breadcrumbs:[],nav:[{name:this.$t("message.dashboard"),url:"/dashboard",icon:"icon-speedometer",permission:u["h"]},{title:!0,name:this.$t("message.portfolio"),class:"",wrapper:{element:"",attributes:{}},permission:u["h"]},{name:this.$t("message.projects"),url:"/projects",icon:"fa fa-sitemap",permission:u["h"]},{name:this.$t("message.components"),url:"/components",icon:"fa fa-cubes",permission:u["h"]},{name:this.$t("message.vulnerabilities"),url:"/vulnerabilities",icon:"fa fa-shield",permission:u["h"]},{name:this.$t("message.licenses"),url:"/licenses",icon:"fa fa-balance-scale",permission:u["h"]},{title:!0,name:this.$t("message.administration"),class:"",wrapper:{element:"",attributes:{}},permission:u["f"]},{name:this.$t("message.policy_management"),url:"/policy",icon:"fa fa-list-alt",permission:u["c"]},{name:this.$t("message.administration"),url:"/admin",icon:"fa fa-cogs",permission:u["f"]}]}},methods:{generateBreadcrumbs:function(t,e,a,i){var n=this.$t(this.$route.meta.i18n),r=this.$route.meta.sectionPath;return t&&e&&a&&i?[{path:"",name:this.$t("message.home")},{path:r,name:n},{name:e,params:{uuid:a},meta:{label:i}},{name:t,active:!0}]:t?[{path:"",name:this.$t("message.home")},{path:r,name:n},{name:t,active:!0}]:[{path:"",name:this.$t("message.home")},{path:r,name:n}]}},mounted:function(){this.$dtrack&&this.$dtrack.version.includes("SNAPSHOT")&&this.$root.$emit("bv::show::modal","snapshotModal")},computed:{name:function(){return this.$route.name},list:function(){return 0===this.breadcrumbs.length?this.generateBreadcrumbs():this.breadcrumbs},permissibleNav:function(){var t,e=u["l"](u["m"]()),a=[],i=K(this.nav);try{for(i.s();!(t=i.n()).done;){var n=t.value;null!==n.permission&&u["n"](n.permission,e)&&a.push(n)}}catch(r){i.e(r)}finally{i.f()}return a}},created:function(){var t=this;l["a"].$on("crumble",(function(){t.breadcrumbs=[]})),l["a"].$on("addCrumb",(function(e,a,i,n){t.breadcrumbs=e?t.generateBreadcrumbs(e,a,i,n):[]}))}},tt=Z,et=Object(h["a"])(tt,i,n,!1,null,null,null);e["default"]=et.exports},ff6d:function(t,e,a){t.exports=a.p+"img/owasp-logo-white.6bde2f32.svg"}}]);