/**
 * Données mock des joueurs
 * Chaque joueur contient : id, pseudo, jeu, niveau, avatar (emoji), description, stats
 */

export const playersData = [
    {
        id: '1',
        pseudo: 'ShadowNinja',
        game: 'Valorant',
        level: 'Diamant',
        avatar: '🥷',
        description: 'Main Jett, spécialiste des entrées agressives. Je cherche une équipe compétitive pour push Immortal.',
        stats: {
            kd: '1.8',
            winRate: '58%',
            hoursPlayed: '450h'
        }
    },
    {
        id: '2',
        pseudo: 'CristianoFan',
        game: 'FIFA',
        level: 'Or',
        avatar: '⚽',
        description: 'Joueur FIFA depuis 5 ans, je préfère jouer en 4-3-3 avec un jeu rapide sur les ailes.',
        stats: {
            division: 'Division 3',
            winRate: '52%',
            goalsScored: '1250'
        }
    },
    {
        id: '3',
        pseudo: 'BuildMaster',
        game: 'Fortnite',
        level: 'Platine',
        avatar: '🏗️',
        description: 'Expert en construction rapide et édition. Dispo pour coaching débutants.',
        stats: {
            wins: '340',
            kd: '2.1',
            hoursPlayed: '600h'
        }
    },
    {
        id: '4',
        pseudo: 'PhoenixFire',
        game: 'Valorant',
        level: 'Platine',
        avatar: '🔥',
        description: 'Main Phoenix et Reyna. Style de jeu agressif, je cherche des coéquipiers pour ranked.',
        stats: {
            kd: '1.5',
            winRate: '54%',
            hoursPlayed: '320h'
        }
    },
    {
        id: '5',
        pseudo: 'GoalKeeper99',
        game: 'FIFA',
        level: 'Argent',
        avatar: '🧤',
        description: 'Spécialiste défense, je joue principalement en FUT Champions. Toujours à la recherche de conseils.',
        stats: {
            division: 'Division 5',
            winRate: '48%',
            goalsScored: '680'
        }
    },
    {
        id: '6',
        pseudo: 'StormSniper',
        game: 'Fortnite',
        level: 'Diamant',
        avatar: '⚡',
        description: 'Sniper précis, bon en positionnement. Je joue surtout en Arena pour améliorer mon niveau.',
        stats: {
            wins: '520',
            kd: '2.8',
            hoursPlayed: '850h'
        }
    },
    {
        id: '7',
        pseudo: 'SageMaster',
        game: 'Valorant',
        level: 'Or',
        avatar: '🌿',
        description: 'Main Sage et Killjoy, je préfère le jeu de support et la stratégie d\'équipe.',
        stats: {
            kd: '1.2',
            winRate: '51%',
            hoursPlayed: '280h'
        }
    },
    {
        id: '8',
        pseudo: 'MbappeSpeed',
        game: 'FIFA',
        level: 'Platine',
        avatar: '🏃',
        description: 'Jeu rapide et contre-attaques. Mon équipe FUT est basée sur la vitesse pure.',
        stats: {
            division: 'Division 2',
            winRate: '56%',
            goalsScored: '1580'
        }
    },
    {
        id: '9',
        pseudo: 'VictoryRoyale',
        game: 'Fortnite',
        level: 'Or',
        avatar: '👑',
        description: 'Joueur casual qui aime les Victory Royale. Je joue surtout en squad avec des amis.',
        stats: {
            wins: '180',
            kd: '1.4',
            hoursPlayed: '380h'
        }
    },
    {
        id: '10',
        pseudo: 'ViperToxic',
        game: 'Valorant',
        level: 'Diamant',
        avatar: '☠️',
        description: 'Main Viper, expert des setups et du contrôle de map. Disponible pour coaching.',
        stats: {
            kd: '1.7',
            winRate: '57%',
            hoursPlayed: '520h'
        }
    },
    {
        id: '11',
        pseudo: 'TikiTaka',
        game: 'FIFA',
        level: 'Diamant',
        avatar: '🎯',
        description: 'Style Barcelona : possession et passes courtes. Je cherche des adversaires de bon niveau.',
        stats: {
            division: 'Division 1',
            winRate: '61%',
            goalsScored: '2100'
        }
    },
    {
        id: '12',
        pseudo: 'NinjaLoot',
        game: 'Fortnite',
        level: 'Argent',
        avatar: '💎',
        description: 'Débutant motivé, je m\'améliore chaque jour. Ouvert aux conseils et au jeu en équipe.',
        stats: {
            wins: '45',
            kd: '0.9',
            hoursPlayed: '120h'
        }
    }
];

/**
 * Fonction pour obtenir tous les joueurs
 */
export const getAllPlayers = () => playersData;

/**
 * Fonction pour filtrer les joueurs par jeu
 * @param {string} game - Nom du jeu ('Valorant', 'FIFA', 'Fortnite', ou 'All')
 */
export const filterPlayersByGame = (game) => {
    if (game === 'All') {
        return playersData;
    }
    return playersData.filter(player => player.game === game);
};

/**
 * Fonction pour obtenir un joueur par son ID
 * @param {string} id - ID du joueur
 */
export const getPlayerById = (id) => {
    return playersData.find(player => player.id === id);
};
