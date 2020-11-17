import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';

import WebView from './screens/webview';

export default () => {
  const [onLoad, setOnLoad] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'default'} />
      <View
        style={{
          flex: 1,
        }}>
        <WebView />
      </View>
    </SafeAreaView>
  );
};
