(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{PfTR:function(e,a,t){"use strict";t("KKXr");var n=t("q1tI"),l=t.n(n),r=t("ZCxb"),o=t.n(r),i=t("JI6e"),m=t("QojX"),c=t("zUrK"),u=t("cWnB"),d=t("dDCJ"),s=t("AINe"),p=t("ma3e"),E=t("vOnD").default.div.withConfig({displayName:"SignupSwal__ShareButtons",componentId:"gzrphp-0"})(["& > iframe{margin:5px;}"]),h=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"You're all signed up! Stay tuned for more information, we'll send you an email as soon as we have updates. In the meantime, please spread the word and tell your friends!"),l.a.createElement(E,null,l.a.createElement("iframe",{title:"Facebook Share Button",src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fquaranteen.university%2F&layout=button&size=small&appId=601642820272377&width=67&height=20",width:"67",height:"20",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}),l.a.createElement("iframe",{title:"Twitter Tweet Button",id:"twitter-widget-0",scrolling:"no",frameBorder:"0",allowtransparency:"true",allowFullScreen:!0,className:"twitter-share-button twitter-share-button-rendered twitter-tweet-button",style:{position:"static",visibility:"visible",width:"60px",height:"20px"},src:"https://platform.twitter.com/widgets/tweet_button.d0f13be8321eb432fba28cfc1c3351b1.en.html#dnt=false&hashtags=QuaranteenU&id=twitter-widget-0&lang=en&original_referer=http%3A%2F%2Flocalhost%3A8000%2Fregister%2F&size=m&text=I%20just%20signed%20up%20for%20virtual%20commencement%20at%20Quaranteen%20University!%20You%20can%20too!&time=1584765354022&type=share&url=https%3A%2F%2Fquaranteen.university%2F&via=QuaranteenU","data-url":"https://quaranteen.university/"})))},T=t("rsPU"),f=t.n(T),g=t("ebkx"),w=t("ELif");a.a=function(e){var a=e.defaultRole,t=e.formId,r=e.fieldNames,E=e.simpleEmail,T=Object(n.useState)(!1),y=T[0],b=T[1],G=Object(n.useState)(a||""),v=G[0],M=G[1],S=Object(n.useState)(""),C=S[0],A=S[1],F=Object(n.useState)(!1),I=F[0],k=F[1],N=function(e){return A(e.target.value)};return l.a.createElement(m.a,{noValidate:!0,validated:y,onSubmit:function(e){e.preventDefault();var a=e.currentTarget;if(!1===a.checkValidity())e.stopPropagation();else{k(!0);var n="https://docs.google.com/forms/d/e/"+t+"/formResponse?"+Object(g.a)(a),r=new Request(n,{method:"GET",mode:"no-cors"});fetch(r).then((function(e){if(0!==e.status&&200!==e.status)throw new Error("Request failed!");o()({title:"Woohoo!",icon:f.a,content:l.a.createElement(h,null),button:"yuh"}).then((function(){a.reset(),M(""),A(""),k(!1),b(!1)}))})).catch((function(e){o()("Oh no!",e,"error"),console.error(e)}))}b(!0)}},l.a.createElement(m.a.Row,null,l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"firstName"},l.a.createElement(m.a.Label,null,"First name"),l.a.createElement(m.a.Control,{required:!0,type:"text",placeholder:"First name",name:r.firstName})),l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"lastName"},l.a.createElement(m.a.Label,null,"Last name"),l.a.createElement(m.a.Control,{required:!0,type:"text",placeholder:"Last name",name:r.lastName}))),l.a.createElement(m.a.Row,null,E?l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"email"},l.a.createElement(m.a.Label,null,"Email Address"),l.a.createElement(c.a,null,l.a.createElement(m.a.Control,{type:"email",placeholder:"someone@gmail.com",pattern:w.a,name:r.email,value:C,onChange:N,required:!0}),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please enter a valid email address."))):l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"email"},l.a.createElement(m.a.Label,null,"Audience"===v?"":"University ","Email Address"),l.a.createElement(c.a,null,l.a.createElement(m.a.Control,{type:"email",placeholder:"Audience"===v?"someone@gmail.com":"someone@school.edu",pattern:"Audience"===v?w.a:w.b,name:r.email,value:C,onChange:N,required:!0}),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please enter a valid"," ","Audience"===v?"":l.a.createElement("strong",null,"university/college")," ","email address."))),l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"timezone"},l.a.createElement(m.a.Label,null,"Timezone"," ",l.a.createElement(d.a,{placement:"right",overlay:l.a.createElement(s.a,null,"We'll match you with a graduation time that doesn't keep you up late.")},l.a.createElement(p.d,null))),l.a.createElement(m.a.Control,{as:"select",name:r.timezone,required:!0},l.a.createElement("option",{value:""},"-- Select a timezone --"),l.a.createElement("option",null,"GMT-11:00 (Midway Islands Time)"),l.a.createElement("option",null,"GMT-10:00 (Hawaii Standard Time)"),l.a.createElement("option",null,"GMT-9:00 (Alaska Standard Time)"),l.a.createElement("option",null,"GMT-8:00 (Pacific Standard Time)"),l.a.createElement("option",null,"GMT-7:00 (Phoenix Standard Time)"),l.a.createElement("option",null,"GMT-7:00 (Mountain Standard Time)"),l.a.createElement("option",null,"GMT-6:00 (Central Standard Time)"),l.a.createElement("option",null,"GMT-5:00 (Eastern Standard Time)"),l.a.createElement("option",null,"GMT-5:00 (Indiana Eastern Standard Time)"),l.a.createElement("option",null,"GMT-4:00 (Puerto Rico and US Virgin Islands Time)"),l.a.createElement("option",null,"GMT-3:30 (Canada Newfoundland Time)"),l.a.createElement("option",null,"GMT-3:00 (Argentina Standard Time)"),l.a.createElement("option",null,"GMT-3:00 (Brazil Eastern Time)"),l.a.createElement("option",null,"GMT-1:00 (Central African Time)"),l.a.createElement("option",null,"GMT+0:00 (Greenwich Mean Time)"),l.a.createElement("option",null,"GMT+1:00 (European Central Time)"),l.a.createElement("option",null,"GMT+2:00 (Eastern European Time)"),l.a.createElement("option",null,"GMT+2:00 (Egypt Standard Time)"),l.a.createElement("option",null,"GMT+3:00 (Eastern African Time)"),l.a.createElement("option",null,"GMT+3:30 (Middle East Time)"),l.a.createElement("option",null,"GMT+4:00 (Near East Time)"),l.a.createElement("option",null,"GMT+5:00 (Pakistan Lahore Time)"),l.a.createElement("option",null,"GMT+5:30 (India Standard Time)"),l.a.createElement("option",null,"GMT+6:00 (Bangladesh Standard Time)"),l.a.createElement("option",null,"GMT+7:00 (Vietnam Standard Time)"),l.a.createElement("option",null,"GMT+8:00 (China Standard Time)"),l.a.createElement("option",null,"GMT+8:00 (Taipei Standard Time)"),l.a.createElement("option",null,"GMT+9:00 (Japan Standard Time)"),l.a.createElement("option",null,"GMT+9:30 (Australia Central Time)"),l.a.createElement("option",null,"GMT+10:00 (Australia Eastern Time)"),l.a.createElement("option",null,"GMT+11:00 (Solomon Standard Time)"),l.a.createElement("option",null,"GMT+12:00 (New Zealand Standard Time)")),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please select a timezone."))),l.a.createElement(m.a.Row,null,l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"role"},l.a.createElement(m.a.Label,null,"How would you like to participate?"),l.a.createElement(m.a.Control,{as:"select",name:r.role,value:v,onChange:function(e){return M(e.target.value)},required:!0},l.a.createElement("option",{value:""},"-- Select a role --"),l.a.createElement("option",{value:"Graduate"},"Graduate"),l.a.createElement("option",{value:"Audience"},"Audience Member")),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please select an option.")),l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"emaildomain",className:"d-none"},l.a.createElement(m.a.Label,null,"Email Domain"),l.a.createElement(c.a,null,l.a.createElement(m.a.Control,{type:"text",value:C.split("@")[1]||"",name:r.domain,readOnly:!0,required:!0}),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"You shouldn't be able to see this!")))),l.a.createElement(u.a,{type:"submit",className:"wiggle",disabled:I},"Hype hype"))}},aSaP:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),o=t("7oih"),i=t("EYWl"),m=t("Eavj"),c=t("PfTR");a.default=function(e){var a=e.location,t=null;a&&a.state&&(t=a.state.role);return l.a.createElement(o.a,null,l.a.createElement(i.a,{title:"Register",route:"/register"}),l.a.createElement(m.a,{date:"05/2/2020",closedContent:l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Registration Closed!"),l.a.createElement("p",{className:"lead"},"Although registration has closed, due to a technical issue with our email system we're opening up the RSVP to all interested students instead of only those who had already registered. You can find the RSVP form ",l.a.createElement(r.Link,{to:"/newgrad"},"here"),"!"))},l.a.createElement("h1",null,"Join the ","Audience"===t?"Audience":"Graduating Class"),l.a.createElement("p",{className:"lead"},"Excited for virtual commencement? Let us know, and we'll keep you updated! ",l.a.createElement("br",null),l.a.createElement("small",{className:"text-muted"},l.a.createElement("em",null,"Are you a graduating high school senior (or a friend/parent of one)? Use the ",l.a.createElement(r.Link,{to:"/academy"},"QUA Interest Form")," ","instead!")),l.a.createElement("br",null),l.a.createElement("small",{className:"text-muted"},l.a.createElement("em",null,"Registration closes"," ",l.a.createElement("strong",null,"May 1",l.a.createElement("sup",null,"st"))," ","at ",l.a.createElement("strong",null,"midnight"),"!"))),l.a.createElement(c.a,{defaultRole:t,formId:"1FAIpQLScTKQ9YHAMJqLxgVztjnmp5b3kfaoSgKl_KwaF4VeFj2-tRhw",fieldNames:{firstName:"entry.1677400286",lastName:"entry.993248599",email:"entry.1555601280",timezone:"entry.1538936380",role:"entry.1806088227",domain:"entry.144425953"},simpleEmail:!1})))}}}]);
//# sourceMappingURL=component---src-pages-register-js-ee736f46d2aaa58b264f.js.map