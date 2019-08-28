const tl = new TimelineMax()
const list1 = ["a1", "a2" ]
const list2 = ["a3", "a4" ]
const listB = ["b1", "b2" ]
// const listB2 = ["b4", "b5", "b6" ]




TweenMax.to('.player_qb_ball', .9, {rotation:20, ease:Power1.easeInOut, repeat:3, yoyo:true})
TweenMax.to('.player_qb_arm', 1, {rotation:-5, ease:Power2.easeInOut, repeat:3, yoyo:true})


function sentence(list){
	const tl_list = new TimelineMax()
	list.map(item=>{
		tl_list.set(`.${item}`, {opacity:1}, "+=.2")
	})	
	return tl_list
}



function start(){

	tl.add(sentence(list1))
	tl.add(sentence(list2), "+=.8")

	tl.from(".logo", .3, {opacity:0}, "+=.2")

	tl.to([".a1", ".a2", ".a3", ".a4", ".logo"], .2, {opacity:0}, "+=1.5")

	tl.to(".player_tackle", .4, {x:0, y:0, ease:Power2.easeOut}, "-=.1")

	tl.add('f2', '+=.4')
	tl.set(".frame2", {opacity:1}, "f2")
	tl.to(".frame1", .4, {opacity:0, ease:Power2.easeOut}, "f2")
	// tl.from(".frame2", .9, {x:"+=250", ease:Power2.easeOut}, "f2")
	
	tl.add('f2_all', "-=.1")
	tl.from(".phone", .3, {y:"+=100", ease:Power2.easeOut}, "f2_all")
	tl.from(".phone_scribble", .5, {scale:0, ease:Power2.easeInOut}, 'f2_all+=.3')

	tl.add(sentence(listB), "+=.3")

	// tl.to('.b', .2, {opacity:1})
	tl.from('.cta_wager', .3, {opacity:0}, "+=1")
	tl.to('.cta_wager', .1, {opacity:0}, "+=1.5")
	tl.from('.cta_odds', .3, {opacity:0}, "+=.3")
	
	
	

	tl.from([".footer"], .2, {opacity:0}, "+=.6")

	

	// tl.gotoAndPlay("f2")
}

start()

module.exports = {};

