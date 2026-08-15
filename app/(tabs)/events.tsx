import { Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Events = () => {
    const insets = useSafeAreaInsets();

    return (
        <View
            className="flex-1 bg-white items-center justify-center"
            style={{ paddingTop: insets.top }}
        >
            <Text className="text-2xl font-bold text-black">
                Events Screen
            </Text>
        </View>
    );
}

export default Events;