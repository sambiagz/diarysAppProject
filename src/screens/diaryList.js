import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';
import {IonIcon} from '../components/IonIcon';
import {PlatformTouchable} from '../components/PlatformTouchable';
import {useNavigation} from '@react-navigation/native';
import {Fab} from 'native-base';
import Moment from 'moment';

const diary1 = {public_id: 'd1', title: 'Title', date: '20-Jan-2021'};
const diary2 = {public_id: 'd2', title: 'Title', date: '20-Jan-2021'};
const diary3 = {public_id: 'd3', title: 'Title', date: '20-Jan-2021'};
const diary4 = {public_id: 'd4', title: 'Title', date: '20-Jan-2021'};
const diary5 = {public_id: 'd5', title: 'Title', date: '20-Jan-2021'};
const diarylst = [diary1, diary2, diary3, diary4, diary5];

const DiaryList = (props) => {
  const [diaries, setDiaries] = useState([]);
  const {navigation} = props;
  useEffect(() => {
    axios
      .get('/diary')
      .then((res) => {
        const {data} = res.data;
        console.log(res);
        setDiaries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>
            Date: {Moment(item.date).format('ddd DD MMM YYYY')}
          </Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.iconGroup}>
          <IonIcon name="create-outline" style={styles.icon} />
          <IonIcon name="trash-outline" style={styles.icon} />
          <PlatformTouchable
            onPress={() =>
              navigation.navigate('DiaryScreen', {public_id: item.public_id})
            }>
            <IonIcon name="eye-outline" style={styles.icon} />
          </PlatformTouchable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Diaries List</Text>
      </View>
      <FlatList
        data={diaries}
        keyExtractor={(item) => item.public_id}
        renderItem={renderItem}
      />

      <Fab
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => navigation.navigate('AddDiary')}>
        <IonIcon name="add" />
      </Fab>
    </View>
  );
};

export default DiaryList;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    margin: '10@s',
  },
  text: {
    fontSize: '18@s',
    paddingVertical: '5@s',
  },
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10@s',
  },
  headerText: {
    fontSize: '18@s',
    fontWeight: 'bold',
  },
  card: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: '10@s',
    padding: '10@s',
    margin: '10@s',
    shadowColor: '#fff',
    shadowOffset: {width: 20, height: 5},
    elevation: 5,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#bbb',
    margin: '10@s',
  },
  icon: {
    fontSize: '30@s',
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
