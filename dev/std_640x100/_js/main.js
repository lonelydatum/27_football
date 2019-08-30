import {start, start_horizontal, sentence} from '../../_common/js/common.js'


const list1 = ["a1", "a2" ]
const list2 = ["a3", "a4" ]
const listB = ["b1", "b2", "b3" ]







function f1_text(){
	const tl = new TimelineMax()
	tl.add(sentence(list1), "+=.6")
	tl.add(sentence(list2), "+=.8")
	return tl
}



start_horizontal(
	{
		tl_text:f1_text(),
		listB: listB,
		text_x: 77
	}
)



module.exports = {};

