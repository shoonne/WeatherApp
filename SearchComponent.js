import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default class SearchComponent extends React.Component {

    render() {
        return(
        <Fumi
          onChange={this.onChange}
          onSubmitEditing={this.props.onSubmit}
          onChangeText={ text => this.props.handleOnChange(text)}
          style={styles.input}
          label={'Los Angeles'}
          inputStyle={{color:'white'}}
          iconClass={FontAwesomeIcon}
          
          iconName={'search'}
          iconColor={'white'}
          />
        )
    }
}


const styles = StyleSheet.create({
    // Search bar styles
    searchBarcontainer: {
      flex: 1,
      paddingTop: 24,

    },
    content: {
      // not cool but good enough to make all inputs visible when keyboard is active
      paddingBottom: 300,
    },
    card1: {
      paddingVertical: 16,
    },
    card2: {
      padding: 16,
    },
    input: {
      backgroundColor:'#9e0031',
      marginTop: 20,
      borderWidth: 0.6,
      borderColor: '#4F42',
    },
    title: {
      paddingBottom: 16,
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      opacity: 0.8,
    },
  });




