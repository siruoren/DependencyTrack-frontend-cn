(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72bde645"],{"0864":function(t,e,a){"use strict";var n=a("900c");e["a"]={data:function(){return{configUrl:"".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_CONFIG_PROPERTY,"/"),labelIcon:{dataOn:"✓",dataOff:"✕"}}},methods:{updateConfigProperties:function(t){for(var e=this,a=[],i=0;i<t.length;i++){var o=t[i];o.propertyValue=n["a"].trimToNull(o.propertyValue),a.push(o)}var r="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_CONFIG_PROPERTY,"/aggregate");this.axios.post(r,a).then((function(t){e.$toastr.s(e.$t("admin.configuration_saved"))})).catch((function(t){e.$toastr.w(e.$t("condition.unsuccessful_action"))}))},updateConfigProperty:function(t,e,a){var i=this;a=n["a"].trimToNull(a);var o="".concat(this.$api.BASE_URL,"/").concat(this.$api.URL_CONFIG_PROPERTY,"/");this.axios.post(o,{groupName:t,propertyName:e,propertyValue:a}).then((function(t){i.$toastr.s(i.$t("admin.configuration_saved"))})).catch((function(t){i.$toastr.w(i.$t("condition.unsuccessful_action"))}))}}}},cc9d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("validation-provider",{attrs:{vid:t.id,name:t.label,rules:t.rules,mode:t.mode},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,i=e.valid;return[a("b-form-group",{attrs:{id:t.id,label:t.label,"label-for":t.id+"-input"}},[a("b-input-group",{class:t.inputGroupSize},[t.icon?a("b-input-group-prepend",[a("b-input-group-text",[a("i",{class:t.icon})])],1):t._e(),a("b-form-input",t._g({class:t.inputClasses,attrs:{id:t.id+"-input",type:t.type,placeholder:t.label,state:t.errorHandlingMethod(n,i),autocomplete:t.autocomplete,autofocus:t.isFocused},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},t.inputListeners)),t.tooltip?a("b-input-group-append",[a("b-input-group-text",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.tooltip}},[a("i",{staticClass:"cui-info font-lg"})])],1):t._e()],1),a("b-form-invalid-feedback",{attrs:{state:t.errorHandlingMethod(n,i)}},[t._v("\n      "+t._s(n[0])+"\n    ")])],1)]}}])})},i=[],o=a("7bb1"),r=a("900c"),s={name:"BValidatedInputGroupFormInput",components:{ValidationProvider:o["b"]},props:{id:String,label:String,value:String,inputGroupSize:String,icon:String,rules:String,mode:String,type:String,autocomplete:String,autofocus:String,tooltip:String,lazy:String},data:function(){return{isFocused:!1}},beforeMount:function(){!0!==this.autofocus&&"true"!==this.autofocus||(this.isFocused=!0)},computed:{innerValue:{get:function(){return this.value},set:function(t){return t}},inputListeners:function(){var t=this;return Object.assign({},this.$listeners,{input:function(e){t.$emit("input",e)}})},inputClasses:function(){var t="form-control";return!r["a"].toBoolean(this.lazy)&&this.rules&&this.rules.includes("required")&&(t+=" required"),t}},methods:{errorHandlingMethod:function(t,e){return this.rules?r["a"].toBoolean(this.lazy)?!t[0]&&(!!e||null):!t[0]&&!!e:null}}},u=s,l=a("2877"),c=Object(l["a"])(u,n,i,!1,null,null,null);e["a"]=c.exports},e286:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"no-body":"",header:t.header}},[n("b-card-body",[n("img",{attrs:{alt:"GitHub logo",src:a("f41e"),width:"65"}}),n("hr"),n("c-switch",t._b({attrs:{disabled:!this.vulnsourceEnabled&&!this.apitoken,color:"primary",id:"vulnsourceEnabled",label:""},model:{value:t.vulnsourceEnabled,callback:function(e){t.vulnsourceEnabled=e},expression:"vulnsourceEnabled"}},"c-switch",t.labelIcon,!1)),t._v("\n    "+t._s(t.$t("admin.vulnsource_github_advisories_enable"))+"\n    "),n("br"),n("c-switch",t._b({attrs:{color:"primary",id:"aliasSyncEnabled",label:"",title:t.$t("admin.vulnsource_alias_sync_enable_tooltip"),disabled:!this.vulnsourceEnabled},model:{value:t.aliasSyncEnabled,callback:function(e){t.aliasSyncEnabled=e},expression:"aliasSyncEnabled"}},"c-switch",t.labelIcon,!1)),t._v("\n    "+t._s(t.$t("admin.vulnsource_alias_sync_enable"))+"\n    "),n("b-validated-input-group-form-input",{attrs:{id:"github-advisories-apitoken",label:t.$t("admin.personal_access_token"),"input-group-size":"mb-3",rules:"required",type:"password",lazy:"true"},model:{value:t.apitoken,callback:function(e){t.apitoken=e},expression:"apitoken"}}),n("hr"),t._v("\n    "+t._s(t.$t("admin.vulnsource_github_advisories_desc"))+"\n  ")],1),n("b-card-footer",[n("b-button",{staticClass:"px-4",attrs:{disabled:this.vulnsourceEnabled&&!this.apitoken,variant:"outline-primary"},on:{click:t.saveChanges}},[t._v("\n        "+t._s(t.$t("message.update"))+"\n    ")])],1)],1)},i=[],o=a("f1fb"),r=a("cc9d"),s=a("900c"),u=a("0864"),l={mixins:[u["a"]],props:{header:String},components:{cSwitch:o["o"],BValidatedInputGroupFormInput:r["a"]},data:function(){return{vulnsourceEnabled:!1,aliasSyncEnabled:!1,apitoken:"",labelIcon:{dataOn:"✓",dataOff:"✕"}}},methods:{saveChanges:function(){this.updateConfigProperties([{groupName:"vuln-source",propertyName:"github.advisories.enabled",propertyValue:this.vulnsourceEnabled},{groupName:"vuln-source",propertyName:"github.advisories.alias.sync.enabled",propertyValue:this.aliasSyncEnabled},{groupName:"vuln-source",propertyName:"github.advisories.access.token",propertyValue:this.apitoken}])}},created:function(){var t=this;this.axios.get(this.configUrl).then((function(e){for(var a=e.data.filter((function(t){return"vuln-source"===t.groupName})),n=0;n<a.length;n++){var i=a[n];switch(i.propertyName){case"github.advisories.enabled":t.vulnsourceEnabled=s["a"].toBoolean(i.propertyValue);break;case"github.advisories.alias.sync.enabled":t.aliasSyncEnabled=s["a"].toBoolean(i.propertyValue);break;case"github.advisories.access.token":t.apitoken=i.propertyValue;break}}}))}},c=l,p=a("2877"),d=Object(p["a"])(c,n,i,!1,null,null,null);e["default"]=d.exports},f41e:function(t,e,a){t.exports=a.p+"img/github-logo.5f61d38f.svg"}}]);