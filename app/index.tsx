import { View, Animated, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import images from '../constants/image';

export default function StartPage() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const router = useRouter();

    // We create a counter to track how many images have fully loaded
    const [imagesLoaded, setImagesLoaded] = useState(0);

    useEffect(() => {
        // We ONLY start the animation if BOTH images are fully ready in memory
        if (imagesLoaded === 2) {
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.delay(2500),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true,
                })
            ]).start(() => {
                router.replace('/(tabs)');
            });
        }
    }, [imagesLoaded, fadeAnim, router]);

    return (
        <View className="flex-1 bg-white items-center justify-center">

            <Animated.View
                className="items-center justify-center"
                style={{ opacity: fadeAnim }}
            >
                {/* The Mascot */}
                <Image
                    source={images.kitMascot}
                    className="w-56 h-56 mb-4"
                    resizeMode="contain"
                    onLoad={() => setImagesLoaded((prev) => prev + 1)}
                />

                {/* The Logo Text */}
                <Image
                    source={images.dwelloLogo}
                    className="w-64 h-20"
                    resizeMode="contain"
                    onLoad={() => setImagesLoaded((prev) => prev + 1)}
                />
            </Animated.View>

        </View>
    );
}