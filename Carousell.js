import React from 'react';
import { TouchableOpacity, Text, View, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');


export default class MyCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            entries: [
                {
                    title: 'London',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/E5A5/production/_104398785_dddb06af-e91d-443b-b14f-0be2e0cad0be.jpg'
                },
                {
                    title: 'Sidney',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170220102107-sydney-habour.jpg'
                },
                {
                    title: 'New York',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                    illustration: 'https://media-cdn.tripadvisor.com/media/photo-s/16/c5/9e/6f/new-york-in-one-day-guided.jpg'
                },
                {
                    title: 'Oslo',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://cdn-images-1.medium.com/max/767/1*KEaqE8G6XoXeB1GYXjs1Dg.jpeg'
                },
                {
                    title: 'Los Angeles',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://www.oxy.edu/sites/default/files/styles/banner_image/public/page/banner-images/los-angeles_main_1440x800.jpg?itok=GiOVS9-4'
                },
                {
                    title: 'Toronto',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://www.ctvnews.ca/polopoly_fs/1.4016815.1531850422!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg'
                }
            ]
        }
    }

    _renderItem ({item, index}) {
        return (
          
            <View style={styles.slide}>
                <Image source={{uri :item.illustration}} style={{width: 150, height: 100, borderRadius: 15}}/>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={150}
            />
        );
    }
}

const styles = {
    slide: {
        
    },
    title: {
        color: 'white',
        textAlign: 'center'
        
    }
}