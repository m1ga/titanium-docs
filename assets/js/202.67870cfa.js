(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1011:function(e,s,r){"use strict";r.r(s);var n=r(21),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"modules-cloud-friends"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-friends"}},[e._v("#")]),e._v(" Modules.Cloud.Friends")]),e._v(" "),r("TypeHeader"),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("h3",{attrs:{id:"add-a-friend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#add-a-friend"}},[e._v("#")]),e._v(" Add a friend")]),e._v(" "),r("p",[e._v("This example adds a friend and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Friends.add({\n    user_ids: checked.join(\",\")\n}, function (e) {\n    if (e.success) {\n        alert('Friend(s) added');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"show-friend-requests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-friend-requests"}},[e._v("#")]),e._v(" Show friend requests")]),e._v(" "),r("p",[e._v("This example shows pending friend requests and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Friends.requests(function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.friend_requests.length);\n        for (var i = 0; i < e.friend_requests.length; i++) {\n            var user = e.friend_requests[i].user;\n            alert('id: ' + user.id + '\\n' +\n                'first name: ' + user.first_name + '\\n' +\n                'last name: ' + user.last_name);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"approve-friend-requests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#approve-friend-requests"}},[e._v("#")]),e._v(" Approve friend requests")]),e._v(" "),r("p",[e._v("This example approves pending friend requests and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Friends.approve({\n    user_ids: checked.join(\",\")\n}, function (e) {\n    if (e.success) {\n        alert('Friend(s) approved');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"remove-friends"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remove-friends"}},[e._v("#")]),e._v(" Remove friends")]),e._v(" "),r("p",[e._v("This example removes friends and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Friends.remove({\n    user_ids: checked.join(\",\")\n}, function (e) {\n    if (e.success) {\n        alert('Friend(s) removed');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"search-for-friends"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#search-for-friends"}},[e._v("#")]),e._v(" Search for friends")]),e._v(" "),r("p",[e._v("This example requests information about particular friends and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Friends.search({\n    user_id: searchID\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.users.length);\n        for (var i = 0; i < e.users.length; i++) {\n            var user = e.users[i];\n            alert('id: ' + user.id + '\\n' +\n                'first name: ' + user.first_name + '\\n' +\n                'last name: ' + user.last_name);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("ApiDocs")],1)}),[],!1,null,null,null);s.default=a.exports}}]);