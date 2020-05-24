import React from 'react';
import { View, Text, FlatList} from 'react-native';
import { render } from 'react-dom';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            refreshing: false
        }
    }

    renderItem = ({ item }) => (
        <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
        {/*flex: 1, flexDirection: 'row', */}
    {/* <Image 
        source={{ uri: `https://robohash.org/${item.id}?set=set1` }}
        style= {{width: 50, height:50}}
        /> */}
    <View>
    <Text>Provinsi: {item.provinsi}</Text>
     <Text>Positif: {item.kasusPosi}</Text> 
     <Text>Sembuh: {item.kasusSemb}</Text> 
     <Text>Meninggal: {item.kasusMeni}</Text> 
    </View>
    </View>
)
    onRefresh = () => {  
    this.getDataApi();
}

    componentDidMount = () => {
    this.getDataApi();
}

    getDataApi = async () => {
    this.setState({ refreshing: true })
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(json => this.setState({ users: json, refreshing: false }))
    const response = await fetch ('https://indonesia-covid-19.mathdro.id/api/provinsi');
    const json = await response.json();
    this.setState({ users: json.data, refreshing: false })
}

    render() {
    console.log(this.state.users);
    return (
        <View style={{flex: 1}}>
            <FlatList
            data={this.state.users}
            keyExtractor={item => item.fid.toString()}
            renderItem={
                ({item}) => (
                <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
                <View style={{height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style= {{marginLeft: 5}}>
                    <Text>{item.provinsi}</Text>
                        </View>
                <View style={{flexDirection: 'row'}}>
                        <View style= {{alignItems: 'center', height: 25, width: 55, borderRadius: 10, backgroundColor: 'gold', justifyContent: 'space-between'}}>
                    <Text>{item.kasusPosi}</Text>
                        </View>
                <View style={{flexDirection: 'row'}}>
                        <View style= {{alignItems: 'center', height: 25, width: 55, borderRadius: 10, backgroundColor: 'skyblue', justifyContent: 'space-between'}}>
                    <Text>{item.kasusSemb}</Text>
                        </View>
                <View style={{flexDirection: 'row'}}>
                         <View style= {{alignItems: 'center', height: 25, width: 55, borderRadius: 10, backgroundColor: 'red', justifyContent: 'space-between'}}>
                    <Text>{item.kasusMeni}</Text>
                        </View>
                    </View>
                </View>
            </View>
         </View>
    </View>
                )
                }

            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}/>  
    </View>
        )

    }
}

export default List;