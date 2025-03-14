import { useSSO } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Login = () => {


const {startSSOFlow} = useSSO()
    const router = useRouter()


  const handleGoogleLoginIn = async () => {

    try {
      const {createdSessionId, setActive} = await startSSOFlow({strategy:"oauth_google"})

      if(setActive && createdSessionId){
        setActive({session: createdSessionId})
        router.replace("/(tabs)")
      }
    } catch (error) {
      console.error("Could not sign in!", error)
    }
    

  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Please login to continue</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLoginIn}>
        <Image
          source={{ uri: 'https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg' }}
          style={styles.googleIcon}
        />
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F4F7FB', 
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333', 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666', 
    marginBottom: 40,
    textAlign: 'center',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    borderRadius : 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Login;
