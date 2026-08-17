import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import images from "../../constants/image";
import { useGlobalContext } from "../../lib/global-provider";

export default function DwelloHome() {
    const insets = useSafeAreaInsets();
    const { user } = useGlobalContext(); // <-- Grabbing the dynamic user!

    return (
        <ScrollView
            className="flex-1 bg-[#FFF9E3]"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingTop: insets.top + 10,
                paddingBottom: 100
            }}
        >

            {/* ========================================= */}
            {/* 1. THE CUSTOM GLOBAL HEADER               */}
            {/* ========================================= */}
            <View className="flex-row items-start justify-between px-6 mb-8">

                {/* Top Left: Dwello Logo stacked above Peeking K.I.T */}
                <View className="flex-col items-start">
                    <Image
                        source={images.dwelloTop}
                        className="w-24 h-6"
                        resizeMode="contain"
                    />
                    <Image
                        source={images.kitMascotTop}
                        className="w-12 h-10 mt-1 ml-1"
                        resizeMode="contain"
                    />
                </View>

                {/* Top Right: Profile Info & Avatar */}
                <View className="flex-row items-center pt-1">

                    {/* Text Stack (Right Aligned) */}
                    <View className="flex-col items-end mr-3">
                        <Text className="text-xs font-sans-bold text-gray-900 uppercase tracking-wider">
                            {user?.fullName}
                        </Text>
                        <Text className="text-[10px] font-sans-medium text-gray-600 uppercase mt-0.5">
                            {user?.university}
                        </Text>
                        <Text className="text-[10px] font-sans-regular text-gray-400 mt-0.5">
                            {user?.location}
                        </Text>
                    </View>

                    {/* Avatar with Orange Border */}
                    <TouchableOpacity>
                        <Image
                            source={images.avatar}
                            className="w-12 h-12 rounded-full border-2 border-orange-400"
                            resizeMode="cover"
                        />
                    </TouchableOpacity>

                </View>

            </View>


            {/* ========================================= */}
            {/* 2. THE DASHBOARD GREETING                 */}
            {/* ========================================= */}
            <View className="px-6 mb-6">
                <Text className="text-3xl font-sans-medium text-gray-800">
                    Hi {user?.firstName}!
                </Text>
                <Text className="text-xl font-sans-light text-gray-500 mt-1">
                    Ready to Dwell-In?
                </Text>
            </View>

        </ScrollView>
    );
}