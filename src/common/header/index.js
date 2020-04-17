import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {actionCreators}  from './store';
import { HeaderWrapper, 
	Logo, Nav,
	NavItem, NavSearch,
	Addition, Button,
	SearchWrapper,SearchInfo,
	SearchTitle, SearchInfoSwitch,
	SearchInfoList, SearchInfoItem
} from './style';


class Header extends Component{

	getListArea(){
		const {list, page} = this.props;

		const newlist = list.toJS();
		const pageList = [];

		if(newlist.length){
			for( let i = (page - 1) * 10; i < page * 10; i++){
				pageList.push(
					<SearchInfoItem key={newlist[i]}>{newlist[i]}</SearchInfoItem>
					)
			}

		}

		if(this.props.focused || this.props.mouseEnter){
			return(
				<SearchInfo onMouseEnter={this.props.handleMouseEnter}
				onMouseLeave={this.props.handleMouseLeave}>
					<SearchTitle>热门搜索
						<SearchInfoSwitch onClick={()=>(this.props.handleChangePage(this.props.page, this.props.totalPage))}>换一换</SearchInfoSwitch>
					</SearchTitle>
					<SearchInfoList>
						{
							pageList
						}
					</SearchInfoList>
				</SearchInfo>
				)
		}
		else{
			return null;
		}
	}

	render(){
		return(
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载APP</NavItem>
					<NavItem className='right'>登陆</NavItem>
					<NavItem className='right'>Aa</NavItem>
					<SearchWrapper>
						<CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
							<NavSearch className={this.props.focused?'focused':''}
							onFocus={this.props.handleFocus}
							onBlur={this.props.handleBlur}></NavSearch>
						</CSSTransition>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>写文章</Button>
					<Button className='regi'>注册</Button>
				</Addition>
			</HeaderWrapper>
			)
	}

}


const mapStateToProps = (state)=>{
	return {
		focused:state.getIn(['header','focused']),
		mouseEnter:state.getIn(['header','mouseEnter']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage'])
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		handleFocus(){
			dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleBlur(){
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page,totalPage){
			if(page < totalPage){
				dispatch(actionCreators.changePage(page+1));
			}
			else{
				dispatch(actionCreators.changePage(1));
			}
			
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);