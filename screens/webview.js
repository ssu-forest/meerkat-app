import React from 'react';
import { Platform, Dimensions, SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default () => {
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(0);

  React.useEffect(() => {
    const { width, height } = Dimensions.get('screen');

    setScreenWidth(width);
    setScreenHeight(height);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <WebView
          style={{
            width: screenWidth,
            height: screenHeight,
          }}
          source={{
            uri: 'https://meerkat-test.herokuapp.com/',
          }}
          scalesPageToFit={!Platform.OS === 'android'}
        />
      </View>
    </SafeAreaView>
  );
};
