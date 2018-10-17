(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,r){t.exports=r(64)},25:function(t,e,r){},27:function(t,e,r){},63:function(t){t.exports={definitions:{contrasts:{ttest:{type:"object",required:[],properties:{name:{type:"string"},condition_list:{type:"array",items:{type:"string"}},weights:{type:"array",items:{type:"number"}},type:{type:"string",enum:["T","t",null]}}},Ftest:{type:"object",required:[],properties:{name:{type:"string"},condition_list:{type:"array",items:{type:"string"}},weights:{type:"array",items:{type:"array",items:{type:"number"}}},type:{type:"string",enum:["F"]}}}},transformationArgs:{input:{type:"array",items:{type:"string"}},output_str:{type:"string"},output_arr:{type:"array",items:{type:"string"}},weights:{type:"array",items:{type:"number"}},wrt:{type:"array",items:{type:"string"}},demean:{type:"boolean"},target:{type:"array",items:{type:"string"}},input_attr:{anyOf:[{type:"string"},{type:"array",items:{type:"string"}}]},output_attr:{anyOf:[{type:"string"},{type:"array",items:{type:"string"}}]},prefix:{type:"array",items:{type:"string"}},ref_level:{type:"string"},replace:{type:"object"},attribute:{type:"string"},rescale:{type:"boolean"},threshold:{type:"string"},binarize:{type:"boolean"},above:{type:"boolean"},signed:{type:"boolean"},model:{type:"string",enum:["spm","glover","fir"]},derivative:{type:"boolean"},dispersion:{type:"boolean"},fir_delays:{type:"array",items:{type:"string"}},constraint:{type:"string"}},transformations:{sum:{type:"object",required:["input"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_str"}}},drop_na:{type:"object",required:["input"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},assign:{type:"object",required:["input","target"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},target:{$ref:"#/definitions/transformationArgs/target"},output:{$ref:"#/definitions/transformationArgs/output_arr"},input_attr:{$ref:"#/definitions/transformationArgs/input_attr"},output_attr:{$ref:"#/definitions/transformationArgs/output_attr"}}},copy:{type:"object",required:["input","output"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},demean:{type:"object",required:["input"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},factor:{type:"object",required:["input"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},prefix:{$ref:"#/definitions/transformationArgs/prefix"},constraint:{$ref:"#/definitions/transformationArgs/constraint"},ref_level:{$ref:"#/definitions/transformationArgs/ref_level"}}},not:{type:"object",required:["input"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},or:{type:"object",required:["input","output"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_str"}}},and:{type:"object",required:["input","output"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_str"}}},orthogonalize:{type:"object",required:["input","wrt"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"},wrt:{$ref:"#/definitions/transformationArgs/wrt"},demean:{$ref:"#/definitions/transformationArgs/demean"}}},product:{type:"object",required:["input","output"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_str"}}},replace:{type:"object",required:["input","replace"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},replace:{$ref:"#/definitions/transformationArgs/replace"},attribute:{$ref:"#/definitions/transformationArgs/attribute"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},scale:{type:"object",required:["input"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"},demean:{$ref:"#/definitions/transformationArgs/demean"},rescale:{$ref:"#/definitions/transformationArgs/rescale"}}},select:{type:"object",required:["input","output"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"},weights:{$ref:"#/definitions/transformationArgs/weights"}}},threshold:{type:"object",required:["input","output"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},threshold:{$ref:"#/definitions/transformationArgs/threshold"},binarize:{$ref:"#/definitions/transformationArgs/binarize"},above:{$ref:"#/definitions/transformationArgs/above"},signed:{$ref:"#/definitions/transformationArgs/signed"}}},to_dense:{type:"object",required:["input"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},output:{$ref:"#/definitions/transformationArgs/output_arr"}}},convolve_HRF:{type:"object",required:["input"],properties:{input:{$ref:"#/definitions/transformationArgs/input"},model:{$ref:"#/definitions/transformationArgs/model"},derivative:{$ref:"#/definitions/transformationArgs/derivative"},dispersion:{$ref:"#/definitions/transformationArgs/dispersion"},fir_delays:{$ref:"#/definitions/transformationArgs/fir_delays"}}}}},type:"object",required:[],properties:{name:{type:"string"},description:{type:"string"},input:{type:"object",required:[],properties:{task:{type:"string"}}},blocks:{type:"array",items:{type:"object",required:[],properties:{level:{type:"string",enum:["run","session","subject","dataset"]},transformations:{type:"array",items:{anyOf:[{$ref:"#/definitions/transformations/copy"},{$ref:"#/definitions/transformations/drop_na"},{$ref:"#/definitions/transformations/scale"},{$ref:"#/definitions/transformations/orthogonalize"},{$ref:"#/definitions/transformations/factor"},{$ref:"#/definitions/transformations/sum"},{$ref:"#/definitions/transformations/product"},{$ref:"#/definitions/transformations/or"},{$ref:"#/definitions/transformations/not"},{$ref:"#/definitions/transformations/and"},{$ref:"#/definitions/transformations/select"},{$ref:"#/definitions/transformations/replace"},{$ref:"#/definitions/transformations/assign"},{$ref:"#/definitions/transformations/threshold"},{$ref:"#/definitions/transformations/to_dense"},{$ref:"#/definitions/transformations/convolve_HRF"}]}},model:{type:"object",additionalProperties:!1,required:["variables"],properties:{variables:{type:"array",items:{type:"string"}}}},contrasts:{type:"array",items:{anyOf:[{$ref:"#/definitions/contrasts/ttest"},{$ref:"#/definitions/contrasts/Ftest"}]}}}}}}}},64:function(t,e,r){"use strict";r.r(e);var i=r(0),n=r.n(i),o=r(19),s=r.n(o),a=(r(25),r(2)),p=r(6),f=r(7),u=r(10),d=r(8),m=r(9),y=(r(27),r(29)),c=r(63),g=function(t){function e(){return Object(p.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){var t=[];return this.props.valid.split(",").map(function(e,r){return t.push(n.a.createElement("li",{key:r},e)),e}),n.a.createElement("div",null,n.a.createElement("ul",null,t))}}]),e}(i.Component),l=function(t){function e(t){var r;return Object(p.a)(this,e),(r=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={value:"test",schema:c,valid:"Invalid"},r.handleChange=r.handleChange.bind(Object(a.a)(Object(a.a)(r))),r}return Object(m.a)(e,t),Object(f.a)(e,[{key:"handleChange",value:function(t){var e=t.target.value;this.setState({value:e}),t.preventDefault();try{e=JSON.parse(e)}catch(t){console.log(t)}var r=new y,i=r.compile(this.state.schema),n=i(e);n?n="Valid!":(console.log(i.errors),n="Invalid: "+r.errorsText(i.errors)),this.setState({valid:n})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",null,n.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange}),n.a.createElement(g,{valid:this.state.valid})))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.40d6775b.chunk.js.map