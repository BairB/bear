import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import moment from 'moment';
import Event from './event';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: this.props.cam.events,
            date: moment(this.props.cam.date*1000).format('DD.MM.YYYY')
        }
    }

    render() {
        const { event, date } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.date}>
                    <View style={styles.line}>
                        <View style={styles.lgold} />
                        <View style={styles.line2} />
                    </View>

                    <Text style={styles.text}>{date}</Text>

                    <View style={styles.line}>
                        <View style={styles.lgold} />
                        <View style={styles.line2} />
                    </View>
                </View>

                {event.map( (event, index) => <Event event={event} key={index}/>)}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: WIDTH,
        paddingBottom: 5,
    },
    text: {
        color: 'gold',
        fontSize: 18,
    },
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: WIDTH,
        height: 30
    },
    line: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: WIDTH / 3 - 30,
        height: 30,
    },
    lgold: {
        height: 15,
        width: WIDTH / 3 - 30,
        borderWidth: 1,
        borderBottomColor: 'gold',
        borderColor: '#120f0f',
    },
    line2: {
        height: 15,
        width: WIDTH / 3 - 30,
    },
});
export default Day;
