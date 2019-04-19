import React from 'react'

export default function CategoryItem({ selectedCategory, categoryItems }) {
    console.log(categoryItems);
    return (
        <div>
            <h2>Item in Category ( {selectedCategory})</h2>
            <table className="items">
                <tbody>
                    <tr>
                        <th> Name</th>
                        <th> Description</th>
                    </tr>
                    {
                        categoryItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>


        </div>
    )
}
