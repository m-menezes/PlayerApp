import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
`;
export const TabsContainer = styled.ScrollView.attrs({
	horizontal: true,
	contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
	showsHorizontalScrollIndicator: false,
})``;

export const Image = styled.Image`
`;
export const TabItem = styled.View`
	margin:5px 5px 10px 20px;
	justify-content: space-between;
`;
export const TabText = styled.Text`
	font-size: 13px;
	color: #000;
`;