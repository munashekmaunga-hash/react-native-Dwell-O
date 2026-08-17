import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "@/global.css";
import {GlobalProvider} from "../lib/global-provider";

// This keeps the splash screen visible while we load the fonts
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
        "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
        "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
        "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
        "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            // Once fonts are loaded, we hide the splash screen
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // If the fonts are still loading, return null so we don't render a broken screen
    if (!fontsLoaded) {
        return null;
    }

    return (
        <GlobalProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="onboarding" />
                <Stack.Screen name="(auth)" />
            </Stack>
        </GlobalProvider>
    );
}