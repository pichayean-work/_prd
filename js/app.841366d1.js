(function(t){function e(e){for(var i,n,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)n=o[l],a[n]&&d.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},r=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("c21b"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),a=s("8c4f"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",{staticClass:"section"},[s("div",{staticClass:"container",staticStyle:{"margin-top":"50px","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[s("router-view")],1)])])},n=[],o={data:function(){return{}}},c=o,u=(s("034f"),s("2877")),p=Object(u["a"])(c,r,n,!1,null,null,null);p.options.__file="App.vue";var l=p.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"messaging",staticStyle:{"padding-top":"20px"}},[s("div",{staticClass:"inbox_msg"},[s("div",{staticClass:"inbox_people"},[s("div",{staticClass:"headind_srch"},[s("div",{staticClass:"recent_heading"},[s("h4",[t._v(t._s(t.support.username)+" \n              "),s("i",{staticClass:"fa fa-retweet ibutton",staticStyle:{cursor:"pointer"},on:{click:function(e){t.reloadList()}}}),t._v(" | \n              "),s("i",{staticClass:"fa fa-sign-out ibutton",staticStyle:{cursor:"pointer"},on:{click:function(e){t.logout()}}})])]),s("div",{staticClass:"srch_bar"},[s("div",{staticClass:"stylish-input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txtSearch,expression:"txtSearch"}],staticClass:"search-bar",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.txtSearch},on:{keyup:function(e){t.SearchList()},input:function(e){e.target.composing||(t.txtSearch=e.target.value)}}}),t._m(0)])])]),s("div",{staticClass:"inbox_chat"},[t.showListLoading?s("div",{staticClass:"loading9 inner",staticStyle:{"margin-top":"50px"}},[s("i"),s("i"),s("i"),s("i")]):t._e(),t._l(t.custommers,function(e){return t.showListLoading?t._e():s("div",{key:e.asa_id,class:"ibutton chat_list "+(e.asa_id===t.history.asa_id?"active_chat":"")+" ",staticStyle:{cursor:"pointer"},on:{click:function(s){t.SetHistory(e.asa_id,e.name,e.lineuser_id,e.pictureUrl)}}},[s("div",{staticClass:"chat_people",attrs:{id:"status-bar"}},[s("div",{staticClass:"chat_img"},[e.pictureUrl?t._e():s("img",{attrs:{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"}}),e.pictureUrl?s("img",{staticStyle:{"border-radius":"50%"},attrs:{src:e.pictureUrl,alt:"sunil"}}):t._e()]),s("div",{staticClass:"chat_ib"},[s("h5",[t._v("\n                    "+t._s(e.name)+" \n                    "),"Y"!==e.is_read?s("span",{staticClass:"badge badge-pill badge-success new_message"},[t._v(t._s(e.cntUnread))]):t._e(),s("span",{staticClass:"chat_date"},[t._v(t._s(t.getTimeAgo(e.create_date)))])]),s("p",[t._v(t._s("image"===e.sent_type?"ส่งรูปภาพ":e.lastMsg))])])])])})],2)]),s("div",{staticClass:"mesgs"},[s("div",{staticClass:"headind_srch",staticStyle:{"margin-bottom":"10px"}},[s("div",{staticClass:"recent_heading",staticStyle:{"margin-top":"-10px"}},[s("h4",[t._v(t._s(t.history.name))])])]),s("div",{staticClass:"msg_history",attrs:{id:"msg_history"}},[t.showHistoryLoading?s("div",{staticClass:"loading9 inner",staticStyle:{"margin-top":"200px"}},[s("i"),s("i"),s("i"),s("i")]):t._e(),t._l(t.history.chatDetail,function(e){return t.showHistory&&!t.showHistoryLoading?s("div",{key:e.id},[e.sent_type?s("div",{staticClass:"incoming_msg"},[t.history.pictureUrl?t._e():s("img",{staticClass:"incoming_msg_img",attrs:{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"}}),t.history.pictureUrl?s("img",{staticClass:"incoming_msg_img",staticStyle:{"border-radius":"50%"},attrs:{src:t.history.pictureUrl,alt:"sunil"}}):t._e(),s("div",{staticClass:"received_msg"},[s("div",{staticClass:"received_withd_msg"},["text"===e.sent_type?s("p",[t._v(t._s(e.message))]):t._e(),"loading"==e.previewImageUrl?s("p",{staticClass:"loading"}):t._e(),"loading"!=e.previewImageUrl&&"image"===e.sent_type?s("p",{staticStyle:{background:"white"}},[s("a",{attrs:{href:"#open-modal"},on:{click:function(s){t.previewUrl=e.previewImageUrl}}},[s("img",{staticStyle:{"border-radius":"8px"},attrs:{src:e.previewImageUrl,width:"250"}})])]):t._e(),s("span",{staticClass:"time_date"},[t._v(" "+t._s(t.getTimeAgo(e.create_date))+" "+t._s("Y"!==e.is_read?": unread":""))])])])]):t._e(),e.response_type?s("div",{staticClass:"outgoing_msg"},[s("div",{staticClass:"sent_msg"},["text"===e.response_type?s("p",{style:"N"===e.response_complete?"background-color: #cde2e8":""},[t._v(" "+t._s(e.message))]):t._e(),"loading"==e.previewImageUrl?s("p",{staticClass:"loading"}):t._e(),"loading"!=e.previewImageUrl&&"image"===e.response_type?s("p",{staticStyle:{background:"white"}},[s("a",{attrs:{href:"#open-modal"},on:{click:function(s){t.previewUrl=e.originalContentUrl}}},[s("img",{staticStyle:{"border-radius":"8px"},attrs:{src:e.previewImageUrl,width:"250"}})])]):t._e(),s("span",{staticClass:"time_date"},[t._v(" "+t._s("N"===e.response_complete?"ส่งไม่สำเร็จ":t.getTimeAgo(e.create_date))+"\n                          "),"N"===e.response_complete?s("i",{staticClass:"fa fa-retweet",on:{click:function(s){t.resendMessage(e)}}},[t._v("|")]):t._e(),"N"===e.response_complete?s("i",{staticClass:"fa fa-remove",on:{click:function(s){t.deleteMessage(e)}}}):t._e()])])]):t._e()]):t._e()}),s("div",{staticStyle:{padding:"50px"}})],2),s("div",{staticClass:"type_msg"},[s("div",{staticClass:"input-group",staticStyle:{margin:"5px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.txtMessage,expression:"txtMessage"}],staticClass:"form-control",staticStyle:{border:"0"},attrs:{type:"text",placeholder:"Type a message"},domProps:{value:t.txtMessage},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.onSend(t.history.asa_id,t.history.lineuser_id)},input:function(e){e.target.composing||(t.txtMessage=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.onSend(t.history.asa_id,t.history.lineuser_id)}}},[s("i",{staticClass:"fa fa-paper-plane-o",attrs:{"aria-hidden":"true"}})]),t._m(1)])]),s("input",{ref:"myFiles",staticStyle:{display:"none"},attrs:{id:"src",accept:"image/x-png,image/gif,image/jpeg",type:"file",name:"name"},on:{change:t.previewFiles}})])])]),s("div",{staticClass:"modal-window",attrs:{id:"open-modal"}},[s("div",[s("a",{staticClass:"modal-close",attrs:{href:"#modal-close",title:"Close"}},[t._v("close ×")]),s("div",{staticClass:"outer"},[s("img",{staticClass:"inner",attrs:{src:t.previewUrl}})])])]),s("div",{staticClass:"sidenav col-sm-12",attrs:{id:"mySidenav"}},[s("div",{staticClass:"col-sm-3 inner"},[s("div",{staticClass:"input-group mb-3"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.support.username,expression:"support.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.support.username},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.login()},input:function(e){e.target.composing||t.$set(t.support,"username",e.target.value)}}})]),s("div",{staticClass:"input-group mb-3"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.support.password,expression:"support.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.support.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.login()},input:function(e){e.target.composing||t.$set(t.support,"password",e.target.value)}}})]),s("button",{class:"btn btn-primary "+t.btnLoginLoading,on:{click:function(e){t.login()}}},[t._v("Login")])])]),t._m(4),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar",style:"width:"+t.upload_percent+"%",attrs:{role:"progressbar","aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("\n    "+t._s(t.upload_percent)+"\n  ")])]),s("br"),s("input",{ref:"myFiles2",attrs:{id:"file",type:"file"},on:{change:function(e){t.aa()}}})])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-addon"},[s("button",{attrs:{type:"button"}},[s("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-outline-secondary",attrs:{onclick:"document.getElementById('src').click();",type:"button"}},[s("i",{staticClass:"fa fa-image",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[s("i",{staticClass:"fa fa-user"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[s("i",{staticClass:"fa fa-key"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inner",staticStyle:{"margin-top":"10px",color:"#d9d9d9"}},[s("p",[t._v("@SilkSpan-DEMO")])])}],g=(s("28a5"),s("a481"),s("ac6a"),s("96cf"),s("3040")),m=s("8055"),f=s.n(m),v=s("c50f"),_=s("7d1a"),y=s.n(_),w=s("854a"),b=s.n(w),S=(s("6b54"),{guid:function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},ReadFile:function(t,e){return new Promise(function(s,i){try{var a=new FileReader;a.onload=function(t){var i=new Image;i.onload=function(){if(i.width>e){var t=document.createElement("canvas"),a=t.getContext("2d");t.width=i.width,t.height=i.height,a.drawImage(i,0,0);while(.5*t.width>e)t.width*=.5,t.height*=.5,a.drawImage(t,0,0,t.width,t.height);t.width=e,t.height=t.width*i.height/i.width,a.drawImage(i,0,0,t.width,t.height),s(t.toDataURL())}else s(i.src)},i.src=t.target.result},a.readAsDataURL(t[0])}catch(t){i(t)}})},getDateTime:function(){var t=new Date,e=t.getFullYear(),s=t.getMonth()+1,i=t.getDate(),a=t.getHours(),r=t.getMinutes(),n=t.getSeconds();1==s.toString().length&&(s="0"+s),1==i.toString().length&&(i="0"+i),1==a.toString().length&&(a="0"+a),1==r.toString().length&&(r="0"+r),1==n.toString().length&&(n="0"+n);var o=e+"-"+s+"-"+i+"T"+a+":"+r+":"+n;return o}}),x=(s("db49"),s("35a8")),I=(s("a17d"),s("3e1e"),{data:function(){return{support:{supportID:"123456",name:"Pichayean.Yen",username:"",password:""},previewUrl:"",files:[],btnLoginLoading:"",showListLoading:!1,showHistoryLoading:!1,loading:!1,showHistory:!1,custommers:[],history:[],txtMessage:"",txtSearch:"",socket:f()("https://pichayean.com",{autoConnect:!0}),stream:x.createStream(),upload_percent:0,upload_percentStylr:""}},methods:{previewFiles:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e,s,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.isOnNotAliveLogin();case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:if(e=this.$refs.myFiles.files,!e||!this.showHistory){t.next=25;break}return t.prev=6,t.next=9,S.ReadFile(e,520);case 9:return s=t.sent,t.next=12,S.ReadFile(e,240);case 12:i=t.sent,a=this,a.history.chatDetail.push(this.txtLoading()),this.setBottom(),this.socket.emit("SEND_IMAGE",{asa_id:a.history.asa_id,to:a.history.lineuser_id,supportID:a.support.supportID,image:{originalImg:{base64:s,name:"orig-".concat(S.guid(),".JPEG")},previewImg:{base64:i,name:"preview-".concat(S.guid(),".JPEG")}}}),this.setReadStatus(this.history.asa_id),t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](6),console.log(t.t0);case 23:t.next=26;break;case 25:b.a.error("คุณไม่ได้เลือกผู้ร่วมพูดคุย.","กรุณาเลือกผู้สนทนา!");case 26:case"end":return t.stop()}},t,this,[[6,20]])}));return function(){return t.apply(this,arguments)}}(),SearchList:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.isOnNotAliveLogin();case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:this.showHistoryLoading=!1,""!==this.txtSearch?(this.socket.emit("SEARCH_LIST",{txtSearch:this.txtSearch,supportID:this.support.supportID}),this.history={},this.onTitleNoti()):(this.socket.emit("GET_LIST",{supportID:this.support.supportID}),this.history={},this.onTitleNoti());case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),LoadOlddHistory:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e,s,i,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.showHistoryLoading=!0,this.showHistory=!1,this.history={},this.txtMessage="",this.history={name:s,asa_id:e,lineuser_id:i,pictureUrl:a,chatDetail:[]},this.socket.emit("GET_OLD_HISTORY",{supportID:this.support.supportID,asa_id:this.history.asa_id});case 6:case"end":return t.stop()}},t,this)}));return function(e,s,i,a){return t.apply(this,arguments)}}(),SetHistory:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e,s,i,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.isOnNotAliveLogin();case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:this.showHistoryLoading=!0,this.showHistory=!1,this.history={},this.txtMessage="",this.history={name:s,asa_id:e,lineuser_id:i,pictureUrl:a,chatDetail:[]},this.socket.emit("GET_HISTORY",{supportID:this.support.supportID,asa_id:this.history.asa_id});case 10:case"end":return t.stop()}},t,this)}));return function(e,s,i,a){return t.apply(this,arguments)}}(),resendMessage:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.isOnNotAliveLogin();case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:e&&(this.socket.emit("RESEND_MESSAGE",{id:e.id,asa_id:this.history.asa_id,to:this.history.lineuser_id,supportID:this.support.supportID,messages:{type:"text",text:e.message}}),this.txtMessage="",this.setReadStatus(e.asa_id));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deleteMessage:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.isOnNotAliveLogin();case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:e&&(this.socket.emit("DELETE_MESSAGE",{id:e.id,asa_id:this.history.asa_id,supportID:this.support.supportID}),this.txtMessage="",this.setReadStatus(e.asa_id));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),isOnNotAliveLogin:function(){var t=this;return new Promise(function(e,s){try{if(t.onAliveLoginLocalStore())e(!1);else{b.a.error("คุณได้มีการ logout ออกจากระบบไปแล้ว","กรุณาเข้าสู่ระบบอีกครั้ง!");var i=setInterval(function(){t.logout(),clearInterval(i),e(!0)},3500)}}catch(t){e(!1)}})},onSend:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(e,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.isOnNotAliveLogin();case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:e&&s?this.txtMessage&&(this.history.chatDetail.push(this.txtLoading()),this.socket.emit("SEND_MESSAGE",{asa_id:e,to:s,supportID:this.support.supportID,messages:{type:"text",text:this.txtMessage}}),this.txtMessage="",this.setReadStatus(e)):b.a.error("คุณไม่ได้เลือกผู้ร่วมพูดคุย.","กรุณาเลือกผู้สนทนา!");case 5:case"end":return t.stop()}},t,this)}));return function(e,s){return t.apply(this,arguments)}}(),setReadStatus:function(t){this.custommers.forEach(function(e){e.asa_id==t&&(e.is_read="Y",e.cntUnread=0)}),this.onTitleNoti()},setBottom:function(){var t=setInterval(function(){var e=document.getElementById("msg_history");e.scrollTop=e.scrollHeight,clearInterval(t)},10)},isDisplayList:function(t){return t==this.support.supportID},isDisplayHistory:function(t){return t==this.history.asa_id},getTimeAgo:function(t){var e=new v["a"]("en-US"),s=t.replace("t"," ");s=s.split(".");var i=new Date(s[0]);return e.format(i)},onTitleNoti:function(){if(this.custommers){var t=this.custommers.reduce(function(t,e){return t+e.cntUnread},0);document.title=0==t?"Support-Team":"(".concat(t,") Support-Team")}else document.title="Support-Team"},openNav:function(){document.getElementById("mySidenav").style.width="100%"},closeNav:function(){document.getElementById("mySidenav").style.width="0"},login:function(){this.support.username&&this.support.password?(this.socket.open(),this.showListLoading=!0,this.btnLoginLoading="loading",this.socket.emit("LOG_IN",{user:{username:this.support.username,password:this.support.password}})):b.a.warning("กรุณากรอก username หรือ password.","Invalid Login")},logout:function(){this.socket.emit("LOG_OUT",{supportID:this.support.supportID})},reloadList:function(){this.custommers=[],this.history=[],this.showHistory=!1,this.socket.emit("GET_LIST",{supportID:this.support.supportID}),this.onTitleNoti()},txtLoading:function(){return{id:S.guid(),previewImageUrl:"loading",response_type:"image",create_date:S.getDateTime(),support_id:this.support.supportID,is_read:"N"}},getLocalStoreDataUser:function(){return this.onAliveLoginLocalStore()?{username:localStorage.getItem("username"),password:localStorage.getItem("password"),supportID:localStorage.getItem("supportID")}:null},setLocalStoreDataUser:function(t){localStorage.setItem("username",t.username),localStorage.setItem("password",t.password),localStorage.setItem("supportID",t.supportID)},onAliveLoginLocalStore:function(){return null!==localStorage.getItem("username")||null!==localStorage.getItem("password")||null!==localStorage.getItem("supportID")}},mounted:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:v["a"].locale(y.a),e=this.getLocalStoreDataUser(),e?(this.socket.open(),this.support=e,this.socket.emit("GET_LIST",{supportID:this.support.supportID})):this.openNav(),this.socket.on("LOGIN",function(t){s.btnLoginLoading="",t?(s.support=t,s.setLocalStoreDataUser(t),s.socket.emit("GET_LIST",{supportID:s.support.supportID}),s.onTitleNoti(),s.closeNav()):b.a.error("username หรือ password ไม่ถูกต้อง.","Invalid Login")}),this.socket.on("LOGOUT",function(t){s.support.supportID===t&&(localStorage.clear(),s.openNav())}),this.socket.on("LIST",function(t){s.isDisplayList(t.supportID)&&(s.showListLoading=!1,s.custommers=t.data,s.onTitleNoti())}),this.socket.on("HISTORY",function(t){s.isDisplayList(t.supportID)&&s.isDisplayHistory(t.asa_id)&&(s.history.chatDetail=t.chatDetail,s.showHistoryLoading=!1,s.showHistory=!0,s.setBottom(),s.setReadStatus(t.asa_id))}),this.socket.on("OLDHISTORY",function(t){s.isDisplayList(t.supportID)&&s.isDisplayHistory(t.asa_id)&&(s.history.chatDetail=t.chatDetail,s.showHistoryLoading=!1,s.showHistory=!0,s.setReadStatus(t.asa_id))}),this.socket.on("IMAGE",function(t){s.isDisplayList(t.supportID)&&s.isDisplayHistory(t.asa_id)&&(s.history.chatDetail=t.chatDetail,s.setBottom(),s.onTitleNoti())}),this.socket.on("MESSAGE",function(t){s.isDisplayList(t.supportID)&&s.isDisplayHistory(t.asa_id)&&(s.history.chatDetail=t.chatDetail,s.setBottom(),s.onTitleNoti())}),this.socket.on("CONNECTED",function(t){b.a.success(t,"SERVER ปลอดภัย.")}),this.socket.on("disconnect",function(t){s.socket.open(),b.a.error("network has a problem.","การเชื่อมต่อมีปัญหา")}),this.socket.on("connect_error",function(){b.a.error("การเชื่อมต่อไม่สำเร็จ.","การเชื่อมต่อไม่สำเร็จ")}),this.socket.on("heartbeat",function(t){t.beat,t.id}),this.socket.on("message",function(t){b.a.success(t,"SERVER ปลอดภัย.")});case 15:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),k=I,D=Object(u["a"])(k,d,h,!1,null,null,null);D.options.__file="SocketIOWay.vue";var C=D.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("h3",{staticClass:"title"},[t._v("404 Not Found")])])}],T={},O=T,N=Object(u["a"])(O,L,E,!1,null,null,null);N.options.__file="PageNotFound.vue";var R=N.exports,U=[{path:"/",component:C},{path:"*",component:R}];i["a"].use(a["a"]),i["a"].config.productionTip=!1;var M=new a["a"]({mode:"history",routes:U});new i["a"]({render:function(t){return t(l)},router:M}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},c21b:function(t,e,s){},db49:function(t,e){var s={production:{},dev:{hosting:"https://134d1fc6.ngrok.io"}};e.setting=s.dev}});
//# sourceMappingURL=app.841366d1.js.map