(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c0d3e6e"],{"0864":function(e,t,n){"use strict";var a=n("900c");t["a"]={data:function(){return{configUrl:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_CONFIG_PROPERTY,"/"),labelIcon:{dataOn:"✓",dataOff:"✕"}}},methods:{updateConfigProperties:function(e){for(var t=this,n=[],i=0;i<e.length;i++){var r=e[i];r.propertyValue=a["a"].trimToNull(r.propertyValue),n.push(r)}var o="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_CONFIG_PROPERTY,"/aggregate");this.axios.post(o,n).then((function(e){t.$toastr.s(t.$t("admin.configuration_saved"))})).catch((function(e){t.$toastr.w(t.$t("condition.unsuccessful_action"))}))},updateConfigProperty:function(e,t,n){var i=this;n=a["a"].trimToNull(n);var r="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_CONFIG_PROPERTY,"/");this.axios.post(r,{groupName:e,propertyName:t,propertyValue:n}).then((function(e){i.$toastr.s(i.$t("admin.configuration_saved"))})).catch((function(e){i.$toastr.w(i.$t("condition.unsuccessful_action"))}))}}}},cc9d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("validation-provider",{attrs:{vid:e.id,name:e.label,rules:e.rules,mode:e.mode},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,i=t.valid;return[n("b-form-group",{attrs:{id:e.id,label:e.label,"label-for":e.id+"-input"}},[n("b-input-group",{class:e.inputGroupSize},[e.icon?n("b-input-group-prepend",[n("b-input-group-text",[n("i",{class:e.icon})])],1):e._e(),n("b-form-input",e._g({class:e.inputClasses,attrs:{id:e.id+"-input",type:e.type,placeholder:e.label,state:e.errorHandlingMethod(a,i),autocomplete:e.autocomplete,autofocus:e.isFocused},model:{value:e.innerValue,callback:function(t){e.innerValue=t},expression:"innerValue"}},e.inputListeners)),e.tooltip?n("b-input-group-append",[n("b-input-group-text",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:e.tooltip}},[n("i",{staticClass:"cui-info font-lg"})])],1):e._e()],1),n("b-form-invalid-feedback",{attrs:{state:e.errorHandlingMethod(a,i)}},[e._v("\n      "+e._s(a[0])+"\n    ")])],1)]}}])})},i=[],r=n("7bb1"),o=n("900c"),s={name:"BValidatedInputGroupFormInput",components:{ValidationProvider:r["b"]},props:{id:String,label:String,value:String,inputGroupSize:String,icon:String,rules:String,mode:String,type:String,autocomplete:String,autofocus:String,tooltip:String,lazy:String},data:function(){return{isFocused:!1}},beforeMount:function(){!0!==this.autofocus&&"true"!==this.autofocus||(this.isFocused=!0)},computed:{innerValue:{get:function(){return this.value},set:function(e){return e}},inputListeners:function(){var e=this;return Object.assign({},this.$listeners,{input:function(t){e.$emit("input",t)}})},inputClasses:function(){var e="form-control";return!o["a"].toBoolean(this.lazy)&&this.rules&&this.rules.includes("required")&&(e+=" required"),e}},methods:{errorHandlingMethod:function(e,t){return this.rules?o["a"].toBoolean(this.lazy)?!e[0]&&(!!t||null):!e[0]&&!!t:null}}},l=s,u=n("2877"),c=Object(u["a"])(l,a,i,!1,null,null,null);t["a"]=c.exports},e904:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{attrs:{"no-body":"",header:e.header}},[n("b-card-body",[n("c-switch",e._b({attrs:{id:"scannerEnabled",color:"primary",label:""},model:{value:e.scannerEnabled,callback:function(t){e.scannerEnabled=t},expression:"scannerEnabled"}},"c-switch",e.labelIcon,!1)),e._v("\n    "+e._s(e.$t("admin.analyzer_ossindex_enable"))+"\n    "),n("br"),n("c-switch",e._b({attrs:{disabled:!this.scannerEnabled,id:"aliasSyncEnabled",color:"primary",label:"",title:e.$t("admin.vulnsource_alias_sync_enable_tooltip")},model:{value:e.aliasSyncEnabled,callback:function(t){e.aliasSyncEnabled=t},expression:"aliasSyncEnabled"}},"c-switch",e.labelIcon,!1)),e._v("\n    "+e._s(e.$t("admin.vulnsource_alias_sync_enable"))+"\n    "),n("b-validated-input-group-form-input",{attrs:{id:"ossindex-username",label:e.$t("admin.registered_email_address"),"input-group-size":"mb-3",rules:"required",type:"email",lazy:"true"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("b-validated-input-group-form-input",{attrs:{id:"ossindex-apitoken",label:e.$t("admin.api_token"),"input-group-size":"mb-3",rules:"required",type:"password",lazy:"true"},model:{value:e.apitoken,callback:function(t){e.apitoken=t},expression:"apitoken"}}),n("hr"),e._v("\n    "+e._s(e.$t("admin.analyzer_ossindex_desc"))+"\n  ")],1),n("b-card-footer",[n("b-button",{staticClass:"px-4",attrs:{variant:"outline-primary"},on:{click:e.saveChanges}},[e._v(e._s(e.$t("message.update")))])],1)],1)},i=[],r=n("f1fb"),o=n("cc9d"),s=n("900c"),l=n("0864"),u={mixins:[l["a"]],props:{header:String},components:{cSwitch:r["o"],BValidatedInputGroupFormInput:o["a"]},data:function(){return{scannerEnabled:!1,aliasSyncEnabled:!1,username:"",apitoken:"",labelIcon:{dataOn:"✓",dataOff:"✕"}}},methods:{saveChanges:function(){this.updateConfigProperties([{groupName:"scanner",propertyName:"ossindex.enabled",propertyValue:this.scannerEnabled},{groupName:"scanner",propertyName:"ossindex.alias.sync.enabled",propertyValue:this.aliasSyncEnabled},{groupName:"scanner",propertyName:"ossindex.api.username",propertyValue:this.username},{groupName:"scanner",propertyName:"ossindex.api.token",propertyValue:this.apitoken}])}},created:function(){var e=this;this.axios.get(this.configUrl).then((function(t){for(var n=t.data.filter((function(e){return"scanner"===e.groupName})),a=0;a<n.length;a++){var i=n[a];switch(i.propertyName){case"ossindex.enabled":e.scannerEnabled=s["a"].toBoolean(i.propertyValue);break;case"ossindex.alias.sync.enabled":e.aliasSyncEnabled=s["a"].toBoolean(i.propertyValue);break;case"ossindex.api.username":e.username=i.propertyValue;break;case"ossindex.api.token":e.apitoken=i.propertyValue;break}}}))}},c=u,p=n("2877"),d=Object(p["a"])(c,a,i,!1,null,null,null);t["default"]=d.exports}}]);