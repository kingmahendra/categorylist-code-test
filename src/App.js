import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CategoryList from './components/CategoryList';
import CategoryItem from './components/CategoryItem';

class App extends Component {
  state = {
    categories: [],
    selectedCategory: '',
    itemsInCategory:[]
  }

  componentDidMount() {
    // Todo move to config file  
    const url = 'https://stream-restaurant-menu-svc.herokuapp.com/category';
    axios.get(url).then(res => {

      this.setState({
        categories: res.data
      })
    }).catch(err => {
      console.log('Error while fetching categories', err)
    })
  }

  onCategorySelect = (selectedCategory) => {
    
    const url = `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${selectedCategory}`;
    axios.get(url).then(res => {
      console.log('Selected', res.data)
      this.setState({
        selectedCategory:selectedCategory,
        itemsInCategory: res.data
      })
    }).catch(err => {
      console.log('Error while fetching categories item', err)
    })
   
    
  } 
  render() {
    return (
      <div className="App">
        <CategoryList className="categories" categories={this.state.categories}
          onCategorySelect={this.onCategorySelect}
        />
        {
          this.state.selectedCategory &&
           <CategoryItem className="category-item" selectedCategory={this.state.selectedCategory}
          categoryItems={this.state.itemsInCategory}/>
        }
        
      </div>
    );
  }
}

export default App;
