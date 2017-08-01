import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null
        };

        this.fetchFilters = this.fetchFilters.bind(this);
        this.fetchFruits = this.fetchFruits.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentWillMount = () => {
        this.fetchFilters();
        this.fetchFruits();
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }

    fetchFruits = () => {
        fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
    }
    
    render() {
        return (
            <FruitBasket
            currentFilter={this.state.currentFilter}
            handleFilterChange={this.handleFilterChange}
            fruit={this.state.fruit}
            filters={this.state.filters} />
        )
    }
}

export default App;
