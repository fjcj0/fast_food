import ItemChosen from '@/components/ItemChosen';
import SideOptions from '@/components/SideOptions';
import Toppings from '@/components/Toppings';
import { images } from '@/constants';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
const Item = () => {
  return (
    <ScrollView className='flex-1 bg-white px-5 mb-12'>
      <View className='flex-row'>
        <ItemChosen />
        <View className='w-1/2 flex items-center justify-start'>
          <Image source={images.burgerTwo} className='size-64' resizeMode='contain' />
        </View>
      </View>
      <View className='p-3 mx-auto mt-7 rounded-xl bg-[#FFF6ED] flex-row gap-x-7'>
        <View className='flex-row gap items-center justify-center gap-x-2'>
          <Image source={images.dollar} className='size-6' tintColor={'#FF7A00'} resizeMode='contain' />
          <Text className='font-bold font-quicksand-bold text-black'>Free Delivery</Text>
        </View>
        <View className='flex-row gap items-center justify-center gap-x-2'>
          <Image source={images.clock} className='size-6' tintColor={'#FF7A00'} resizeMode='contain' />
          <Text className='font-bold font-quicksand-bold text-black'>20 - 30 mins</Text>
        </View>
        <View className='flex-row gap items-center justify-center gap-x-2'>
          <Image source={images.star} className='size-6' tintColor={'#FF7A00'} resizeMode='contain' />
          <Text className='font-bold font-quicksand-bold text-black'>4.5</Text>
        </View>
      </View>
      <View className='mt-5'>
        <Text className='text-gray-200 text-sm font-quicksand-medium'>
          A cheeseburger features a perfectly grilled beef patty topped with melted cheese, fresh lettuce, ripe tomatoes, crunchy pickles, and tangy onions, all stacked inside a soft, toasted bun. It’s a timeless favorite that delivers savory, juicy, and satisfying flavors in every bite
        </Text>
      </View>
      <View className='mt-5'>
        <Text className='text-xl text-black font-quicksand-bold'>Toppings</Text>
        <Toppings />
      </View>
      <View className='mt-5'>
        <Text className='text-xl text-black font-quicksand-bold'>Side Options</Text>
        <SideOptions />
      </View>
      <View className='flex-row justify-between items-center mt-5 bg-[#FFF6ED] p-3 rounded-xl '>
        <View className='flex-row justify-between items-center gap-x-5'>
          <View className='flex items-center justify-center bg-white w-[2rem] h-[2rem] rounded-md'>
            <Image source={images.minus} resizeMode='contain' className='size-4 self-center' />
          </View>
          <Text className='font-quicksand-bold text-black text-2xl'>1</Text>
          <View className='flex items-center justify-center bg-white w-[2rem] h-[2rem] rounded-md'>
            <Image source={images.plus} resizeMode='contain' className='size-4 self-center' />
          </View>
        </View>
        <TouchableOpacity className='flex-row bg-primary rounded-3xl px-5 py-4 gap-x-3'>
          <Image source={images.bag} resizeMode='contain' className='size-5' />
          <Text className='text-white font-quicksand-bold font-bold'>{"Add To Cart ($26)"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Item;