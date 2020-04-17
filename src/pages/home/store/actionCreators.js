import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';


const changeData = (result,page) =>({
	type:constants.CHANGEDATA,
	page:page,
	ArticleList:fromJS(result)
})
 

export const loadMore = (page) =>{
	return (dispatch)=>{
		axios.get('api/homeList.json?page=' + page).then((res)=>{
			const result = res.data.data;
			dispatch(changeData(result,page+1));
		})
	}
}


