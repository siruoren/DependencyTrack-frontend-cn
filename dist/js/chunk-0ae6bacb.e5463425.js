(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ae6bacb"],{"192b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-form-group",{attrs:{id:t.id,label:t.label,"label-for":t.id+"-input","label-class":t.labelClasses}},[i("b-input-group",{class:t.inputGroupSize},[t.icon?i("b-input-group-prepend",[i("b-input-group-text",[i("i",{class:t.icon})])],1):t._e(),i("b-form-input",t._g({class:t.inputClasses,attrs:{id:t.id+"-input",type:t.type,placeholder:t.label,state:t.feedbackState(),autocomplete:t.autocomplete,autofocus:t.isFocused,required:t.isRequired,readonly:t.readonly,disabled:t.isDisabled,trim:""},on:{blur:function(e){t.hadFocus=!0}},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},t.inputListeners)),t.tooltip?i("b-input-group-append",[i("b-input-group-text",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.tooltip}},[i("i",{staticClass:"cui-info font-lg"})])],1):t._e()],1),"true"===this.feedback?i("b-form-invalid-feedback",{attrs:{state:t.feedbackState()}},[t._v("\n    "+t._s(t.feedbackText)+"\n  ")]):t._e()],1)},n=[],o=i("900c"),s={props:{id:String,label:String,value:String,inputGroupSize:String,icon:String,type:String,autocomplete:String,autofocus:String,tooltip:String,feedbackText:String,feedback:String,lazy:String,required:String,readonly:Boolean,disabled:String,state:{default:void 0,type:Boolean}},data:function(){return{isFocused:!1,isRequired:!1,isDisabled:!1,hadFocus:!1}},beforeMount:function(){this.isFocused=o["a"].toBoolean(this.autofocus),this.isRequired=o["a"].toBoolean(this.required),this.isDisabled=o["a"].toBoolean(this.disabled)},computed:{innerValue:{get:function(){return this.value&&this.value.length,this.value},set:function(t){return t}},inputListeners:function(){var t=this;return Object.assign({},this.$listeners,{input:function(e){t.$emit("input",e)}})},inputClasses:function(){return this.isRequired?"required":null},labelClasses:function(){return this.isRequired?"required":null}},methods:{feedbackState:function(){if(!this.isDisabled||this.isRequired)return void 0!==this.state?this.state:o["a"].toBoolean(this.lazy)&&o["a"].toBoolean(this.required)?!!(this.value&&this.value.length>0)||!this.hadFocus&&void 0:!!(this.value&&this.value.length>0)||void 0}}},r=s,l=i("2877"),c=Object(l["a"])(r,a,n,!1,null,null,null);e["a"]=c.exports},"2ce4":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",{attrs:{"no-body":"",header:t.header}},[i("b-card-body",[i("div",{attrs:{id:"customToolbar"}},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.createAlertModal",modifiers:{createAlertModal:!0}}],attrs:{size:"md",variant:"outline-primary"}},[i("span",{staticClass:"fa fa-plus"}),t._v(" "+t._s(t.$t("admin.create_alert"))+"\n      ")])],1),i("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1),i("create-alert-modal",{on:{refreshTable:t.refreshTable}})],1)},n=[],o=i("6c36"),s=i.n(o),r=i("900c"),l=i("12cb"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{id:"createAlertModal",size:"md","hide-header-close":"","no-stacking":"",title:t.$t("admin.create_alert")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[i("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return a()}}},[t._v(t._s(t.$t("message.close")))]),i("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){return t.createAlert()}}},[t._v(t._s(t.$t("message.create")))])]}}])},[i("b-form-group",{attrs:{id:"fieldset-1",label:this.$t("message.name"),"label-for":"input-1","label-class":"required"}},[i("b-form-input",{staticClass:"required",attrs:{id:"input-1",required:"",trim:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("b-form-group",{attrs:{id:"fieldset-2",label:this.$t("admin.scope"),"label-for":"input-2"}},[i("b-form-select",{attrs:{id:"input-2",options:t.availableScopes,required:""},model:{value:t.scope,callback:function(e){t.scope=e},expression:"scope"}})],1),i("b-form-group",{attrs:{id:"fieldset-3",label:this.$t("admin.notification_level"),"label-for":"input-3"}},[i("b-form-select",{attrs:{id:"input-3",options:t.availableLevels,required:""},model:{value:t.notificationLevel,callback:function(e){t.notificationLevel=e},expression:"notificationLevel"}})],1),i("b-form-group",{attrs:{id:"fieldset-4",label:this.$t("admin.publisher"),"label-for":"input-4"}},[i("b-form-select",{attrs:{id:"input-4",options:t.availablePublishers,required:""},model:{value:t.publisher,callback:function(e){t.publisher=e},expression:"publisher"}})],1)],1)},u=[],d=i("7c15"),f=i("cee4"),p={mixins:[d["a"]],data:function(){return{name:null,scope:"PORTFOLIO",notificationLevel:"INFORMATIONAL",publisher:null,labelIcon:{dataOn:"✓",dataOff:"✕"},availableScopes:[{value:"PORTFOLIO",text:"Portfolio"},{value:"SYSTEM",text:"System"}],availableLevels:[{value:"INFORMATIONAL",text:"Informational",selected:!0},{value:"WARNING",text:"Warning"},{value:"ERROR",text:"Error"}],availablePublishers:[]}},created:function(){var t=this;f["a"].get("".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_NOTIFICATION_PUBLISHER)).then((function(e){for(var i=0;i<e.data.length;i++)t.availablePublishers.push({value:e.data[i].uuid,text:e.data[i].name})}))},methods:{createAlert:function(){var t=this;this.$root.$emit("bv::hide::modal","createAlertModal");var e="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_NOTIFICATION_RULE);this.axios.put(e,{name:this.name,scope:this.scope,notificationLevel:this.notificationLevel,publisher:{uuid:this.publisher}}).then((function(){t.$emit("refreshTable"),t.$toastr.s(t.$t("admin.alert_created"))})).catch((function(){t.$toastr.w(t.$t("condition.unsuccessful_action"))})),this.resetValues()},resetValues:function(){this.name=null,this.scope="PORTFOLIO",this.notificationLevel="INFORMATIONAL",this.publisher=null}}},m=p,b=i("2877"),h=Object(b["a"])(m,c,u,!1,null,null,null),v=h.exports,g=i("08c4"),_=i("f547"),O=i("e68f"),I=i("f307"),T=i("c9ca"),$=i("2f0e"),E=i("192b"),S=i("f1fb"),R={props:{header:String},mixins:[g["a"]],components:{CreateAlertModal:v},mounted:function(){var t=this;_["a"].$on("admin:alerts:rowUpdate",(function(e,i){t.$refs.table.updateRow({index:e,row:i}),t.$refs.table.expandRow(e)})),_["a"].$on("admin:alerts:rowDeleted",(function(e,i){t.refreshTable()}))},beforeDestroy:function(){_["a"].$off("admin:alerts:rowUpdate"),_["a"].$off("admin:alerts:rowDeleted")},data:function(){var t=this;return{columns:[{title:this.$t("message.name"),field:"name",sortable:!1,formatter:function(t,e,i){return s.a.inHTMLData(r["a"].valueWithDefault(t,""))}},{title:this.$t("admin.publisher"),field:"publisher.name",sortable:!1,formatter:function(t,e,i){return s.a.inHTMLData(r["a"].valueWithDefault(t,""))}},{title:this.$t("admin.scope"),field:"scope",sortable:!1,formatter:function(t,e,i){return s.a.inHTMLData(r["a"].valueWithDefault(t,""))}},{title:this.$t("admin.notification_level"),field:"notificationLevel",sortable:!1,formatter:function(t,e,i){return s.a.inHTMLData(r["a"].valueWithDefault(t,""))}},{title:this.$t("admin.enabled"),field:"enabled",sortable:!1,align:"center",formatter:function(t,e,i){return!0===t?'<i class="fa fa-check-square-o" />':""}}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"server",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},detailView:!0,detailViewIcon:!1,detailViewByClick:!0,detailFormatter:function(e,i){return t.vueFormatter({i18n:l["a"],template:'\n              <b-row class="expanded-row">\n                <b-col sm="6">\n                  <b-input-group-form-input id="input-name" :label="$t(\'message.name\')" input-group-size="mb-3"\n                                            required="true" type="text" v-model="name" lazy="true" />\n                  <b-form-group>\n                    <c-switch id="notificationEnabled" color="primary" v-model="enabled" label v-bind="labelIcon"/>\n                    {{ $t(\'admin.enabled\') }}\n                    <br/>\n                    <c-switch id="notificationLogSuccessfulPublish" color="primary" v-model="logSuccessfulPublish" label v-bind="labelIcon" :title="$t(\'admin.alert_log_successful_publish_help\')" />\n                    {{ $t(\'admin.alert_log_successful_publish\') }}\n                  </b-form-group>\n                  <b-form-group id="fieldset-2" :label="this.$t(\'admin.publisher_class\')" label-for="input-2">\n                    <b-form-input id="input-2" v-model="publisherClass" disabled class="form-control disabled" readonly trim />\n                  </b-form-group>\n                  <b-form-group id="fieldset-3" :label="this.$t(\'admin.notification_level\')" label-for="input-3">\n                    <b-form-select id="input-3" v-model="notificationLevel" :options="availableLevels" required></b-form-select>\n                  </b-form-group>\n                  <b-input-group-form-input id="input-destination" :label="$t(\'admin.destination\')" input-group-size="mb-3"\n                                            :required="(!(this.alert.hasOwnProperty(\'teams\') && this.alert.teams != null && this.alert.teams.length > 0)).toString()"\n                                            type="text" v-model="destination" lazy="true" />\n                  <b-input-group-form-input v-if="this.publisherClass === \'org.dependencytrack.notification.publisher.JiraPublisher\'" id="input-jira-ticket-type"\n                                            :label="$t(\'admin.jira_ticket_type\')" :required="true" type="text" v-model="jiraTicketType" lazy="true" />\n                   <b-form-group v-if="this.publisherClass === \'org.dependencytrack.notification.publisher.SendMailPublisher\'"\n                                 id="teamDestinationList" :label="this.$t(\'admin.select_team_as_recipient\')">\n                     <div class="list group">\n                        <span v-for="team in teams">\n                          <actionable-list-group-item :value="team.name" :delete-icon="true" v-on:actionClicked="removeSelectedTeam(team.uuid)"></actionable-list-group-item>\n                        </span>\n                        <actionable-list-group-item :add-icon="true" v-on:actionClicked="$root.$emit(\'bv::show::modal\', \'selectTeamModal\')"></actionable-list-group-item>\n                      </div>\n                    </b-form-group>\n                  <b-form-group v-if="limitToVisible === true" id="projectLimitsList" :label="this.$t(\'admin.limit_to_projects\')">\n                    <div class="list-group">\n                      <span v-for="project in projects">\n                        <actionable-list-group-item :value="formatProjectLabel(project.name, project.version)" :delete-icon="true" v-on:actionClicked="deleteLimiter(project.uuid)"/>\n                      </span>\n                      <actionable-list-group-item :add-icon="true" v-on:actionClicked="$root.$emit(\'bv::show::modal\', \'selectProjectModal\')"/>\n                    </div>\n                  </b-form-group>\n                <div v-if="limitToVisible === true">\n                    <c-switch id="isNotifyChildrenEnabled" color="primary" v-model="notifyChildren" label v-bind="labelIcon"/>\n                    {{ $t(\'admin.include_active_children\') }}\n                </div>\n                </b-col>\n                <b-col sm="6">\n                  <b-form-group id="fieldset-5" :label="this.$t(\'admin.scope\')" label-for="input-5">\n                    <b-form-input id="input-5" v-model="scope" disabled class="form-control disabled" readonly trim />\n                  </b-form-group>\n                  <b-form-group id="fieldset-6" :label="this.$t(\'admin.group\')" label-for="input-6">\n                    <div class="list-group" v-if="this.scope === \'PORTFOLIO\'">\n                      <b-form-checkbox-group id="checkbox-group-notify-on" v-model="notifyOn">\n                        <div class="list-group-item"><b-form-checkbox value="NEW_VULNERABILITY">NEW_VULNERABILITY</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="NEW_VULNERABLE_DEPENDENCY">NEW_VULNERABLE_DEPENDENCY</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="PROJECT_AUDIT_CHANGE">PROJECT_AUDIT_CHANGE</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="BOM_CONSUMED">BOM_CONSUMED</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="BOM_PROCESSED">BOM_PROCESSED</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="BOM_PROCESSING_FAILED">BOM_PROCESSING_FAILED</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="VEX_CONSUMED">VEX_CONSUMED</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="VEX_PROCESSED">VEX_PROCESSED</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="POLICY_VIOLATION">POLICY_VIOLATION</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="PROJECT_CREATED">PROJECT_CREATED</b-form-checkbox></div>\n                      </b-form-checkbox-group>\n                    </div>\n                    <div class="list-group" v-if="this.scope === \'SYSTEM\'">\n                      <b-form-checkbox-group id="checkbox-group-notify-on" v-model="notifyOn">\n                        <div class="list-group-item"><b-form-checkbox value="ANALYZER">ANALYZER</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="DATASOURCE_MIRRORING">DATASOURCE_MIRRORING</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="FILE_SYSTEM">FILE_SYSTEM</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="INDEXING_SERVICE">INDEXING_SERVICE</b-form-checkbox></div>\n                        <div class="list-group-item"><b-form-checkbox value="REPOSITORY">REPOSITORY</b-form-checkbox></div>\n                      </b-form-checkbox-group>\n                    </div>\n                  </b-form-group>\n                  <div style="text-align:right">\n                    <b-toggleable-display-button variant="outline-primary" :label="$t(\'admin.limit_to\')"\n                              v-permission="PERMISSIONS.VIEW_PORTFOLIO" v-on:toggle="limitToVisible = !limitToVisible"\n                              v-if="this.scope === \'PORTFOLIO\'" />\n                     <b-button variant="outline-danger" @click="deleteNotificationRule">{{ $t(\'admin.delete_alert\') }}</b-button>\n                     <b-button variant="primary" @click="updateNotificationRule">{{ $t(\'admin.submit\') }}</b-button>\n                  </div>\n                </b-col>\n                <select-project-modal v-on:selection="updateProjectSelection"/>\n                <select-team-modal v-on:selection="updateTeamSelection"></select-team-modal>\n              </b-row>\n            ',mixins:[d["a"]],components:{ActionableListGroupItem:O["a"],SelectProjectModal:I["a"],SelectTeamModal:T["a"],BToggleableDisplayButton:$["a"],BInputGroupFormInput:E["a"],cSwitch:S["o"]},data:function(){return{alert:i,uuid:i.uuid,name:i.name,enabled:i.enabled,logSuccessfulPublish:i.logSuccessfulPublish,notifyChildren:i.notifyChildren,publisherClass:i.publisher.publisherClass,notificationLevel:i.notificationLevel,destination:this.parseDestination(i),jiraTicketType:this.parseJiraTicketType(i),scope:i.scope,notifyOn:i.notifyOn,projects:i.projects,teams:i.teams,limitToVisible:!1,labelIcon:{dataOn:"✓",dataOff:"✕"},availableLevels:[{value:"INFORMATIONAL",text:"Informational",selected:!0},{value:"WARNING",text:"Warning"},{value:"ERROR",text:"Error"}]}},created:function(){this.parseDestination(this.alert),this.parseJiraTicketType(this.alert)},watch:{enabled:function(){this.updateNotificationRule()},logSuccessfulPublish:function(){this.updateNotificationRule()},notifyChildren:function(){this.updateNotificationRule()},notifyOn:function(){this.updateNotificationRule()},teams:function(){this.updateNotificationRule()}},methods:{formatProjectLabel:function(t,e){return t&&e?t+" "+e:t},parseDestination:function(t){if(t.publisherConfig){var e=JSON.parse(t.publisherConfig);return e?e.destination:null}},parseJiraTicketType:function(t){if(t.publisherConfig){var e=JSON.parse(t.publisherConfig);return e?e.jiraTicketType:null}},updateNotificationRule:function(){var t=this,i="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_NOTIFICATION_RULE);this.axios.post(i,{uuid:this.uuid,name:this.name,enabled:this.enabled,logSuccessfulPublish:this.logSuccessfulPublish,notifyChildren:this.notifyChildren,notificationLevel:this.notificationLevel,publisherConfig:JSON.stringify({destination:this.destination,jiraTicketType:this.jiraTicketType}),notifyOn:this.notifyOn}).then((function(i){t.alert=i.data,t.destination=t.parseDestination(t.alert),t.jiraTicketType=t.parseJiraTicketType(t.alert),_["a"].$emit("admin:alerts:rowUpdate",e,t.alert),t.$toastr.s(t.$t("message.updated"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},deleteNotificationRule:function(){var t=this,i="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_NOTIFICATION_RULE);this.axios.delete(i,{data:{uuid:this.alert.uuid}}).then((function(i){_["a"].$emit("admin:alerts:rowDeleted",e),t.$toastr.s(t.$t("admin.alert_deleted"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},deleteLimiter:function(t){var e=this,i="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_NOTIFICATION_RULE,"/").concat(this.uuid,"/project/").concat(t);this.axios.delete(i).then((function(i){for(var a=[],n=0;n<e.projects.length;n++)e.projects[n].uuid!==t&&a.push(e.projects[n]);e.projects=a,e.$toastr.s(e.$t("message.updated"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},updateProjectSelection:function(t){var e=this;this.$root.$emit("bv::hide::modal","selectProjectModal");for(var i=function(){var i=t[a],n="".concat(e.$api.BASE_URL,"/").concat(e.$api.URL_NOTIFICATION_RULE,"/").concat(e.uuid,"/project/").concat(i.uuid);e.axios.post(n).then((function(t){e.projects.push(i),e.$toastr.s(e.$t("message.updated"))})).catch((function(t){304===t.response.status||e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},a=0;a<t.length;a++)i()},updateTeamSelection:function(t){var e=this;this.$root.$emit("bv::hide::modal","selectTeamModal");for(var i=function(){var i=t[a],n="".concat(e.$api.BASE_URL,"/").concat(e.$api.URL_NOTIFICATION_RULE,"/").concat(e.uuid,"/team/").concat(i.uuid);e.axios.post(n).then((function(t){if(e.teams)e.teams.push(i);else{e.teams=[];var a={uuid:i.uuid,name:i.name};e.teams.push(a)}})).catch((function(t){304===t.response.status||e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},a=0;a<t.length;a++)i()},removeSelectedTeam:function(t){var e=this,i="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_NOTIFICATION_RULE,"/").concat(this.uuid,"/team/").concat(t);this.axios.delete(i).then((function(i){for(var a=[],n=0;n<e.teams.length;n++)e.teams[n].uuid!==t&&a.push(e.teams[n]);e.teams=a})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))}}})},onExpandRow:this.vueFormatterInit,toolbar:"#customToolbar",responseHandler:function(t,e){return t.total=e.getResponseHeader("X-Total-Count"),t},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_NOTIFICATION_RULE)}}},methods:{refreshTable:function(){this.$refs.table.refresh({silent:!0})}}},L=R,N=Object(b["a"])(L,a,n,!1,null,null,null);e["default"]=N.exports},"2f0e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-button",{attrs:{pressed:t.toggle,variant:t.variant},on:{"update:pressed":function(e){t.toggle=e},click:function(e){return t.$emit("toggle")}}},[i("i",{class:t.iconClass}),t._v(" "+t._s(t.label))])},n=[],o={props:{variant:String,label:String},computed:{iconClass:function(){return!0===this.toggle?"fa fa-chevron-up":"fa fa-chevron-down"}},data:function(){return{toggle:!1}}},s=o,r=i("2877"),l=Object(r["a"])(s,a,n,!1,null,null,null);e["a"]=l.exports},"5f90":function(t,e,i){"use strict";i("8965")},"7c15":function(t,e,i){"use strict";var a=i("a4c1");e["a"]={data:function(){return{PERMISSIONS:{BOM_UPLOAD:a["b"],VIEW_PORTFOLIO:a["h"],PORTFOLIO_MANAGEMENT:a["e"],ACCESS_MANAGEMENT:a["a"],VIEW_VULNERABILITY:a["i"],VULNERABILITY_ANALYSIS:a["j"],VIEW_POLICY_VIOLATION:a["g"],VULNERABILITY_MANAGEMENT:a["k"],POLICY_VIOLATION_ANALYSIS:a["d"],SYSTEM_CONFIGURATION:a["f"],POLICY_MANAGEMENT:a["c"]}}},computed:{decodedToken:function(){return a["l"](a["m"]())}},methods:{isPermitted:function(t){return a["n"](t,this.decodedToken)},isNotPermitted:function(t){return!a["n"](t,this.decodedToken)}}}},8965:function(t,e,i){},c9ca:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{id:"selectTeamModal",size:"lg","hide-header-close":"","no-stacking":"",title:t.$t("admin.select_team")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[i("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return a()}}},[t._v(t._s(t.$t("message.cancel")))]),i("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){t.$emit("selection",t.$refs.table.getSelections())}}},[t._v(t._s(t.$t("message.select")))])]}}])},[i("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1)},n=[],o=i("6c36"),s=i.n(o),r=i("7c15"),l=i("900c"),c={mixins:[r["a"]],data:function(){return{labelIcon:{dataOn:"✓",dataOff:"✕"},columns:[{field:"state",checkbox:!0,align:"center"},{title:this.$t("admin.team_name"),field:"name",sortable:!0,formatter:function(t,e,i){return s.a.inHTMLData(l["a"].valueWithDefault(t,""))}}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"client",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},responseHandler:function(t,e){return t.total=e.getResponseHeader("X-Total-Count"),t},url:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_TEAM)}}}},u=c,d=i("2877"),f=Object(d["a"])(u,a,n,!1,null,null,null);e["a"]=f.exports},e68f:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"list-group-item align-middle"},[i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-right action-icon",attrs:{size:"sm",title:t.tooltip},on:{click:function(e){return t.$emit("actionClicked")}}},[this.addIcon?i("span",{staticClass:"fa fa-plus-square"}):t._e(),this.deleteIcon?i("span",{staticClass:"fa fa-trash-o"}):t._e()]),t.$slots&&t.$slots.default&&t.$slots.default[0]?t._t("default"):i("span",[this.href?i("a",{attrs:{href:t.href}},[t._v(t._s(t.value))]):i("span",[t._v(t._s(t.value))]),t._v(" ")])],2)},n=[],o={props:{value:String,tooltip:String,addIcon:Boolean,deleteIcon:Boolean,variant:String,href:String}},s=o,r=(i("5f90"),i("2877")),l=Object(r["a"])(s,a,n,!1,null,"548fa20f",null);e["a"]=l.exports},f307:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{directives:[{name:"permission",rawName:"v-permission",value:"VIEW_PORTFOLIO",expression:"'VIEW_PORTFOLIO'"}],attrs:{id:"selectProjectModal",size:"lg","hide-header-close":"","no-stacking":"",title:t.$t("message.select_project")},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[i("b-button",{attrs:{size:"md",variant:"secondary"},on:{click:function(t){return a()}}},[t._v(t._s(t.$t("message.cancel")))]),i("b-button",{attrs:{size:"md",variant:"primary"},on:{click:function(e){t.$emit("selection",t.$refs.table.getSelections())}}},[t._v(t._s(t.$t("message.select")))])]}}])},[i("bootstrap-table",{ref:"table",attrs:{columns:t.columns,data:t.data,options:t.options}})],1)},n=[],o=i("6c36"),s=i.n(o),r=i("7c15"),l=i("900c"),c={mixins:[r["a"]],methods:{apiUrl:function(){var t="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_PROJECT);return void 0===this.showInactiveProjects?t+="?excludeInactive=true":t+="?excludeInactive="+!this.showInactiveProjects,t},refreshTable:function(){this.$refs.table.refresh({url:this.apiUrl(),pageNumber:1,silent:!0})}},watch:{showInactiveProjects:function(){this.refreshTable()}},data:function(){return{showInactiveProjects:!1,labelIcon:{dataOn:"✓",dataOff:"✕"},columns:[{field:"state",checkbox:!0,align:"center"},{title:this.$t("message.project_name"),field:"name",sortable:!0,formatter:function(t,e,i){return s.a.inHTMLData(l["a"].valueWithDefault(t,""))}},{title:this.$t("message.version"),field:"version",sortable:!0,formatter:function(t,e,i){return s.a.inHTMLData(l["a"].valueWithDefault(t,""))}},{title:this.$t("message.active"),field:"active",formatter:function(t,e,i){return!0===t?'<i class="fa fa-check-square-o" />':""},align:"center",class:"tight",sortable:!0}],data:[],options:{search:!0,showColumns:!0,showRefresh:!0,pagination:!0,silentSort:!1,sidePagination:"server",queryParamsType:"pageSize",pageList:"[10, 25, 50, 100]",pageSize:10,icons:{refresh:"fa-refresh"},toolbar:"#projectsToolbar",responseHandler:function(t,e){return t.total=e.getResponseHeader("X-Total-Count"),t},url:this.apiUrl()}}}},u=c,d=i("2877"),f=Object(d["a"])(u,a,n,!1,null,null,null);e["a"]=f.exports}}]);