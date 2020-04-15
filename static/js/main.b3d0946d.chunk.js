(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(86),a(37)),i=a(63),s=a(44),m=a(33),u=a(153),h=a(154),d=a(136),E=a(137),g=a(156),p=a(138),b=a(139),y=a(140),v=a(141),f=a(142),w=a(45),k=a(133),C=a(135),x=a(69),j=a.n(x),O=a(67),I=a.n(O),S=a(132),T=Object(S.a)((function(e){return{menuContainer:{width:250,background:"#311",height:"30rem"},avatar:{display:"block",margin:"0.5rem auto",width:e.spacing(14),height:e.spacing(14)},listItem:{color:"lightblue"}}})),F=[{listIcon:r.a.createElement(k.a,null),listText:"Home",listPath:"/covid-19"},{listIcon:r.a.createElement(I.a,null),listText:"Map",listPath:"/map-tracker"},{listIcon:r.a.createElement(C.a,null),listText:"About",listPath:"/about"}],D=function(){var e,t=Object(n.useState)({right:!1}),a=Object(s.a)(t,2),l=a[0],c=a[1],k=function(e,t){return function(){c(Object(i.a)({},l,Object(o.a)({},e,t)))}},C=T();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{component:"nav"},r.a.createElement(y.a,{position:"sticky",style:{background:"black"}},r.a.createElement(v.a,null,r.a.createElement(f.a,{onClick:k("right",!0)},r.a.createElement(j.a,{style:{color:"orange"}})),r.a.createElement(w.a,{variant:"h5",style:{color:"lightblue"}},"COVID-19 LiveStats"),r.a.createElement(u.a,{open:l.right,onClose:k("right",!1)},(e="right",r.a.createElement(h.a,{className:C.menuContainer,component:"div",onClick:k(e,!1)},r.a.createElement(d.a,null),r.a.createElement(E.a,null,F.map((function(e,t){return r.a.createElement(g.a,{button:!0,key:t,component:m.b,to:e.listPath},r.a.createElement(p.a,{className:C.listItem},e.listIcon),r.a.createElement(b.a,{className:C.listItem,primary:e.listText}))}))))))))))},W=a(49),N=a.n(W),H=a(70),A=a(143),M=a(144),P=a(145),V=a(146),B=a(147),J=a(74),L=a(148),R=a(149),z=a(150),G=a(151),q=a(4),$=a(71),_=a.n($),K=Object(q.a)((function(e){return{head:{backgroundColor:e.palette.info.main,color:e.palette.common.white},body:{fontSize:14}}}))(A.a),Q=Object(q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(M.a),U=Object(S.a)({root:{flexGrow:1},table:{width:"100%"},row:{maxWidth:"16%"},container:{maxHeight:800},worldFacts:{minWidth:200,maxWidth:"100%",backgroundColor:"#245175"},bar:{width:"100%","& > * + *":{marginTop:16}},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var X=function(){var e=U(),t=Object(n.useState)({response:[]}),a=Object(s.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)((function(){(function(){var e=Object(H.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()("https://covid-193.p.rapidapi.com/statistics",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"8529a60fe1msh86abdd1bb20286cp190477jsnc68714d9e22c"}});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=function(e,t){return 100*t/e};return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{container:!0,className:e.root,spacing:2},r.a.createElement(P.a,{item:!0,md:3},r.a.createElement(V.a,{className:e.worldFacts,align:"center"},r.a.createElement(B.a,null,r.a.createElement(w.a,{variant:"h5",style:{color:"white"}},"Total Confirmed Cases",l.response.filter((function(e){return"All"===e.country})).map((function(e){return r.a.createElement(h.a,null,r.a.createElement(w.a,{variant:"h4",key:e.country,style:{color:"#65dd9b"}},e.cases.total),r.a.createElement(w.a,{variant:"h5",style:{color:"white"}},"Total Recovered"),r.a.createElement(w.a,{variant:"h4",key:e.country,style:{color:"#65dd9b"}},e.cases.recovered),r.a.createElement(w.a,{variant:"h5",style:{color:"white"}},"Total Died"),r.a.createElement(w.a,{variant:"h4",key:e.country,style:{color:"red"}},e.deaths.total),r.a.createElement(w.a,{variant:"h5",style:{color:"white"}},"Total Recovered %"),r.a.createElement(w.a,{variant:"h4",key:e.country,style:{color:"#65dd9b"}},o(e.cases.total,e.cases.recovered).toFixed(2)+"%"))})))))),r.a.createElement(P.a,{item:!0,md:9},r.a.createElement(J.a,{className:e.table},r.a.createElement(L.a,{className:e.container},r.a.createElement(R.a,{stickyHeader:!0,"aria-label":"sticky table",style:{overflow:"wrap"}},r.a.createElement(z.a,null,r.a.createElement(M.a,null,r.a.createElement(K,null,"Country"),r.a.createElement(K,null,"Recovered"),r.a.createElement(K,{align:"right"},"Total Cases"),r.a.createElement(K,{align:"right"},"New Cases"),r.a.createElement(K,{align:"right"},"Active Cases"),r.a.createElement(K,{align:"right"},"Recovered"),r.a.createElement(K,{align:"right"},"Deaths"))),r.a.createElement(G.a,null,l.response.map((function(e){return r.a.createElement(Q,{key:e.country},r.a.createElement(A.a,{component:"th",scope:"row"},e.country),r.a.createElement(A.a,{component:"th",scope:"row"},o(e.cases.total,e.cases.recovered).toFixed(2)+"%"),r.a.createElement(K,{align:"right"},e.cases.total),r.a.createElement(K,{align:"right"},e.cases.new),r.a.createElement(K,{align:"right"},e.cases.active),r.a.createElement(K,{align:"right",style:{background:"green"}},e.cases.recovered),r.a.createElement(K,{align:"right",style:{background:"red"}},e.deaths.total))})))))))))};var Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(X,null))},Z=a(152),ee=a(25),te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(h.a,null,r.a.createElement(w.a,{variant:"h3",style:{color:"lightblue"}},"Tracker Map for COVID-19"),r.a.createElement("iframe",{width:"100%",height:"400",frameborder:"5",scrolling:"yes",marginheight:"0",marginwidth:"0",title:"2019-nCoV",src:"//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"}),r.a.createElement(w.a,null,"Map Data by"," ",r.a.createElement("a",{href:"https://systems.jhu.edu/research/public-health/ncov/"},"Johns Hopkins Center for Systems Science and Engineering"))))},ae=a(72),ne=a.n(ae),re=a(73),le=a.n(re),ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(J.a,{container:"div",align:"center",style:{background:"lightblue",minHeight:800,WrapText:"center"}},r.a.createElement(w.a,{variant:"h4",style:{color:"white",fontWeight:"bold"}},"About the COVID-19 LiveStats"),r.a.createElement(w.a,{variant:"subtitle1",align:"justify",style:{maxWidth:500}},"The COVID-19 LiveStates updates about every 15 minutes. Map is updated frequently by Johns Hopkins Center for Systems Science and Engineering. Data is fetched from third party sources using APIs provided by the source."),r.a.createElement(w.a,{variant:"h4",style:{color:"white",fontWeight:"bold",padding:10}},"Designed by:"),r.a.createElement(w.a,{variant:"body1"},"Swarnjit Singh Chahal"),r.a.createElement(h.a,null,r.a.createElement(w.a,{variant:"h6",style:{color:"Blue"}},"Connect with me"),r.a.createElement(f.a,{"aria-label":"Linkedin.com",onClick:function(){return window.open("https://www.linkedin.com/in/swarnjit-chahal-2239492a/")}},r.a.createElement(ne.a,null)),r.a.createElement(f.a,{"aria-label":"GitHub.com",onClick:function(){return window.open("https://github.com/swarnjit/covid-19")}},r.a.createElement(le.a,null)))))};var oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,null),r.a.createElement(ee.a,{exact:!0,path:"/covid-19",component:Y}),r.a.createElement(ee.a,{path:"/map-tracker",component:te}),r.a.createElement(ee.a,{path:"/about",component:ce}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a(111)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.b3d0946d.chunk.js.map