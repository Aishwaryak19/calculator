import React, { Component } from 'react'
import './Calculator.css';


export class Calculator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        op:'' 
      }
    }
    displayOutput=()=>{
        let sm;
        if(this.state.op!=null)
        {
            sm=eval(this.state.op)
            this.setState({
                op:sm
            })
        }
    }
  render() {
    return (
       <>
       <input className='op'type='text' value={this.state.op}/><br/>
 
        <button className='calbtn'onClick={this.changeOp}>Ac</button>
        <button className='calbtn'onClick={()=>{this.setState({op:''})}}>clr</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'/'})}}>/</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'%'})}}>%</button>
        <br/>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'7'})}}>7</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'8'})}}>8</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'9'})}}>9</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+''})}}></button>
        <br/>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'4'})}}>4</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'5'})}}>5</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'6'})}}>6</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'-'})}}>-</button>
        <br/>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'1'})}}>1</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'2'})}}>2</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'3'})}}>3</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'+'})}}>+</button>
        <br/>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'0'})}}>0</button>
        <button className='calbtn'onClick={()=>{this.setState({op:this.state.op+'.'})}}>.</button>
        <button className='calbtn'onClick={this.s=this.displayOutput}>=</button>
        <br/>
       </>
    )
    
  }
}
export default Calculator