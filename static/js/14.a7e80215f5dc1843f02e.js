webpackJsonp([14],{"Wg+v":function(t,e){},cR9v:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),o=a.n(i),s=a("Dd8w"),l=a.n(s),r=a("Rly4"),n=a("PJh5"),c=a.n(n),d=a("NYxO"),p={data:function(){return{reportFive:[],hospitalId:null,startTime:null,endTime:null,dataForShow:{xAxisData:[],aData:[],bData:[]}}},computed:l()({},Object(d.c)(["hospitalList","hospitalIdBelongsAccount","userName"])),methods:{getLists:function(){var t=this;o()(this.$data.dataForShow,this.$options.data().dataForShow),Object(r.a)("get","dcPatient/formFive",{filters:this.common.definitionFilters(this.startTime,this.endTime,this.hospitalId)}).then(function(e){t.reportFive=t.common.dealObjectToArray(e.data),t.reportFive.map(function(t,e){t.subtract=Math.ceil(t.subtract/1e3/60),t.average=Math.ceil(t.average/1e3/60)}),t.reportFive.length>0?(document.querySelector(".canvasBox").style.display="block",t.dealData(t.reportFive)):document.querySelector(".canvasBox").style.display="none"})},dealData:function(t){for(var e=this,a=0;a<t.length-1;a++)if(this.common.toJudgeIsWithinOneMonth(t[a].toHospitalTime,t[a+1].toHospitalTime)){var i="";i=Number(t[a].toHospitalTime.split("-")[1])<12?Number(t[a].toHospitalTime.split("-")[1])<9?t[a].toHospitalTime.split("-")[0]+"-0"+(Number(t[a].toHospitalTime.split("-")[1])+1):t[a].toHospitalTime.split("-")[0]+"-"+(Number(t[a].toHospitalTime.split("-")[1])+1):Number(t[a].toHospitalTime.split("-")[0])+1+"-01",t.splice(a+1,0,{subtract:0,toHospitalTime:i,patientCount:0,average:0})}t.forEach(function(t,a){e.dataForShow.xAxisData.push(t.toHospitalTime),e.dataForShow.aData.push(t.subtract),e.dataForShow.bData.push(t.average)}),this.drawLine()},conditionalQuery:function(){o()(this.$data.dataForShow,this.$options.data().dataForShow),c()(this.endTime).diff(c()(this.startTime),"years",!0)>1?this.$message({showClose:!0,message:"查询区间不能超过一年",type:"error"}):this.getLists()},drawLine:function(){this.$echarts.init(document.getElementById("myChart")).setOption({title:{text:"D2B时间",left:"center"},tooltip:{trigger:"item"},legend:{left:"center",top:"bottom",data:["D2B时间","D2B月平均时间"]},xAxis:{type:"category",name:"日期",splitLine:{show:!0},data:this.dataForShow.xAxisData},grid:{left:"3%",right:"8%",bottom:"12%",containLabel:!0},yAxis:{type:"value",name:"时间(分钟)",data:[0,45,90],axisLabel:{formatter:"{value}"}},series:[{name:"D2B时间",type:"line",data:this.dataForShow.aData},{name:"D2B月平均时间",type:"line",data:this.dataForShow.bData}]})}},created:function(){this.hospitalId=this.hospitalIdBelongsAccount,this.getLists()}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"reportFive echart_data"},[a("div",{staticClass:"search_box"},[a("form",[a("table",[a("tr",["666666"==t.hospitalIdBelongsAccount||"cpcms"==t.userName?a("td",{staticClass:"hospital"},[a("label",[t._v("所属医院：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择所属医院",size:"small",clearable:""},model:{value:t.hospitalId,callback:function(e){t.hospitalId=e},expression:"hospitalId"}},t._l(t.hospitalList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1):t._e(),t._v(" "),a("td",[a("label",[t._v("开始时间：")]),t._v(" "),a("el-date-picker",{attrs:{placeholder:"开始时间",type:"month",size:"small","value-format":"yyyy-MM"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}})],1),t._v(" "),a("td",[a("label",[t._v("结束时间：")]),t._v(" "),a("el-date-picker",{attrs:{placeholder:"结束时间",type:"month",size:"small","value-format":"yyyy-MM"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1),t._v(" "),a("td",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return e.preventDefault(),t.conditionalQuery(e)}}},[a("span",{staticClass:"el-icon-search"}),t._v(" "),a("span",[t._v("查询")])])],1)])])])]),t._v(" "),a("div",[a("div",[a("el-table",{attrs:{data:t.reportFive,border:"","max-height":300}},[a("el-table-column",{attrs:{prop:"toHospitalTime",label:"时间",width:"150","header-align":"center",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"subtract",label:"D2B时间(分钟)","min-width":"200","header-align":"center",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"average",label:"D2B月平均时间(分钟)","min-width":"150","header-align":"center",align:"center"}})],1)],1),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasBox",staticStyle:{"margin-top":"20px"}},[e("div",{staticStyle:{width:"98%",height:"400px",float:"left"},attrs:{id:"myChart"}})])}]};var m=a("VU/8")(p,h,!1,function(t){a("Wg+v")},"data-v-5565eb86",null);e.default=m.exports}});