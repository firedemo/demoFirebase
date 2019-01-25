import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import arrowImg from '../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPressCompra() {
    console.log('compra completada con exito')
  }
  _onPress() {
    if (this.state.isLoading) return;

    this.setState({ isLoading: true });

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }

  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <Container >
      <Header style={{backgroundColor:'red'}} >
      <Text style={{color:'white'}}>Bienvenido</Text>
      </Header>
      <Content padder>
          <Text>Hola Mundo</Text>
        </Content>
      <Footer >
        <FooterTab style={{backgroundColor:'red'}}>
          <Button vertical>
            <Icon style={{color:'white'}} name="apps" />
            <Text style={{color:'white'}} >Equipos</Text>
          </Button>
          <Button vertical>
            <Icon style={{color:'white'}} name="camera" />
            <Text style={{color:'white'}} >Planes</Text>
          </Button>
          <Button vertical>
            <Icon style={{color:'white'}}  name="navigate" />
            <Text style={{color:'white'}} >Promo</Text>
          </Button>
          <Button vertical>
            <Icon style={{color:'white'}} name="person" />
            <Text style={{color:'white'}} >Acerca</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerprincipal: {
    paddingTop: 40,
    flex: 1,
    //alignItems: 'center',

  },
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: 'red',
  },
  buttonCompra: {
    //paddingTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 40,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  image: {
    width: 24,
    height: 24,
  },
});
