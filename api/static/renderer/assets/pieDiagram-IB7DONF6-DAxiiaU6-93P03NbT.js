import{m as Y}from"./chunk-4BMEZGHF-BCJ74EV_-BbxbfUDy.js";import{_ as c,g as _,s as j,a as H,b as I,p as U,o as J,l as R,c as K,C as Q,G as X,M as Z,d as tt,x as et,E as at,a3 as z}from"./mermaid-CI9Xz-tl-B5aPcuJQ.js";import{u as nt}from"./radar-MK3ICKWK-Biv3jium-No1HaFjW.js";import{q as w,P as rt}from"./viewer-DpLhQV_x-C9BHHOqC.js";import{v as q}from"./arc-DRAgoghf-BXbPDp_e.js";import{h as it}from"./ordinal-DfAQgscy-Pc8f3NoK.js";import"./main-BBgPs3nN.js";import"./copy-NOBrwKqN-CRvCqIg8.js";import"./_baseUniq-DmAMCrPp-vmoWDVIY.js";import"./_basePickBy-9qJ8CywS-7FqdDOvX.js";import"./clone-DhFCwC0s-DqRf6iAw.js";import"./init-DjUOC4st-DHuO7-vr.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,o=null,h=w(0),m=w(z),S=w(0);function i(e){var n,s=(e=rt(e)).length,u,$,y=0,p=new Array(s),r=new Array(s),g=+h.apply(this,arguments),v=Math.min(z,Math.max(-z,m.apply(this,arguments)-g)),f,T=Math.min(Math.abs(v)/s,S.apply(this,arguments)),D=T*(v<0?-1:1),d;for(n=0;n<s;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(y+=d);for(a!=null?p.sort(function(x,A){return a(r[x],r[A])}):o!=null&&p.sort(function(x,A){return o(e[x],e[A])}),n=0,$=y?(v-s*D)/y:0;n<s;++n,g=f)u=p[n],d=r[u],f=g+(d>0?d*$:0)+D,r[u]={data:e[u],index:n,value:d,startAngle:g,endAngle:f,padAngle:T};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:w(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,o=null,i):a},i.sort=function(e){return arguments.length?(o=e,a=null,i):o},i.startAngle=function(e){return arguments.length?(h=typeof e=="function"?e:w(+e),i):h},i.endAngle=function(e){return arguments.length?(m=typeof e=="function"?e:w(+e),i):m},i.padAngle=function(e){return arguments.length?(S=typeof e=="function"?e:w(+e),i):S},i}var pt=at.pie,W={sections:new Map,showData:!1},M=W.sections,F=W.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,F=W.showData,et()},"clear"),mt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),R.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),gt=c(()=>M,"getSections"),ft=c(t=>{F=t},"setShowData"),ht=c(()=>F,"getShowData"),B={getConfig:ut,clear:dt,setDiagramTitle:J,getDiagramTitle:U,setAccTitle:I,getAccTitle:H,setAccDescription:j,getAccDescription:_,addSection:mt,getSections:gt,setShowData:ft,getShowData:ht},yt=c((t,a)=>{Y(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),xt={parse:c(async t=>{const a=await nt("pie",t);R.debug(a),yt(a,B)},"parse")},wt=c(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),St=wt,$t=c(t=>{const a=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,h)=>h.value-o.value);return st().value(o=>o.value)(a)},"createPieArcs"),vt=c((t,a,o,h)=>{R.debug(`rendering pie chart
`+t);const m=h.db,S=K(),i=Q(m.getConfig(),S.pie),e=40,n=18,s=4,u=450,$=u,y=X(a),p=y.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=S;let[g]=Z(r.pieOuterStrokeWidth);g??(g=2);const v=i.textPosition,f=Math.min($,u)/2-e,T=q().innerRadius(0).outerRadius(f),D=q().innerRadius(f*v).outerRadius(f*v);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+g/2).attr("class","pieOuterCircle");const d=m.getSections(),x=$t(d),A=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],C=it(A);p.selectAll("mySlices").data(x).enter().append("path").attr("d",T).attr("fill",l=>C(l.data.label)).attr("class","pieCircle");let E=0;d.forEach(l=>{E+=l}),p.selectAll("mySlices").data(x).enter().append("text").text(l=>(l.data.value/E*100).toFixed(0)+"%").attr("transform",l=>"translate("+D.centroid(l)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(m.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const O=p.selectAll(".legend").data(C.domain()).enter().append("g").attr("class","legend").attr("transform",(l,b)=>{const k=n+s,N=k*C.domain().length/2,G=12*n,V=b*k-N;return"translate("+G+","+V+")"});O.append("rect").attr("width",n).attr("height",n).style("fill",C).style("stroke",C),O.data(x).append("text").attr("x",n+s).attr("y",n-s).text(l=>{const{label:b,value:k}=l.data;return m.getShowData()?`${b} [${k}]`:b});const L=Math.max(...O.selectAll("text").nodes().map(l=>(l==null?void 0:l.getBoundingClientRect().width)??0)),P=$+e+n+s+L;y.attr("viewBox",`0 0 ${P} ${u}`),tt(y,u,P,i.useMaxWidth)},"draw"),At={draw:vt},Pt={parser:xt,db:B,renderer:At,styles:St};export{Pt as diagram};
