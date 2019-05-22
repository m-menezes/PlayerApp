import React, { Component } from 'react';
import pc from '~/assets/pc.png';
import Api from '~/services/api';

import { ActivityIndicator, View } from 'react-native';

import {Container, TabsContainer, TabItem, TabText, Image} from './styles';

export default class Destaque extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}
	
	componentDidMount() {
		Api.defaults.params = { fields: 'name, screenshots.image_id; where platforms = (48) & rating >= 92 & total_rating >= 90; sort popularity desc; limit 3;' };
		Api.post('/games' )
		.then((response) => {
			this.setState({
				isLoading: false,
				dataSource: response.data,
			});
		})
	}	
	lapsList() {
		return this.state.dataSource.map((data, index) => {
			return (
				<TabItem key={index +1}>
					<Image source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/'+data.screenshots[0].image_id+'.jpg' }} style={{ width: 300, height: 200, resizeMode: 'contain' }}/>
					<TabText>{data.name}</TabText>
				</TabItem>
			)
		});
	}
	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
					<ActivityIndicator />
				</View>
			);
		}
		return ( 
			<Container >
				<TabsContainer>
					{ this.lapsList() }
				</TabsContainer>
			</Container>
			);
	}
}
	