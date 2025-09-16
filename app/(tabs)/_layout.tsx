import React from 'react';
import {ImageBackground, Image, View, Text, StyleSheet} from 'react-native';
import {Tabs} from 'expo-router';
import {images} from '@/constants/images';
import {icons} from '@/constants/icons';

const TabIcon = ({ focused, icons, title}) => {

    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 items-center justify-center rounded-full overflow-hidden">
                <Image source={icons}
                       tintColor="#151312" className="size-5"/>
                <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>

            </ImageBackground>
        );
    }

    return (
        <View className="size-full justify-center items-center mt-4 rounded-full ">
            <Image source={icons}
                   tintColor="#A8B5DB" className="size-5"/>
        </View>
    )
}



const _Layout = () => {
    return (
        <Tabs
        screenOptions={
            {
                tabBarShowLabel: false,
                tabBarItemStyle: {
                   width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                   backgroundColor: '#0f0D23',
                   borderRadius: 50,
                    marginHorizontal: 10,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#0F0D23',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                       <TabIcon
                           focused={focused}
                           icons={icons.home}
                           title="Home"
                       />
                    )
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icons={icons.search}
                            title="Search"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Save',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icons={icons.save}
                            title="Saved"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icons={icons.person}
                            title="Profile"
                        />
                    )
                }}
            />

        </Tabs>
    );
};

export default _Layout;


