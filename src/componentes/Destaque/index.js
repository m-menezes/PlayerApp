import React, { Component } from 'react';
import Api from '~/services/api';

import { ActivityIndicator, View, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

import {Container, TabsContainer, TabItem, Image} from './styles';

class Destaque extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}
	
	componentDidMount() {
		Api.defaults.params = { fields: ' cover.image_id; where platforms = (48) & rating >= 92 & total_rating >= 90; sort popularity desc; limit 5;' };
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
				<TabItem key={index +1} >
					<TouchableHighlight 
						onPress={ 
								() => navigation.navigate(
									'SingleGame', { 
										itemId: data.id,
									}
								)
							}
						>
						<Image 
						source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/'+data.cover.image_id+'.jpg' }} 
						style={{ width: 180, height: 250, resizeMode: 'contain' }}
						
						/>
					</TouchableHighlight>
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

export default withNavigation(Destaque);