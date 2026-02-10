import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlayerDetailScreen from './screens/PlayerDetailScreen';

/**
 * Configuration du Stack Navigator
 * Permet la navigation entre l'écran principal et l'écran de détail
 */
const Stack = createNativeStackNavigator();

/**
 * App - Composant racine de l'application
 * Configure la navigation et le thème global
 */
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#6C63FF',
                    },
                    headerTintColor: '#FFF',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 18,
                    },
                    headerShadowVisible: false,
                }}
            >
                {/* Écran principal */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false, // Cache le header sur l'écran principal
                    }}
                />

                {/* Écran de détail */}
                <Stack.Screen
                    name="PlayerDetail"
                    component={PlayerDetailScreen}
                    options={{
                        title: 'Profil du joueur',
                        headerBackTitle: 'Retour',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
