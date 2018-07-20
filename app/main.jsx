var React=require('react');
//import React,{component} from 'react';
var ReactDom=require('react-dom');
console.log('hello from jsx!');

var GroceryItemList=require('./components/GroceryItemList.jsx');

var groceryItemStore=require('./stores/GroceryItemStore.jsx')
var initial=groceryItemStore.getItem();
function render(){
   ReactDom.render(<GroceryItemList items={initial}/>,app); 
}
groceryItemStore.onChange(function(items){
    initial=items;
    render();
})
render();

//React.render(<GroceryItemList items={items}/>,app)