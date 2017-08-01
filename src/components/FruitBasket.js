import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

    return (
      <div className="fruit-basket">
        <Filter 
        handleChange={props.handleFilterChange} 
        filters={props.filters} />
        <FilteredFruitList
          filter={props.currentFilter}
          fruit={props.fruit} />
      </div>
    );
}

export default FruitBasket;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}