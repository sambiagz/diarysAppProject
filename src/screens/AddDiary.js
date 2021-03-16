import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Picker} from '@react-native-picker/picker';
import {Input} from '../components/Input';
import {AppButton} from '../components/AppButton';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';

// {
//     "id": "string",
//     "title": "string",
//     "date": "2021-01-30T14:58:04.954Z",
//     "weather_degree": "string",
//     "weather_wind_speed": "string",
//     "weather_rain": "string",
//     "weather_img": "string",
//     "section_public_id": "string",
//     "public_id": "string",
//     "is_active": true
//   }

const AddDiray = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={{margin: 10}}>
      <Text> Add Diary Screen</Text>
      <Input placeholder="Title" underlined />
      <Input placeholder="date" underlined />
      <AppButton title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default AddDiray;

styles = ScaledSheet.create({});
