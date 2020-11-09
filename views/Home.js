import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView, Image, Button, Platform } from 'react-native';

const Home = ({ navigation }) => {
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
            latitude: 42.7872,
            longitude: -86.1016,
            latitudeDelta: 0.0035,
            longitudeDelta: 0.0035,
            }}
            style={styles.map}
        />
      </View>
      <Button style={{
            color: 'white',
        }} title="Logout" onPress={() => navigation.navigate('Login')} />
      <StatusBar style="auto" />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: Platform.OS === "android" ? 20 : 0,
    },
    view: { 
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
      },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
  });

export default Home;