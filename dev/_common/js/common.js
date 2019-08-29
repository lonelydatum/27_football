const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut


function sentence(list){
	const tl_list = new TimelineMax()
	list.map(item=>{
		tl_list.set(`.${item}`, {opacity:1}, "+=.25")
	})	
	return tl_list
}

function start({tl_text, listB}){
	const tl = new TimelineMax()
	
	const playa = new TimelineMax()
	playa.to('.player_qb_ball', 5, {rotation:-15, ease:Power1.easeInOut}, 0)
	playa.to('.player_qb_arm', 3, {rotation:-5, ease:Power2.easeInOut}, 0)


	tl.add(tl_text)
	

	tl.to([".a1", ".a2", ".a3", ".a4", ".logo"], .2, {opacity:0}, "+=1.5")



	tl.add('tackle', '-=.1')
	tl.to(".player_tackle", .4, {x:0, y:0, ease:Power2.easeOut}, "tackle")
	tl.to('.player_qb_ball', .9, {rotation:7, ease:Power1.easeInOut}, "tackle-=.5")

	


	tl.add('f2', '+=.4')
	tl.set(".frame2", {opacity:1}, "f2")
	tl.to(".frame1", .4, {opacity:0, ease:Power2.easeOut}, "f2")
	
	
	tl.add('phone', "-=.1")
	tl.from(".phone", .3, {y:"+=100", ease:Power2.easeOut}, "phone")
	tl.from(".phone_scribble", .5, {scale:0, ease:Power2.easeInOut}, 'phone+=.3')

	tl.add(sentence(listB), "+=.3")

	
	tl.from('.cta_wager', .1, {opacity:0}, "+=1.3")
	tl.to('.cta_wager', .1, {opacity:0}, "+=1.5")
	tl.from('.cta_odds', .2, {opacity:0}, "+=.3")
	
	
	

	tl.from([".footer"], .2, {opacity:0}, "+=.6")
}



export {size, start, sentence}