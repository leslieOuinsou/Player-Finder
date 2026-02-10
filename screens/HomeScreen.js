import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    StatusBar,
    LayoutAnimation,
    Platform,
    UIManager,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import PlayerCard from '../components/PlayerCard';
import FilterButton from '../components/FilterButton';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import { getAllPlayers } from '../data/playersData';
import { favoritesService } from '../data/favoritesService';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 * HomeScreen - Version ADVANCED (Search, Animations, Favorites, Pull-to-refresh)
 */
const HomeScreen = ({ navigation }) => {
    // États
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    // Liste des filtres
    const filters = ['All', 'Valorant', 'FIFA', 'Fortnite'];

    /**
     * Charger les favoris au montage et à chaque fois que l'écran revient au premier plan
     */
    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    const loadFavorites = async () => {
        const favs = await favoritesService.getFavorites();
        setFavorites(favs);
        setIsLoading(false);
    };

    /**
     * Logique de filtrage combinée
     */
    useEffect(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        const allPlayers = getAllPlayers();

        const results = allPlayers.filter(player => {
            const matchesGame = activeFilter === 'All' || player.game === activeFilter;
            const matchesSearch = player.pseudo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                player.game.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesGame && matchesSearch;
        });

        // On injecte l'information de favori dans l'objet joueur pour le rendu
        const enrichedResults = results.map(player => ({
            ...player,
            isFavorite: favorites.includes(player.id)
        }));

        setFilteredPlayers(enrichedResults);
    }, [activeFilter, searchQuery, favorites]);

    /**
     * Simulation d'un pull-to-refresh
     */
    const onRefresh = useCallback(() => {
        setIsRefreshing(true);
        // Simule un appel API de 1.5s
        setTimeout(() => {
            loadFavorites();
            setIsRefreshing(false);
        }, 1500);
    }, []);

    const handleFilterPress = (filter) => {
        setActiveFilter(filter);
    };

    const handlePlayerPress = (player) => {
        navigation.navigate('PlayerDetail', { player });
    };

    const renderPlayerCard = ({ item }) => (
        <PlayerCard
            player={item}
            onPress={() => handlePlayerPress(item)}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header PRO */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Player Finder</Text>
                    <Text style={styles.subtitle}>Trouvez vos futurs coéquipiers</Text>
                </View>
                <View style={styles.counterBadge}>
                    <Text style={styles.counterText}>{filteredPlayers.length}</Text>
                </View>
            </View>

            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <View>
                <FlatList
                    horizontal
                    data={filters}
                    renderItem={({ item }) => (
                        <FilterButton
                            title={item}
                            active={activeFilter === item}
                            onPress={() => handleFilterPress(item)}
                        />
                    )}
                    keyExtractor={(item) => item}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filtersList}
                />
            </View>

            {/* Affichage d'un loader lors du chargement initial */}
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#6C63FF" />
                    <Text style={styles.loadingText}>Chargement des joueurs...</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredPlayers}
                    renderItem={renderPlayerCard}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={onRefresh}
                            colors={['#6C63FF']} // Android
                            tintColor="#6C63FF" // iOS
                        />
                    }
                    ListEmptyComponent={
                        <EmptyState
                            message={searchQuery
                                ? `Aucun joueur ne correspond à "${searchQuery}"`
                                : "Aucun joueur disponible pour ce jeu."}
                        />
                    }
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 2,
    },
    counterBadge: {
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#C7D2FE',
    },
    counterText: {
        color: '#4F46E5',
        fontWeight: 'bold',
        fontSize: 14,
    },
    filtersList: {
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 10,
    },
    listContent: {
        paddingTop: 5,
        paddingBottom: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        color: '#6B7280',
        fontSize: 14,
    },
});

export default HomeScreen;
