import { StyleSheet  } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background: #fff;
`;

export const ColText = styled.View`
	flex: 1;
	flex-direction: column;
`;

export const TopItems = styled.View`
	flex-direction: row;
	padding: 10px;
	border-bottom-width: ${StyleSheet.hairlineWidth}px;
	border-bottom-color: rgba(0, 0, 0, 0.2);
	align-items: center;
`;

export const Strong = styled.Text`
	color: #000;
	font-weight: bold;
`;

export const ColRating = styled.Text`
	font-size: 11px;
`;
