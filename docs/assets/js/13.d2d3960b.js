(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{470:function(t,e,s){"use strict";s.r(e);var r=s(25),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"error-responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-responses"}},[t._v("#")]),t._v(" Error Responses")]),t._v(" "),s("blockquote",[s("p",[t._v("Just like the Microsoft Graph, errors in GraphShield are returned using standard HTTP status codes, as well as a JSON error response object.")])]),t._v(" "),s("h2",{attrs:{id:"http-status-codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-status-codes"}},[t._v("#")]),t._v(" HTTP Status Codes")]),t._v(" "),s("p",[t._v("The following table lists and describes the HTTP status codes that can be returned:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Status code")]),t._v(" "),s("th",[t._v("Status message")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("400")]),t._v(" "),s("td",[t._v("Bad Request")]),t._v(" "),s("td",[t._v("Cannot process the request because it is malformed or incorrect.")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("Unauthorized")]),t._v(" "),s("td",[t._v("Required authentication information is either missing or not valid for the resource.")])]),t._v(" "),s("tr",[s("td",[t._v("403")]),t._v(" "),s("td",[t._v("Forbidden")]),t._v(" "),s("td",[t._v("Access is denied to the requested resource. The user or application might not have enough permission.")])]),t._v(" "),s("tr",[s("td",[t._v("429")]),t._v(" "),s("td",[t._v("Too Many Requests")]),t._v(" "),s("td",[t._v("Client application has been throttled and should not attempt to repeat the request until an amount of time has elapsed.")])]),t._v(" "),s("tr",[s("td",[t._v("500")]),t._v(" "),s("td",[t._v("Internal Server Error")]),t._v(" "),s("td",[t._v("There was an internal server error while processing the request.")])]),t._v(" "),s("tr",[s("td",[t._v("509")]),t._v(" "),s("td",[t._v("Bandwidth Limit Exceeded")]),t._v(" "),s("td",[t._v("Your app has been throttled for exceeding the maximum bandwidth cap. Your app can retry the request again after more time has elapsed.")])])])]),t._v(" "),s("p",[t._v("The error response is a single JSON object that contains a single property named "),s("code",[t._v("error")]),t._v(". This object includes all the details of the error. You can use the information returned here instead of or in addition to the HTTP status code. The following is an example of a full JSON error body.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unauthorized"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Required authentication information is either missing..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"innerError"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4c15cc1b-2f06-4a5a-86c0-dfe118f74cfe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UUID v4")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-02-27T15:36:23.972Z"')]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ISO format")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"how-graphshield-makes-it-transparent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-graphshield-makes-it-transparent"}},[t._v("#")]),t._v(" How GraphShield makes it transparent?")]),t._v(" "),s("p",[t._v("GraphShield generates its errors (internal errors, policy violations...) using exactly the same schema as the Microsoft Graph, making error handling completely transparent for your app. See "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/graph/errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Graph error responses and resource types"),s("OutboundLink")],1),t._v(" for reference.")])])}),[],!1,null,null,null);e.default=a.exports}}]);