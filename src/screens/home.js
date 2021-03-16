import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Moment from 'moment';
import {Text, Image, View, FlatList, TouchableOpacity} from 'react-native';
import {API_TOKEN} from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateEffect} from '../utils/useUpdateEffect';
import {
  fetchHomeProjects,
  setSelectedProject,
} from '../redux/action/projectActionCreator';
import {IonIcon} from '../components/IonIcon';
import {ScaledSheet} from 'react-native-size-matters';
import {PlatformTouchable} from '../components/PlatformTouchable';
import {Fab} from 'native-base';

const Home = props => {
  // const [projects, setProjects] = useState(null);
  const {navigation} = props;
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const projects = useSelector(state => state.home.project);
  useEffect(() => {
    dispatch(fetchHomeProjects());
  }, []);
  useEffect(() => {
    dispatch(fetchHomeProjects);
  }, [projects]);

  useUpdateEffect(() => {
    const prk = dispatch(setSelectedProject(selectedId));
    console.log('Dispatch Project Selector', prk);
    navigation.navigate('Diaries');
  }, [selectedId]);

  const Item = ({item, onPress, style}) => (
    <View style={styles.card}>
      <PlatformTouchable
        backgroundColor="#12B0E8"
        onPress={onPress}
        style={[styles.item, style]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text style={styles.title}>{item.name}</Text>
          <Image
            source={require('../../assets/noimage.png')}
            style={styles.image}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Text>Start {Moment(item.startdate).format('d MMM YYYY')}</Text>
          <Text>Finish {Moment(item.enddate).format('d MMM YYYY')}</Text>
        </View>
      </PlatformTouchable>
      <View style={styles.horizontalLine}></View>
      <View style={styles.iconGroup}>
        <IonIcon name="create-outline" style={styles.icon} />
        <IonIcon name="trash-outline" style={styles.icon} />
        <PlatformTouchable onPress={() => alert(projects.public_id)}>
          <IonIcon name="eye-outline" style={styles.icon} />
        </PlatformTouchable>
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    const backgroundColor =
      item.public_id === selectedId ? '#383CC1' : '#12B0E8';

    return (
      <View>
        <Item
          item={item}
          onPress={() => setSelectedId(item.public_id)}
          style={{backgroundColor}}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={item => item.public_id}
      />
      <Fab
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => navigation.navigate('AddProject')}>
        <IonIcon name="add" />
      </Fab>
    </View>
  );
};

export default Home;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#12B0E8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: '100@s',
    height: '100@vs',
    resizeMode: 'stretch',
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
  card: {
    borderColor: '#bbb',
    backgroundColor: '#12B0E8',
    borderWidth: 1,
    flex: 1,
    borderRadius: '10@s',
    padding: '10@s',
    margin: '10@s',
    shadowColor: '#fff',
    shadowOffset: {width: 20, height: 5},
    elevation: 5,
    justifyContent: 'center',
  },
  fab: {
    // position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
