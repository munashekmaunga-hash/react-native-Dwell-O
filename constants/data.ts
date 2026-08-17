import images from './image';

export const trendingQuests = [
    {
        id: '1',
        title: 'Dumpling Trail',
        description: 'Visit 4 authentic dumpling spots.',
        points: 300,
        image: images.kitMascot, // Placeholder image
        location: 'Victoria Park',
    },
    {
        id: '2',
        title: 'Sunset Run Club',
        description: '5km evening run along the coast.',
        points: 150,
        image: images.kitMascot, // Placeholder image
        location: 'Cottesloe Beach',
    },
    {
        id: '3',
        title: 'Summer Football',
        description: 'Casual Sunday matches.',
        points: 200,
        image: images.kitMascot, // Placeholder image
        location: 'Raphael Park',
    },
];

export const recommendedActivities = [
    {
        id: '1',
        title: 'New Matcha House',
        reason: 'Since you like cafés...',
        icon: '☕',
        image: images.kitMascot, // Placeholder image
    },
    {
        id: '2',
        title: 'Vintage Furniture Market',
        reason: 'Since you love interior design...',
        icon: '🪴',
        image: images.kitMascot, // Placeholder image
    }
];