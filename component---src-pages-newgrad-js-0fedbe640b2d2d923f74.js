(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{x5Hq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),o=a("Wbzz"),r=a("Kfvu"),m=a("vOnD"),c=a("vDqi"),u=a.n(c),i=a("ZCxb"),s=a.n(i),d=a("JI6e"),h=a("QojX"),E=a("T/rR"),p=a("zUrK"),y=a("cWnB"),g=a("7oih"),f=a("EYWl"),w=(a("f3/d"),a("rsPU")),b=a.n(w),v=a("ELif"),x=a("ebkx"),k=m.default.div.withConfig({displayName:"RSVPForm__PWLB",componentId:"o6yjs4-0"})(["white-space:pre-wrap;"]),C=function(e){var t=e.fieldNames,a=e.userInfo,m=Object(n.useState)(!1),c=m[0],u=m[1],i=Object(n.useState)(!1),E=i[0],p=i[1],g=Object(n.useState)(!1),f=g[0],w=g[1];return l.a.createElement(h.a,{noValidate:!0,validated:E,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;if(!1===t.checkValidity())e.stopPropagation();else{w(!0);var a="https://docs.google.com/forms/d/e/1FAIpQLSc-ncgVvbSUNksTtWduj1dzd9XZIhZEKuuytRGIka0nqzKZiQ/formResponse?"+Object(x.a)(t),n=new Request(a,{method:"GET",mode:"no-cors"});fetch(n).then((function(e){if(0!==e.status&&200!==e.status)throw new Error("Request failed!");s()({title:"Woohoo!",icon:b.a,text:"Thanks for RSVPing! Keep your eye out for updates regarding the event, as more details on the event schedule will be sent out soon. We can't wait to see you at commencement!",button:"yuh"}).then((function(){t.reset(),w(!1),p(!1),Object(o.navigate)("/")}))})).catch((function(e){s()("Oh no!",e,"error"),console.error(e)}))}p(!0)}},l.a.createElement(k,null,l.a.createElement("strong",null,"The wait is over — get ready to make history with us on May 22",l.a.createElement("sup",null,"nd")," in Minecraft!"),l.a.createElement("br",null),l.a.createElement("br",null),"Please let us know whether you're coming so we can plan the coolest event of the spring semester.",l.a.createElement("br",null),"The logistics will roughly be:",l.a.createElement("ol",null,l.a.createElement("li",null,"You let us know whether you're coming by May 12",l.a.createElement("sup",null,"th"),"."),l.a.createElement("li",null,"We email you your commencement time at least a week before the ceremony."),l.a.createElement("li",null,"You are COMMENCED:",l.a.createElement("ul",null,l.a.createElement("li",null,"Have your name read"),l.a.createElement("li",null,"Walk the QU stage to get your personalized diploma"),l.a.createElement("li",null,"Rep your school colors, if you like"),l.a.createElement("li",null,"Say hi to your mom on stream"),l.a.createElement("li",null,"Be immortalized as part of the ceremony that's been covered by WIRED, The Verge, NBC News, The Boston Globe, Chronicle, and many others"))),l.a.createElement("li",null,"Explore QU campus (it's really, really big) and mingle with other graduates.")),l.a.createElement("br",null),"You'll be on stage for 1 minute, but you can stay on the server as long as you like before and after you walk.",l.a.createElement("br",null),l.a.createElement("strong",null,l.a.createElement("i",null,"NOTE: Please use your university/college email! We need it to get your school name and colors. :)"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"email"},l.a.createElement(h.a.Label,null,"Email Address"),l.a.createElement(h.a.Control,{type:"email",name:t.email,placeholder:"someone@gmail.com",defaultValue:a.email?a.email:"",pattern:v.a,required:!0}),l.a.createElement(h.a.Control.Feedback,{type:"invalid"},"Please enter a valid email address.")),l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"comingYesNo"},l.a.createElement(h.a.Label,null,"Are you coming to the ceremony on May 22nd?"),l.a.createElement(h.a.Control,{as:"select",name:t.comingYesNo,onChange:function(e){return u("Yes"===e.target.value)},required:!0},l.a.createElement("option",{value:""},"-- Select an option --"),l.a.createElement("option",null,"Yes"),l.a.createElement("option",null,"No")))),c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"About you"),l.a.createElement("p",null,"We're so glad you're coming! All we need now is your degree information, i.e. what will show up on your QU Diploma!"),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"fullname"},l.a.createElement(h.a.Label,null,"Your Full Name"),l.a.createElement(h.a.Control,{type:"text",name:t.fullname,placeholder:"Graduating Gradperson",defaultValue:a.name?a.name:"",required:!0}),l.a.createElement(h.a.Text,{className:"text-muted"},"Please enter it the way you'd like it displayed on a diploma")),l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"degree"},l.a.createElement(h.a.Label,null,"Your Degree"),l.a.createElement(h.a.Control,{type:"text",list:"degreeOptions",name:t.degree,required:!0}),l.a.createElement("datalist",{id:"degreeOptions"},l.a.createElement("option",null,"Bachelor of Arts"),l.a.createElement("option",null,"Bachelor of Science"),l.a.createElement("option",null,"Master of Arts"),l.a.createElement("option",null,"Master of Science"),l.a.createElement("option",null,"Doctorate (PhD)")),l.a.createElement(h.a.Text,{className:"text-muted"},"E.g. Bachelors, Masters, PhD, etc."))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"major"},l.a.createElement(h.a.Label,null,"Your Major(s)"),l.a.createElement(h.a.Control,{type:"text",name:t.major,placeholder:"Underwater Basketweaving",required:!0})),l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"minor"},l.a.createElement(h.a.Label,null,"Your Minor(s)"),l.a.createElement(h.a.Control,{type:"text",name:t.minor,placeholder:"Aground Boxmaking"}))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a,md:"4",controlId:"honors"},l.a.createElement(h.a.Label,null,"Anything else you'd like to include?"),l.a.createElement(h.a.Control,{type:"text",name:t.honors,placeholder:"Your answer"}),l.a.createElement(h.a.Text,{className:"text-muted"},"(Optional) E.g. Latin honors, first-gen student, etc.")),l.a.createElement(h.a.Group,{as:d.a,md:"4",controlId:"phonetic"},l.a.createElement(h.a.Label,null,"Phonetic spelling of your name"),l.a.createElement(h.a.Control,{type:"text",name:t.phonetic,placeholder:"Your answer"}),l.a.createElement(h.a.Text,{className:"text-muted"},"(Optional) So that we pronounce your name properly. Using IPA (",l.a.createElement(r.OutboundLink,{href:"https://www.ipachart.com/"},"https://www.ipachart.com/"),") would be extra helpful!")),l.a.createElement(h.a.Group,{as:d.a,md:"4",controlId:"timezone"},l.a.createElement(h.a.Label,null,"Your Timezone"),l.a.createElement(h.a.Control,{type:"text",name:t.timezone,placeholder:"GMT",defaultValue:a.timezone?a.timezone:"",required:!0}),l.a.createElement(h.a.Text,{className:"text-muted"},"The timezone that you're currently in. Refer to",l.a.createElement(r.OutboundLink,{href:"https://www.timeanddate.com/time/current-number-time-zones.html"},"https://www.timeanddate.com/time/current-number-time-zones.html"),"."))),l.a.createElement("h3",null,"Logistics"),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"logistics"},l.a.createElement(h.a.Label,null,"Would you prefer to graduate with students from your school or students in your timezone?"),l.a.createElement(h.a.Control,{as:"select",name:t.logistics,required:!0},l.a.createElement("option",{value:""},"-- Select an option --"),l.a.createElement("option",null,"By School"),l.a.createElement("option",null,"By Timezone")),l.a.createElement(h.a.Text,{className:"text-muted"},"This is so we don't wake you up at a crazy hour to play Minecraft. When we say \"timezone\", we mean the timezone you're currently living in.")),l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"quote"},l.a.createElement(h.a.Label,null,"Senior quote?",l.a.createElement("br",null)),l.a.createElement(h.a.Control,{type:"text",name:t.quote,placeholder:"Your answer"}),l.a.createElement(h.a.Text,{className:"text-muted"},"(Optional) This will be read on stream by a text-to speech bot when you go on stage! Just don't offend anyone, lol."))),l.a.createElement("h3",null,"One last thing..."),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"confirmMC"},l.a.createElement(h.a.Label,null,"I confirm I have a Minecraft Java Edition account or will get one before the ceremony"),l.a.createElement(h.a.Control,{as:"select",name:t.confirmMC,required:!0},l.a.createElement("option",{value:""},"-- Select an option --"),l.a.createElement("option",null,"Yup, I got it!"),l.a.createElement("option",null,"I can't get a copy by then but I'm fine with an NPC walking for me")),l.a.createElement(h.a.Text,{className:"text-muted"},"You'll need this to log onto the graduation server -- $26.95 from"," ",l.a.createElement(r.OutboundLink,{href:"https://www.minecraft.net/en-us/store/minecraft-java-edition"},"https://www.minecraft.net/en-us/store/minecraft-java-edition")," ","(If you can't get a copy in time for the ceremony, we can have an NPC with your name walk across the stage when it's your turn!)")),l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"mcUsername"},l.a.createElement(h.a.Label,null,"Your Minecraft Username"),l.a.createElement(h.a.Control,{type:"text",name:t.mcUsername,placeholder:"MCNewGrad2020",required:!0}),l.a.createElement(h.a.Text,{className:"text-muted"},"You can sign up for an account without purchasing the game right away here:"," ",l.a.createElement(r.OutboundLink,{href:"https://account.mojang.com/"},"https://account.mojang.com/")," ",'(Write "NPC" if you are requesting an NPC to walk)'))),l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"extra"},l.a.createElement(h.a.Label,null,"Anything else you'd like to tell us?"),l.a.createElement(h.a.Control,{as:"textarea",name:t.extra,rows:"3"})))),l.a.createElement(y.a,{type:"submit",className:"wiggle",disabled:f},"Hype hype"))},I=a("Eavj"),N=Object(m.default)(h.a.Row).withConfig({displayName:"newgrad__FlexRow",componentId:"xqsjqh-0"})(["display:flex;align-items:center;& > *{margin-right:15px;}"]);t.default=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],m=Object(n.useState)(!1),c=m[0],i=m[1],w=Object(n.useState)(""),x=w[0],k=w[1],S=Object(n.useState)(null),T=S[0],R=S[1];return l.a.createElement(g.a,null,l.a.createElement(f.a,{title:"Commencement RSVP",route:"/newgrad"}),l.a.createElement(I.a,{date:"05/13/2020",closedContent:l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"RSVP Closed!"),l.a.createElement("p",{className:"lead"},"In order to ensure that our team has enough time to schedule all the interested students, we had to close our RSVP form. We're sorry if you weren't able to sign up before the deadline, but we'd still love your support if you watched the event on"," ",l.a.createElement(r.OutboundLink,{href:"https://www.twitch.tv/QuaranteenU"},"Twitch"),"!"))},l.a.createElement("h1",null,"RSVP for Commencement!"),l.a.createElement("p",{className:"lead"},"Fill out your info for your virtual diploma! ",l.a.createElement("em",null,"NOTE:")," This is for the college/university commencement ceremony. If you're looking for the high school graduation ceremony, RSVP"," ",l.a.createElement(o.Link,{to:"/academygrad"},"here"),"!",l.a.createElement("br",null),l.a.createElement("small",{className:"text-muted"},l.a.createElement("em",null,"RSVPs close"," ",l.a.createElement("strong",null,"May 12",l.a.createElement("sup",null,"th"))," ","at ",l.a.createElement("strong",null,"midnight"),"!"))),T?l.a.createElement(C,{fieldNames:{email:"entry.89022382",comingYesNo:"entry.2074410333",fullname:"entry.891515203",timezone:"entry.686409048",degree:"entry.700114343",major:"entry.569807986",minor:"entry.692255109",honors:"entry.1397466450",phonetic:"entry.1064113496",logistics:"entry.956435478",quote:"entry.631727165",confirmMC:"entry.351728367",mcUsername:"entry.1256404244",extra:"entry.1515720683"},userInfo:T}):l.a.createElement(h.a,{noValidate:!0,validated:t,onSubmit:function(e){e.preventDefault(),!1===e.currentTarget.checkValidity()?e.stopPropagation():(i(!0),u.a.post("https://us-central1-quaranteen-university-276618.cloudfunctions.net/checkEmail",{email:x,event:"QU"}).then((function(e){var t=e.data,a=t.rsvpd,n=t.signUpInfo,l=t.signedUp,o=t.rsvpdNew;a&&l||o?s()({title:"Woohoo!",icon:b.a,text:"You're already RSVP'd! Nice work!",button:"yuh"}):n&&"Audience"===n.role?s()({title:"Woohoo!",icon:b.a,text:"You're an audience member, so we don't need to collect your virtual diploma information. All you need to do is show up the day of! See you at commencement!",button:"yuh"}):a||o||!l?a||o||l||(s()({title:"Hi there!",text:"Looks like you didn't register for commencement earlier, but luckily for you our RSVP form is open! You'll just need to enter some extra info that the original signup form asked for (like your timezone).",button:"yuh"}),R({email:x})):(s()({title:"Time to RSVP!",text:"Thanks for registering your interest earlier! All we need now is your virtual diploma information (full name, major, minor, etc.) and you're all set!",button:"yuh"}),R(e.data.signUpInfo)),i(!1)})).catch((function(e){i(!1),console.error(e)}))),a(!0)}},l.a.createElement(h.a.Row,null,l.a.createElement(h.a.Group,{as:d.a,md:"6",controlId:"email"},l.a.createElement(h.a.Label,null,"School Email Address"),l.a.createElement(p.a,null,l.a.createElement(h.a.Control,{type:"email",placeholder:"newgrad@school.edu",pattern:v.a,value:x,onChange:function(e){return k(e.target.value)},required:!0}),l.a.createElement(h.a.Control.Feedback,{type:"invalid"},"Please enter a valid email address.")))),l.a.createElement(N,null,l.a.createElement(y.a,{type:"submit",className:"wiggle",disabled:c},"Check Status"),c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,"Looking you up in our database..."),l.a.createElement(E.a,{animation:"border",variant:"primary"}))))))}}}]);
//# sourceMappingURL=component---src-pages-newgrad-js-0fedbe640b2d2d923f74.js.map