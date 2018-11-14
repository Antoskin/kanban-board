import React, { Component } from 'react'
import {connect} from 'react-redux'


import {changeTit} from './../../../actions'
import TitleText from './TitleText'
import TitleInput from './TitleInput'

class TableTitle extends Component {

    state = {
        sw: false,
        inputVal: 'default'
    }

    handleToInput = () => {
        this.setState({ sw: !this.state.sw })
    }

    // btn ok
    handleToText = () => {
        this.setState({ sw: !this.state.sw })

        const newTitleName = {
            val: this.state.inputVal,
            id: this.props.ind
        }

        this.props.changeTit( newTitleName )

    }

    changeTitle = (e) => {
        this.setState({inputVal: e.target.value})
    }

    render() {
        const { name } = this.props
        const { sw, inputVal } = this.state
      
        return (
            <>
                {
                    !sw ? <TitleText 
                                name={name} 
                                toInpt={this.handleToInput} /> : 
                          <TitleInput 
                                val={inputVal} 
                                toTxt={this.handleToText}  
                                change={this.changeTitle} />
                }
            </>
        )
    }
}



const mapDispatchToProps = {
    changeTit
}

export default connect(null, mapDispatchToProps)(TableTitle)