import CustomHeader from '@/components/CustomHeader';
import useAuthStore from '@/store/authStore';
import { Redirect, Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
const ItemLayout = () => {
    const { isAuthenticated } = useAuthStore();
    if (!isAuthenticated) return <Redirect href='/' />
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='px-7 mt-5'>
                <CustomHeader />
            </View>
            <Slot />
        </SafeAreaView>
    );
}
export default ItemLayout