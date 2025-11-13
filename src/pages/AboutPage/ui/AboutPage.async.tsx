import { lazy } from 'react';

export const AboutPageAsync = lazy(() => (async () => {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return import('./AboutPage'); // import() уже возвращает правильный тип
})());
