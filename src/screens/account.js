import React from 'react';

import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {IonIcon} from '../components/IonIcon';
import {PlatformTouchable} from '../components/PlatformTouchable';
import {setToken} from '../redux/action/authActionCreator';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/action/authActionCreator';
import axios from 'axios';

const Account = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const renderInfoSection = () => {
    return (
      <View style={styles.infoContainer}>
        <IonIcon name="person" style={styles.personIcon} />
        <View style={styles.verticleLine}></View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>Hassan Emam</Text>
          <Text style={styles.infoEmail}>hassan@constology.com</Text>
          <Text style={styles.infoText}>07466668873</Text>
        </View>
      </View>
    );
  };

  const renderButton = (icon, title) => {
    return (
      <View style={styles.buttonWrapper}>
        <IonIcon name={icon} style={styles.btnIcon} />
        <Text style={styles.btnIcon}>{title}</Text>
      </View>
    );
  };

  const renderButtons = () => {
    return (
      <View>
        <View style={styles.buttonContainer}>
          {renderButton('person-outline', 'Profile')}
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.buttonContainer}>
          {renderButton('settings-outline', 'Settings')}
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.buttonContainer}>
          {renderButton('refresh-outline', 'Password Reset')}
        </View>
        <View style={styles.horizontalLine}></View>
        <PlatformTouchable
          onPress={() => {
            dispatch(logout);
          }}>
          <View style={styles.buttonContainer}>
            {renderButton('log-out-outline', 'Log Out')}
          </View>
        </PlatformTouchable>
        <View style={styles.horizontalLine}></View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderInfoSection()}
      {renderButtons()}
    </View>
  );
};

export default Account;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    margin: '10@s',
    // backgroundColor: 'red',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  personIcon: {
    fontSize: '100@s',
  },
  verticleLine: {
    width: 1,
    backgroundColor: '#bbb',
    marginHorizontal: '20@s',
  },
  infoTextContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'space-around',
  },
  infoText: {
    fontSize: '20@s',
  },
  infoEmail: {
    fontSize: '14@s',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ddd',
  },
  buttonContainer: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: '5@s',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: '24@s',
  },
  btnIcon: {
    fontSize: '18@s',
    marginHorizontal: '10@s',
    marginTop: '20@s',
  },
});
