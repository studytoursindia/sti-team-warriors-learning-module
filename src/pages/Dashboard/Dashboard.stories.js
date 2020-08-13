import React from 'react';
import Dashboard from './Dashboard';

export default {
    title: 'STI|Dashboard',

    parameters: {
        component: Dashboard,
        componentSubtitle: 'Displays Dashboard',
    },
};

export const standard = () => <Dashboard />;
