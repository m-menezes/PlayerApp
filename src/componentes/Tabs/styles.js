import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';
export const Container = styled.View`
  background: #192060;
  padding: 10px;
`;
export const Strong = styled.Text`
  color: #FFF;
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
  border-radius: 20px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
`;
  
export const Logo = styled.Image`
  width: 70px;
  align-self: center;
`;
export const TabItem = styled.View`
  margin-left:10px;
  max-width: 100px;
`;
export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.Text`
  padding-left:10px;
  padding-right:10px;
  border-radius: 20px;
  height: 18px;
  background: rgba(255, 255, 255, 0.9);
`;
export const TabText = styled.Text`
  flex-wrap: wrap;
  font-size: 13px;
  color: #FFF;
  margin-top: 5px;
  align-self: center;
`;
