webpackJsonp([5],{259:function(t,e,o){(function(t,e,i,n){var a=o(8),r=o(28),p=o(30),c=o(27),s=o(35),d=o(36),l=(o(11),o(6)),g=o(26);t.get("id")?t.get("projectId")||(location.href="../project/project.html"):location.href="../login/login.html",t.remove("snapshotId"),t.remove("snapshotDis"),t.remove("snapshotCreator"),t.remove("snapshotDate"),e.component("itemauto",g);var h=new e({el:"#app",data:{session:i.clone(t.raw()),type:0,arrApply:[],showApply:!1},components:{mainnav:a,interface:r,setting:p,global:c,test:s,version:d},methods:{handleApply:function(e,o){i.startHud(),n.put("/project/handleapply",{id:t.get("projectId"),apply:e._id,state:o}).then(function(t){i.stopHud(),200==t.code?1==o?(e.handle=1,setTimeout(function(){location.href="../project/project.html"},1e3)):e.handle=2:(e.handle=3,i.notify(t.msg,0))})}},created:function(){var e=this;Promise.all([n.get("/project/interface",{id:t.get("projectId")}),n.get("/project/info",{id:t.get("projectId")}),n.get("/status/list",{id:t.get("projectId")}),n.get("/test/list",{project:t.get("projectId")}),n.get("/project/applylist",{id:t.get("projectId")}),n.get("/version/list",{project:t.get("projectId"),page:0})]).then(function(o){i.stopLoading();var n=o[0],a=o[1],r=o[2],p=o[3],c=o[4],s=o[5];if(200!=n.code)throw n.msg;if(l.$emit("initInterface",n.data),200!=a.code)throw a.msg;if(l.$emit("initInfo",a.data),200!=r.code)throw r.msg;if(l.$emit("initStatus",r.data),200!=p.code)throw p.msg;if(l.$emit("initTest",p.data),0==t.get("role")){if(200!=c.code)throw c.msg;c.data.forEach(function(t){t.handle=0}),e.arrApply=c.data,e.arrApply.length>0&&(e.showApply=!0)}if(200!=s.code)throw s.msg;l.$emit("initVersion",s.data)}).catch(function(t){i.stopLoading(),"string"==typeof t?i.notify(t,0):i.notify("获取失败",0)})}});window.vueObj=h,i.ready(function(){i.startLoading()})}).call(e,o(2),o(4),o(0),o(3))}},[259]);