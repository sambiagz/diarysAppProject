import React from 'react';
import {ScrollView, View, Text, Image, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Input} from '../components/Input';
import {AppButton} from '../components/AppButton';

const UpdateProfile = () => {
  return (
    // <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>Update Profile</Text>
        <Image source={require('../../assets/cons.jpg')} style={styles.image} />
        <TextInput placeholder="email" style={styles.inputText} />
        <TextInput placeholder="username" style={styles.inputText} />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.inputText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Deactivate" style={styles.button} />
        <AppButton title="Update" style={styles.button} />
      </View>
    </View>
    // </ScrollView>
  );
};

export default UpdateProfile;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    margin: '10@s',
    // alignItems: 'stretch',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: '20@vs',
    color: '#46B2E0',
  },
  image: {
    width: '150@s',
    height: '150@vs',
  },
  inputText: {
    alignSelf: 'stretch',
    padding: '10@s',
    marginHorizontal: '20@s',
    fontSize: '16@s',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  button: {
    marginHorizontal: '20@s',
    backgroundColor: 'red',
  },
});
