import React, {useEffect} from 'react';
import {
  requestUserPermission,
  getFCMToken,
  notificationListener,
} from './src/utils/pushnotification_helper';
import {View, Text} from 'react-native';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    getFCMToken();
    notificationListener();
  }, []);

  return (
    <View>
      <Text>Push notification</Text>
    </View>
  );
};

export default App;
