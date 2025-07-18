import ProfileItem from '@/components/ProfileItem';
import { images } from '@/constants';
import useAuthStore from '@/store/authStore';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
interface User {
  name: string;
  email: string;
}
const Profile: React.FC = () => {
  const { user } = useAuthStore();
  const userData: User[] = user ? [user] : [];
  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9] my-10">
      <FlatList
        data={userData}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={() => (
          <View className="items-center mt-8 mb-4">
            <View className="relative">
              <Image
                source={images.avatar}
                className="w-28 h-28 rounded-full"
              />
              <TouchableOpacity className="absolute bottom-1 right-1 bg-[#FF7A00] p-2 rounded-full">
                <Image
                  source={images.pencil} 
                  className="w-4 h-4"
                  style={{ tintColor: 'white' }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <View className="flex-col gap-6 p-6 rounded-2xl w-[85%] mx-auto bg-white">
            <ProfileItem icon={images.person} label="Full Name" value={item.name} />
            <ProfileItem icon={images.success} label="Email" value={item.email} />
            <ProfileItem icon={images.phone} label="Phone number" value="+1 555 123 4567" />
            <ProfileItem
              icon={images.location}
              label="Address 1 - (Home)"
              value="Main Street, Springfield, IL 604"
            />
            <ProfileItem
              icon={images.location}
              label="Address 2 - (Work)"
              value="Rose Street, Foodville, FL 125"
            />
          </View>
        )}
        ListFooterComponent={() => (
          <View className="items-center gap-4 mt-6 mb-10">
            <TouchableOpacity
              className="w-80 py-3 rounded-full border border-[#FF7A00]"
              style={{ backgroundColor: '#FFF6ED' }}
            >
              <Text className="text-[#FF7A00] font-bold text-base text-center">Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-80 py-3 rounded-full border border-[#FF5A5F]"
              style={{ backgroundColor: '#FFF2F2' }}
            >
              <View className="flex-row items-center justify-center gap-2">
                <Image
                  source={images.logout}
                  className="w-5 h-5"
                  style={{ tintColor: '#FF5A5F' }}
                />
                <Text className="text-[#FF5A5F] font-bold text-base">Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Profile;
