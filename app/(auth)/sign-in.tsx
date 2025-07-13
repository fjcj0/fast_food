import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { signIn } from '@/lib/appwrite';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
const SignIn = () => {
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });
    const submit = async () => {
        const { email, password } = form;
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please enter email and password!!');
            return;
        }
        setIsSubmiting(true);
        try {
            await signIn({ email, password });
            router.replace('/');
        } catch (error) {
            Alert.alert('Error', error as string);
        } finally {
            setIsSubmiting(false);
        }
    };
    return (
        <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
            <CustomInput placeholder='Enter your email' value={form.email} onChangeText={(text) => setForm((prev) => ({...prev,email:text}))} label='Email' keyboardType='email-address' />
            <CustomInput placeholder='Enter your password' value={form.password} onChangeText={(text) => setForm((prev) => ({...prev,password:text}))} label='Password' secureTextEntry={true} />
            <CustomButton title='Sign In'
                isLoading={isSubmiting}
                onPress={submit}
            />
            <View className='flex justify-center flex-row'>
                <Text className='base-regular mx-2 text-gray-100'>{"Don't have an account?"}</Text>
                <Link href={'/sign-up'} className='base-bold text-primary'>
                    Sign Up
                </Link>
            </View>
        </View>
    );
}
export default SignIn;