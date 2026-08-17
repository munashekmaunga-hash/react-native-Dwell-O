import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useState } from 'react';
import React from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import "@/global.css";

const DwelloHome = () => {
    // 1. Initialize the insets to measure the hardware cutouts
    const insets = useSafeAreaInsets();

    const [userName, setUserName] = useState<string | null>(null);
    const greetingName = userName ? userName : "stranger";

    return (
        // 2. We use a standard View, but push the top down by the exact size of the notch
        <View
            className="flex-1 bg-white px-6"
            style={{ paddingTop: insets.top }}
        >
            <View className="flex-1 items-center justify-center">

                <Text className="text-2xl font-sans-bold text-orange-500 text-center">
                    Hi {greetingName}! Ready to Dwell-In?
                </Text>

                <View className="mt-10 w-full gap-y-4">
                    <Link href="/onboarding" className="w-full rounded-lg bg-[#333] text-white p-4 text-center font-sans-semibold overflow-hidden">
                        Go to Onboarding (Demo)
                    </Link>
                    <Link href="/sign-in" className="w-full rounded-lg bg-[#333] text-white p-4 text-center font-sans-semibold overflow-hidden">
                        Go to Sign in (Demo)
                    </Link>
                    <Link href="/sign-up" className="w-full rounded-lg bg-[#333] text-white p-4 text-center font-sans-semibold overflow-hidden">
                        Go to Sign up (Demo)
                    </Link>
                </View>

            </View>
        </View>
    );
}

export default DwelloHome;