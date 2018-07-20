var React=require('react');
var action=require('./../actions/GroceryItemActionCreator.jsx');
class GroceryAddItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {input:""};
        // This binding is necessary to make `this` work in the callback
    this.handleInputName = this.handleInputName.bind(this);
    this.addItem = this.addItem.bind(this);
    }
        handleInputName(e) {
            console.info('handle called');
        this.setState({input:e.target.value});
        }
        addItem(e){
            console.info('add called',this.state.input);
            e.preventDefault();
            action.add({
                name:this.state.input
            });
            this.setState({
                input:''
            });

        }
    

    //ES5 style
    /*getIntialState() {
        return {input:""};
    }*/

    //ES6 style of setting state
    /*
    constructor () {
        super()
        this.state = {
          items: []
        }
      }
    */
    render(){
        return (
        <div className='grocery-additem'>
            <form>
                <input value={this.state.input} onChange={this.handleInputName}/>
                <button onClick={this.addItem}>Add Item</button>
            </form>
        </div>
        );
    }
    }
    module.exports = GroceryAddItem;