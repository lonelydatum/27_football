import {start} from '../../_common/js/common.js'



const listB = ["b1", "b2" ]
// const listB2 = ["b4", "b5", "b6" ]









function f1_text(){
	const tl = new TimelineMax()
	tl.set(".txt1", {opacity:1}, "+=.6")
	tl.set(".txt1", {opacity:0}, "+=2")
	tl.set(".txt2", {opacity:1})
	return tl
}

start(
	{
		tl_text:f1_text(),
		listB: listB
	}
)

module.exports = {};

