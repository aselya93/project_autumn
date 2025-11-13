import React, { lazy } from 'react';

export const MainPageAsync = lazy(
    () => new Promise<{ default: React.ComponentType<any> }>((resolve) => {
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
