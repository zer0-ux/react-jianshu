import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 945px;
	margin: 0 auto;
	padding-top: 30px;
	padding-right: 0;
	padding-left: 15px;
`;

export const HomeLeft = styled.div`
	float: left;
	width: 625px;
`;

export const HomeRight = styled.div`
	float: right;
	width: 280px;
`;

export const HomeArticle = styled.div`
	width: 623px;
	height: 124px;
	padding: 15px 2px 20px 20px;
	.image{
		display: block;
		margin-top:20px;
		float: right;
		border-radius: 4px;
		height: 100px;
		width: 150px;
	}
	border-bottom: 1px solid #f0f0f0;
`;

export const ArticleInfo = styled.div`
	float: left;
	width: 400px;
	.title{
		
		font-size: 18px;
		color: #333;
	};
	.abstract{
		
		color: #999;
		font-size: 13px;

	};
`;

export const LoadMore = styled.div`
	width: 595px;
	height:40px;
	line-height: 40px;
	background-color:red;
	margin:0 auto;
	background-color: #a5a5a5;
	border-radius: 20px;
	text-align: center;
	cursor: pointer;
	`;












