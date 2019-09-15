import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';
import SearchComponent from './SearchComponent';



// API KEY 
const API_KEY = '1bfc5ea384da3378f267851e0316a179';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.fetchWeather = this.fetchWeather.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    
    this.state = {
      dataLoaded : false ,
      weatherCondition : null,
      temperature: 0,
      city: null,
      error: null,
      newSearchQuerry: null,
      userTyping: false,

    }
  }
  
  // When the component mounts, get the current location
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }

  // Set the state to when the user is typing
  handleOnChange = (text) => {
    this.setState({
      newSearchQuerry: text,
      userTyping: true
    })
}

  fetchWeather(lat = 25, lon = 25,) {
    // If there is a new search input, fetch the url with new parameters
    if(this.state.newSearchQuerry !== null){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.newSearchQuerry}&lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          city: json.name,
          description: json.weather[0].description,
          isLoading: false,
          userTyping: false
        });
      })
    }  else {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.setState({
            temperature: json.main.temp,
            weatherCondition: json.weather[0].main,
            city: json.name,
            description: json.weather[0].description,
            isLoading: false
          });
  
        });
      }
    }

  render() {
    return (

      
      <View style={styles.searchBarcontainer}>
        <SearchComponent
          onSubmit={this.fetchWeather}
          handleOnChange={text => {this.handleOnChange(text)}}/>
        
        {this.state.dataLoaded ? <Text>Fetching The Weather</Text> : 
        <Weather 
        weather={this.state.weatherCondition} 
        temperature={this.state.temperature} 
        city={this.state.city}
        description={this.state.description}
        />}

        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Search bar styles
  searchBarcontainer: {
    backgroundColor:'green',
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
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
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});


