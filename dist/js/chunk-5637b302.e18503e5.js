(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5637b302","chunk-14b7663c"],{"08c4":function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("cadf"),a("456d"),a("7f7f");var n=a("454f"),i=a.n(n),o=a("f921"),s=a.n(o),r=a("d8d6"),c=a.n(r);function u(t){return u="function"==typeof s.a&&"symbol"==typeof c.a?function(t){return typeof t}:function(t){return t&&"function"==typeof s.a&&t.constructor===s.a&&t!==s.a.prototype?"symbol":typeof t},u(t)}var l=a("366e"),d=a.n(l);function p(t,e){if("object"!==u(t)||null===t)return t;var a=t[d.a];if(void 0!==a){var n=a.call(t,e||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function m(t){var e=p(t,"string");return"symbol"===u(e)?e:String(e)}function f(t,e,a){return e=m(e),e in t?i()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h=a("a026");function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]={data:function(){return{vueFormatters:[]}},methods:{vueFormatter:function(t){var e="_vue_formatter_".concat(this.vueFormatters.length);return this.vueFormatters.push(v({el:".".concat(e),name:e},t)),'<div class="'.concat(e,'"/>')},vueFormatterInit:function(){if(this.vueFormatters.length)for(var t=this.vueFormatters.length-1;t>=0;t--){var e=this.vueFormatters[t];document.getElementsByClassName(e.name)&&(new h["default"](e),this.vueFormatters.splice(t,1))}}}}},"192b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-group",{attrs:{id:t.id,label:t.label,"label-for":t.id+"-input","label-class":t.labelClasses}},[a("b-input-group",{class:t.inputGroupSize},[t.icon?a("b-input-group-prepend",[a("b-input-group-text",[a("i",{class:t.icon})])],1):t._e(),a("b-form-input",t._g({class:t.inputClasses,attrs:{id:t.id+"-input",type:t.type,placeholder:t.label,state:t.feedbackState(),autocomplete:t.autocomplete,autofocus:t.isFocused,required:t.isRequired,readonly:t.readonly,disabled:t.isDisabled,trim:""},on:{blur:function(e){t.hadFocus=!0}},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},t.inputListeners)),t.tooltip?a("b-input-group-append",[a("b-input-group-text",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.tooltip}},[a("i",{staticClass:"cui-info font-lg"})])],1):t._e()],1),"true"===this.feedback?a("b-form-invalid-feedback",{attrs:{state:t.feedbackState()}},[t._v("\n    "+t._s(t.feedbackText)+"\n  ")]):t._e()],1)},i=[],o=(a("f751"),a("900c")),s={props:{id:String,label:String,value:String,inputGroupSize:String,icon:String,type:String,autocomplete:String,autofocus:String,tooltip:String,feedbackText:String,feedback:String,lazy:String,required:String,readonly:Boolean,disabled:String,state:{default:void 0,type:Boolean}},data:function(){return{isFocused:!1,isRequired:!1,isDisabled:!1,hadFocus:!1}},beforeMount:function(){this.isFocused=o["a"].toBoolean(this.autofocus),this.isRequired=o["a"].toBoolean(this.required),this.isDisabled=o["a"].toBoolean(this.disabled)},computed:{innerValue:{get:function(){return this.value&&this.value.length,this.value},set:function(t){return t}},inputListeners:function(){var t=this;return Object.assign({},this.$listeners,{input:function(e){t.$emit("input",e)}})},inputClasses:function(){return this.isRequired?"required":null},labelClasses:function(){return this.isRequired?"required":null}},methods:{feedbackState:function(){if(!this.isDisabled||this.isRequired)return void 0!==this.state?this.state:o["a"].toBoolean(this.lazy)&&o["a"].toBoolean(this.required)?!!(this.value&&this.value.length>0)||!this.hadFocus&&void 0:!!(this.value&&this.value.length>0)||void 0}}},r=s,c=a("2877"),u=Object(c["a"])(r,n,i,!1,null,null,null);e["a"]=u.exports},"2cd5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":"",header:t.header}},[a("b-card-body",[a("div",{attrs:{id:"customToolbar"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.createTeamModal",modifiers:{createTeamModal:!0}}],attrs:{size:"md",variant:"outline-primary"}},[a("span",{staticClass:"fa fa-plus"}),t._v(" "+t._s(t.$t("admin.create_team"))+"\n      ")])],1),a("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1),a("create-team-modal",{on:{refreshTable:t.refreshTable}})],1)},i=[],o=(a("55dd"),a("7f7f"),a("6c36")),s=a.n(o),r=a("900c"),c=a("12cb"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{id:"createTeamModal",size:"md","hide-header-close":"","no-stacking":"",title:t.$t("admin.create_team")},on:{hide:function(e){return t.resetValues()}},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return n()}}},[t._v(t._s(t.$t("message.close")))]),a("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){return t.createUser()}}},[t._v(t._s(t.$t("message.create")))])]}}])},[a("b-input-group-form-input",{attrs:{id:"name-input","input-group-size":"mb-3",type:"text",lazy:"true",required:"true",feedback:"true",autofocus:"false",label:t.$t("admin.team_name"),"feedback-text":t.$t("admin.required_team_name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)},l=[],d=a("7c15"),p=a("192b"),m={mixins:[d["a"]],components:{BInputGroupFormInput:p["a"]},data:function(){return{name:null}},methods:{createUser:function(){var t=this,e="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_TEAM);this.axios.put(e,{name:this.name}).then((function(e){t.$emit("refreshTable"),t.$toastr.s(t.$t("admin.team_created"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))})),this.$root.$emit("bv::hide::modal","createTeamModal"),this.resetValues()},resetValues:function(){this.name=null}}},f=m,h=a("2877"),b=Object(h["a"])(f,u,l,!1,null,null,null),v=b.exports,g=a("08c4"),$=a("f547"),_=a("e68f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{id:"selectLdapGroupModal",size:"lg","hide-header-close":"","no-stacking":"",title:t.$t("admin.select_ldap_group")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return n()}}},[t._v(t._s(t.$t("message.cancel")))]),a("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){t.$emit("selection",t.$refs.table.getSelections())}}},[t._v(t._s(t.$t("message.select")))])]}}])},[a("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1)},S=[],O={mixins:[d["a"]],data:function(){return{labelIcon:{dataOn:"✓",dataOff:"✕"},columns:[{field:"state",checkbox:!0,align:"center"},{title:this.$t("admin.distinguished_name"),field:"dn",sortable:!1,formatter:function(t,e,a){return s.a.inHTMLData(r["a"].valueWithDefault(t,""))}}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"server",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},responseHandler:function(t,e){if(t){for(var a=[],n=0;n<t.length;n++)a[n]={dn:t[n]};return a.total=e.getResponseHeader("X-Total-Count"),a}return t={},t.total=0,t},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_LDAP_GROUPS)}}}},U=O,L=Object(h["a"])(U,y,S,!1,null,null,null),k=L.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{id:"selectOidcGroupModal",size:"lg","hide-header-close":"","no-stacking":"",title:t.$t("admin.select_oidc_group")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return n()}}},[t._v(t._s(t.$t("message.cancel")))]),a("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){t.$emit("selection",t.$refs.table.getSelections())}}},[t._v(t._s(t.$t("message.select")))])]}}])},[a("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1)},w=[],R={mixins:[d["a"]],data:function(){return{labelIcon:{dataOn:"✓",dataOff:"✕"},columns:[{field:"state",checkbox:!0,align:"center"},{title:this.$t("admin.oidc_group_name"),field:"name",sortable:!1,formatter:function(t,e,a){return s.a.inHTMLData(r["a"].valueWithDefault(t,""))}}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"server",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},responseHandler:function(t,e){return t?(t.total=e.getResponseHeader("X-Total-Count"),t):(t={},t.total=0,t)},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_GROUP)}}}},E=R,A=Object(h["a"])(E,G,w,!1,null,null,null),P=A.exports,T=a("ae28"),I=a("f1fb"),M={props:{header:String},mixins:[g["a"]],components:{CreateTeamModal:v},mounted:function(){var t=this;$["a"].$on("admin:teams:rowUpdate",(function(e,a){t.$refs.table.updateRow({index:e,row:a}),t.$refs.table.expandRow(e)})),$["a"].$on("admin:teams:rowDeleted",(function(e,a){t.refreshTable()}))},beforeDestroy:function(){$["a"].$off("admin:teams:rowUpdate"),$["a"].$off("admin:teams:rowDeleted")},data:function(){var t=this;return{columns:[{title:this.$t("admin.team_name"),field:"name",sortable:!1,formatter:function(t,e,a){return s.a.inHTMLData(r["a"].valueWithDefault(t,""))}},{title:this.$t("admin.api_keys"),field:"apiKeys",sortable:!1,formatter:function(t,e,a){return t?s.a.inHTMLData(r["a"].valueWithDefault(t.length,"0")):0}},{title:this.$t("admin.members"),field:"members",sortable:!1,formatter:function(t,e,a){var n=0;return e.managedUsers&&(n+=e.managedUsers.length),e.ldapUsers&&(n+=e.ldapUsers.length),n}}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"client",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},detailView:!0,detailViewIcon:!1,detailViewByClick:!0,detailFormatter:function(e,a){return t.vueFormatter({i18n:c["a"],template:'\n              <b-row class="expanded-row">\n                <b-col sm="6">\n                  <b-input-group-form-input id="input-team-name" :label="$t(\'admin.team_name\')" input-group-size="mb-3"\n                                            required="true" type="text" v-model="name" lazy="true" autofocus="true"\n                                            v-debounce:750ms="updateTeam" :debounce-events="\'keyup\'" />\n                  <b-form-group :label="this.$t(\'admin.api_keys\')">\n                    <div class="list-group">\n                      <span v-for="apiKey in apiKeys">\n                        <actionable-list-group-item :value="apiKey.key" :delete-icon="true" v-on:actionClicked="removeApiKey(apiKey)"/>\n                      </span>\n                      <actionable-list-group-item :add-icon="true" v-on:actionClicked="createApiKey()"/>\n                    </div>\n                  </b-form-group>\n                  <b-form-group :label="this.$t(\'admin.permissions\')">\n                    <div class="list-group">\n                      <span v-for="permission in permissions">\n                        <actionable-list-group-item :value="permission.name" :delete-icon="true" v-on:actionClicked="removePermission(permission)"/>\n                      </span>\n                      <actionable-list-group-item :add-icon="true" v-on:actionClicked="$root.$emit(\'bv::show::modal\', \'selectPermissionModal\')"/>\n                    </div>\n                  </b-form-group>\n                  <b-form-group :label="this.$t(\'admin.mapped_ldap_groups\')">\n                    <div class="list-group">\n                      <span v-for="ldapGroup in ldapGroups">\n                        <actionable-list-group-item :value="ldapGroup.dn" :delete-icon="true" v-on:actionClicked="removeLdapGroupMapping(ldapGroup.uuid)"/>\n                      </span>\n                      <actionable-list-group-item :add-icon="true" v-on:actionClicked="$root.$emit(\'bv::show::modal\', \'selectLdapGroupModal\')"/>\n                    </div>\n                  </b-form-group>\n                  <b-form-group :label="this.$t(\'admin.mapped_oidc_groups\')">\n                    <div class="list-group">\n                      <span v-for="mappedOidcGroup in mappedOidcGroups">\n                        <actionable-list-group-item :value="mappedOidcGroup.group.name" :delete-icon="true" v-on:actionClicked="removeOidcGroupMapping(mappedOidcGroup.uuid)"/>\n                      </span>\n                      <actionable-list-group-item :add-icon="true" v-on:actionClicked="$root.$emit(\'bv::show::modal\', \'selectOidcGroupModal\')"/>\n                    </div>\n                  </b-form-group>\n                </b-col>\n                <b-col sm="6">\n                  <b-form-group v-if="managedUsers && managedUsers.length > 0" :label="this.$t(\'admin.managed_users\')">\n                    <div class="list-group">\n                      <span v-for="managedUser in managedUsers">\n                        <actionable-list-group-item :value="managedUser.username" :delete-icon="true" v-on:actionClicked="removeUser(managedUser)"/>\n                      </span>\n                    </div>\n                  </b-form-group>\n                  <b-form-group v-if="ldapUsers && ldapUsers.length > 0"  :label="this.$t(\'admin.ldap_users\')">\n                    <div class="list-group">\n                      <span v-for="ldapUser in ldapUsers">\n                        <actionable-list-group-item :value="ldapUser.username" :delete-icon="true" v-on:actionClicked="removeUser(ldapUser)"/>\n                      </span>\n                    </div>\n                  </b-form-group>\n                  <div style="text-align:right">\n                     <b-button variant="outline-danger" @click="deleteTeam">{{ $t(\'admin.delete_team\') }}</b-button>\n                  </div>\n                </b-col>\n                <select-permission-modal v-on:selection="updatePermissionSelection" />\n                <select-ldap-group-modal v-on:selection="updateLdapGroupSelection" />\n                <select-oidc-group-modal v-on:selection="updateOidcGroupSelection" />\n              </b-row>\n            ',mixins:[d["a"]],components:{cSwitch:I["o"],ActionableListGroupItem:_["a"],SelectLdapGroupModal:k,SelectOidcGroupModal:P,SelectPermissionModal:T["a"],BInputGroupFormInput:p["a"]},data:function(){return{team:a,name:a.name,apiKeys:a.apiKeys,permissions:a.permissions,ldapGroups:a.mappedLdapGroups,mappedOidcGroups:a.mappedOidcGroups,managedUsers:a.managedUsers,ldapUsers:a.ldapUsers,labelIcon:{dataOn:"✓",dataOff:"✕"}}},methods:{updateTeam:function(){var t=this,a="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_TEAM);this.axios.post(a,{uuid:this.team.uuid,name:this.name}).then((function(a){t.team=a.data,$["a"].$emit("admin:teams:rowUpdate",e,t.team),t.$toastr.s(t.$t("message.updated"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},deleteTeam:function(){var t=this,a="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_TEAM);this.axios.delete(a,{data:{uuid:this.team.uuid}}).then((function(a){$["a"].$emit("admin:teams:rowDeleted",e),t.$toastr.s(t.$t("admin.team_deleted"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},createApiKey:function(){var t=this,e="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_TEAM,"/").concat(this.team.uuid,"/key");this.axios.put(e).then((function(e){t.apiKeys?t.apiKeys.push(e.data):t.apiKeys=[e.data],t.$toastr.s(t.$t("message.updated"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},removeApiKey:function(t){var e=this,a="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_TEAM,"/key/").concat(t.key);this.axios.delete(a).then((function(a){for(var n=[],i=0;i<e.apiKeys.length;i++)e.apiKeys[i].key!==t.key&&n.push(e.apiKeys[i]);e.apiKeys=n,e.$toastr.s(e.$t("message.updated"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},updateLdapGroupSelection:function(t){var e=this;this.$root.$emit("bv::hide::modal","selectLdapGroupModal");for(var a=0;a<t.length;a++){var n=t[a],i="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_LDAP_MAPPING);this.axios.put(i,{team:this.team.uuid,dn:n.dn}).then((function(t){void 0!==e.ldapGroups&&null!==e.ldapGroups||(e.ldapGroups=[]),e.ldapGroups.push(t.data),e.ldapGroups.sort(),e.$toastr.s(e.$t("message.updated"))})).catch((function(t){304===t.response.status||e.$toastr.w(e.$t("condition.unsuccessful_action"))}))}},removeLdapGroupMapping:function(t){var e=this,a="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_LDAP_MAPPING,"/").concat(t);this.axios.delete(a).then((function(a){for(var n=[],i=0;i<e.ldapGroups.length;i++)e.ldapGroups[i].uuid!==t&&n.push(e.ldapGroups[i]);e.ldapGroups=n,e.team.mappedLdapGroups=e.ldapGroups,e.$toastr.s(e.$t("message.updated"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},updateOidcGroupSelection:function(t){var e=this;this.$root.$emit("bv::hide::modal","selectOidcGroupModal");for(var a=0;a<t.length;a++){var n=t[a],i="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_MAPPING);this.axios.put(i,{team:this.team.uuid,group:n.uuid}).then((function(t){void 0!==e.mappedOidcGroups&&null!==e.mappedOidcGroups||(e.mappedOidcGroups=[]),e.mappedOidcGroups.push(t.data),e.mappedOidcGroups.sort(),e.$toastr.s(e.$t("message.updated"))})).catch((function(t){304===t.response.status||e.$toastr.w(e.$t("condition.unsuccessful_action"))}))}},removeOidcGroupMapping:function(t){var e=this,a="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_OIDC_MAPPING,"/").concat(t);this.axios.delete(a).then((function(a){for(var n=[],i=0;i<e.mappedOidcGroups.length;i++)e.mappedOidcGroups[i].uuid!==t&&n.push(e.mappedOidcGroups[i]);e.mappedOidcGroups=n,e.team.mappedOidcGroups=e.mappedOidcGroups,e.$toastr.s(e.$t("message.updated"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},updatePermissionSelection:function(t){var e=this;this.$root.$emit("bv::hide::modal","selectPermissionModal");for(var a=0;a<t.length;a++){var n=t[a],i="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_PERMISSION,"/").concat(n.name,"/team/").concat(this.team.uuid);this.axios.post(i).then((function(t){e.syncVariables(t.data),e.$toastr.s(e.$t("message.updated"))})).catch((function(t){304===t.response.status||e.$toastr.w(e.$t("condition.unsuccessful_action"))}))}},removePermission:function(t){var e=this,a="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_PERMISSION,"/").concat(t.name,"/team/").concat(this.team.uuid);this.axios.delete(a).then((function(t){e.syncVariables(t.data),e.$toastr.s(e.$t("message.updated"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},removeUser:function(t){var e=this,a="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_USER,"/").concat(t.username,"/membership");this.axios.delete(a,{data:{uuid:this.team.uuid}}).then((function(a){if(e.managedUsers){for(var n=[],i=0;i<e.managedUsers.length;i++)e.managedUsers[i].username!==t.username&&n.push(e.managedUsers[i]);e.managedUsers=n}if(e.ldapUsers){for(var o=[],s=0;s<e.ldapUsers.length;s++)e.ldapUsers[s].username!==t.username&&o.push(e.ldapUsers[s]);e.ldapUsers=o}e.$toastr.s(e.$t("message.updated"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},syncVariables:function(t){this.team=t,t.apiKeys&&(this.apiKeys=t.apiKeys),this.permissions=t.permissions}}})},onExpandRow:this.vueFormatterInit,toolbar:"#customToolbar",responseHandler:function(t,e){return t.total=e.getResponseHeader("X-Total-Count"),t},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_TEAM)}}},methods:{refreshTable:function(){this.$refs.table.refresh({silent:!0})}}},x=M,C=Object(h["a"])(x,n,i,!1,null,null,null);e["default"]=C.exports},"366e":function(t,e,a){t.exports=a("ccb9").f("toPrimitive")},"454f":function(t,e,a){a("46a7");var n=a("584a").Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},"456d":function(t,e,a){var n=a("4bf8"),i=a("0d58");a("5eda")("keys",(function(){return function(t){return i(n(t))}}))},"46a7":function(t,e,a){var n=a("63b6");n(n.S+n.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"5eda":function(t,e,a){var n=a("5ca1"),i=a("8378"),o=a("79e5");t.exports=function(t,e){var a=(i.Object||{})[t]||Object[t],s={};s[t]=e(a),n(n.S+n.F*o((function(){a(1)})),"Object",s)}},"5f90":function(t,e,a){"use strict";a("fcb2")},7333:function(t,e,a){"use strict";var n=a("9e1e"),i=a("0d58"),o=a("2621"),s=a("52a7"),r=a("4bf8"),c=a("626a"),u=Object.assign;t.exports=!u||a("79e5")((function(){var t={},e={},a=Symbol(),n="abcdefghijklmnopqrst";return t[a]=7,n.split("").forEach((function(t){e[t]=t})),7!=u({},t)[a]||Object.keys(u({},e)).join("")!=n}))?function(t,e){var a=r(t),u=arguments.length,l=1,d=o.f,p=s.f;while(u>l){var m,f=c(arguments[l++]),h=d?i(f).concat(d(f)):i(f),b=h.length,v=0;while(b>v)m=h[v++],n&&!p.call(f,m)||(a[m]=f[m])}return a}:u},"7c15":function(t,e,a){"use strict";var n=a("a4c1");e["a"]={data:function(){return{PERMISSIONS:{BOM_UPLOAD:n["b"],VIEW_PORTFOLIO:n["h"],PORTFOLIO_MANAGEMENT:n["e"],ACCESS_MANAGEMENT:n["a"],VIEW_VULNERABILITY:n["i"],VULNERABILITY_ANALYSIS:n["j"],VIEW_POLICY_VIOLATION:n["g"],VULNERABILITY_MANAGEMENT:n["k"],POLICY_VIOLATION_ANALYSIS:n["d"],SYSTEM_CONFIGURATION:n["f"],POLICY_MANAGEMENT:n["c"]}}},computed:{decodedToken:function(){return n["l"](n["m"]())}},methods:{isPermitted:function(t){return n["n"](t,this.decodedToken)},isNotPermitted:function(t){return!n["n"](t,this.decodedToken)}}}},"8e6e":function(t,e,a){var n=a("5ca1"),i=a("990b"),o=a("6821"),s=a("11e9"),r=a("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,a,n=o(t),c=s.f,u=i(n),l={},d=0;while(u.length>d)a=c(n,e=u[d++]),void 0!==a&&r(l,e,a);return l}})},"990b":function(t,e,a){var n=a("9093"),i=a("2621"),o=a("cb7c"),s=a("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=n.f(o(t)),a=i.f;return a?e.concat(a(t)):e}},ae28:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{id:"selectPermissionModal",size:"lg","hide-header-close":"","no-stacking":"",title:t.$t("admin.select_permission")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return n()}}},[t._v(t._s(t.$t("message.cancel")))]),a("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){t.$emit("selection",t.$refs.table.getSelections())}}},[t._v(t._s(t.$t("message.select")))])]}}])},[a("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1)},i=[],o=a("6c36"),s=a.n(o),r=a("7c15"),c=a("900c"),u={mixins:[r["a"]],data:function(){return{labelIcon:{dataOn:"✓",dataOff:"✕"},columns:[{field:"state",checkbox:!0,align:"center"},{title:this.$t("message.name"),field:"name",sortable:!0,formatter:function(t,e,a){return s.a.inHTMLData(c["a"].valueWithDefault(t,""))}}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"client",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},responseHandler:function(t,e){return t.total=e.getResponseHeader("X-Total-Count"),t},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_PERMISSION)}}}},l=u,d=a("2877"),p=Object(d["a"])(l,n,i,!1,null,null,null);e["a"]=p.exports},e68f:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item align-middle"},[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-right action-icon",attrs:{size:"sm",title:t.tooltip},on:{click:function(e){return t.$emit("actionClicked")}}},[this.addIcon?a("span",{staticClass:"fa fa-plus-square"}):t._e(),this.deleteIcon?a("span",{staticClass:"fa fa-trash-o"}):t._e()]),t.$slots&&t.$slots.default&&t.$slots.default[0]?t._t("default"):a("span",[this.href?a("a",{attrs:{href:t.href}},[t._v(t._s(t.value))]):a("span",[t._v(t._s(t.value))]),t._v(" ")])],2)},i=[],o={props:{value:String,tooltip:String,addIcon:Boolean,deleteIcon:Boolean,variant:String,href:String}},s=o,r=(a("5f90"),a("2877")),c=Object(r["a"])(s,n,i,!1,null,"548fa20f",null);e["a"]=c.exports},f751:function(t,e,a){var n=a("5ca1");n(n.S+n.F,"Object",{assign:a("7333")})},fcb2:function(t,e,a){}}]);