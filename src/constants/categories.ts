export const ALL_SERVICE_CATEGORIES = [
    'Video & Production',
    'Paid Growth',
    'Social & Content',
    'Strategy & Planning',
    'Conversion & Funnels',
    'Launch Support',
    'Paid Ads',
    'Video',
    'Social Media',
    'Strategy'
] as const;

export type ServiceCategory = typeof ALL_SERVICE_CATEGORIES[number];
