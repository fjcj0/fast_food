import { CustomInputProps } from "@/type";
import cn from 'clsx';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
const CustomInput = ({
    placeholder = 'Enter text',
    value,
    onChangeText,
    label,
    secureTextEntery = false,
    keyboardType = "default"
}: CustomInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntery}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                placeholderTextColor={'#888'}
                className={cn('input',isFocused?'border-primary':'border-gray-300')} />
        </View>
    );
}
export default CustomInput;