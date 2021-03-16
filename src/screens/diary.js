import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import axios from 'axios';

const Diary = ({route, navigation}) => {
  const [diary, setDiary] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const {public_id} = route.params;
    axios
      .get(`/diary/${public_id}`)
      .then((res) => {
        const {data} = res;
        setDiary(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderItem = () => {
    <Text>{diary.title}</Text>;
  };
  return (
    <View>
      {/* {loading ? <Text>Diary Title</Text> : <Text>Loading</Text>} */}
      {renderItem}
      {/* <Text>{diary.title}</Text>
      <Image source={{uri: diary.weather_img}} style={styles.image} />
      <Text>Wind Speed{diary.weather_wind_speed}</Text> */}
    </View>
  );
};

export default Diary;

const styles = ScaledSheet.create({
  image: {
    width: '40@s',
    height: '40@s',
  },
});
