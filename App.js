import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

export default function App() {
  const [alarms, setAlarms] = useState([]);
  return (
    <View style={styles.container}>
      <Text>やったぜー！</Text>
      <StatusBar style="auto" />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={alarms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card containerStyle={{ marginTop: 40 }}>
            <Card.Title>アラーム設定</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              時刻: {item.time.toString()}
            </Text>
            <Text style={{ marginBottom: 10 }}>
              曜日: {JSON.stringify(item.days)}
            </Text>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
