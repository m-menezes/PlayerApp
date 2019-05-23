import React, {Component} from 'react';
import Search from '~/componentes/Search';
import { Container } from './styles';

export default class SearchPage extends Component {
  render() {
    return (
      <Container>
          <Search />
      </Container>
      );
    }
  }