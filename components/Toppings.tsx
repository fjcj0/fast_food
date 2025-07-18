import { images } from '@/constants';
import dummyData from '@/lib/data';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
const Toppings = () => {
    const toppings = dummyData.customizations.filter(item => item.type === 'topping');
    return (
        <View className='p-5'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
                {toppings.map((item, index) => (
                    <View key={`${item.name}-${index}`} className='bg-black rounded-2xl w-auto'>
                        <View
                            className="bg-[#FFF6ED] w-full flex items-center justify-center self-center rounded-2xl border-primary"
                            style={{
                                transform: [{ translateY: -1.2 }],
                            }}
                        >
                            <Image source={images.tomatoes} className='size-20' resizeMode='contain' />
                        </View>
                        <View className='flex-row justify-between gap-x-2 items-center p-3'>
                            <Text className='text-white text-sm font-quicksand-bold'>{item.name}</Text>
                            <TouchableOpacity className='bg-pink-600 w-8 h-8 rounded-full flex items-center justify-center'>
                                <Image source={images.plus} className='size-5' tintColor={'white'} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};
export default Toppings;