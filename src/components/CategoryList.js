import React, { Component } from 'react'


export default class CategoryList extends Component {
   
    render() {
        const { categories } = this.props;

        return (
            <div>
                <h1> Category List</h1>
                <ul>
                    {
                        categories.map(category => {
                            return (
                                <li className="category" key={category.id} onClick={this.props.onCategorySelect.bind(this, category.short_name)}>
                                    {category.name + '-(' + category.short_name + ')'}
                                </li>
                            )
                        })
                    }
                </ul>


            </div>
        )
    }
}
