
import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Alert, Text, View } from 'react-native'

export default function Register() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {
    if (!fullName.trim() || !username.trim() ||
        !email.trim() || !password || !confirmPassword) {
      Alert.alert('Missing fields', 'Please complete all fields.')
      return
    }

    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Your passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        'http://192.168.1.9/my-app-3b/api/register.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: fullName.trim(),
            username: username.trim(),
            email: email.trim(),
            password,
          }),
        }
      )

      const result = await response.json()

      if (!response.ok || !result.success) {
        Alert.alert('Registration failed', result.message || 'Please try again.')
        return
      }

      Alert.alert(
        'Success!',
        'Your Socially account has been created.',
        [
          {
            text: 'Go to Login',
            onPress: () => router.replace('/(unauthenticated)/login'),
          },
        ]
      )
    } catch (error) {
      Alert.alert(
        'Connection error',
        'Could not connect to the server. Check your connection and try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="flex-1 bg-white justify-center px-7">
      <StatusBar style="dark" />

      <View className="mb-8">
        <Text className="text-4xl font-extrabold text-blue-600">
          Socially.
        </Text>

        <Text className="text-3xl font-bold text-gray-900 mt-6">
          Create Account
        </Text>

        <Text className="text-gray-500 text-base mt-2">
          Join Socially and connect with friends.
        </Text>
      </View>

      <View className="gap-4">
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <Input
          label="Username"
          placeholder="Choose a username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <Input
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <Input
          label="Password"
          placeholder="Create a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <View className="mt-3">
          <Button
            label={loading ? 'Registering...' : 'Register'}
            onPress={handleRegister}
            disabled={loading}
          />
        </View>
      </View>

      <View className="flex-row justify-center mt-8">
        <Text className="text-gray-500">
          Already have an account?
        </Text>

        <Text
          className="text-blue-600 font-bold ml-1"
          onPress={() => router.push('/(unauthenticated)/login')}
        >
          Login
        </Text>
      </View>
    </View>
  )
}
