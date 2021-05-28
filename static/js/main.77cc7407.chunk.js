(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(64)},25:function(e,t,a){},27:function(e,t,a){},63:function(e){e.exports={title:"BIDS Stats-Models Specification (BEP002) Schema",description:"BIDS Stats-Models Specification (BEP002) is still under active development, so schema is Not yet finalized",$schema:"http://json-schema.org/draft-07/schema#",type:"object",definitions:{DatasetInputs:{labelInputs:{oneOf:[{type:"string"},{type:"array",items:{type:"string"}}]},inputKeywords:{type:"object",properties:{task:{$ref:"#/definitions/DatasetInputs/labelInputs"},run:{$ref:"#/definitions/DatasetInputs/labelInputs"},subject:{$ref:"#/definitions/DatasetInputs/labelInputs"},session:{$ref:"#/definitions/DatasetInputs/labelInputs"}}}}},additionalProperties:!1,properties:{BIDSModelVersion:{type:"string"},Name:{type:"string"},Description:{type:"string"},Input:{type:"object",anyOf:[{properties:{Include:{$ref:"#/definitions/DatasetInputs/inputKeywords"},Exclude:{$ref:"#/definitions/DatasetInputs/inputKeywords"}}},{$ref:"#/definitions/DatasetInputs/inputKeywords"}]},Nodes:{type:"array",items:{type:"object",properties:{Level:{type:"string",enum:["run","session","subject","dataset"]},Name:{type:"string"},Transformations:{Transformer:{type:"string"},Instructions:{type:"array",items:{type:"object"}}},Model:{type:"object",additionalProperties:!1,properties:{Type:{type:"string",enum:["glm","Meta"]},X:{type:"array",items:{anyOf:[{type:"string"},{type:"number"}]}},Formula:{type:"string"},Options:{type:"object",additionalProperties:!1,properties:{HighPassFilterCutoffSecs:{type:"number"},LowPassFilterCutoffSecs:{type:"number"},Confounds:{type:"array",items:{type:"string"}},ReplaceVariables:{type:"object",additionalProperties:!0},Mask:{type:"string"},Aggregate:{oneOf:[{type:"boolean"},{type:"string",enum:["none","average","pca"]}]}}},VarianceStructure:{type:"array",items:[{type:"object",additionalProperties:!1,properties:{Name:{type:"string"},GroupBy:{type:"string"},SplitBy:{type:"string"}}}]},ErrorDistribution:{type:"object",additionalProperties:!1,properties:{}},Software:{type:"array",items:[{type:"object",additionalProperties:!0}]}}},Contrasts:{type:"array",items:{type:"object",properties:{Name:{type:"string"},ConditionList:{type:"array",items:{type:["string","number"]}},Weights:{type:"array",items:{oneOf:[{type:["string","number"]},{type:"array",items:{type:["string","number"]}}]}},Test:{enum:["t","F"]}}}},DummyContrasts:{type:"object",properties:{Type:{enum:["t","FEMA"]},Contrasts:{type:"array",items:{type:"string"}}}},GroupBy:{type:"array",items:{type:"string"}}}}},Edges:{type:"array",items:{type:"object",properties:{Source:{type:"string"},Destination:{type:"string"},Filter:{type:"object"}}}}}}},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),s=a.n(i),o=(a(25),a(2)),p=a(6),l=a(7),c=a(9),y=a(8),u=a(10),d=(a(27),a(29)),m=a(63),f=function(e){function t(){return Object(p.a)(this,t),Object(c.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[];return this.props.valid.map(function(t,a){return e.push(r.a.createElement("li",{key:a},r.a.createElement("pre",null,JSON.stringify(t,null,2)))),t}),r.a.createElement("div",null,r.a.createElement("ul",null,e))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(c.a)(this,Object(y.a)(t).call(this,e))).state={value:"test",schema:m,valid:["Invalid"]},a.handleChange=a.handleChange.bind(Object(o.a)(Object(o.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t}),e.preventDefault();try{t=JSON.parse(t)}catch(e){console.log(e)}var a=(new d).compile(this.state.schema),n=a(t);n?n=["Valid!"]:(console.log(a.errors),n=a.errors),this.setState({valid:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"BIDS Schema Validator")),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left"},r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange})),r.a.createElement("div",{className:"right"},r.a.createElement(f,{valid:this.state.valid}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.77cc7407.chunk.js.map