(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{172:function(t,e,r){},228:function(t,e,r){"use strict";var n=r(172);r.n(n).a},229:function(t,e,r){"use strict";var n=r(4),a=r(25),i=r(24),s=r(6),d=[].sort,c=[1,2,3];n(n.P+n.F*(s(function(){c.sort(void 0)})||!s(function(){c.sort(null)})||!r(17)(d)),"Array",{sort:function(t){return void 0===t?d.call(i(this)):d.call(i(this),a(t))}})},370:function(t,e,r){"use strict";r.r(e);r(11),r(23),r(59),r(22),r(229);var n={data:function(){return{ageIndex:2,genderIndex:2,list:[{id:1,name:"小明",age:24,gender:"男"},{id:2,name:"小芳",age:30,gender:"女"},{id:3,name:"小美",age:31,gender:"女"},{id:4,name:"小刚",age:21,gender:"男"},{id:5,name:"小琪",age:18,gender:"女"}],sortArr:[function(t){return t.map(function(t){return t}).sort(function(t,e){return t.age-e.age})},function(t){return t.map(function(t){return t}).sort(function(t,e){return e.age-t.age})},function(t){return t}],genderArr:[function(t){return t.filter(function(t){return"男"===t.gender})},function(t){return t.filter(function(t){return"女"===t.gender})},function(t){return t}],renderList:[]}},methods:{ageSort:function(t){var e=t.target.dataset.type;document.querySelectorAll(".age_sort a").forEach(function(t){t.classList.remove("active")}),t.target.classList.add("active"),this.ageIndex=e;var r=this.genderArr[this.genderIndex](this.list);this.renderList=this.sortArr[e](r)},genderFilter:function(t){var e=t.target.dataset.type;document.querySelectorAll(".gender_show a").forEach(function(t){t.classList.remove("active")}),t.target.classList.add("active"),this.genderIndex=e;var r=this.sortArr[this.ageIndex](this.list);this.renderList=this.genderArr[e](r)}}},a=(r(228),r(1)),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"wrap"},[r("div",[r("div",{staticClass:"age_sort",on:{click:t.ageSort}},[r("a",{attrs:{"data-type":0}},[t._v("年龄从小到大")]),r("a",{attrs:{"data-type":1}},[t._v("年龄从大到小")]),r("a",{staticClass:"active",attrs:{"data-type":2}},[t._v("默认排序")])]),r("div",{staticClass:"gender_show",on:{click:t.genderFilter}},[r("a",{attrs:{"data-type":0}},[t._v("只显示男性")]),r("a",{attrs:{"data-type":1}},[t._v("只显示女性")]),r("a",{staticClass:"active",attrs:{"data-type":2}},[t._v("默认")])])]),r("table",{attrs:{id:"table"}},[t._m(0),r("tbody",t._l(t.renderList.length?t.renderList:t.list,function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.id))]),r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.age))]),r("td",[t._v(t._s(e.gender))])])}))])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("id")]),e("th",[this._v("姓名")]),e("th",[this._v("年龄")]),e("th",[this._v("性别")])])])}],!1,null,null,null);e.default=i.exports}}]);