import{m as B}from"./chunk-4BMEZGHF-BCJ74EV_-CJUxqx5O.js";import{_ as i,s as W,g as z,p as P,o as S,a as F,b as T,C as x,G as D,d as E,x as v,D as R,E as Y,l as $}from"./mermaid-CI9Xz-tl-9iXL-Cnt.js";import{u as A}from"./radar-MK3ICKWK-Biv3jium-BH_pW4Ub.js";import"./main-rMrzitnj.js";import"./viewer-DpLhQV_x-CbSQ_q2_.js";import"./copy-NOBrwKqN-Bz8-p_9I.js";import"./_baseUniq-DmAMCrPp-DYO0EBh-.js";import"./_basePickBy-9qJ8CywS-Dt7CZhJG.js";import"./clone-DhFCwC0s-DJfPyPAU.js";var w={packet:[]},u=structuredClone(w),G=Y.packet,H=i(()=>{const t=x({...G,...R().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),L=i(()=>u.packet,"getPacket"),j=i(t=>{t.length>0&&u.packet.push(t)},"pushWord"),q=i(()=>{v(),u=structuredClone(w)},"clear"),f={pushWord:j,getPacket:L,getConfig:H,clear:q,setAccTitle:T,getAccTitle:F,setDiagramTitle:S,getDiagramTitle:P,getAccDescription:z,setAccDescription:W},I=1e4,M=i(t=>{B(t,f);let e=-1,o=[],s=1;const{bitsPerRow:n}=f.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,$.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=n+1&&f.getPacket().length<I;){const[h,c]=O({start:a,end:r,label:p},s,n);if(o.push(h),h.end+1===s*n&&(f.pushWord(o),o=[],s++),!c)break;({start:a,end:r,label:p}=c)}}f.pushWord(o)},"populate"),O=i((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),U={parse:i(async t=>{const e=await A("packet",t);$.debug(e),M(e)},"parse")},X=i((t,e,o,s)=>{const n=s.db,a=n.getConfig(),{rowHeight:r,paddingY:p,bitWidth:h,bitsPerRow:c}=a,m=n.getPacket(),l=n.getDiagramTitle(),k=r+p,d=k*(m.length+1)-(l?0:r),b=h*c+2,g=D(e);g.attr("viewbox",`0 0 ${b} ${d}`),E(g,d,b,a.useMaxWidth);for(const[y,C]of m.entries())J(g,C,y,a);g.append("text").text(l).attr("x",b/2).attr("y",d-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),J=i((t,e,o,{rowHeight:s,paddingX:n,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:h})=>{const c=t.append("g"),m=o*(s+a)+a;for(const l of e){const k=l.start%p*r+1,d=(l.end-l.start+1)*r-n;if(c.append("rect").attr("x",k).attr("y",m).attr("width",d).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",k+d/2).attr("y",m+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!h)continue;const b=l.end===l.start,g=m-2;c.append("text").attr("x",k+(b?d/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(l.start),b||c.append("text").attr("x",k+d).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),K={draw:X},N={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},_=i(({packet:t}={})=>{const e=x(N,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),it={parser:U,db:f,renderer:K,styles:_};export{it as diagram};
