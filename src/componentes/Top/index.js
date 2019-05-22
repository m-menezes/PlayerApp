import React, { Component } from 'react';

import Api from '~/services/api';

import { ActivityIndicator, View, Text } from 'react-native';
import { Icon } from 'native-base';

import { Strong, ColText, ColRating, ColNumber, Container, TopItems, Number } from './styles';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}
	
	componentDidMount() {
		Api.defaults.params = { fields: 'summary, rating, name; where rating > 0; sort popularity desc; limit 20;' };
		Api.post('/games' )
		.then((response) => {
			this.setState({
				isLoading: false,
				dataSource: response.data,
			}, () => { });
		})
	}
	lapsList() {
		return this.state.dataSource.map((data, index) => {
			return (
				<View key={index + 1}>
					<TopItems >
						<ColNumber>
							<Number>{index + 1}</Number>
						</ColNumber>
						<ColText>
							<Strong>{data.name}</Strong>
							<Text numberOfLines={1} ellipsizeMode="tail">{data.summary} </Text>
						</ColText>
						<ColRating>
							<Text>{parseInt(data.rating)} </Text>
							<Icon  type="FontAwesome" name="star"  style={{fontSize: 15, color: ( parseInt(data.rating) > 50 ? "#5dc887" : "#e33f33" ) }} />
						</ColRating>
					</TopItems>
				</View>
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
			<Container>
				<Strong>Populares</Strong>
				{ this.lapsList() }
			</Container>
			);
	}
}
	