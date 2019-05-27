import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background: #fff;
	justify-content: center;
`;

export const Image = styled.Image`
	padding-right: 20px;
	align-self: center;
	align-items: center;
`;
export const SingleTop = styled.View`
 	background-color: rgba(255,255,255, 0.75);
	padding: 20px 0;
`;
export const Details = styled.View`

`;
export const Text = styled.Text`
	color: #000;
`;
export const Strong = styled.Text`
	color: #000;
	font-weight: bold;
`;
export const Screenshots = styled.ScrollView.attrs({
	horizontal: true,
	contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
	showsHorizontalScrollIndicator: false,
})``;

export const Block = styled.View`
	padding: 0 10px;
	margin-top:10px;
`;

export const Title = styled.Text`
	color: #000;
    font-size: 20px;
    font-weight: bold;
`;