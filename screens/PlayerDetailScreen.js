import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    Share,
    LayoutAnimation
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { favoritesService } from '../data/favoritesService';

/**
 * PlayerDetailScreen - Version ADVANCED
 * Inclut la gestion des favoris avec persistence
 */
const PlayerDetailScreen = ({ route, navigation }) => {
    const { player } = route.params;
    const [isFav, setIsFav] = useState(false);

    /**
     * Vérifier si le joueur est déjà en favori au chargement
     */
    useEffect(() => {
        const checkFav = async () => {
            const status = await favoritesService.isFavorite(player.id);
            setIsFav(status);
        };
        checkFav();
    }, [player.id]);

    /**
     * Action : Ajouter/Supprimer des favoris
     */
    const handleToggleFavorite = async () => {
        // Animation fluide pour le changement d'icône
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

        await favoritesService.toggleFavorite(player.id);
        setIsFav(!isFav);
    };

    const handleContact = () => {
        Alert.alert(
            "Contacter " + player.pseudo,
            "Voulez-vous envoyer une demande d'ami à ce joueur ?",
            [
                { text: "Annuler", style: "cancel" },
                { text: "Envoyer", onPress: () => Alert.alert("Succès", "Demande envoyée !") }
            ]
        );
    };

    const handleShare = async () => {
        try {
            await Share.share({
                message: `Découvre le profil de ${player.pseudo} sur Player Finder ! Jeu : ${player.game}`,
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    const StatRow = ({ label, value }) => (
        <View style={styles.statRow}>
            <Text style={styles.statLabel}>{label}</Text>
            <Text style={styles.statValue}>{value}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Header Section */}
                <View style={styles.headerSection}>
                    <TouchableOpacity
                        style={styles.favButton}
                        onPress={handleToggleFavorite}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.favIcon}>{isFav ? '❤️' : '🤍'}</Text>
                    </TouchableOpacity>

                    <View style={styles.avatarLarge}>
                        <Text style={styles.avatarEmoji}>{player.avatar}</Text>
                    </View>
                    <Text style={styles.pseudo}>{player.pseudo}</Text>
                    <Text style={styles.game}>{player.game}</Text>

                    <View style={styles.badgeRow}>
                        <View style={styles.levelBadge}>
                            <Text style={styles.levelText}>{player.level}</Text>
                        </View>
                        <TouchableOpacity style={styles.shareIcon} onPress={handleShare}>
                            <Text style={{ fontSize: 20 }}>🔗</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Actions Principales */}
                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.primaryButton} onPress={handleContact}>
                        <Text style={styles.primaryButtonText}>🤝 Envoyer une demande</Text>
                    </TouchableOpacity>
                </View>

                {/* Description Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>À propos</Text>
                    <View style={styles.divider} />
                    <Text style={styles.description}>{player.description}</Text>
                </View>

                {/* Stats Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Statistiques de jeu</Text>
                    <View style={styles.divider} />
                    <View style={styles.statsContainer}>
                        {Object.entries(player.stats).map(([key, value]) => (
                            <StatRow
                                key={key}
                                label={formatStatLabel(key)}
                                value={value}
                            />
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const formatStatLabel = (key) => {
    const labels = {
        kd: 'K/D Ratio',
        winRate: 'Taux de victoire',
        hoursPlayed: 'Heures jouées',
        division: 'Division',
        goalsScored: 'Buts marqués',
        wins: 'Victoires',
    };
    return labels[key] || key;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    headerSection: {
        alignItems: 'center',
        paddingVertical: 35,
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 8,
        position: 'relative',
    },
    favButton: {
        position: 'absolute',
        top: 20,
        right: 25,
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
        zIndex: 10,
    },
    favIcon: {
        fontSize: 24,
    },
    avatarLarge: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: '#EEF2FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 4,
        borderColor: '#6C63FF',
    },
    avatarEmoji: {
        fontSize: 50,
    },
    pseudo: {
        fontSize: 28,
        fontWeight: '900',
        color: '#111827',
        marginBottom: 4,
    },
    game: {
        fontSize: 16,
        fontWeight: '500',
        color: '#6B7280',
        marginBottom: 18,
    },
    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    levelBadge: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 25,
    },
    levelText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFF',
        textTransform: 'uppercase',
    },
    shareIcon: {
        padding: 10,
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    actionsContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    primaryButton: {
        backgroundColor: '#6C63FF',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#6C63FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    primaryButtonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    section: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginBottom: 15,
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.03,
        shadowRadius: 10,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1F2937',
        marginBottom: 8,
    },
    divider: {
        height: 3,
        width: 40,
        backgroundColor: '#6C63FF',
        borderRadius: 2,
        marginBottom: 15,
    },
    description: {
        fontSize: 15,
        color: '#4B5563',
        lineHeight: 24,
    },
    statsContainer: {
        gap: 8,
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    statLabel: {
        fontSize: 15,
        color: '#6B7280',
    },
    statValue: {
        fontSize: 15,
        fontWeight: '700',
        color: '#111827',
    },
});

export default PlayerDetailScreen;
