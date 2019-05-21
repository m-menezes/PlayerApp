import React, { Component } from 'react';

import axios from 'axios';

import {
	ActivityIndicator, View, Text, FlatList, Image
} from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}
	
	componentDidMount() {
		const instance = axios.create({
			baseURL: 'https://api-v3.igdb.com',
			headers: {
				'Content-Type': 'application/json',
				'user-key': '7b1ad61d038c49f102d0d394fbe31e2a',
			},
			params: {
				fields: '*; where game = 1291;',
			},
		});
		instance.post('/covers')
		.then((response) => {
			this.setState({
				isLoading: false,
				dataSource: response.data[0].image_id,
			}, () => { });
		})
	}
	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20 }}>
				<ActivityIndicator />
				</View>
				);
			}
			let url = 'https://images.igdb.com/igdb/image/upload/t_1080p/'+(this.state.dataSource)+'.jpg';
			return (
				<View style={{ flex: 1, paddingTop: 20}}>
				<Image source={{uri: url}} 
					 style={{flex: 1}}
				/> 
				<Text>{url}</Text>
				</View>
				);
			}
		}
		