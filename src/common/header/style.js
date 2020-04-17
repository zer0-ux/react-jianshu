import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 58px;
	display: block;
	box-sizing: border-box;
	color: black;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	display:block;
	top: 0;
	left: 0;
	height: 58px;
	width:100px;
	background:url(${logoPic});
	background-size:contain;
`;

export const Nav = styled.div`
	height: 58px;
	width: 945px;
	margin:0 auto;
	
`;

export const NavItem = styled.div`
	padding:0px 15px;
	font-size:17px;
	line-height:58px;
	color:#333;
	&.left{
		float: left;
	}
	&.right{
		float: right;
		color:#969696;
		box-sizing:border-box;
		margin-right:70px;
	}
	&.active{
		color:#ea6f5a;
	}
`;

export const SearchWrapper = styled.div`
	float:left;
	position: relative;`

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	margin-top:9px;
	box-sizing:border-box;
	padding:0 20px;
	width: 160px;
	height: 38px;
	border-radius: 19px;
	border: none;
	outline: none;
	background: #eee;
	font-size:14px;
	&.focused{
		width:230px;
	}
	.slide-enter{
		transition:all .2s ease-out;
	}
	.slide-enter-active{
		width:240px;
	}
	.slide-exit{
		transition:all .2s ease-out;
	}
	.slide-exit-active{
		width:160px;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right:0;
	top:0;
	height:56px;
`;

export const Button = styled.div`
	float:right;
	line-height:38px;
	border-radius:19px;
	margin-top:9px;
	padding: 0 15px;
	margin-right: 20px;
	font-size: 14px;
	border:1px solid #ea6f5a;
	&.writting{
		background-color:#ea6f5a;
		color: #fff
	}
	&.regi{
		color:#ea6f5a;
	}
`

export const SearchInfo = styled.div`
	position:absolute;
	left:0;
	top:56px;
	width:240px;
	padding:0 20px;
	box-shadow:0 0  8px rgba(0,0,0,.2);
	background:white;
`;

export const SearchTitle = styled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color:#969696;
`;

export const SearchInfoSwitch = styled.div`
	cursor:pointer;
	float:right;
	font-size:13px;
`;

export const SearchInfoItem = styled.a`
	display:block;
	float:left;
	font-size: 12px;
	line-height:20px;
	padding:0 5px;
	border:1px solid #ddd;
	color: #969696;
	border-radius:2px;
	margin-right:10px;
	margin-bottom:15px;
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;























