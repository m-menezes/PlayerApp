import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';
export const Container = styled.View`
  background: rgba(0, 73, 117, 0.4);;
  border-bottom-width: 3px;
  border-top-width: 3px;
  border-color: rgba(191, 191, 191, 0.2);
  padding: 10px;
`;
export const Strong = styled.Text`
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabImage = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 3px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
`;
  
export const Logo = styled.Image`
  width: 80px;
  align-self: center;
`;
export const TabItem = styled.View`
  margin-left:10px;
  max-width: 100px;
`;
export const TabText = styled.Text`
  flex-wrap: wrap;
  font-size: 13px;
  color: #000;
  margin-top: 5px;
  align-self: center;
`;