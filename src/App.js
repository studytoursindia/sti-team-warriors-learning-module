import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './components/Header';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Example from './pages/Example';
import Dashboard from './pages/Dashboard/Dashboard';

const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'https://sti-hasura-graphql-16042019.herokuapp.com/v1/graphql',
            options: {
                reconnect: true,
            },
        }),
        cache: new InMemoryCache(),
    });
};

function App() {
    const client = createApolloClient();

    return (
        <ApolloProvider client={client}>
            <Router>
                <Header src="https://res.cloudinary.com/studytoursindia/image/upload/c_scale,w_400/v1582391567/sti/signboard-design_bpvrc9.png" />
                <Switch>
                    {/* <Route path="/example" component={Example} /> */}
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/destination" component={Destination} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
