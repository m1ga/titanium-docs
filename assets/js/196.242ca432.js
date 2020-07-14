(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1002:function(e,s,a){"use strict";a.r(s);var t=a(21),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-cloud-chats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-chats"}},[e._v("#")]),e._v(" Modules.Cloud.Chats")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"create-chat-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-chat-message"}},[e._v("#")]),e._v(" Create Chat Message")]),e._v(" "),a("p",[e._v("This example sends a chat message to a list of users and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Chats.create({\n    to_ids: ids.join(','),\n    message: 'Good morning'\n}, function (e) {\n    if (e.success) {\n        for (var i = 0; i < e.chats.length; i++) {\n            var chat = e.chats[i];\n            alert('Success:\\n' +\n                'From: ' + chat.from.first_name + ' ' + chat.from.last_name + '\\n' +\n                'Updated: ' + chat.updated_at + '\\n' +\n                'Message: ' + chat.message);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"query-for-chat-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-for-chat-message"}},[e._v("#")]),e._v(" Query for Chat Message")]),e._v(" "),a("p",[e._v("This example requests a list of chat messages and checks the response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Chats.query({\n    participate_ids: ids.join(','),\n    where: {\n        updated_at: { '$gt': last_update_time }\n    }\n}, function (e) {\n    if (e.success) {\n        for (var i = 0; i < e.chats.length; i++) {\n            var chat = e.chats[i];\n            alert('Success:\\n' +\n                'From: ' + chat.from.first_name + ' ' + chat.from.last_name + '\\n' +\n                'Updated: ' + chat.updated_at + '\\n' +\n                'Message: ' + chat.message);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("h3",{attrs:{id:"get-chat-groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-chat-groups"}},[e._v("#")]),e._v(" Get Chat Groups")]),e._v(" "),a("p",[e._v("This example requests a lists of chat groups that the current user belongs to and checks\nthe response.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Cloud.Chats.getChatGroups(function (e) {\n    if (e.success) {\n        for (var i = 0; i < e.chats.length; i++) {\n            var group = e.chat_groups[i];\n            alert('Success:\\n' +\n                'id: ' + group.id + '\\n' +\n                'created_at: ' + group.created_at + '\\n' +\n                'number of users: ' + group.participate_users.length);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);s.default=r.exports}}]);