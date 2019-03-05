import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ListView
} from 'react-native';
import {TopBar} from '../Components/Topbar'
import { Card, CardItem, Body, Footer, FooterTab, Icon, Button } from 'native-base';
import { Fonts } from '../src/utils/Fonts'

var customData = require('../dataset.json');

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(customData),
            searchData :'', 
        };
    }
    onChangeText = (text) => {
        this.setState({searchData: text.toLowerCase()}) 
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <TopBar onChangeText={this.onChangeText} 
                        onPress={() => this.props.navigation.navigate('Map')}
                />
                <ListView
                    contentContainerStyle={styles.businessList}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        rowData.name.toLowerCase().includes(this.state.searchData) || rowData.description.includes(this.state.searchData)  ?   
                        <Cards
                            Name={rowData.name}
                            Address={rowData.address}
                            Description={rowData.description}
                            openingHoursPeriods={rowData.openingHoursPeriods}
                        />
                        : null
                    }
                /> 

                <Footer style={{ height: 80, borderTopWidth: 1, borderTopColor: 'lightgray' }}>
                    <FooterTab style={styles.footer}>
                        <Button vertical>
                            <Icon type="AntDesign" style={[styles.icos, { color: '#905fdf' }]} name="search1" />
                            <Text style={[styles.text, styles.ftText, { color: '#905fdf' }]}>Explore</Text>
                        </Button>
                        <Button vertical>
                            <Icon type="AntDesign" style={styles.icos} name="hearto" />
                            <Text style={[styles.text, styles.ftText]}>Follow</Text>
                        </Button>
                        <Button vertical>
                            <Icon type="MaterialCommunityIcons" style={[styles.icos, { fontSize: 40 }]} name="account-outline" />
                            <Text style={[styles.text, styles.ftText]}>Account</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </View>
        );
    }
}


const Cards = (props) => {
    const newDate = new Date()
    const day = newDate.getDay()
    const hour = newDate.getHours()
    const min = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()
    const currentTime = hour.toString() + min.toString()
    const openTime = props.openingHoursPeriods[day].openTime
    // this is for 24 hours period
    const openingStatus = currentTime < openTime ? "Closed" : 'Open'
    const osColor = openingStatus == "Open" ? '#81da7c' : '#e0e0e0'
    return (
        <Card>
            <CardItem>
                <Body style={styles.cardBody}>
                    <View style={styles.bsLogo}>
                        <Image style={styles.bsLogo} source={{ uri: 'https://www.denverpost.com/wp-content/uploads/2018/11/ZARA_1114_hc_1891.jpg?w=620' }} />
                    </View>
                    <View style={styles.description}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.text, styles.head]}>
                                {props.Name}
                            </Text>
                            <Text style={[styles.openingStatus, { backgroundColor: osColor }]}>
                                {openingStatus}
                            </Text>
                        </View>
                        <Text>
                            {props.Description}
                        </Text>
                        <Text style={styles.text}>
                            {props.Address}
                        </Text>
                    </View>
                    <Icon type="AntDesign" style={[styles.icos, styles.favoriteIco]} name="hearto" />

                </Body>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
    },
    text: {
        color: '#fff',
        fontSize: 13,
        color: '#b7b7b7',
        padding: 0,
    },
    ftText:{
        fontFamily: Fonts.Mali,
    },
    footer: {
        backgroundColor: '#fff',
    },
    icos: {
        color: '#b7b7b7',
        fontSize: 30
    },
    head: {
        fontWeight: 'bold',
        color: 'black', 
        fontSize: 14, 
    },
    businessList: {
        paddingBottom: 10,
        paddingLeft: '5%',
        width: '95%'
    },
    bsLogo: {
        width: 60,
        height: 60,
    },
    cardBody: {
        flexDirection: 'row'
    },
    description: {
        marginLeft: 10,
    },
    favoriteIco: {
        position: 'absolute',
        right: 0,
        top: 10,
        fontSize: 25
    },
    openingStatus: {
        marginLeft: 10,
        fontSize: 10,
        backgroundColor: '#81da7c',
        color: '#fff',
        height: 20,
        padding: 3,
        paddingLeft: 13,
        paddingRight: 13,
        borderRadius: 50
    }


})