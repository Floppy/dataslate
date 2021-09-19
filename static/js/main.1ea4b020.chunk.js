(this.webpackJsonpdataslate=this.webpackJsonpdataslate||[]).push([[0],{210:function(e,t,n){},225:function(e,t){},227:function(e,t){},237:function(e,t){},239:function(e,t){},265:function(e,t){},266:function(e,t){},271:function(e,t){},273:function(e,t){},280:function(e,t){},299:function(e,t){},373:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n(52),a=n.n(r),i=(n(210),n(32)),c=n.n(i),o=n(53),l=n(202),d=n(11),h=n(201),j=n(378),u=n(0);var b=function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsx)("h1",{children:"Dataslate"}),Object(u.jsx)("p",{className:"lead",children:"Easy-to-use datasheets for Warhammer 40,000: Kill Team"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"All the info you need, when you need it"}),Object(u.jsx)("li",{children:"Stats and abilities organised by phase"}),Object(u.jsx)("li",{children:"No wasted space for identical models"}),Object(u.jsx)("li",{children:"Designed for print or screen"}),Object(u.jsx)("li",{children:"Clear, uncluttered layout for easy reference"})]})]})},m=n(379),p=n(380),x=n(389),g=n(387);var O=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(m.a,{children:[Object(u.jsx)(p.a,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Header,{as:"h3",children:"Step 1"}),Object(u.jsxs)(x.a.Body,{style:{minHeight:"12em"},children:[Object(u.jsxs)(x.a.Text,{children:["Build your force in"," ",Object(u.jsx)("a",{href:"https://battlescribe.net/",children:"Battlescribe"}),"."]}),Object(u.jsx)(x.a.Text,{children:"Currently only Kill Team rosters are supported."})]})]})}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Header,{as:"h3",children:"Step 2"}),Object(u.jsx)(x.a.Body,{style:{minHeight:"12em"},children:Object(u.jsx)(h.a,{onDrop:e.onUpload,accept:".ros,.rosz",children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(u.jsxs)(g.a,Object(d.a)(Object(d.a)({variant:"primary"},t()),{},{style:{textAlign:"center"},children:[Object(u.jsx)("input",Object(d.a)({},n())),Object(u.jsx)("p",{children:"Drop your roster file here, or click to select one."}),Object(u.jsx)("p",{children:Object(u.jsx)("em",{children:"(*.rosz and *.ros accepted)"})})]}))}})})]})}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Header,{as:"h3",children:"Step 3"}),Object(u.jsxs)(x.a.Body,{style:{minHeight:"12em"},children:[Object(u.jsx)(x.a.Text,{children:"Print your datasheets out, and never forget an ability again!"}),Object(u.jsx)(x.a.Text,{children:"Prepare to dominate your foes!"})]})]})})]}),Object(u.jsxs)("footer",{children:["Built with ",Object(u.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and ",Object(u.jsx)("a",{href:"https://getbootstrap.com",children:"Bootstrap"}),". Icons courtesy of ",Object(u.jsx)("a",{href:"https://killteam.app/",children:"Companion for Kill Team"}),". Released as ",Object(u.jsx)("a",{href:"https://github.com/floppy/dataslate",children:"Open Source"}),", report problems ",Object(u.jsx)("a",{href:"https://github.com/floppy/dataslate/issues/new",children:"on GitHub"}),". Version: ",Object(u.jsx)("em",{children:Object(u.jsx)("a",{href:"https://github.com/floppy/dataslate/tree/".concat("28e118c6"),children:"28e118c6"})})]})]})};var f=function(e){return Object(u.jsxs)("div",{style:{pageBreakAfter:"always"},children:[Object(u.jsxs)("h2",{style:{background:"#FF6F2D",color:"white",padding:"10px",width:"100%",display:"flex"},children:[Object(u.jsxs)(p.a,{children:[e.name," Phase"]}),Object(u.jsx)(p.a,{style:{flexGrow:0,textAlign:"right"},children:e.note&&Object(u.jsx)("small",{children:e.note})})]}),e.children]})},y=n(381),v=n(5),w=n.n(v);var S=function(e){var t=e.phase?e.abilities.filter((function(t){return t.phases&&t.phases.indexOf(e.phase)>=0})):e.abilities.filter((function(e){return e.phases&&0===e.phases.length})),n=e.highlight?"primary":"";return 0===t.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(y.a,{striped:!0,bordered:!0,size:"sm",variant:n,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Ability"}),Object(u.jsx)("th",{children:"Description"})]})}),Object(u.jsx)("tbody",{children:w.a.sortBy(t,["name"]).map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.description})]})}))})]})};var k=function(e){return Object(u.jsxs)(y.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"M"}),Object(u.jsx)("th",{children:"WS"}),Object(u.jsx)("th",{children:"BS"}),Object(u.jsx)("th",{children:"S"}),Object(u.jsx)("th",{children:"T"}),Object(u.jsx)("th",{children:"W"}),Object(u.jsx)("th",{children:"A"}),Object(u.jsx)("th",{children:"Ld"}),Object(u.jsx)("th",{children:"Sv"}),Object(u.jsx)("th",{children:"Points"})]})}),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[e.movement,'"']}),Object(u.jsxs)("td",{children:[e.weapon_skill,"+"]}),Object(u.jsx)("td",{children:isNaN(e.ballistic_skill)?"-":e.ballistic_skill+"+"}),Object(u.jsx)("td",{children:e.strength}),Object(u.jsx)("td",{children:e.toughness}),Object(u.jsx)("td",{children:e.wounds}),Object(u.jsxs)("td",{children:[e.attacks,e.additional_attacks?Object(u.jsxs)("strong",{children:[" +",e.additional_attacks]}):null]}),Object(u.jsx)("td",{children:e.leadership}),Object(u.jsxs)("td",{children:[e.save,"+",e.invulnerable_save?Object(u.jsxs)(u.Fragment,{children:[" / ",Object(u.jsxs)("strong",{children:[e.invulnerable_save,"++"]})]}):null]}),Object(u.jsx)("td",{children:e.points})]})})]})};function A(e){return e.specialism?Object(u.jsx)("img",{className:"specialism",style:{height:"1em",marginRight:"10px"},alt:e.specialism,src:"/icons/".concat(e.specialism.toLowerCase(),".svg")}):Object(u.jsx)(u.Fragment,{})}function F(e){return e.category&&"specialist"!==e.category.toLowerCase()&&"specialist retainer"!==e.category.toLowerCase()?Object(u.jsx)("img",{className:"category",style:{height:"1em",marginRight:"10px"},alt:e.category,src:"/icons/".concat(e.category.toLowerCase(),".svg")}):Object(u.jsx)(u.Fragment,{})}var C=n(197),N=n.n(C);function B(e){var t=w.a.without([e.type,"Specialist"===e.category||"Specialist Retainer"===e.category?e.specialism:e.category],null,void 0,"");return Object(u.jsxs)("h3",{style:{background:"black",color:"white",padding:"5px",display:"flex",width:"100%",justifyContent:"space-between"},children:[Object(u.jsxs)(p.a,{children:[e.category&&e.specialism&&("Specialist"===e.category||"Specialist Retainer"===e.category)&&Object(u.jsx)(A,{specialism:e.specialism}),e.category&&Object(u.jsx)(F,{category:e.category}),e.selected>1&&Object(u.jsxs)("small",{children:[e.selected," x "]}),Object(u.jsxs)("strong",{children:[t[0]," "]}),Object(u.jsx)("small",{children:w.a.join(w.a.slice(t,1),", ")})]}),e.showSelector&&Object(u.jsx)(p.a,{style:{flexGrow:0},children:Object(u.jsx)(N.a,{value:e.selected,slideStop:function(t){return e.onSelectionChanged&&e.onSelectionChanged(e.uuid,t.target.value)},step:1,max:e.count,min:0})})]})}var R=n(382);function P(e){return Object(u.jsxs)("div",{style:{background:"rgba(0, 0, 0, 0.125)",padding:"5px 10px 0px 10px",marginTop:"10px"},children:[e.faction?Object(u.jsx)(R.a,{pill:!0,variant:"primary",className:"mb-2",style:{textTransform:"uppercase",marginRight:"10px"},children:e.faction}):Object(u.jsx)(u.Fragment,{}),e.keywords.map((function(e){return Object(u.jsx)(R.a,{pill:!0,variant:"secondary",className:"mb-2",style:{textTransform:"uppercase",marginRight:"10px"},children:e})}))]})}function T(e){return Object(u.jsxs)(x.a,{className:e.model.selected>0?"included":"excluded",children:[Object(u.jsx)(B,Object(d.a)(Object(d.a)({},e.model),{},{showSelector:!0,onSelectionChanged:e.onSelectionChanged})),Object(u.jsxs)(x.a.Body,{children:["Commander"===e.model.category&&Object(u.jsxs)("div",{children:["Commander specialism: ",Object(u.jsx)("strong",{children:e.model.specialism})]}),Object(u.jsx)("p",{children:e.model.weapons.map((function(e){return e.name})).concat(e.model.wargear.map((function(e){return e.name}))).join(", ")}),Object(u.jsx)(k,Object(d.a)(Object(d.a)({},e.model.stats),{},{points:e.model.points})),Object(u.jsx)(S,{abilities:e.model.abilities,phase:""})]}),Object(u.jsx)(P,{faction:"".concat(e.model.faction," \ud83d\udc80"),keywords:e.model.keywords})]})}function D(e){return Object(u.jsxs)("div",{className:"statbadge mb-4",style:{paddingTop:".2vw",border:"1px solid black",width:"5vw",height:"5vw",background:"black",color:"white",display:"flex",flexDirection:"column",textAlign:"center",borderRadius:"25%"},children:[Object(u.jsx)("div",{className:"name",style:{fontSize:"1vw",fontWeight:"bold",lineHeight:"1vw",color:"#FF6F2D"},children:e.name}),Object(u.jsxs)("div",{className:"value",style:{fontSize:"2.5vw",lineHeight:"3vw",fontWeight:"bold"},children:[e.value,e.secondaryValue?Object(u.jsx)("small",{children:e.secondaryValue}):Object(u.jsx)(u.Fragment,{})]})]})}function W(e){return Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(B,Object(d.a)({},e.model)),Object(u.jsx)(S,{abilities:e.model.abilities,phase:"movement"})]}),Object(u.jsx)(p.a,{sm:"auto",children:Object(u.jsx)(D,{name:"M",value:"".concat(e.model.stats.movement)})})]})}function I(e){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(B,Object(d.a)({},e.model)),Object(u.jsx)(S,{abilities:e.model.abilities,phase:"scouting"})]})})}function _(e){return e.abilities.filter((function(e){return e.phases&&e.phases.indexOf("scouting")>=0})).length>0}function V(e){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(B,Object(d.a)({},e.model)),Object(u.jsx)(S,{abilities:e.model.abilities,phase:"deployment"})]})})}function M(e){return e.abilities.filter((function(e){return e.phases&&e.phases.indexOf("deployment")>=0})).length>0}function H(e){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(B,Object(d.a)({},e.model)),Object(u.jsx)(S,{abilities:e.model.abilities,phase:"initiative"})]})})}function L(e){return e.abilities.filter((function(e){return e.phases&&e.phases.indexOf("initiative")>=0})).length>0}var q=function(e){return 0===e.powers.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(y.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Power"}),Object(u.jsx)("th",{children:"Warp Charge"}),Object(u.jsx)("th",{children:"Description"})]})}),Object(u.jsx)("tbody",{children:w.a.sortBy(e.powers,["name"]).map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.charge}),Object(u.jsx)("td",{children:e.description})]})}))})]})};function G(e){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(B,Object(d.a)({},e.model)),Object(u.jsx)(q,{powers:e.model.psychicPowers}),Object(u.jsx)(S,{abilities:e.model.abilities,phase:"psychic"})]})})}function E(e){return e.psychicPowers.length>0||e.abilities.filter((function(e){return e.phases&&e.phases.indexOf("psychic")>=0})).length>0}var z=function(e){var t="shooting"===e.phase?e.weapons.filter((function(e){return"Melee"!==e.type})):e.weapons.filter((function(e){return"Melee"===e.type}));return 0===t.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(y.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Weapon"}),"shooting"===e.phase&&Object(u.jsx)("th",{children:"Range"}),"shooting"===e.phase&&Object(u.jsx)("th",{children:"Type"}),"shooting"===e.phase&&Object(u.jsx)("th",{children:"Shots"}),Object(u.jsx)("th",{children:"S"}),Object(u.jsx)("th",{children:"AP"}),Object(u.jsx)("th",{children:"D"}),Object(u.jsx)("th",{children:"Abilities"})]})}),Object(u.jsx)("tbody",{children:w.a.sortBy(t,["name"]).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.name}),"shooting"===e.phase&&Object(u.jsxs)("td",{children:[t.range,'"']}),"shooting"===e.phase&&Object(u.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.type}),"shooting"===e.phase&&Object(u.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.shots}),Object(u.jsx)("td",{children:t.strength}),Object(u.jsx)("td",{children:t.armourPiercing}),Object(u.jsx)("td",{children:t.damage}),Object(u.jsx)("td",{children:t.abilities})]})}))})]})};function K(e){return Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(B,Object(d.a)({},e.model)),U(e.model)&&Object(u.jsx)(z,{weapons:e.model.weapons,phase:"shooting",userStrength:e.model.stats.strength}),Object(u.jsx)(S,{abilities:e.model.abilities,phase:"shooting"})]}),Object(u.jsxs)(p.a,{sm:"auto",children:[U(e.model)&&Object(u.jsx)(D,{name:"BS",value:"".concat(e.model.stats.ballistic_skill),secondaryValue:"+"}),Object(u.jsx)(D,{name:"T",value:"".concat(e.model.stats.toughness)})]}),Object(u.jsxs)(p.a,{sm:"auto",children:[Object(u.jsx)(D,{name:"Sv",value:"".concat(e.model.stats.save),secondaryValue:"+"}),e.model.stats.invulnerable_save?Object(u.jsx)(D,{name:"Inv",value:"".concat(e.model.stats.invulnerable_save),secondaryValue:"+"}):Object(u.jsx)(u.Fragment,{})]})]})}function U(e){return!isNaN(e.stats.ballistic_skill)&&e.weapons.filter((function(e){return"Melee"!==e.type})).length>0}function J(e){return Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(B,Object(d.a)({},e.model)),Object(u.jsx)(z,{weapons:e.model.weapons,phase:"fight",userStrength:e.model.stats.strength}),Object(u.jsx)(S,{abilities:e.model.abilities,phase:"fight"})]}),Object(u.jsxs)(p.a,{sm:"auto",children:[Object(u.jsx)(D,{name:"A",value:"".concat(e.model.stats.attacks),secondaryValue:e.model.stats.additional_attacks?"+".concat(e.model.stats.additional_attacks):null}),Object(u.jsx)(D,{name:"T",value:"".concat(e.model.stats.toughness)})]}),Object(u.jsxs)(p.a,{sm:"auto",children:[Object(u.jsx)(D,{name:"WS",value:"".concat(e.model.stats.weapon_skill),secondaryValue:"+"}),Object(u.jsx)(D,{name:"Sv",value:"".concat(e.model.stats.save),secondaryValue:"+"}),e.model.stats.invulnerable_save?Object(u.jsx)(D,{name:"Inv",value:"".concat(e.model.stats.invulnerable_save),secondaryValue:"+"}):Object(u.jsx)(u.Fragment,{})]})]})}function $(e){return Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(B,Object(d.a)({},e.model)),Object(u.jsx)(S,{abilities:e.model.abilities,phase:"morale"})]}),Object(u.jsx)(p.a,{sm:"auto",children:Object(u.jsx)(D,{name:"Ld",value:"".concat(e.model.stats.leadership)})})]})}var Q=n(383);function X(e){return Object(u.jsx)(Q.a,{variant:"dark",className:"d-print-none",onClick:e.onClose,children:"Close"})}function Y(e){var t=w.a.sortBy(e.models,(function(e){return[null==e.category,e.category,e.type]})),n=w.a.filter(t,(function(e){return e.selected>0}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{style:{background:"#FF6F2D",color:"white",padding:"10px",width:"100%",display:"flex"},children:[Object(u.jsx)(p.a,{children:e.name}),Object(u.jsx)(p.a,{style:{flexGrow:0,textAlign:"right"},children:Object(u.jsxs)("small",{children:[w.a.sumBy(e.models,(function(e){return e.selected*e.points})),"pts"]})}),Object(u.jsx)(p.a,{style:{flexGrow:0,textAlign:"right"},children:Object(u.jsx)(X,{onClose:e.onClose})})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"",highlight:!0}),t.map((function(t){return Object(u.jsx)(T,{model:t,onSelectionChanged:e.onSelectionChanged})}))]}),w.a.some(n,_)&&Object(u.jsx)(f,{name:"scouting",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"scouting",highlight:!0}),n.map((function(e){return _(e)&&Object(u.jsx)(I,{model:e})}))]})}),w.a.some(n,M)&&Object(u.jsx)(f,{name:"deployment",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"deployment",highlight:!0}),n.map((function(e){return M(e)&&Object(u.jsx)(V,{model:e})}))]})}),w.a.some(n,L)&&Object(u.jsx)(f,{name:"initiative",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"initiative",highlight:!0}),n.map((function(e){return L(e)&&Object(u.jsx)(H,{model:e})}))]})}),Object(u.jsx)(f,{name:"movement",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"movement",highlight:!0}),n.map((function(e){return Object(u.jsx)(W,{model:e})}))]})}),w.a.some(n,E)&&Object(u.jsx)(f,{name:"psychic",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"psychic",highlight:!0}),n.map((function(e){return E(e)&&Object(u.jsx)(G,{model:e})}))]})}),Object(u.jsx)(f,{name:"shooting",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"shooting",highlight:!0}),n.map((function(e){return Object(u.jsx)(K,{model:e})}))]})}),Object(u.jsx)(f,{name:"fight",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"fight",highlight:!0}),n.map((function(e){return Object(u.jsx)(J,{model:e})}))]})}),Object(u.jsx)(f,{name:"morale",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{abilities:e.forceRules,phase:"morale",highlight:!0}),n.map((function(e){return Object(u.jsx)($,{model:e})}))]})})]})}function Z(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(y.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Weapon"}),Object(u.jsx)("th",{children:"Attacks"}),Object(u.jsx)("th",{children:"Hit"}),Object(u.jsx)("th",{children:"Damage"}),Object(u.jsx)("th",{children:"Critical"}),Object(u.jsx)("th",{children:"Rules"}),Object(u.jsx)("th",{children:"Critical"})]})}),Object(u.jsx)("tbody",{children:e.weapons.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.attacks}),Object(u.jsxs)("td",{children:[e.hit,"+"]}),Object(u.jsx)("td",{children:e.damage}),Object(u.jsx)("td",{children:e.criticalDamage}),Object(u.jsx)("td",{children:e.specialRules}),Object(u.jsx)("td",{children:e.criticalRules})]})}))})]})})}function ee(e){return 0===e.equipment.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(x.a,{border:"secondary",bg:"light",children:[Object(u.jsx)(x.a.Header,{style:{background:"rgba(0, 0, 0, 0.05)"},as:"h4",children:"Equipment"}),Object(u.jsx)(x.a.Body,{children:e.equipment.map((function(e){return Object(u.jsxs)("p",{children:[Object(u.jsxs)("strong",{children:[e.name," (",e.cost," EP): "]}),e.description]})}))})]})}function te(e){return Object(u.jsx)(u.Fragment,{children:w.a.sortBy(e.actions,["name"]).map((function(e){return Object(u.jsxs)(x.a,{border:"primary",bg:"light",children:[Object(u.jsx)(x.a.Header,{style:{background:"#FF6F2D",color:"white"},as:"h4",children:e.name}),Object(u.jsx)(x.a.Body,{children:e.description})]})}))})}function ne(e){return Object(u.jsx)(y.a,{striped:!0,bordered:!0,size:"sm",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.title}),Object(u.jsx)("td",{children:"\ud83e\ude78 ".repeat(e.wounds)})]})})}var se=function(e){return 0===e.abilities.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(x.a,{border:"secondary",bg:"light",children:[Object(u.jsx)(x.a.Header,{style:{background:"rgba(0, 0, 0, 0.05)"},as:"h4",children:"Abilities"}),Object(u.jsx)(x.a.Body,{children:w.a.sortBy(e.abilities,["name"]).map((function(e){return Object(u.jsxs)("p",{children:[Object(u.jsxs)("strong",{children:[e.name,": "]}),e.description]})}))})]})};function re(e){return Object(u.jsxs)(x.a,{style:{marginBottom:"20px"},className:e.model.selected>0?"included":"excluded",children:[Object(u.jsx)(B,Object(d.a)({},e.model)),Object(u.jsx)(x.a.Body,{children:Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{sm:"10",children:[w.a.range(1,e.model.selected+1).map((function(t){return Object(u.jsx)(ne,{wounds:e.model.stats.wounds,title:e.model.name||"".concat(e.model.type," ").concat(e.model.selected>1?t:"")})})),Object(u.jsx)(Z,{weapons:e.model.weapons}),Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(ee,{equipment:e.model.equipment}),Object(u.jsx)(se,{abilities:e.model.abilities})]}),Object(u.jsx)(p.a,{children:Object(u.jsx)(te,{actions:e.model.actions})})]})]}),Object(u.jsxs)(p.a,{sm:"1",children:[Object(u.jsx)(D,{name:"M",value:"".concat(e.model.stats.movement,"\u25cf")}),Object(u.jsx)(D,{name:"GA",value:"".concat(e.model.stats.groupActivation)}),Object(u.jsx)(D,{name:"DF",value:"".concat(e.model.stats.defence)})]}),Object(u.jsxs)(p.a,{sm:"1",children:[Object(u.jsx)(D,{name:"W",value:"".concat(e.model.stats.wounds)}),Object(u.jsx)(D,{name:"APL",value:"".concat(e.model.stats.actionPointLimit)}),Object(u.jsx)(D,{name:"Sv",value:"".concat(e.model.stats.save,"+")})]})]})}),Object(u.jsx)(P,{faction:"".concat(e.model.faction," \ud83d\udc80"),keywords:e.model.keywords})]})}function ae(e){return 0===e.rules.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsx)(y.a,{striped:!0,bordered:!0,children:Object(u.jsx)("tbody",{children:w.a.sortBy(e.rules,["name"]).map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("strong",{children:e.name})}),Object(u.jsx)("td",{children:e.description})]})}))})})}function ie(e){var t={background:"#FF6F2D",color:"black",padding:"10px",width:"100%",display:"flex"};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{style:t,children:[Object(u.jsx)(p.a,{children:e.name}),Object(u.jsx)(p.a,{style:{flexGrow:0,textAlign:"right"},children:Object(u.jsx)(X,{onClose:e.onClose})})]}),e.models.map((function(e){return Object(u.jsx)(re,{model:e})})),Object(u.jsx)("h2",{style:t,children:"Rules"}),Object(u.jsx)(ae,{rules:w.a.uniqBy(w.a.flatten(e.models.map((function(e){return e.rules}))),"name")})]})}var ce=n(384),oe=n(63),le=n(388),de=n(78),he=n.n(de),je=n(51),ue={scouting:[/ scouting /],deployment:[/ before the first battle round /,/ set up /,/ cult ambush /],initiative:[/ start of each battle round /,/ beginning of each battle round /,/ at the beginning of the battle round /],movement:[/ movement phase /,/ climbs? /,/ normal move /,/ advances? /,/ charges? /,/ falls? back /,/ reacts? /,/ overwatch /,/ retreats? /,/ fly /,/ after this model has charged /,/ from reserves? /,/ can move across /,/ setup within /],psychic:[/ psychic /,/ deny the witch /,/ perils of the warp /,/ psychich /],shooting:[/ shooting phase /,/ shots? /,/ ballistic skill /,/ ranged /,/ range characteristic /,/ half range /,/ long range /,/ short range /,/ grenades? /,/ shoots? /,/ shooting /,/ fire[sd]+ /,/ firing /,/ obscured /,/ obcured /,/ order(ed)? /,/ voice of command /,/ invulnerable save /,/ demolition charges? /,/ liberator autostubs /,/ obscurred /,/ look out sir! /,/ pistol /,/ heavy weapons?/,/ add [0-9] to saving throws /],fight:[/ fight phase /,/ fights? /,/ weapon skill /,/ attacks characteristics? /,/ strength characteristics? /,/ piles? in /,/ consolidates? /,/ melee /,/ close combat /,/ death to the false emperor /,/ additional attacks? /,/ invulnerable save /,/ look out sir! /,/ intervening terrain /,/ terrain that is between the two models /,/ damage characteristic is [0-9] in a battle round in which this model charged /,/ add [0-9] to saving throws /],morale:[/ nerve /,/ leadership /]},be=[/ weapon /,/ hit rolls? /,/ attack(s|ing)? /,/ saves? /,/ saving throws? /,/ injury rolls? /,/ wound rolls? /,/ loses? a wound /,/ fall(ing)? damage /,/ the bearer is taken out of action /,/ toughness characteristic /,/ suffers? a mortal wound /,/ taken out of action /,/ this weapon/,/ reduced to 0 wounds /],me={deployment:[/ from reserve /],movement:[/ previous movement phase /,/ preceding movement phase /,/ if the firing model moved /,/ moved during the movement phase /,/ round in which it charges or is charged /,/ in which it made a successful charge /,/ even if it fell back in the movement phase /,/ model that can fly /,/ as if it were the movement phase /,/ stunned /,/ penalty for moving /,/ as if the model had remained stationary /,/ demolition charge /],psychic:[/ after all of this weapon's attacks have been resolved /],shooting:[/ when (it|this model) fires overwatch /,/ invulnerable save (against attacks made )?in the fight phase /,/ as if it were your shooting phase /,/ tactical support turret /,/ out of action in the shooting phase /,/ mordian /],fight:[/ the ordered model immediately fights /,/ shots equal to its attacks characteristic /,/ stunned /,/ target enemies at [0-9]{1,2}" or less /,/ within half range /,/ tactical support turret /],morale:[/ target model's leadership /,/ weapon against a model which has a leadership /,/ subtract 1 from its leadership /]},pe=function(e){var t=" "+e.toLowerCase().replace(/[.,)(]/g,"")+" ",n=[];return w.a.forIn(ue,(function(e,s){w.a.some(e,(function(e){return e.test(t)}))&&n.push(s)})),n.includes("fight")||n.includes("shooting")||w.a.some(be,(function(e){return e.test(t)}))&&n.push("fight","shooting"),w.a.forIn(me,(function(e,s){w.a.some(e,(function(e){return e.test(t)}))&&w.a.remove(n,(function(e){return e===s}))})),n},xe=function(e){var t=[/models with this ability have a ([1-6]{1})\+ invulnerable save/,/has a ([1-6]{1})\+ invulnerable save($|\.|,| and| instead of)/,/has an invulnerable save of ([1-6]{1})\+/],n=w.a.map(e,(function(e){return w.a.min(w.a.map(t,(function(t){var n=e.description.match(t);return n?parseInt(n[1]):null})))}));return w.a.min(n)},ge=je.useNamespaces({roster:"http://www.battlescribe.net/schema/rosterSchema"}),Oe=function(e,t){var n=ge("roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='".concat(e,"']"),t);return n.length>0?parseInt(n[0].childNodes[0].nodeValue):""},fe=function(e,t,n){var s=ge("roster:characteristics/roster:characteristic[@name='".concat(e,"']"),t);return s.length>0?n?parseInt(s[0].childNodes[0].nodeValue):s[0].childNodes[0].nodeValue:""},ye=function(e){var t=ge(".//roster:costs/roster:cost[@name='pts']",e);return w.a.sumBy(t,(function(e){return parseInt(e.getAttribute("value"))}))},ve=function(e){var t=ge("roster:description",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:pe(t)}},we=function(e){var t=ge(".//roster:characteristic[@name='Description']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:pe(t)}},Se=function(e){var t=ge(".//roster:characteristic[@name='Ability']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:pe(t)}},ke=function(e){var t=ge(".//roster:characteristic[@name='Psychic Power']",e)[0].childNodes[0].nodeValue,n=t.match(/warp charge value of ([0-9]+)\.(.*)/),s=null;return n.length>2&&(s=parseInt(n[1]),t=n[2]),{name:e.getAttribute("name"),charge:s,description:t}},Ae=function(e,t){var n=w.a.map(e,(function(e){return e.abilities})).concat(w.a.map(t,(function(e){return e.description}))),s=w.a.map(n,(function(e){return function(e){var t=[/if a model/,/if the bearer/,/unless/];return w.a.sum(w.a.map([/Add ([1-9]{1}) to this model's Attacks characteristic/,/ ([1-9]|an|one|two) additional attack/,/(one) \(and only one\) attack with this weapon./],(function(n){var s=e.match(n);return s?w.a.some(t,(function(t){return t.test(e)}))?0:"an"===s[1]||"one"===s[1]?1:"two"===s[1]?2:parseInt(s[1]||s[2]):0})))}(e)}));return w.a.sum(s)},Fe=function(e){var t=ge(".//roster:profile[@typeName='Wargear']",e).map(Se),n=ge("roster:selections/roster:selection[roster:selections/roster:selection/roster:profiles/roster:profile/@typeName='Ability']",e),s=ge(".//roster:profile[@typeName='Ability']",e).map(we).concat(t),r={movement:Oe("M",e),weapon_skill:Oe("WS",e),ballistic_skill:Oe("BS",e),strength:Oe("S",e),toughness:Oe("T",e),wounds:Oe("W",e),attacks:Oe("A",e),leadership:Oe("Ld",e),save:Oe("Sv",e),invulnerable_save:xe(s)},a={name:"Bare fists",range:"-",type:"Melee",strength:r.strength,armourPiercing:0,damage:1,abilities:"Default close combat weapon available to all models"},i=ge(".//roster:profile[@typeName='Weapon']",e).map((function(e){return function(e,t){var n=fe("S",e,!1);"User"===n&&(n=t);var s=/x([0-9]+)/i.exec(n);s&&(n=t*parseInt(s[1])),(s=/\+([0-9]+)/i.exec(n))&&(n=t+parseInt(s[1]));var r=fe("Type",e,!1);return"Melee"!==r&&(r=r.split(" ").slice(0,-1).join(" ")),{name:e.getAttribute("name"),range:fe("Range",e,!0),type:r,shots:fe("Type",e,!1).split(" ").slice(-1)[0],strength:n,armourPiercing:fe("AP",e,!0),damage:fe("D",e,!1),abilities:fe("Abilities",e,!1)}}(e,r.strength)})).concat([a]);r.additional_attacks=Ae(i,s);var c=ge("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Psychic Power']",e).map(ke),o=ge("roster:categories/roster:category[@primary='true']",e)[0].getAttribute("name"),l=ge("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]",e),h=ge("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]",e).map((function(e){return e.getAttribute("name")}));w.a.remove(h,(function(e){return"Model"===e}));var j={name:e.getAttribute("customName"),type:e.getAttribute("name"),category:"Non-specialist"===o?null:o,stats:r,abilities:s,weapons:i,wargear:t,psychicPowers:c,specialism:n.length>0?n[0].getAttribute("name"):null,faction:l.length>0?l[0].getAttribute("name").split(": ",2)[1]:null,keywords:h,points:ye(e)};return Object(d.a)(Object(d.a)({},j),{},{hash:he()([]).hash(j)})},Ce=je.useNamespaces({bs:"http://www.battlescribe.net/schema/rosterSchema"}),Ne=function(e,t){var n=Ce("bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='".concat(e,"']/text()"),t,!0);return n?parseInt(n.toString()):0},Be=function(e){return{name:Ce("string(@name)",e,!0).toString(),melee:Ce("string(@name)",e,!0).toString().startsWith("\u2694"),attacks:parseInt(Ce(".//bs:characteristic[@name='A']/text()",e,!0).toString()),hit:parseInt(Ce(".//bs:characteristic[@name='WS/BS']/text()",e,!0).toString()),damage:parseInt(Ce(".//bs:characteristic[@name='D']/text()",e,!0).toString().split("/")[0]),specialRules:(Ce(".//bs:characteristic[@name='SR']/text()",e,!0)||"-").toString(),criticalDamage:parseInt(Ce(".//bs:characteristic[@name='D']/text()",e,!0).toString().split("/")[1]),criticalRules:(Ce(".//bs:characteristic[@name='!']/text()",e,!0)||"-").toString()}},Re=function(e){return{name:Ce("string(@name)",e,!0).toString(),description:(Ce(".//bs:characteristic[@name='Ability']/text()",e,!0)||"-").toString(),phases:[]}},Pe=function(e){return{name:Ce("string(@name)",e,!0).toString(),description:(Ce(".//bs:characteristic[@name='Unique Action']/text()",e,!0)||"-").toString(),cost:1}},Te=function(e){return{name:Ce("string(@name)",e,!0).toString(),cost:parseInt(Ce("string(.//bs:cost/@value)",e,!0).toString()),description:(Ce(".//bs:characteristic[@name='Equipment']/text()",e,!0)||"-").toString()}},De=function(e){return{name:Ce("string(@name)",e,!0).toString(),description:(Ce(".//bs:description/text()",e,!0)||"-").toString(),phases:[]}},We=["Brood Coven","Cadre Mercenary","Chaos Daemons","Commorrite","Craftworld","Death Guard","Ecclesiarchy","Forge World","Greenskin","Grey Knight","Hive Fleet","Hunter Cadre","Hunter Clade","Imperial Guard","Kommando","Space Marine","Talons of the Emperor","Thousand Sons","Tomb World","Traitor Space Marine","Troupe","Veteran Guardsmen"],Ie=function(e){var t=Ce("bs:categories/bs:category[@primary='false']/@name",e).map((function(e){return(e.textContent||"").replace("\ud83d\udc80","")})),n=w.a.intersection(t,We).pop()||null,s=w.a.remove(t,(function(e){return e!==n})),r={name:Ce("string(@customName)",e,!0).toString(),type:Ce("string(@name)",e,!0).toString(),stats:{movement:Ne("M",e),actionPointLimit:Ne("APL",e),groupActivation:Ne("GA",e),defence:Ne("DF",e),save:Ne("SV",e),invulnerable_save:null,wounds:Ne("W",e)},weapons:Ce(".//bs:profile[@typeName='Weapons']",e).map(Be),equipment:Ce(".//bs:selection[(@type='upgrade') and (//bs:cost/@value!='0.0')]",e).map(Te),abilities:Ce(".//bs:profile[@typeName='Abilities']",e).map(Re),actions:Ce(".//bs:profile[@typeName='Unique Actions']",e).map(Pe),rules:Ce(".//bs:rules/bs:rule",e).map(De),keywords:s,faction:n,uuid:"",count:0,selected:0};return Object(d.a)(Object(d.a)({},r),{},{hash:he()().hash({type:r.type,weapons:r.weapons,equipment:r.equipment})})},_e=n(198),Ve=n.n(_e),Me=n(199),He=je.useNamespaces({bs:"http://www.battlescribe.net/schema/rosterSchema"}),Le=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("P"===t.charAt(0)){e.next=4;break}return e.abrupt("return",t);case 4:return n=new Ve.a,e.next=7,n.loadAsync(t);case 7:return s=e.sent,e.abrupt("return",s.file(/[^/]+\.ros/)[0].async("string"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),qe=function(e){var t=(new Me.DOMParserImpl).parseFromString(e);switch(He("/bs:roster/@gameSystemId",t,!0).nodeValue){case"a467-5f42-d24c-6e5b":return function(e){var t,n=[],s=ge("/roster:roster",e)[0].getAttribute("name"),r=ge("//roster:force/roster:rules/roster:rule",e).map(ve),a=Object(oe.a)(ge("//roster:force/roster:categories/roster:category",e));try{for(a.s();!(t=a.n()).done;){var i,c=t.value.getAttribute("entryId"),o=Object(oe.a)(ge("//roster:selection[@type='model' and roster:categories/roster:category/@entryId='".concat(c,"']"),e));try{for(o.s();!(i=o.n()).done;){var l=i.value;n.push(Fe(l))}}catch(j){o.e(j)}finally{o.f()}}}catch(j){a.e(j)}finally{a.f()}var h=w.a.groupBy(n,(function(e){return e.hash}));return{system:"KillTeam2018",name:s,forceRules:r,models:w.a.map(h,(function(e){return Object(d.a)(Object(d.a)({},e[0]),{},{uuid:Object(le.a)(),count:e.length,selected:e.length})}))}}(t);case"3b7e-7dab-f79f-2e74":return function(e){var t,n=[],s=Ce("string(/bs:roster/@name)",e,!0).toString(),r=Object(oe.a)(Ce("//bs:selection[@type='model']",e));try{for(r.s();!(t=r.n()).done;){var a=t.value;n.push(Ie(a))}}catch(c){r.e(c)}finally{r.f()}var i=w.a.groupBy(n,(function(e){return e.hash}));return{system:"KillTeam2021",name:s,models:w.a.map(i,(function(e){return Object(d.a)(Object(d.a)({},e[0]),{},{uuid:Object(le.a)(),count:e.length,selected:e.length})}))}}(t);default:throw new Error("Unsupported game system!")}},Ge=function(){var e=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FileReader,e.abrupt("return",new Promise((function(e,s){n.onerror=function(){n.abort(),s(new DOMException("Problem parsing input file."))},n.onloadend=Object(o.a)(c.a.mark((function t(){var s,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.result,t.next=3,Le(s);case 3:r=t.sent,e(qe(r));case 5:case"end":return t.stop()}}),t)}))),n.readAsBinaryString(t)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Ee(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ge(t[0]);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){r(null)},d=function(e){return"KillTeam2018"===e.system};return Object(u.jsxs)(ce.a,{fluid:"lg",children:[null===n?Object(u.jsx)(O,{onUpload:a}):Object(u.jsx)(u.Fragment,{}),n&&d(n)?Object(u.jsx)(Y,{name:n.name,models:n.models,onClose:i,forceRules:n.forceRules,onSelectionChanged:function(e,t){n&&d(n)&&r(Object.assign({models:n.models.map((function(n){return n.uuid!==e?n:Object.assign(n,{selected:t})}))},n))}}):Object(u.jsx)(u.Fragment,{}),n&&function(e){return"KillTeam2021"===e.system}(n)?Object(u.jsx)(ie,{name:n.name,models:n.models,onClose:i}):Object(u.jsx)(u.Fragment,{})]})}var ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ke(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(386).a({dsn:"https://6fe3e632b45a44c086068e13f3b1a783@o464596.ingest.sentry.io/5473956"}),a.a.render(Object(u.jsx)(Ee,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ze?(!function(e,t){fetch(e).then((function(n){var s=n.headers.get("content-type");404===n.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ke(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ke(t,e)}))}}()}},[[373,1,2]]]);
//# sourceMappingURL=main.1ea4b020.chunk.js.map