import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './component/list';
import axios from 'axios';
import { HomeWrapper, HomeLeft,
	HomeRight
 } from './style';



class home extends Component{

	render(){

		return(
			<div>
				<HomeWrapper>
					<HomeLeft>
						<List />
					</HomeLeft>
					<HomeRight>Right</HomeRight>
				</HomeWrapper>
			</div>
			)
	}

	componentDidMount(){
		this.props.changeHomeData();
	}
}

const mapDispatchToProps = (dispatch) =>({
	changeHomeData(){
		axios.get('/api/home.json').then((res)=>{
			const result = res.data.data;
			const action = {
				type: 'change_some_data',
				ArticleList:result.articleList
			}
			dispatch(action);
		})
	}
})


export default connect(null, mapDispatchToProps)(home);