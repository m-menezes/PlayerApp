import React, { Component } from 'react';

import Top from '~/componentes/Top';
import Tabs from '~/componentes/Tabs';
import Footer from '~/componentes/Footer';
import Search from '~/componentes/Search';
import Destaque from '~/componentes/Destaque';

import { ScrollView, } from 'react-native';
import { Container } from './styles';


export default class Main extends Component {
	constructor(props) {
		super(props);
		navigation =  this.props.navigation;
	}
	render() {
		return ( 
			<Container>
				<ScrollView>
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