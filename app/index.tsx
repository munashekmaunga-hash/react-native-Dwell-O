import { View, Animated, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import images from '../constants/image';

export default function StartPage() {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const router = useRouter();

    useEffect(() => {
        // 1. INCREASED HOLD TIME: Now waits 3.5 seconds before fading
        const timer = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                // 2. SLOWER FADE: Now takes 1.5 seconds to dissolve
                duration: 1500,
                useNativeDriver: true,
            }).start(() => {
                router.replace('/(tabs)');
            });
        }, 3500);

        return () => clearTimeout(timer);
    }, [fadeAnim, router]);

    return (
        <View className="flex-1 bg-white items-center justify-center">

            <Animated.View
                className="items-center justify-center"
                style={{ opacity: fadeAnim }}
            >

                {/* The Mascot */}
                <Image
                    source={images.kitMascot}
                    className="w-72 h-72 mb-4"
                    resizeMode="contain"
                />

                {/* The Logo Text - 3. INCREASED SIZE */}
                <Image
                    source={images.dwelloLogo}
                    className="w-80 h-24"
                    resizeMode="contain"
                />

            </Animated.View>

        </View>
    );
}