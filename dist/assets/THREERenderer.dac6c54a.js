import{b as v,S as h}from"./three.module.615c85f2.js";import{a3 as g,a4 as x,a5 as f,a6 as w,a7 as S}from"./index.00fd4a75.js";let i,n=[],y=`
    precision highp float;
    uniform sampler2D uSampler;
    varying vec2 vUv;

    void main() {
        vec3 mapTexel = texture2D(uSampler, vUv).rgb;
        gl_FragColor = vec4(mapTexel, 1.);
    }
`,E=({canvas:e})=>(i=new v({antialias:!0}),{renderer:i}),P=({id:e,canvas:r,width:t,height:a,pixelRatio:l})=>{let{gl:s,render:d,resize:o,uniforms:c,destroy:p}=g({canvas:r,shader:y,uniforms:{uSampler:{value:null,type:"sampler2D"}}}),u=new x(s,{image:i.domElement});c.uSampler.value=u;let m=new h;return n.push({id:e,scene:m,texture:u,render:d,resize:o,destroy:p}),{scene:m,renderer:i}},U=({id:e,canvas:r})=>{const t=n.findIndex(l=>l.id===e),a=n[t];f(i.getContext().__uuid),a&&(a.texture.destroy(),a.destroy(),n.splice(t,1))},_=({id:e})=>{const r=n.find(t=>t.id===e);r&&(r.texture.needsUpdate=!0,r.render())},b=({width:e,height:r,pixelRatio:t})=>{i.setPixelRatio(t),i.setSize(e,r);for(let a=0;a<n.length;a++)n[a].resize({width:e,height:r,pixelRatio:t})};w.on("shader-update",e=>{f(i.getContext().__uuid);const{filepath:r,source:t}=e,a=n.map(s=>s.scene),l=[];a.forEach(s=>{s.traverse(d=>{if(d.material){const{material:o}=d;(o.isShaderMaterial||o.isRawShaderMaterial)&&l.push(o)}})}),l.forEach(s=>{const{vertexShader:d,fragmentShader:o}=s;Object.keys({vertexShader:d,fragmentShader:o}).forEach(c=>{const p=s[c],u=S(p);u===r&&(console.log(`[fragment] shader update ${u.replace("/Users/furiouzz/Documents/2023-10-gobelins/_DEV/fragments","")}`),s[c]=t,s.needsUpdate=!0)})})});export{E as init,_ as onAfterUpdatePreview,U as onDestroyPreview,P as onMountPreview,b as resize};
