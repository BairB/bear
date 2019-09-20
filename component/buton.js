import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class Buton extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Icon raised name='laptop' type='octicon' size={20} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon raised name='clockcircleo' type='octicon' size={20} color='gold'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon raised name='message1' type='octicon' size={20} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon raised name='contacts' type='octicon' size={20} color='white' />
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        width: WIDTH,
        marginTop: HEIGHT-60,
        height: 60,
        backgroundColor: 'rgba(18, 15, 15, 0.5)'
    },
});
export default Buton;
