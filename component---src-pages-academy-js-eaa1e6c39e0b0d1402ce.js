(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{s6NX:function(e,t,n){"use strict";n.r(t);n("rGqo"),n("yt8O"),n("Btvt");var o=n("q1tI"),a=n.n(o),r=n("Wbzz"),s=n("7oih"),c=n("EYWl");var u=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).state={countSignedUp:"_",countUniqueSchools:"_"},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var u=o.prototype;return u.componentDidMount=function(){var e=this;fetch("https://sheets.googleapis.com/v4/spreadsheets/1UH9s7xIR0vH0IAwx4IxP7zmo0VDLXn0C8-we_z5qSf8/values/Sheet1!A1:B1?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({countSignedUp:t.values[0][0],countUniqueSchools:t.values[0][1]})}),(function(t){e.setState({countSignedUp:-1,countUniqueSchools:-1})}))},u.render=function(){return a.a.createElement(s.a,null,a.a.createElement(c.a,{title:"Academy",route:"/academy"}),a.a.createElement("h1",null,"Registration Closed!"),a.a.createElement("p",{className:"lead"},"Although registration has closed, due to a technical issue with our email system we're opening up the RSVP to all interested students instead of only those who had already registered. You can find the RSVP form ",a.a.createElement(r.Link,{to:"/academygrad"},"here"),"!"))},o}(a.a.Component);t.default=u}}]);
//# sourceMappingURL=component---src-pages-academy-js-eaa1e6c39e0b0d1402ce.js.map