import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@player_finder_favorites';

/**
 * Service pour gérer les favoris avec AsyncStorage
 */
export const favoritesService = {
    /**
     * Récupère la liste des IDs des joueurs favoris
     */
    getFavorites: async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.error('Erreur lors de la récupération des favoris', e);
            return [];
        }
    },

    /**
     * Ajoute ou supprime un joueur des favoris
     * @param {string} playerId 
     */
    toggleFavorite: async (playerId) => {
        try {
            const favorites = await favoritesService.getFavorites();
            const index = favorites.indexOf(playerId);

            let newFavorites;
            if (index >= 0) {
                // Supprimer si déjà présent
                newFavorites = favorites.filter(id => id !== playerId);
            } else {
                // Ajouter sinon
                newFavorites = [...favorites, playerId];
            }

            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
            return newFavorites;
        } catch (e) {
            console.error('Erreur lors du toggle favori', e);
            return [];
        }
    },

    /**
     * Vérifie si un joueur est en favori
     * @param {string} playerId 
     */
    isFavorite: async (playerId) => {
        const favorites = await favoritesService.getFavorites();
        return favorites.includes(playerId);
    }
};
