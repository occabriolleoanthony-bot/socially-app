import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
const posts = [
  {
    id: '1',
    name: 'Tony Loloy',
    username: '@tony2choper',
    avatar: 'https://i.pravatar.cc/100?img=12',
    caption: 'Beautiful day to explore the world! ☀️',
    photo: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
    likes: '1.2k',
    comments: '48',
  },
  {
    id: '2',
    name: 'Urban Tracker',
    username: '@codm123',
    avatar: 'https://i.pravatar.cc/100?img=47',
    caption: 'Taking a little break and enjoying the view. 🌿',
    photo: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800',
    likes: '856',
    comments: '32',
  },
]

export default function Home() {
  return (
  <SafeAreaView className="flex-1 bg-gray-100" edges={['top']}>
    <StatusBar style="dark"/>

    <ScrollView className="flex-1">

      {/* Header */}
      <View className="bg-white px-5 pt-5 pb-4 flex-row justify-between items-center">
        <Text className="text-3xl font-extrabold text-blue-600">
          Socially.
        </Text>
        <Text className="text-2xl">🔔</Text>
      </View>

      {/* Stories */}
      <View className="bg-white mt-2 py-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row px-4 gap-5">
            {[
              { name: 'Your Story', img: 1 },
              { name: 'Tony', img: 12 },
              { name: 'Urban', img: 47 },
              { name: 'Rene', img: 33 },
              { name: 'Gusion', img: 44 },
            ].map((story) => (
              <View key={story.name} className="items-center">
                <Image
                 source={
  story.name === 'Your Story'
    ? require('../../../../assets/images/my-profile.jpg')
    : { uri: `https://i.pravatar.cc/100?img=${story.img}` }
}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <Text className="text-xs text-gray-700 mt-2">
                  {story.name}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Feed */}
      {posts.map((post) => (
        <View key={post.id} className="bg-white mt-3">

          {/* User information */}
          <View className="flex-row items-center p-4">
            <Image
              source={{ uri: post.avatar }}
              className="w-11 h-11 rounded-full"
            />

            <View className="ml-3 flex-1">
              <Text className="font-bold text-gray-900">
                {post.name}
              </Text>
              <Text className="text-xs text-gray-500">
                {post.username}
              </Text>
            </View>

            <Text className="text-xl">•••</Text>
          </View>

          {/* Caption */}
          <Text className="px-4 pb-3 text-gray-800">
            {post.caption}
          </Text>

          {/* Post image */}
          <Image
            source={{ uri: post.photo }}
            className="w-full h-64"
            resizeMode="cover"
          />

          {/* Likes and comments */}
          <View className="flex-row items-center justify-between px-4 py-4">
            <View className="flex-row gap-5">
              <Text className="text-gray-700">❤️ {post.likes}</Text>
              <Text className="text-gray-700">💬 {post.comments}</Text>
            </View>
            <Text className="text-gray-700 text-lg">🔖</Text>
          </View>

        </View>
      ))}

     </ScrollView>
</SafeAreaView>
  )
}