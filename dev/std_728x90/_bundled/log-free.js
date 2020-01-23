(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function sentence(list) {
	var tl_list = new TimelineMax();
	list.map(function (item) {
		tl_list.set("." + item, { opacity: 1 }, "+=.25");
	});
	return tl_list;
}

function start(_ref) {
	var tl_text = _ref.tl_text;
	var listB = _ref.listB;

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	var playa = new TimelineMax();
	playa.to('.player_qb_ball', 5, { rotation: -15, ease: Power1.easeInOut }, 0);
	playa.to('.player_qb_arm', 3, { rotation: -5, ease: Power2.easeInOut }, 0);

	tl.add(tl_text);

	tl.to([".a1", ".a2", ".a3", ".a4", ".logo"], .2, { opacity: 0 }, "+=1.5");

	tl.add('tackle', '-=.1');
	tl.to(".player_tackle", .4, { x: 0, y: 0, ease: Power2.easeOut }, "tackle");
	tl.to('.player_qb_ball', .9, { rotation: 7, ease: Power1.easeInOut }, "tackle-=.5");

	tl.add('f2', '+=.4');
	tl.set(".frame2", { opacity: 1 }, "f2");
	tl.to(".frame1", .4, { opacity: 0, ease: Power2.easeOut }, "f2");

	tl.add('phone', "-=.1");
	tl.to(".phone", .3, { y: 0, ease: Power2.easeOut }, "phone");
	tl.from(".phone_scribble", .5, { scale: 0, ease: Power2.easeInOut }, 'phone+=.3');

	if (listB) {
		tl.add(sentence(listB), "+=.3");
	}

	tl.from('.cta_wager', .1, { opacity: 0 }, "+=.5");
	tl.to('.cta_wager', .1, { opacity: 0 }, "+=2.3");
	tl.from('.cta_odds', .2, { opacity: 0 }, "+=.3");

	tl.from([".footer"], .2, { opacity: 0 }, "+=.6");
}

function start_horizontal(_ref2) {
	var tl_text = _ref2.tl_text;
	var listB = _ref2.listB;
	var text_x = _ref2.text_x;

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	var playa = new TimelineMax();
	playa.to('.player_qb_ball', 5, { rotation: -15, ease: Power1.easeInOut }, 0);
	playa.to('.player_qb_arm', 3, { rotation: -5, ease: Power2.easeInOut }, 0);

	tl.add(tl_text);

	tl.to([".logo"], .2, { opacity: 0 }, "+=1");

	tl.add('tackle', '-=.1');
	tl.to(".shift_a", .4, { x: text_x, ease: Power2.easeOut }, "tackle");
	tl.to(".player_tackle", .4, { x: 0, y: 0, ease: Power2.easeOut }, "tackle");
	tl.to('.player_qb_ball', .9, { rotation: 7, ease: Power1.easeInOut }, "tackle-=.5");

	tl.add('f2', '+=.4');
	tl.set(".frame2", { opacity: 1 }, "f2");
	tl.to(".frame1", .4, { opacity: 0, ease: Power2.easeOut }, "f2");

	tl.add('phone', "-=.1");
	tl.to(".phone", .3, { y: 0, ease: Power2.easeOut }, "phone");
	tl.from(".phone_scribble", .5, { scale: 0, ease: Power2.easeInOut }, 'phone+=.3');

	tl.add(sentence(listB), "+=.3");

	if (size.w === 320 && size.h === 50) {} else {
		tl.from('.cta_wager', .1, { opacity: 0 }, "+=.5");
		tl.to('.cta_wager', .1, { opacity: 0 }, "+=2.3");
		tl.from('.cta_odds', .2, { opacity: 0 }, "+=.3");
	}

	tl.from([".footer"], .2, { opacity: 0 }, "+=.6");
}

exports.size = size;
exports.start = start;
exports.sentence = sentence;
exports.start_horizontal = start_horizontal;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var list1 = ["a1", "a2"];
var list2 = ["a3", "a4"];
var listB = ["b1"];

function f1_text() {
	var tl = new TimelineMax();
	tl.add((0, _commonJsCommonJs.sentence)(list1), "+=.6");
	tl.add((0, _commonJsCommonJs.sentence)(list2), "+=.8");
	return tl;
}

(0, _commonJsCommonJs.start_horizontal)({
	tl_text: f1_text(),
	listB: listB,
	text_x: 77
});

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
