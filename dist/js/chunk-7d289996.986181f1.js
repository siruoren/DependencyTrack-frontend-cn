(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d289996","chunk-14b7663c"],{"08c4":function(t,e,n){"use strict";n("8e6e"),n("ac6a"),n("cadf"),n("456d"),n("7f7f");var a=n("454f"),i=n.n(a),o=n("f921"),r=n.n(o),s=n("d8d6"),c=n.n(s);function u(t){return u="function"==typeof r.a&&"symbol"==typeof c.a?function(t){return typeof t}:function(t){return t&&"function"==typeof r.a&&t.constructor===r.a&&t!==r.a.prototype?"symbol":typeof t},u(t)}var l=n("366e"),d=n.n(l);function p(t,e){if("object"!==u(t)||null===t)return t;var n=t[d.a];if(void 0!==n){var a=n.call(t,e||"default");if("object"!==u(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function f(t){var e=p(t,"string");return"symbol"===u(e)?e:String(e)}function m(t,e,n){return e=f(e),e in t?i()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=n("a026");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={data:function(){return{vueFormatters:[]}},methods:{vueFormatter:function(t){var e="_vue_formatter_".concat(this.vueFormatters.length);return this.vueFormatters.push(v({el:".".concat(e),name:e},t)),'<div class="'.concat(e,'"/>')},vueFormatterInit:function(){if(this.vueFormatters.length)for(var t=this.vueFormatters.length-1;t>=0;t--){var e=this.vueFormatters[t];document.getElementsByClassName(e.name)&&(new h["default"](e),this.vueFormatters.splice(t,1))}}}}},"192b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{attrs:{id:t.id,label:t.label,"label-for":t.id+"-input","label-class":t.labelClasses}},[n("b-input-group",{class:t.inputGroupSize},[t.icon?n("b-input-group-prepend",[n("b-input-group-text",[n("i",{class:t.icon})])],1):t._e(),n("b-form-input",t._g({class:t.inputClasses,attrs:{id:t.id+"-input",type:t.type,placeholder:t.label,state:t.feedbackState(),autocomplete:t.autocomplete,autofocus:t.isFocused,required:t.isRequired,readonly:t.readonly,disabled:t.isDisabled,trim:""},on:{blur:function(e){t.hadFocus=!0}},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},t.inputListeners)),t.tooltip?n("b-input-group-append",[n("b-input-group-text",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.tooltip}},[n("i",{staticClass:"cui-info font-lg"})])],1):t._e()],1),"true"===this.feedback?n("b-form-invalid-feedback",{attrs:{state:t.feedbackState()}},[t._v("\n    "+t._s(t.feedbackText)+"\n  ")]):t._e()],1)},i=[],o=(n("f751"),n("900c")),r={props:{id:String,label:String,value:String,inputGroupSize:String,icon:String,type:String,autocomplete:String,autofocus:String,tooltip:String,feedbackText:String,feedback:String,lazy:String,required:String,readonly:Boolean,disabled:String,state:{default:void 0,type:Boolean}},data:function(){return{isFocused:!1,isRequired:!1,isDisabled:!1,hadFocus:!1}},beforeMount:function(){this.isFocused=o["a"].toBoolean(this.autofocus),this.isRequired=o["a"].toBoolean(this.required),this.isDisabled=o["a"].toBoolean(this.disabled)},computed:{innerValue:{get:function(){return this.value&&this.value.length,this.value},set:function(t){return t}},inputListeners:function(){var t=this;return Object.assign({},this.$listeners,{input:function(e){t.$emit("input",e)}})},inputClasses:function(){return this.isRequired?"required":null},labelClasses:function(){return this.isRequired?"required":null}},methods:{feedbackState:function(){if(!this.isDisabled||this.isRequired)return void 0!==this.state?this.state:o["a"].toBoolean(this.lazy)&&o["a"].toBoolean(this.required)?!!(this.value&&this.value.length>0)||!this.hadFocus&&void 0:!!(this.value&&this.value.length>0)||void 0}}},s=r,c=n("2877"),u=Object(c["a"])(s,a,i,!1,null,null,null);e["a"]=u.exports},"366e":function(t,e,n){t.exports=n("ccb9").f("toPrimitive")},"454f":function(t,e,n){n("46a7");var a=n("584a").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},"456d":function(t,e,n){var a=n("4bf8"),i=n("0d58");n("5eda")("keys",(function(){return function(t){return i(a(t))}}))},"46a7":function(t,e,n){var a=n("63b6");a(a.S+a.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"5eda":function(t,e,n){var a=n("5ca1"),i=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],r={};r[t]=e(n),a(a.S+a.F*o((function(){n(1)})),"Object",r)}},"5f90":function(t,e,n){"use strict";n("fcb2")},7333:function(t,e,n){"use strict";var a=n("9e1e"),i=n("0d58"),o=n("2621"),r=n("52a7"),s=n("4bf8"),c=n("626a"),u=Object.assign;t.exports=!u||n("79e5")((function(){var t={},e={},n=Symbol(),a="abcdefghijklmnopqrst";return t[n]=7,a.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=a}))?function(t,e){var n=s(t),u=arguments.length,l=1,d=o.f,p=r.f;while(u>l){var f,m=c(arguments[l++]),h=d?i(m).concat(d(m)):i(m),b=h.length,v=0;while(b>v)f=h[v++],a&&!p.call(m,f)||(n[f]=m[f])}return n}:u},"7c15":function(t,e,n){"use strict";var a=n("a4c1");e["a"]={data:function(){return{PERMISSIONS:{BOM_UPLOAD:a["b"],VIEW_PORTFOLIO:a["h"],PORTFOLIO_MANAGEMENT:a["e"],ACCESS_MANAGEMENT:a["a"],VIEW_VULNERABILITY:a["i"],VULNERABILITY_ANALYSIS:a["j"],VIEW_POLICY_VIOLATION:a["g"],VULNERABILITY_MANAGEMENT:a["k"],POLICY_VIOLATION_ANALYSIS:a["d"],SYSTEM_CONFIGURATION:a["f"],POLICY_MANAGEMENT:a["c"]}}},computed:{decodedToken:function(){return a["l"](a["m"]())}},methods:{isPermitted:function(t){return a["n"](t,this.decodedToken)},isNotPermitted:function(t){return!a["n"](t,this.decodedToken)}}}},"8e6e":function(t,e,n){var a=n("5ca1"),i=n("990b"),o=n("6821"),r=n("11e9"),s=n("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,a=o(t),c=r.f,u=i(a),l={},d=0;while(u.length>d)n=c(a,e=u[d++]),void 0!==n&&s(l,e,n);return l}})},"990b":function(t,e,n){var a=n("9093"),i=n("2621"),o=n("cb7c"),r=n("7726").Reflect;t.exports=r&&r.ownKeys||function(t){var e=a.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},b793:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"no-body":"",header:t.header}},[n("b-card-body",[n("div",{attrs:{id:"customToolbar"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.createOidcGroupModal",modifiers:{createOidcGroupModal:!0}}],attrs:{size:"md",variant:"outline-primary"}},[n("span",{staticClass:"fa fa-plus"}),t._v("\n        "+t._s(t.$t("admin.create_oidc_group"))+"\n      ")])],1),n("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1),n("create-oidc-group-modal",{on:{refreshTable:t.refreshTable}})],1)},i=[],o=(n("55dd"),n("7f7f"),n("6c36")),r=n.n(o),s=n("900c"),c=n("12cb"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"createOidcGroupModal",size:"md","hide-header-close":"","no-stacking":"",title:t.$t("admin.create_oidc_group")},on:{hide:function(e){return t.resetValues()}},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[n("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return a()}}},[t._v(t._s(t.$t("message.close")))]),n("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){return t.createGroup()}}},[t._v(t._s(t.$t("message.create")))])]}}])},[n("b-input-group-form-input",{attrs:{id:"name-input","input-group-size":"mb-3",type:"text",lazy:"true",required:"true",feedback:"true",autofocus:"false",label:t.$t("admin.oidc_group_name"),"feedback-text":t.$t("admin.required_oidc_group_name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)},l=[],d=n("7c15"),p=n("192b"),f={mixins:[d["a"]],components:{BInputGroupFormInput:p["a"]},data:function(){return{name:null}},methods:{createGroup:function(){var t=this,e="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_GROUP);this.axios.put(e,{name:this.name}).then((function(e){t.$emit("refreshTable"),t.$toastr.s(t.$t("admin.oidc_group_created"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))})),this.$root.$emit("bv::hide::modal","createOidcGroupModal"),this.resetValues()},resetValues:function(){this.name=null}}},m=f,h=n("2877"),b=Object(h["a"])(m,u,l,!1,null,null,null),v=b.exports,g=n("08c4"),_=n("f547"),$=n("e68f"),O=n("c9ca"),S={props:{header:String},mixins:[g["a"]],components:{CreateOidcGroupModal:v},mounted:function(){var t=this;_["a"].$on("admin:oidcgroups:rowUpdate",(function(e,n){t.$refs.table.updateRow({index:e,row:n}),t.$refs.table.expandRow(e)})),_["a"].$on("admin:oidcgroups:rowDeleted",(function(e,n){t.refreshTable()}))},beforeDestroy:function(){_["a"].$off("admin:oidcgroups:rowUpdate"),_["a"].$off("admin:oidcgroups:rowDeleted")},data:function(){var t=this;return{columns:[{title:this.$t("admin.oidc_group_name"),field:"name",sortable:!1,formatter:function(t,e,n){return r.a.inHTMLData(s["a"].valueWithDefault(t,""))}}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"client",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},detailView:!0,detailViewIcon:!1,detailViewByClick:!0,detailFormatter:function(e,n){return t.vueFormatter({i18n:c["a"],template:'\n              <b-row class="expanded-row">\n                  <b-col sm="6">\n                    <b-input-group-form-input id="input-oidcgroup-name" :label="$t(\'admin.oidc_group_name\')" input-group-size="mb-3"\n                                              required="true" type="text" v-model="oidcGroup.name" lazy="true" autofocus="true"\n                                              v-debounce:750ms="updateOidcGroup" :debounce-events="\'keyup\'" />\n                    <b-form-group :label="this.$t(\'admin.mapped_teams\')">\n                      <div class="list-group">\n                        <span v-for="mappedTeam in mappedTeams">\n                          <actionable-list-group-item :value="mappedTeam.name" :delete-icon="true" v-on:actionClicked="removeOidcGroupMapping(mappedTeam)"/>\n                        </span>\n                        <actionable-list-group-item :add-icon="true" v-on:actionClicked="$root.$emit(\'bv::show::modal\', \'selectTeamModal\')"/>\n                      </div>\n                    </b-form-group>\n                  </b-col>\n                  <b-col sm="6">\n                    <div style="text-align:right">\n                       <b-button variant="outline-danger" @click="deleteOidcGroup">{{ $t(\'admin.delete_oidc_group\') }}</b-button>\n                    </div>\n                  </b-col>\n                  <select-team-modal v-on:selection="updateTeamSelection" />\n                </b-row>\n              ',mixins:[d["a"]],components:{ActionableListGroupItem:$["a"],BInputGroupFormInput:p["a"],SelectTeamModal:O["a"]},data:function(){return{oidcGroup:n,mappedTeams:[]}},methods:{updateOidcGroup:function(){var t=this,n="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_GROUP);this.axios.post(n,{uuid:this.oidcGroup.uuid,name:this.oidcGroup.name}).then((function(n){t.team=n.data,_["a"].$emit("admin:oidcgroups:rowUpdate",e,t.team),t.$toastr.s(t.$t("message.updated"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},deleteOidcGroup:function(){var t=this,n="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_GROUP,"/").concat(this.oidcGroup.uuid);this.axios.delete(n).then((function(n){_["a"].$emit("admin:oidcgroups:rowDeleted",e),t.$toastr.s(t.$t("admin.oidc_group_deleted"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},getMappedTeams:function(){var t=this,e="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_GROUP,"/").concat(this.oidcGroup.uuid,"/team");this.axios.get(e).then((function(e){t.mappedTeams=e.data})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},updateTeamSelection:function(t){var e=this;this.$root.$emit("bv::hide::modal","selectTeamModal");for(var n=function(){var n=t[a],i="".concat(e.$api.BASE_URL,"/").concat(e.$api.URL_OIDC_MAPPING);e.axios.put(i,{group:e.oidcGroup.uuid,team:n.uuid}).then((function(t){e.mappedTeams.push(n),e.mappedTeams.sort(),e.$toastr.s(e.$t("message.updated"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},a=0;a<t.length;a++)n()},removeOidcGroupMapping:function(t){var e=this,n="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_GROUP,"/").concat(this.oidcGroup.uuid,"/team/").concat(t.uuid,"/mapping");this.axios.delete(n).then((function(n){for(var a=[],i=0;i<e.mappedTeams.length;i++)e.mappedTeams[i].uuid!==t.uuid&&a.push(e.mappedTeams[i]);e.mappedTeams=a,e.$toastr.s(e.$t("message.updated"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))}},mounted:function(){this.getMappedTeams()}})},onExpandRow:this.vueFormatterInit,toolbar:"#customToolbar",responseHandler:function(t,e){return t.total=e.getResponseHeader("X-Total-Count"),t},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_GROUP)}}},methods:{refreshTable:function(){this.$refs.table.refresh({silent:!0})}}},y=S,T=Object(h["a"])(y,a,i,!1,null,null,null);e["default"]=T.exports},c9ca:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"selectTeamModal",size:"lg","hide-header-close":"","no-stacking":"",title:t.$t("admin.select_team")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[n("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return a()}}},[t._v(t._s(t.$t("message.cancel")))]),n("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){t.$emit("selection",t.$refs.table.getSelections())}}},[t._v(t._s(t.$t("message.select")))])]}}])},[n("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1)},i=[],o=n("6c36"),r=n.n(o),s=n("7c15"),c=n("900c"),u={mixins:[s["a"]],data:function(){return{labelIcon:{dataOn:"✓",dataOff:"✕"},columns:[{field:"state",checkbox:!0,align:"center"},{title:this.$t("admin.team_name"),field:"name",sortable:!0,formatter:function(t,e,n){return r.a.inHTMLData(c["a"].valueWithDefault(t,""))}}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"client",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},responseHandler:function(t,e){return t.total=e.getResponseHeader("X-Total-Count"),t},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_TEAM)}}}},l=u,d=n("2877"),p=Object(d["a"])(l,a,i,!1,null,null,null);e["a"]=p.exports},e68f:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-group-item align-middle"},[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-right action-icon",attrs:{size:"sm",title:t.tooltip},on:{click:function(e){return t.$emit("actionClicked")}}},[this.addIcon?n("span",{staticClass:"fa fa-plus-square"}):t._e(),this.deleteIcon?n("span",{staticClass:"fa fa-trash-o"}):t._e()]),t.$slots&&t.$slots.default&&t.$slots.default[0]?t._t("default"):n("span",[this.href?n("a",{attrs:{href:t.href}},[t._v(t._s(t.value))]):n("span",[t._v(t._s(t.value))]),t._v(" ")])],2)},i=[],o={props:{value:String,tooltip:String,addIcon:Boolean,deleteIcon:Boolean,variant:String,href:String}},r=o,s=(n("5f90"),n("2877")),c=Object(s["a"])(r,a,i,!1,null,"548fa20f",null);e["a"]=c.exports},f751:function(t,e,n){var a=n("5ca1");a(a.S+a.F,"Object",{assign:n("7333")})},fcb2:function(t,e,n){}}]);