
import React, { Component } from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import { Footer, FooterTab, Icon, Button } from 'native-base';
import { TopBarMap } from '../Components/Topbar'
import { Fonts } from '../src/utils/Fonts'
import MapView, { Marker } from 'react-native-maps';

var customData = require('../dataset.json');

export default class MapScreen extends React.Component {

  static navigationOptions = {
    header: null
  };
  
  constructor() {
    super(); 
    this.state = { 
      
    };
}

  render() {
    
    const points = customData.map(item=>{
      return(
        <Marker
        coordinate={{
          latitude:item.location.lat,
          longitude: item.location.lon}}
          onPress={()=>Alert.alert(item.name,item.address)}
        />

      )
    })

    return (
      <View style={styles.wrapper}>
        <TopBarMap
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 38.9375677, // we can get location from user 
            longitude: -77.02638,
            latitudeDelta: 0.1,
            longitudeDelta: 0.0421,
          }}>
          {points}
        </MapView>

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
  ftText: {
    fontFamily: Fonts.Mali,
  },
  footer: {
    backgroundColor: '#fff',
  },
  icos: {
    color: '#b7b7b7',
    fontSize: 30
  },

})