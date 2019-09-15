import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card,  CardImage } from 'react-native-material-cards'
import Carousell from './Carousell'




const Weather = ({ weather, temperature, city, description, img }) => {
    return (
      <View style={styles.weatherContainer}>
        <Card>   
        <CardImage 
          source={{uri : 
            weather === 'Rain' ? 
            'https://images.unsplash.com/photo-1556728414-066eba18b617?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80' : 
            'https://images.unsplash.com/photo-1555991653-41533844cda5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80' || 
            weather === 'Clouds' ? 'https://www.wonderopolis.org/wp-content/uploads/2012/03/rain-clouds_shutterstock_55994950.jpg' : 
            'https://images.unsplash.com/photo-1555991653-41533844cda5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80'}}
          title={city + " " + weather}
        />
        </Card>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>{description}</Text> 
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>

        <View style={styles.bodyContainer}>          
          <View style={{paddingTop: 20}}>
          <Carousell/>
        </View>
           
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#29339b',
    paddingTop: 20
  },
  headerContainer: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  subtitle: {
    fontSize: 14,
    color: '#fff'
  }
});

export default Weather;