import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView } from 'react-native';

export default function App() {
  const handleAlert = () => {
    Alert.alert('Alert Button pressed');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MyCloneApp</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={{ uri: 'https://via.placeholder.com/350x200' }}
          style={styles.image}
        />
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome</Text>
          <Text style={styles.sectionText}>
            Hello
          </Text>
        </View>

        {/* Alert button */}
        <View style={styles.alertButtonContainer}>
          <Button
            title="Alert"
            onPress={handleAlert}
            color="#ff0000"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },
  header: {
    backgroundColor: '#841584',  
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  alertButtonContainer: {
    marginTop: 20,
    paddingHorizontal: 40,
  },
});