import React from 'react';
import useDataFetching from './useDataFetching';

function RepositoriesHooks(props) {
    const { loading, results, error } = useDataFetching('https://api.github.com/users/royderks/repos');

    return '';
}

export default RepositoriesHooks;
