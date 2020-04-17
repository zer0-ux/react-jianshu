import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	ArticleList : [],
	page:1
});	


export default (state = defaultState, action) =>{
	switch(action.type){
		case 'change_some_data':
			return state.set('ArticleList', fromJS(action.ArticleList));
		case constants.CHANGEDATA:
			return state.merge({
				'ArticleList': state.get('ArticleList').concat(fromJS(action.ArticleList)),
				'page':action.page});
		default:
			return state;
	}
}