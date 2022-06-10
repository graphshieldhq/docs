(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{477:function(t,e,a){"use strict";a.r(e);var s=a(25),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"conditional-access-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conditional-access-policy"}},[t._v("#")]),t._v(" Conditional Access Policy")]),t._v(" "),a("blockquote",[a("p",[t._v("GraphShield policy that controls access to the Microsoft Graph based on conditional access rules.")])]),t._v(" "),a("h2",{attrs:{id:"threat-intelligence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threat-intelligence"}},[t._v("#")]),t._v(" Threat Intelligence")]),t._v(" "),a("p",[t._v("GraphShield threat intelligence database includes over 620M malicious IP addresses. Among others, we track Tor nodes and open proxies. Data is checked and updated continuously. Updates occur as changes are detected to reduce false positives to their minimum.")]),t._v(" "),a("p",[a("code",[t._v("Threat Intelligence")]),t._v(" rule supports the following options:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Enabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defines if the rule is enabled or disabled.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny Bogon")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny IP Addresses known as "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bogon_filtering",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bogon"),a("OutboundLink")],1),t._v(": an unassigned, unaddressable IP address. Returns an "),a("code",[t._v("HTTP 403 Forbidden")]),t._v(" status code in case of violation.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny Tor")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny IP addresses known as Tor relays (exit relay node, middle relay node or a bridge). Returns an "),a("code",[t._v("HTTP 403 Forbidden")]),t._v(" status code in case of violation.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny Proxy")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny IP addresses known as a proxy. It includes HTTP/HTTPS/SSL/SOCKS/CONNECT and transparent proxies. Returns an "),a("code",[t._v("HTTP 403 Forbidden")]),t._v(" status code in case of violation.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny Abuser")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny IP addresses that are a known source of abuse (e.g. spam, harvesters, registration bots). Returns an "),a("code",[t._v("HTTP 403 Forbidden")]),t._v(" status code in case of violation.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny Attacker")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Deny IP addresses that are a known source of malicious activity (e.g. attacks, malware, botnet activity). Returns an "),a("code",[t._v("HTTP 403 Forbidden")]),t._v(" status code in case of violation.")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Secure by Default")]),t._v(" "),a("p",[t._v("All GraphShield "),a("code",[t._v("Threat Intelligence")]),t._v(" options are enabled by default.")])]),t._v(" "),a("h2",{attrs:{id:"ip-based-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip-based-control"}},[t._v("#")]),t._v(" IP-based Control")]),t._v(" "),a("p",[t._v("Controls access to the target API based on IP-based conditional access rules.")]),t._v(" "),a("p",[a("code",[t._v("IP-based Control")]),t._v(" rule supports the following options:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Enabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defines if the rule is enabled or disabled.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Allowed IPs")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Authorized IP Addresses as a list of comma-separated IPs or IP ranges. It handles IPv6, IPv4, and IPv4-mapped over IPv6 addresses. Returns an "),a("code",[t._v("HTTP 403 Forbidden")]),t._v(" status code in case of violation.")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("IP-based Control")]),t._v(" rule is disabled by default.")])]),t._v(" "),a("h2",{attrs:{id:"location-based-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-based-control"}},[t._v("#")]),t._v(" Location-based Control")]),t._v(" "),a("p",[t._v("Controls access to the target API based on location conditional access rules.")]),t._v(" "),a("p",[a("code",[t._v("Location-based Control")]),t._v(" rule supports the following options:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Option")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Enabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defines if the rule is enabled or disabled.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Allowed Countries")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Authorized countries as a list of comma-separated country codes (The 2 letter "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO 3166-1 alpha-2"),a("OutboundLink")],1),t._v(" code associated with this IP.) Returns an "),a("code",[t._v("HTTP 403 Forbidden")]),t._v(" status code in case of violation.")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("Location-based Control")]),t._v(" rule is disabled by default.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);