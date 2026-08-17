import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGlobalContext } from "../../lib/global-provider";

const Profile = () => {
    const insets = useSafeAreaInsets();
    const { user, refetch } = useGlobalContext();

    const handleLogout = () => {
        refetch(null);
    };

    return (
        <View
            className="flex-1 bg-white items-center justify-center"
            style={{ paddingTop: insets.top }}
        >
            <Text className="text-2xl font-sans-bold text-black mb-4">
                Profile Screen
            </Text>
            
            {user && (
                <View className="items-center mb-8">
                    <Text className="text-lg">Logged in as: {user.name}</Text>
                    <Text className="text-gray-500">{user.email}</Text>
                </View>
            )}

            <TouchableOpacity 
                onPress={handleLogout}
                className="bg-red-500 px-8 py-3 rounded-full"
            >
                <Text className="text-white font-bold">Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;