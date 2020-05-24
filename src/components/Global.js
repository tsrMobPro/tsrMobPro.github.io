import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Global extends React.Component {
    constructor(){
        super();
        this.state = {
            positif: '',sembuh: '',meninggal: '',
        }

    }

    componentDidMount(){
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => (
            this.setState({positif: json.confirmed.value}),
            this.setState({sembuh: json.recovered.value}),
            this.setState({meninggal: json.deaths.value})
            )
        )
    }

    render(){

        return(
            
            <View style={{height: 100, width: 350, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={[styles.box, {backgroundColor: 'green'}]}>
                    <Text style={styles.text}>Positif</Text>
                    <Text style={styles.text}>{this.state.positif}</Text>
                </View>
                <View style={[styles.box, {backgroundColor: 'yellow'}]}>
                    <Text style={styles.text}>Sembuh</Text>
                    <Text style={styles.text}>{this.state.sembuh}</Text>
                </View>
                <View style={[styles.box, {backgroundColor: 'red'}]}>
                    <Text style={styles.text}>Meninggal</Text>
                    <Text style={styles.text}>{this.state.meninggal}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: 90,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
