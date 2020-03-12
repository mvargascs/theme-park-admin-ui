import { Status } from '@shared/models/status';

export const statuses: Status[] = [
    {
        id: 'SSSSSSSSSSSSSSSSSSSA',
        description: 'This is active and guests are welcome to experience it.',
        status: 'Active',
    },
    {
        id: 'SSSSSSSSSSSSSSSSSSSB',
        description: 'This is currently inactive. Guest cannot experience this for the time being.',
        status: 'Inactive',
    },
    {
        id: 'SSSSSSSSSSSSSSSSSSSC',
        description: 'This is undergoing construction which will bring guest new experiences.',
        status: 'Under Construction',
    },
    {
        id: 'SSSSSSSSSSSSSSSSSSSD',
        description: 'This is under renovations for a better guest experience.',
        status: 'Under Renovation',
    },
];
