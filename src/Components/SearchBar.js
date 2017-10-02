import React from 'react';
import { FormControl } from 'react-bootstrap';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

import {stateList} from '../Json/JsonData';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: stateList,
            inputValue:''
        }
    }
   
    handleOnchange = (input) =>{
        this.setState({selectValue :input,
                       inputValue: input ? input.label : '' },()=>{
            //Todo
            console.log('InputValue',this.state.inputValue);
            this.props.inputHandler(this.state.inputValue);
        });
    }
    showState = ()=> {
    }
    render(){
        const {inputValue, options} = this.state;
        return(
            <div>
                   <VirtualizedSelect options={options}
                                      onChange={this.handleOnchange.bind(this)}
                                      value={this.state.selectValue}/>
                   
            </div>);
    }
}
export default SearchBar;