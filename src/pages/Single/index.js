import React, { Component } from 'react';
import Api from '~/services/api';

import Footer from '~/componentes/Footer';
import {  ActivityIndicator, View, ScrollView, TouchableHighlight, ImageBackground } from 'react-native';
import { Container, Image, SingleTop, Text, Details, Title, Block, Strong, Screenshots } from './styles';

export default class SingleGamePage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			 isLoading: true,
			 modalVisible: false,
		};
		this.itemId = this.props.navigation.getParam('itemId', '28540');
		this.getDados();
	}

	async getDados() {
		// Get Details
		Api.defaults.params = { fields: 'name, rating, storyline, summary,cover.image_id, game_modes.name, release_dates.human, platforms.name, genres.name, expansions.name, artworks.image_id, screenshots.image_id; where id = '+this.itemId+';' };
		const response = await Api.post('/games' );
		this.setState({
			isLoading: false,
			dataSource: response.data[0],
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
					<ImageBackground 
						source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/'+( this.state.dataSource.artworks ? this.state.dataSource.artworks[0].image_id : this.state.dataSource.cover.image_id )+'.jpg'}}
						style={{width: '100%',  }} >
						<SingleTop>
							<Image 
								source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/'+this.state.dataSource.cover.image_id+'.jpg' }} 
								style={{ width: 150, height: 200, resizeMode: 'contain' }}
							/>
							<Details>
								<Block>
									<Title>{ this.state.dataSource.name }</Title>
									<Text>{ this.state.dataSource.release_dates[0].human }</Text>
								</Block>
								<Block>
									<Strong>Rating: { parseInt(this.state.dataSource.rating) + 1 }</Strong>
								</Block>
								{ 	
									this.state.dataSource.genres ? (
										<Block>
											<Strong>Genres :</Strong>
											{ this.state.dataSource.genres.map(r => <Text key={r.id}>{r.name}</Text>) }
										</Block>
									) : (
										<View></View>
									)
								}
							</Details>
						</SingleTop>
					</ImageBackground>

					{ this.state.dataSource.storyline ? (
						<Block>
							<Strong>Storyline:</Strong>
							<Text>{this.state.dataSource.storyline}</Text>
						</Block>
					) : (<View></View>)}

					{ this.state.dataSource.summary ? (
						<Block>
							<Strong>Summary:</Strong>
							<Text>{this.state.dataSource.summary}</Text>
						</Block>
					) : (<View></View>)}

					{ this.state.dataSource.game_modes ? (
						<Block>
							<Strong>Modes:</Strong>
							{ this.state.dataSource.game_modes.map(r => <Text key={r.id}>{r.name}</Text>) }
						</Block>
					) : (<View></View>)}

					{ this.state.dataSource.expansions ? (
						<Block>
							<Strong>Expansions:</Strong>
							{ this.state.dataSource.expansions.map(r => <Text key={r.id}>{r.name}</Text>) }
						</Block>
					) : (<View></View>)}

					{ 	
						this.state.dataSource.platforms ? (
							<Block>
								<Strong>Platforms:</Strong>
								{ this.state.dataSource.platforms.map(r => <Text key={r.id}>{r.name}</Text>) }
							</Block>
						) : (
							<View></View>
						)
					}

					{ this.state.dataSource.screenshots ? (
						<Block>
							<Strong>Screenshots:</Strong>
							<Screenshots>
								{ this.state.dataSource.screenshots.map(
									r => 
									<TouchableHighlight key={r.id}>
										<Image 
											source={{ uri: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/'+r.image_id+'.jpg' }} 
											style={{ width: 300, height: 200, resizeMode: 'contain', marginLeft: 10 }}
										/>
									</TouchableHighlight>
								)}
							</Screenshots>
						</Block>
					) : (<View></View>)}

					<Block></Block>
				</ScrollView>
				<Footer />
			</Container>
		);
	}
}
	