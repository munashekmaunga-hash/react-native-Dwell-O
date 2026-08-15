import { Tabs } from 'expo-router';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const TabIcon = ({ iconName, color }: { iconName: any, color: string }) => {
    return (
        <Feather name={iconName} size={28} color={color} />
    )
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FF7F50', // Dwello Orange
                tabBarInactiveTintColor: '#000000', // Black for inactive
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    position: 'absolute',
                    bottom: 24,

                    // This aggressively forces the bar inward by 20 pixels on both sides
                    marginHorizontal: 20,

                    borderRadius: 40,
                    height: 65,
                    borderTopWidth: 0,
                    paddingBottom: 0,
                    paddingTop: 12,

                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 5,
                }
            }}
        >
            <Tabs.Screen
                name="packs"
                options={{
                    title: 'Packs',
                    tabBarIcon: ({ color }) => (
                        <TabIcon iconName="package" color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="events"
                options={{
                    title: 'Events',
                    tabBarIcon: ({ color }) => (
                        <TabIcon iconName="calendar" color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <TabIcon iconName="home" color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="discounts"
                options={{
                    title: 'Discounts',
                    tabBarIcon: ({ color }) => (
                        <TabIcon iconName="tag" color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <TabIcon iconName="user" color={color} />
                    )
                }}
            />
        </Tabs>
    )
}