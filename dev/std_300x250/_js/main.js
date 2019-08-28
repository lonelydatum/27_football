const tl = new TimelineMax()
const list1 = ["a1", "a2", "a3", "a4" ]
const list2 = ["a5", "a6", "a7", "a8" ]
const listB = ["b1", "b2", "b3", "b4", "b5", "b6" ]







function sentence(list){
	const tl_list = new TimelineMax()
	list.map(item=>{
		tl_list.set(`.${item}`, {opacity:1}, "+=.15")
	})	
	return tl_list
}



function start(){

	tl.add(sentence(list1))
	tl.add(sentence(list2), "+=.5")

	tl.from(".logo", .3, {opacity:0}, "+=.2")

	tl.to(".player_tackle", .3, {x:0, y:0}, "+=.5")

	tl.add('f2', "+=1")
	tl.set(".frame2", {opacity:1}, "f2")
	tl.to(".frame1", .5, {y:"-=250", ease:Power1.easeOut}, "f2")
	tl.from(".frame2", .5, {y:"+=250", ease:Power1.easeOut}, "f2")
	
	tl.add('f2_all', "-=.1")
	tl.add(sentence(listB), 'f2_all')
	// tl.from(".phone", .3, {y:"+=30", ease:Power2.easeOut}, "f2_all")
	// tl.from(".phone_scribble", .3, {y:"+=30", ease:Power2.easeOut}, "f2_all+=.1")

	tl.from([".cta", ".footer"], .2, {opacity:0}, "+=.6")

	

	// tl.gotoAndPlay("f2")
}

start()

module.exports = {};

