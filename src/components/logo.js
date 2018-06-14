import React, { Component } from 'react';
import { Dimensions } from 'react-native';

import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 12 / 16);
const imageWidth = dimensions.width;

export default class Logo extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Image style={{
                    height: imageHeight, width: imageWidth,justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
                source={require('../../src/images/imagemPlantao.jpeg')}
                />  
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-start',
    alignItems: 'center'
  },
});