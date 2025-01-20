import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';

export default function App() {
  const handleAlert = () => {
    Alert.alert('Alert Button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Text style={styles.profileIcon}>👤</Text>
        <Text style={styles.xLogo}>𝕏</Text>
        <TouchableOpacity style={styles.upgradeButton}>
          <Text style={styles.upgradeText}>Upgrade</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <View style={styles.tabContainer}>
          <Text style={styles.activeTab}>For you</Text>
          <View style={styles.activeIndicator} />
        </View>
        <Text style={styles.inactiveTab}>Following</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Tweet */}
        <View style={styles.tweet}>
          <Image
            source={require('./assets/elon-profile.png')} 
            style={styles.tweetProfilePic}
          />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.tweetName}>Elon Musk</Text>
              <Text style={styles.verified}>✓</Text>
              <Text style={styles.tweetHandle}>@elonmusk · 1d</Text>
            </View>
            <Text style={styles.tweetText}>Wow!</Text>
            
            {/* Embedded Tweet */}
            <View style={styles.embeddedTweet}>
              <View style={styles.embeddedHeader}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/30' }}
                  style={styles.embeddedProfilePic}
                />
                <Text style={styles.embeddedName}>Ian Jaeger</Text>
                <Text style={styles.verified}>✓</Text>
              </View>
              <Text style={styles.embeddedText}>
                Argentina has officially reached its first budget surplus in 14 years.{'\n\n'}
                Amazing. 👏
              </Text>
            </View>

            {/* Tweet Actions */}
            <View style={styles.tweetActions}>
              <Text style={styles.actionText}>15K</Text>
              <Text style={styles.actionText}>77K</Text>
              <Text style={styles.actionText}>749K</Text>
              <Text style={styles.actionText}>90M</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>🏠</Text>
        <Text style={styles.navItem}>🔍</Text>
        <Text style={styles.navItem}>✨</Text>
        <Text style={styles.navItem}>👥</Text>
        <Text style={styles.navItem}>📧</Text>
      </View>

      {/* Alert Button */}
      <View style={styles.alertButtonContainer}>
        <Button
          title="Alert"
          onPress={handleAlert}
          color="#1DA1F2"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 50,
    backgroundColor: '#000',
  },
  profileIcon: {
    fontSize: 24,
    color: '#fff',
  },
  xLogo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  upgradeButton: {
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  upgradeText: {
    color: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#333',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  },
  activeTab: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inactiveTab: {
    flex: 1,
    color: '#666',
    textAlign: 'center',
    padding: 15,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    width: '80%',
    backgroundColor: '#1DA1F2',
    borderRadius: 2,
  },
  content: {
    flex: 1,
  },
  tweet: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#333',
  },
  tweetProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  tweetContent: {
    flex: 1,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  tweetName: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  verified: {
    color: '#1DA1F2',
    marginRight: 5,
  },
  tweetHandle: {
    color: '#666',
  },
  tweetText: {
    color: '#fff',
    marginBottom: 10,
  },
  embeddedTweet: {
    borderWidth: 0.2,
    borderColor: '#333',
    borderRadius: 15,
    padding: 10,
    marginTop: 5,
  },
  embeddedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  embeddedProfilePic: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  embeddedName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  embeddedText: {
    color: '#fff',
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingRight: 40,
  },
  actionText: {
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 0.2,
    borderTopColor: '#333',
    backgroundColor: '#000',
  },
  navItem: {
    fontSize: 20,
    color: '#fff',
  },
  alertButtonContainer: {
    padding: 10,
    backgroundColor: '#000',
  },
});