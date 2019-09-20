import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Day from './component/day';
import Axios from 'axios';
import Butons from './component/buton';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vcam: [
        {
            "date": 1568870657,
            "events": [
                {
                    "date": 1568870657,
                    "priority": "major",
                    "title": "Камера 'Во дворе'",
                    "description": "Замечено движение в области",
                    "has_video": true,
                    "video_link": "http://path_to_some_video.com/uri"
                },
                {
                    "date": 1568870657,
                    "priority": "minor",
                    "title": "Камера 'Во дворе'",
                    "description": "Замечено движение в области",
                    "has_video": false
                }
            ]
        },
        {
            "date": 1568784257,
            "events": [
                {
                    "date": 1568784257,
                    "priority": "major",
                    "title": "Камера 'Во дворе'",
                    "description": "Замечено движение в области",
                    "has_video": true,
                    "video_link": "http://path_to_some_video.com/uri"
                },
                {
                    "date": 1568784257,
                    "priority": "minor",
                    "title": "Камера 'Во дворе'",
                    "description": "Замечено движение в области",
                    "has_video": false
                }
            ]
        },
        {
          "date": 1568784257,
          "events": [
              {
                  "date": 1568784257,
                  "priority": "major",
                  "title": "Камера 'Во дворе'",
                  "description": "Замечено движение в области",
                  "has_video": true,
                  "video_link": "http://path_to_some_video.com/uri"
              },
              {
                  "date": 1568784257,
                  "priority": "minor",
                  "title": "Камера 'Во дворе'",
                  "description": "Замечено движение в области",
                  "has_video": false
              }
          ]
      },
      {
        "date": 1568784257,
        "events": [
            {
                "date": 1568784257,
                "priority": "major",
                "title": "Камера 'Во дворе'",
                "description": "Замечено движение в области",
                "has_video": true,
                "video_link": "http://path_to_some_video.com/uri"
            },
            {
                "date": 1568784257,
                "priority": "minor",
                "title": "Камера 'Во дворе'",
                "description": "Замечено движение в области",
                "has_video": false
            }
        ]
    },
    ],
    }
  }

  // componentDidMount = async () => {
  //   let x = await Axios.get('https://next.json-generator.com/api/json/get/V1_QZZnID');
  //   this.setState({vcam:x.data})
  // }

  render() {
    const { vcam } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
       
        <View style={styles.header}>
          <Icon name='left' color='white' size={20} />
          <View style={styles.headerText}>
            <Text style={styles.text}>История происшествий</Text>
          </View>
        </View>
        <View style={styles.fakeTabnavigation}>
          <Icon2 name='calendar' color='gold' size={25} />
          <Icon name='videocamera' color='white' size={25} />
          <Icon2 name='cloud-rain' color='gold' size={25} />
          <Icon2 name='droplet' color='gold' size={25} />
        </View>
        <ScrollView>
        {vcam.map( (vcam,index) => <Day cam={vcam} key={index}/>)}
        </ScrollView>
        <Butons/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120f0f',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH,
    backgroundColor: 'grey',
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH-30
  },
  fakeTabnavigation: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: WIDTH
  },
  menu: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: WIDTH,
  },
  icon: {
    
    opacity: 100
  },
});
export default App;
