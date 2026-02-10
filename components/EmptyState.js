import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant EmptyState - Affiché quand aucun résultat n'est trouvé
 * @param {string} message - Message à afficher
 */
const EmptyState = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>🧐</Text>
            <Text style={styles.title}>Aucun résultat</Text>
            <Text style={styles.subtitle}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 60,
    },
    emoji: {
        fontSize: 60,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 15,
        color: '#6B7280',
        textAlign: 'center',
        paddingHorizontal: 40,
    },
});

export default EmptyState;
