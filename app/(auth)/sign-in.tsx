import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from "expo-router";
import { useGlobalContext } from "../../lib/global-provider";

const SignIn = () => {
    const { refetch } = useGlobalContext();

    const handleLogin = () => {
        // Simulating a login by setting a user
        refetch({
            $id: '1',
            name: 'Tine',
            email: 'tine@example.com',
            avatar: 'https://example.com/avatar.png'
        });
    };

    return (
        <View className="flex-1 justify-center items-center bg-white p-6">
            <Text className="text-2xl font-bold mb-4">Sign In</Text>
            
            <TouchableOpacity 
                onPress={handleLogin}
                className="bg-orange-500 px-8 py-3 rounded-full mb-4"
            >
                <Text className="text-white font-bold">Login as Tine</Text>
            </TouchableOpacity>

            <Link href="/(tabs)" className="text-blue-500 mb-4">Go to Home</Link>
            <Link href="/(auth)/sign-up" className="text-gray-500">Don't have an account? Sign Up</Link>
        </View>
    )
}

export default SignIn