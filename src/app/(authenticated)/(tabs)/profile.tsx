import Button from '@/src/components/button'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top']}>
  <ScrollView className="flex-1">

      {/* Header */}
      <View className="bg-white px-5 py-5">
        <Text className="text-2xl font-extrabold text-gray-900">
          My Profile
        </Text>
      </View>

      {/* Profile Information */}
      <View className="bg-white items-center px-5 py-8 mt-2">

        <Image
          source={require('../../../../assets/images/my-profile.jpg')}
          className="w-28 h-28 rounded-full border-4 border-blue-500"
        />

        <Text className="text-2xl font-extrabold text-gray-900 mt-4">
          Leo Abriol
        </Text>

        <Text className="text-gray-500 text-base mt-1">
          @uncl3daks
        </Text>

        <Text className="text-gray-600 text-center mt-4">
          Sharing moments and everyday adventures.
        </Text>

        {/* Statistics */}
        <View className="flex-row justify-around w-full mt-7">
          <View className="items-center">
            <Text className="text-xl font-bold">24</Text>
            <Text className="text-gray-500">Posts</Text>
          </View>

          <View className="items-center">
            <Text className="text-xl font-bold">1.2k</Text>
            <Text className="text-gray-500">Followers</Text>
          </View>

          <View className="items-center">
            <Text className="text-xl font-bold">350</Text>
            <Text className="text-gray-500">Following</Text>
          </View>
        </View>

        <View className="w-full mt-7">
          <Button label="Edit Profile" />
        </View>
      </View>

      {/* Personal Details */}
      <View className="bg-white mt-3 p-5">
        <Text className="text-xl font-bold text-gray-900 mb-5">
          Personal Details
        </Text>

        <View className="mb-5">
          <Text className="text-gray-500 text-sm">Full Name</Text>
          <Text className="text-gray-900 font-semibold text-base mt-1">
            Leo Abriol
          </Text>
        </View>

        <View className="mb-5">
          <Text className="text-gray-500 text-sm">Username</Text>
          <Text className="text-gray-900 font-semibold text-base mt-1">
            @uncl3daks
          </Text>
        </View>

        <View>
          <Text className="text-gray-500 text-sm">Occupation</Text>
          <Text className="text-gray-900 font-semibold text-base mt-1">
            BSIT Student
          </Text>
        </View>
      </View>

      </ScrollView>
</SafeAreaView>
  )
}
