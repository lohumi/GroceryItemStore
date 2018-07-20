var React=require('react');
//var ReactDom=require('react-dom');
var GroceryItem=require('./GroceryItem.jsx');
var GroceryListAddItem=require('./GroceryListAddItem.jsx');

class Grocery extends React.Component{
render(){
    return (
    <div>
    <h1>Grocery Listify </h1>
    <div>
    {
        this.props.items.map(function(item,index){
          return(  
          <GroceryItem item={item} key={"item"+index} />
        )
        })
    } 
    </div>
    <GroceryListAddItem />
    </div>
    )
}
}
module.exports = Grocery;
//export default Grocery;

// module.exports=React.createClass({
//     render:function(){
//         return (
//             <div>
//                 <h1>Grocery Listify </h1>
//             </div>
//         )
//     }
// })