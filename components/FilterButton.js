import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Composant FilterButton - Bouton de filtre réutilisable
 * @param {string} title - Texte du bouton
 * @param {boolean} active - État actif/inactif du filtre
 * @param {function} onPress - Fonction appelée au clic
 */
const FilterButton = ({ title, active, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.button, active && styles.activeButton]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[styles.text, active && styles.activeText]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#F0F0F0',
        marginRight: 10,
        // Ombre pour iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        // Ombre pour Android
        elevation: 3,
    },
    activeButton: {
        backgroundColor: '#6C63FF',
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
    },
    activeText: {
        color: '#FFF',
    },
});

export default FilterButton;
