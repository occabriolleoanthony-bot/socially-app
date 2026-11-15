import { StatusBar } from 'expo-status-bar'
import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { Text, View } from 'react-native'

export default function Register() {
  return (
    <View className="flex-1 bg-white justify-center px-7">
      <StatusBar style="dark" />

      {/* Header */}
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

      {/* Registration Form */}
      <View className="gap-4">
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <Input
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <Input
          label="Password"
          placeholder="Create a password"
          secureTextEntry={true}
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          secureTextEntry={true}
          className="h-14 border border-gray-300 rounded-xl px-4 mt-2"
        />

        <View className="mt-3">
          <Button label="Register" />
        </View>
      </View>

      {/* Login Link */}
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
