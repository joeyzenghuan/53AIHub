import{m as V}from"./chunk-4BMEZGHF-BRPYHCcP-BYduVyDY.js";import{_ as c,g as I,s as J,a as Q,b as X,p as j,o as q,l as R,c as K,C as U,G as Y,M as Z,d as tt,x as et,E as at,a3 as O}from"./mermaid-D-jfYye8-DjnILoFE.js";import{u as nt}from"./radar-MK3ICKWK-BMMToEGd-BR5-L-ZA.js";import{H as w,z as rt}from"./helper-7WMIPux3--MLZ3yDD.js";import{v as E}from"./arc-NKn7zvIi-DGfqm_W6.js";import{h as it}from"./ordinal-DfAQgscy-Pc8f3NoK.js";import"./main-aAIm056l.js";import"./copy-CYcZm6uN-DGinUUyo.js";import"./_baseUniq-B6a7YGUp-Blf8fwA6.js";import"./_basePickBy-xsBAlSzH-BB0qij6x.js";import"./clone-CAZldAwj-7Gj7Y5uV.js";import"./init-DjUOC4st-DHuO7-vr.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,o=null,h=w(0),g=w(O),S=w(0);function i(e){var n,s=(e=rt(e)).length,u,$,y=0,p=new Array(s),r=new Array(s),m=+h.apply(this,arguments),v=Math.min(O,Math.max(-O,g.apply(this,arguments)-m)),f,T=Math.min(Math.abs(v)/s,S.apply(this,arguments)),D=T*(v<0?-1:1),d;for(n=0;n<s;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(y+=d);for(a!=null?p.sort(function(x,A){return a(r[x],r[A])}):o!=null&&p.sort(function(x,A){return o(e[x],e[A])}),n=0,$=y?(v-s*D)/y:0;n<s;++n,m=f)u=p[n],d=r[u],f=m+(d>0?d*$:0)+D,r[u]={data:e[u],index:n,value:d,startAngle:m,endAngle:f,padAngle:T};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:w(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,o=null,i):a},i.sort=function(e){return arguments.length?(o=e,a=null,i):o},i.startAngle=function(e){return arguments.length?(h=typeof e=="function"?e:w(+e),i):h},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:w(+e),i):g},i.padAngle=function(e){return arguments.length?(S=typeof e=="function"?e:w(+e),i):S},i}var pt=at.pie,F={sections:new Map,showData:!1},M=F.sections,W=F.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,W=F.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),R.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),mt=c(()=>M,"getSections"),ft=c(t=>{W=t},"setShowData"),ht=c(()=>W,"getShowData"),H={getConfig:ut,clear:dt,setDiagramTitle:q,getDiagramTitle:j,setAccTitle:X,getAccTitle:Q,setAccDescription:J,getAccDescription:I,addSection:gt,getSections:mt,setShowData:ft,getShowData:ht},yt=c((t,a)=>{V(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),xt={parse:c(async t=>{const a=await nt("pie",t);R.debug(a),yt(a,H)},"parse")},wt=c(t=>`
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
`+t);const g=h.db,S=K(),i=U(g.getConfig(),S.pie),e=40,n=18,s=4,u=450,$=u,y=Y(a),p=y.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=S;let[m]=Z(r.pieOuterStrokeWidth);m??(m=2);const v=i.textPosition,f=Math.min($,u)/2-e,T=E().innerRadius(0).outerRadius(f),D=E().innerRadius(f*v).outerRadius(f*v);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+m/2).attr("class","pieOuterCircle");const d=g.getSections(),x=$t(d),A=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],C=it(A);p.selectAll("mySlices").data(x).enter().append("path").attr("d",T).attr("fill",l=>C(l.data.label)).attr("class","pieCircle");let N=0;d.forEach(l=>{N+=l}),p.selectAll("mySlices").data(x).enter().append("text").text(l=>(l.data.value/N*100).toFixed(0)+"%").attr("transform",l=>"translate("+D.centroid(l)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const z=p.selectAll(".legend").data(C.domain()).enter().append("g").attr("class","legend").attr("transform",(l,b)=>{const k=n+s,_=k*C.domain().length/2,G=12*n,P=b*k-_;return"translate("+G+","+P+")"});z.append("rect").attr("width",n).attr("height",n).style("fill",C).style("stroke",C),z.data(x).append("text").attr("x",n+s).attr("y",n-s).text(l=>{const{label:b,value:k}=l.data;return g.getShowData()?`${b} [${k}]`:b});const L=Math.max(...z.selectAll("text").nodes().map(l=>(l==null?void 0:l.getBoundingClientRect().width)??0)),B=$+e+n+s+L;y.attr("viewBox",`0 0 ${B} ${u}`),tt(y,u,B,i.useMaxWidth)},"draw"),At={draw:vt},Bt={parser:xt,db:H,renderer:At,styles:St};export{Bt as diagram};
