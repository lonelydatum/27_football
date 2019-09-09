import {start, sentence, size} from '../../_common/js/common.js'


const list1 = ["a1", "a2" ]
const list2 = ["a3", "a4" ]
const listB = ["b1" ]





function start_horizontal({tl_text, listB, text_x}){
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const playa = new TimelineMax()
	playa.to('.player_qb_ball', 5, {rotation:-15, ease:Power1.easeInOut}, 0)
	playa.to('.player_qb_arm', 3, {rotation:-5, ease:Power2.easeInOut}, 0)

	tl.add(tl_text)
	

	// tl.to([".logo"], .2, {opacity:0}, "+=1")



	tl.add('tackle', '-=.1')
	tl.to(".shift_a", .4, {x:text_x, ease:Power2.easeOut}, "tackle")
	tl.to(".player_tackle", .4, {x:0, y:0, ease:Power2.easeOut}, "tackle")
	tl.to('.player_qb_ball', .9, {rotation:7, ease:Power1.easeInOut}, "tackle-=.5")

	


	tl.add('f2', '+=.4')
	tl.set(".frame2", {opacity:1}, "f2")
	tl.to(".frame1", .4, {opacity:0, ease:Power2.easeOut}, "f2")
	
	
	tl.add('phone', "-=.1")
	tl.to(".phone", .3, {y:0, ease:Power2.easeOut}, "phone")
	tl.from(".phone_scribble", .5, {scale:0, ease:Power2.easeInOut}, 'phone+=.3')

	tl.add(sentence(listB), "+=.3")

	if(size.w===320 && size.h===50){

	}else{
		tl.from('.cta_wager', .1, {opacity:0}, "+=.5")
		tl.to('.cta_wager', .1, {opacity:0}, "+=2.3")
		tl.from('.cta_odds', .2, {opacity:0}, "+=.3")	
	}
	
	
	
	

	tl.from([".footer"], .2, {opacity:0}, "+=.6")
}



function f1_text(){
	const tl = new TimelineMax()
	tl.add(sentence(list1), "+=.6")
	tl.from('.logo', .3, {opacity:0}, "+=.3")

	tl.add(sentence(list2), "+=.8")

	return tl
}



start_horizontal(
	{
		tl_text:f1_text(),
		listB: listB,
		text_x: 60
	}
)



module.exports = {};

