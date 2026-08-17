// This defines what a Quest or Event looks like
export interface Quest {
    id: string;
    title: string;
    description: string;
    points: number;
    image: any; // We will use images from your assets
    location: string;
}

// This defines what a Recommended Item looks like
export interface Recommendation {
    id: string;
    title: string;
    reason: string; // e.g., "Since you like cafes..."
    icon: string;   // e.g., "☕"
    image: any;
}

export interface User {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}