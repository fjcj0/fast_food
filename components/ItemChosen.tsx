import React from 'react';
import { Text, View } from 'react-native';
export default function ItemChosen() {

    return (
        <View className='flex-col items-start justify-start gap-y-3'>
            <Text className='text-black font-bold text-3xl font-quicksand-bold'>{"Wendy's Burger"}</Text>
            <Text className='text-gray-200'>Cheeseburger</Text>
            <View className='flex-row items-center'>
                <Text className='text-primary text-xl'>★★★★★</Text>
                <Text className='text-gray-200 ml-2 text-lg font-quicksand-bold'>4.9/5</Text>
            </View>
            <Text className='text-black font-quicksand-bold text-2xl'><Text className='text-primary'>$</Text>10.02</Text>
            <View className="mt-5 flex flex-row gap-5">
                <View className="flex-col items-start justify-start gap-y-1">
                    <Text className="text-gray-200 font-quicksand text-sm">Calories</Text>
                    <Text className="text-black font-quicksand-bold">365 Cal</Text>
                </View>
                <View className="flex-col items-start justify-start gap-y-1">
                    <Text className="text-gray-200 font-quicksand text-sm">Protein</Text>
                    <Text className="text-black font-quicksand-bold">35g</Text>
                </View>
            </View>
            <View className="flex-row gap-5">
                <View className="flex-col items-start justify-start gap-y-1">
                    <Text className="text-gray-200 font-quicksand text-sm">Bun Type</Text>
                    <Text className="text-black font-quicksand-bold">Whole Wheat</Text>
                </View>
            </View>

        </View>
    );
}