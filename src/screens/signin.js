import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY} from '../utils/constants';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {login} from '../redux/action';

//
const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const {navigation} = props;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Account Login</Text>
      <Image source={require('../../assets/cons.png')} style={styles.logo} />
      <View style={{flexDirection: 'row'}}>
        <Icon name="person-outline" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="username@domain.com"
          underlineColorAndroid="gray"
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="ios-lock-closed-outline" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          autoCapitalize="none"
          underlineColorAndroid="grey"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View style={styles.signIn}>
        <Button
          title="Sign In"
          onPress={() => dispatch(login({email: email, password: password}))}
        />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '20@s',
    paddingTop: '50@vs',
    // paddingHorizontal: '20',
    // paddingTop: '50',
  },
  logo: {
    width: '200@vs',
    height: '180@vs',
    flexDirection: 'row',
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '20@vs',
  },
  inputWrapper: {
    marginTop: 70,
  },
  textInput: {
    justifyContent: 'center',
    paddingLeft: '10@s',
    margin: '10@s',
    color: 'black',
    flex: 1,

    fontSize: 18,
    paddingBottom: '10@vs',
    marginBottom: '10@vs',
    // marginLeft: '10@vs',
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#03203C',
    alignItems: 'center',
    color: 'white',
    padding: '5@s',
    fontSize: 30,
  },
  header: {
    fontSize: 36,
    color: '#1B98F5',
    alignSelf: 'center',
    marginBottom: 10,
  },
  signIn: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: '20@s',
  },
});
