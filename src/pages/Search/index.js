import React, { Component } from 'react';
import { Icon } from 'native-base';
import Api from '~/services/api';
import Footer from '~/componentes/Footer';

import { ActivityIndicator, View, ScrollView, Text, TouchableHighlight } from 'react-native';

import { Strong, ColText, ColRating, Container, TopItems } from './styles';

export default class SearchPage extends Component {
	constructor(props) {
		super(props);
        this.state = { isLoading: true };
        this.search = this.props.navigation.getParam('search', 'Witcher');
        this.getDados();
	}

    async getDados() {
        // Get Details
        Api.defaults.params = { fields: 'summary, rating, name; search "'+this.search+'";' };
        const response = await Api.post('/games' );
        this.setState({
            isLoading: false,
            dataSource: response.data,
        });
    }
    lapsList() {
		return this.state.dataSource.map((data, index) => {
			return (
				<View key={index + 1}>
					<TouchableHighlight 
						onPress={ 
								() => navigation.navigate(
									'SingleGame', { 
										itemId: data.id,
									}
								)
							}
						>
						<TopItems >
							<ColText>
								<Strong>{data.name}</Strong>
								<Text numberOfLines={1} ellipsizeMode="tail">{data.summary} </Text>
							</ColText>
							<ColRating>
								<Text>{parseInt(data.rating)} </Text>
								<Icon  type="FontAwesome" name="star"  style={{fontSize: 15, color: ( parseInt(data.rating) > 75 ? "#5dc887" : parseInt(data.rating) > 50 ? "#e4b93c" : "#e33f33" ) }} />
							</ColRating>
						</TopItems>
					</TouchableHighlight>
				</View>
			)
		});
	}
    
    render() {
        if (this.state.isLoading) {
            return (
				<Container>
					<View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
						<ActivityIndicator />
					</View>
				</Container>
            );
        }
        return ( 
            <Container>
                <ScrollView>
                    { this.lapsList() }
                </ScrollView>
                <Footer />
            </Container>
        );
    }
}