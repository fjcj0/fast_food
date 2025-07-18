import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
interface ProfileItemProps {
  icon: ImageSourcePropType;
  label: string;
  value: string;
}
const ProfileItem: React.FC<ProfileItemProps> = ({ icon, label, value }) => (
  <View className="flex-row gap-3 items-center">
    <View
      style={{ backgroundColor: '#FFF6ED' }}
      className="w-16 h-16 rounded-full flex items-center justify-center"
    >
      <Image
        source={icon}
        style={{ tintColor: '#FF7A00', width: 24, height: 24 }}
        resizeMode="contain"
      />
    </View>
    <View>
      <Text style={{ color: '#7C7C7C' }} className="text-sm font-quicksand">
        {label}
      </Text>
      <Text style={{ color: '#0A0A23' }} className="text-base font-quicksand-bold">
        {value}
      </Text>
    </View>
  </View>
);
export default ProfileItem;