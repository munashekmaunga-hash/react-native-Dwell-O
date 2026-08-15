import { Stack } from "expo-router";
import "@/global.css";

export default function RootLayout() {
    return (
        // You can hide the header globally for the entire app by adding screenOptions here
        <Stack screenOptions={{ headerShown: false }}>
            {/* Or you can ensure it's hidden specifically for the tabs group */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        </Stack>
    );
}