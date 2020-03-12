import { Attraction } from '@shared/models/attraction';

export const attractions: Attraction[] = [
    {
        id: 'AAAAAAAAAAAAAAAAAAAA',
        name: 'Huey',
        description: 'An adventurous journey on a flying horse',
        waittime: 10,
        location: 'Dream World',
        quicklane: false,
        status: 'Active',
    },
    {
        id: 'AAAAAAAAAAAAAAAAAAAB',
        name: 'Vortex of Fate',
        description: 'Zip and zoom through the twists of fate',
        waittime: 55,
        location: 'Abstractland',
        quicklane: true,
        status: 'Inactive',
    },
    {
        id: 'AAAAAAAAAAAAAAAAAAAC',
        name: 'Raging Seas',
        description: 'Coming Soon...',
        location: 'Islands of Mists',
        quicklane: false,
        status: 'Under Construction',
    },
];
