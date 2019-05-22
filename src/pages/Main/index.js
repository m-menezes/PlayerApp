import React, { Component } from 'react';

import Top from '~/componentes/Top';
import Tabs from '~/componentes/Tabs';
import Search from '~/componentes/Search';
import Destaque from '~/componentes/Destaque';
import Footer from '~/componentes/Footer';

import { ScrollView, RefreshControl } from 'react-native';
import { Container } from './styles';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
		};
	}
	
	onRefresh() {
		//Clear old data of the list
		this.setState({ dataSource: [] });
	}

	render() {
	return (
		<Container>
			<ScrollView refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} /> }>
				<Search />
				<Destaque />
				<Tabs />
				<Top />
			</ScrollView>
			<Footer />
		</Container>
		);
	}
}