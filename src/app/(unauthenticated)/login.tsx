
import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Login() {
  return (
    <View className="flex-1 bg-white justify-center px-7">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="mb-10">
        <Text className="text-4xl font-extrabold text-blue-600">
          Socially.
        </Text>

        <Text className="text-3xl font-bold text-gray-900 mt-6">
          Welcome Back!
        </Text>

        <Text className="text-gray-500 text-base mt-2">
          Login to continue connecting with friends.
        </Text>
      </View>

      {/* Login Form */}
      <View className="gap-5">

        <Input
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <View className="mt-3">
          <Button
            label="Login"
            onPress={() => router.push('/home')}
          />
        </View>

      </View>

      {/* Register Link */}
      <View className="flex-row justify-center mt-8">
        <Text className="text-gray-500">
          Don't have an account? 
        </Text>

        <Text
          className="text-blue-600 font-bold ml-1"
          onPress={() => router.push('/register')}
        >
          Register
        </Text>
      </View>

    </View>
  )
}
