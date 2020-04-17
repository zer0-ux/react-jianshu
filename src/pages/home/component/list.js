import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeArticle, ArticleInfo, LoadMore } from '../style';
import { actionCreators } from '../store'; 


class List extends Component{

	render(){

		const { list, handleLoadMore } = this.props;
		return (
			<div>
				{
					list.map((item, index) =>{
					return (
						<HomeArticle key={index}>
							<img alt='120' className='image' src={item.get('imgUrl')} />
							<ArticleInfo>
								<h3 className='title'>{item.get('title')}</h3>
								<p className='abstract'>{item.get('desc')}</p>
							</ArticleInfo>
						</HomeArticle>
						)
					})
				}
				<LoadMore onClick={() => handleLoadMore(this.props.page)}>加载更多</LoadMore>
			</div>
		)
	}
}


const mapStateToProps = (state)=>({
	list:state.getIn(['home','ArticleList']),
	page:state.getIn(['home','page'])
});

const mapDispatchToProps = (dispatch) =>{
	return {
		handleLoadMore(page){
			dispatch(actionCreators.loadMore(page));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
