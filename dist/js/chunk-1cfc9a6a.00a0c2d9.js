(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cfc9a6a"],{1820:function(t,e,a){},2152:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"acceptance unselectable"},[a("div",{staticClass:"title-wrapper"},[a("h2",{staticClass:"list-h"},[t._v("Приемки")]),a("UiButton",{attrs:{title:t.title}})],1),a("div",{staticClass:"tabs-search-wrapper"},[a("UiTabs",{attrs:{getDataTabs:t.dataTabs},on:{"tab-idx":t.tabIdx}}),a("div",{staticClass:"search-wrapper"},[a("UiInput",{staticClass:"mr-3",staticStyle:{"margin-bottom":"0px"},attrs:{mask:"Поиск",icon:"transporter-Search_tiny"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchStart(t.searchRequest)}},model:{value:t.searchRequest,callback:function(e){t.searchRequest="string"===typeof e?e.trim():e},expression:"searchRequest"}}),a("btn-sec",{attrs:{title:"Найти",type:"todo"},nativeOn:{click:function(e){return t.searchStart(t.searchRequest)}}})],1)],1),a("div",{staticClass:"wrap"},t._l(t.ListReportDataChanges,(function(e,s){return a("div",{key:s,staticClass:"element-tech-wrap"},[a("div",{staticClass:"element-tech"},[a("div",{staticClass:"title-tech-wrp"},[a("h4",[t._v("Приемка № "+t._s(e.id))]),a("UiMark",{staticClass:"mr-1",attrs:{title:t._f("lang")(e.status,"ru"),icon:t.iconChoise(e),styleChoise:t.styleChoise(e)}}),e.references.hot.type?a("UiMark",{attrs:{title:t._f("lang")(e.references.hot.name,"ru"),icon:t.iconData.hot,styleChoise:t.colorStatus.hot}}):t._e()],1),a("div",{staticClass:"title-tech-wrp"},[a("UiMark",{staticStyle:{opacity:"0.6"},attrs:{title:t._f("date")(e.due_date,"date/time"),styleChoise:t.styleChoise(e)}})],1),e.references.classifier?a("div",[a("p",[t._v(t._s(e.references.classifier.code)+" "+t._s(e.references.classifier.title))]),a("p",[t._v(t._s(e.references.project.name)+" , "+t._s(e.references.sector.name)+" , "+t._s(e.references.place.name))]),a("p",[t._v(t._s(e.references.org.name))])]):t._e(),a("div",{staticClass:"tech-button-wrap"},[a("btn-sec",{attrs:{title:"Открыть",type:"todo"},nativeOn:{click:function(a){return t.goToElement(e)}}}),a("btn-sec",{attrs:{title:"Принять к осмотру",type:"accept"}}),a("btn-sec",{attrs:{title:"Отклонить",type:"cancel"}})],1)])])})),0)])},n=[],r=(a("d81d"),a("4de4"),a("8bd7")),i=a("cddb"),c=a("d58f"),o=a("afcb"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs-wrapper"},t._l(t.getDataTabs,(function(e,s){return a("div",{key:s,staticClass:"item-tabs",class:{active:t.swithTabs===s},on:{click:function(e){t.swithTabs=s,t.sendData(t.swithTabs)}}},[a("i",{staticClass:"text-16",class:[e.icon],style:{color:e.icon_color}}),t._v(t._s(e.title)+" ")])})),0)},u=[],p={name:"Tabs",data:function(){return{swithTabs:0}},props:{getDataTabs:{type:Array}},emits:["tab-idx"],methods:{sendData:function(t){this.$emit("tab-idx",t)}}},h=p,d=(a("a84c"),a("2877")),f=Object(d["a"])(h,l,u,!1,null,"2cfdcb38",null),b=f.exports,m=a("c427"),_={name:"Acceptance",components:{UiButton:r["a"],UiTabs:b,UiMark:o["a"],btnSec:c["a"],UiInput:i["a"]},data:function(){return{title:"Создать приемку",data:null,ListReportData:[],ListReportDataChanges:[],errors:[],tabNum:0,searchRequest:"",iconData:{new:"",ended:"transporter-users",hot:"transporter-Fire"},colorStatus:{new:{background:"#FFC107"},ended:{background:"#D4EDDA",color:"#155724"},hot:{background:"#F8D7DA",color:"#721C24"}},dataTabs:[{title:"Все"},{title:"На сегодня"},{title:"Горящие",icon:"transporter-Fire",icon_color:"#d60000"},{title:"Гибкий график",icon:"transporter-Filter_add"}]}},beforeCreate:function(){var t=this,e={method:"/api/v2/QAQC/Report.getList",requestData:{role:"contractor",references:["sector","hot","classifier_code","spec","contractor","project","creator","customer","head_foreman","org","place"]}};m["a"].get(e.method,{params:e.requestData}).then((function(e){t.ListReportData=e.data.result,t.ListReportDataChanges=t.ListReportData,t.ListReportDataChanges.map((function(t){return t.references.hot={type:t.references.hot,name:"горячая"}})),t.ListReportDataChanges.map((function(t){if(null===t.due_date)return t.due_date="Время не назначено"}))})).catch((function(t){throw console.log(t),t}))},methods:{tabIdx:function(t){console.log(t),this.tabNum=t},iconChoise:function(t){"new"!==t.status&&t.status},styleChoise:function(t){return"new"===t.status?this.colorStatus.new:"process_ended"===t.status?this.colorStatus.ended:void 0},searchStart:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={method:"/api/v2/QAQC/Report.getList",requestData:{find:e,role:"contractor",references:["sector","hot","classifier_code","spec","contractor","project","creator","customer","head_foreman","org","place"]}};m["a"].get(a.method,{params:a.requestData}).then((function(e){t.ListReportData=e.data.result,t.ListReportDataChanges=t.ListReportData,t.ListReportDataChanges.map((function(t){return t.references.hot={type:t.references.hot,name:"горячая"}})),t.ListReportDataChanges.map((function(t){if(null===t.due_date)return t.due_date="Время не назначено"})),t.tabsLogic()})).catch((function(t){throw console.log(t),t}))},tabsLogic:function(){2===this.tabNum&&(this.ListReportDataChanges=this.ListReportData.filter((function(t){return t.references.hot.type}))),2!==this.tabNum&&(this.ListReportDataChanges=this.ListReportData)},goToElement:function(t){t.id&&this.$router.push({name:"OneAcceptance",params:{Id:t.id,status:t.status}})}},watch:{tabNum:function(){this.tabsLogic()}}},C=_,g=(a("66e3"),Object(d["a"])(C,s,n,!1,null,"a5d78e26",null));e["default"]=g.exports},"27e4":function(t,e,a){"use strict";a("9aa2")},"369e":function(t,e,a){},"3b34":function(t,e,a){},"66e3":function(t,e,a){"use strict";a("3b34")},"9aa2":function(t,e,a){},a2e9:function(t,e,a){"use strict";a("369e")},a84c:function(t,e,a){"use strict";a("1820")},afcb:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mark",{staticClass:"f-size-08",style:[t.styleChoise]},[t.icon?a("i",{staticClass:"ui-i",class:[t.icon]}):t._e(),t._v(" "+t._s(t.title)+" ")])},n=[],r={name:"Mark",props:{title:{type:String},icon:{type:String},styleChoise:{type:Object}}},i=r,c=(a("27e4"),a("2877")),o=Object(c["a"])(i,s,n,!1,null,null,null);e["a"]=o.exports},d58f:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-sec",class:[t.type]},[t.icon?a("i",{staticClass:"ui-i mr-2",class:[t.icon]}):t._e(),a("span",{staticClass:"text-in-button f-size-08"},[t._v(" "+t._s(t.title)+" ")])])},n=[],r={props:{title:{type:String},icon:{type:String},type:{type:String}},methods:{}},i=r,c=(a("a2e9"),a("2877")),o=Object(c["a"])(i,s,n,!1,null,null,null);e["a"]=o.exports},d81d:function(t,e,a){"use strict";var s=a("23e7"),n=a("b727").map,r=a("1dde"),i=r("map");s({target:"Array",proto:!0,forced:!i},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-1cfc9a6a.00a0c2d9.js.map