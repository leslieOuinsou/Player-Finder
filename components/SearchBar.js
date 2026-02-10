import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

/**
 * Composant SearchBar - Barre de recherche intuitive
 * @param {string} value - Valeur actuelle de la recherche
 * @param {function} onChangeText - Fonction appelée à chaque changement de texte
 */
const SearchBar = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Rechercher un joueur..."
                    placeholderTextColor="#9CA3AF"
                    value={value}
                    onChangeText={onChangeText}
                    autoCorrect={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 5,
    },
    inputWrapper: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        // Ombre légère
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
    },
});

export default SearchBar;
