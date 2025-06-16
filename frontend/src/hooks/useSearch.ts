import {getRouteApi, RegisteredRouter, RouteIds, useNavigate } from '@tanstack/react-router';

const cleanEmptyParams = <T extends Record<string, unknown>>(search: T) => {
    const newSearch = { ...search };

    Object.keys(newSearch).forEach(key => {
        const value = newSearch[key];

        if (value === undefined || value === '') {
            delete newSearch[key];
        }
    });

    return newSearch;
};


export function useFilters<T extends RouteIds<RegisteredRouter['routeTree']>>(
    routeId: T
) {
    const routeApi = getRouteApi<T>(routeId)
    const navigate = useNavigate()
    const filters = routeApi.useSearch()

    const setFilters = (partialFilters: Partial<typeof filters>) =>
        navigate({
            to: '.',
            search: prev => cleanEmptyParams({ ...prev, ...partialFilters }),
        })
    const resetFilters = () => navigate({ to: '.', search: {} })

    return { filters, setFilters, resetFilters }
}
