import React, { Component } from 'react';

import Top from '~/componentes/Top';
import Tabs from '~/componentes/Tabs';
import Search from '~/componentes/Search';
import Destaque from '~/componentes/Destaque';


import { ScrollView, } from 'react-native';
import { Container } from './styles';
const Main = () => (
	<Container>
		<ScrollView>
			<Search />
			<Destaque />
			<Tabs />
			<Top />
		</ScrollView>
	</Container>
);

export default Main;