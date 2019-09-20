import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import moment from 'moment';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class Event extends Component {

    render() {
        const { event } = this.props;
  
        return (
            <View style={styles.container}>
                <View style={styles.indicator} />
                <Text style={styles.time}>{moment(event.date*1000).format('hh:ss')}</Text>
                <View style={styles.description}>
                    <Text style={styles.textTitle}>{event.title}</Text>
                    <Text style={styles.textdescription}>{event.description}</Text>
                </View>
                <Icon name='playcircleo' color='white' size={30}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 80,
        width: WIDTH - 15,
        marginTop: 5,
        marginBottom: 5,
    },
    indicator: {
        height: 80,
        width: 10,
        backgroundColor: 'orange',
    },
    time: {
        color: 'white',
        fontSize: 14,
        marginRight: 10,
        marginLeft: 5,
    },
    textTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold',
    },
    textdescription: {
        color: 'white',
        fontSize: 14,
    },
    description: {
        width: WIDTH-120
    },
});
export default Event;
