import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Header, Item, Input, Icon, Button } from 'native-base';
import { Fonts } from '../src/utils/Fonts'


export class TopBar extends React.Component {

    render() {
        return (
            <View style={styles.topBar}>
                <Header androidStatusBarColor={'#905fdf'} iosBarStyle={'#905fdf'} style={styles.topBar} searchBar rounded transparent>

                    <View style={styles.mainBar}>
                        <Text style={styles.text}>WoBu</Text>
                        <TouchableOpacity style={styles.mapTouch} onPress={this.props.onPress}>
                            <Icon type="MaterialCommunityIcons" name='map-marker-radius' style={styles.mapIco} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchBar}> 
                        <Item>
                            <Icon name="ios-search" />
                            <Input onChangeText={this.props.onChangeText} placeholder="Search business" />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </View>
                </Header>
            </View>

        );
    }
}

export class TopBarMap extends React.Component {

    render() {
        return (
            <View style={styles.topBarMap}>
                <Header androidStatusBarColor={'#905fdf'} iosBarStyle={'#905fdf'} style={styles.topBarMap} searchBar rounded transparent> 
                    <View style={styles.mainBar}>
                        <Text style={styles.text}>WoBu</Text>
                        <TouchableOpacity style={styles.mapTouch} onPress={this.props.onPress}>
                            <Icon type="FontAwesome5" name='list-ul' style={styles.mapIco} />
                        </TouchableOpacity>
                    </View> 
                </Header>
            </View>

        );
    }

}



const styles = StyleSheet.create({

    topBar: {
        height: 150,
        width: '100%',
        backgroundColor: '#905fdf',
        flexDirection: 'column',
    },
    topBarMap:{
        height:100,
        width: '100%',
        backgroundColor: '#905fdf',
        flexDirection: 'column',
    },
    mainBar: {
        height: 70,
        width: '100%',
        justifyContent: 'flex-end',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: Fonts.MaliBold,
    },
    mapIco: {
        fontSize: 30,
        color: '#fff',
    },
    mapTouch:{
        width:30,
        height:30,
        position: 'absolute',
        right: 10,
        bottom: 10, 
    },  
    searchBar:{
        height:50,
        width:'100%', 
        marginTop: 5,
    }
})