import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Composant PlayerCard - Carte d'affichage d'un joueur dans la liste
 * @param {object} player - Objet joueur avec toutes ses informations
 * @param {function} onPress - Fonction appelée au clic sur la carte
 */
const PlayerCard = ({ player, onPress }) => {
    // Couleur du badge selon le niveau
    const getLevelColor = (level) => {
        switch (level) {
            case 'Diamant':
                return '#3B82F6';
            case 'Platine':
                return '#10B981';
            case 'Or':
                return '#F59E0B';
            case 'Argent':
                return '#6B7280';
            default:
                return '#8B5CF6';
        }
    };

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}
        >
            {/* Avatar */}
            <View style={styles.avatarContainer}>
                <Text style={styles.avatar}>{player.avatar}</Text>
            </View>

            {/* Informations du joueur */}
            <View style={styles.infoContainer}>
                <View style={styles.nameRow}>
                    <Text style={styles.pseudo}>{player.pseudo}</Text>
                    {player.isFavorite && <Text style={styles.heartIcon}>❤️</Text>}
                </View>
                <Text style={styles.game}>{player.game}</Text>
            </View>

            {/* Badge de niveau */}
            <View style={[styles.levelBadge, { backgroundColor: getLevelColor(player.level) }]}>
                <Text style={styles.levelText}>{player.level}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 8,
        borderRadius: 15,
        // Ombre pour iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        // Ombre pour Android
        elevation: 4,
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    avatar: {
        fontSize: 30,
    },
    infoContainer: {
        flex: 1,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 4,
    },
    pseudo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    heartIcon: {
        fontSize: 14,
    },
    game: {
        fontSize: 14,
        color: '#6B7280',
    },
    levelBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    levelText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FFF',
    },
});

export default PlayerCard;
