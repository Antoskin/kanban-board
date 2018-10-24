import React, { Component } from 'react'
import {connect} from 'react-redux'

import { Input, Button, Icon } from 'antd'

import {changeTit} from '../../actions'

class TableTitle extends Component {

    state = {
        sw: false,
        inputVal: 'default'
    }

    handleToInput() {
        this.setState({sw: !this.state.sw})
    }

    // btn ok
    handleToText(id) {
       // console.log(`id ${id}`)
        this.setState({sw: !this.state.sw})

        const newTitleName = {
            val: this.state.inputVal,
            id
        }

        this.props.changeTit( newTitleName )

    }

    changeTitle(e) {
        this.setState({inputVal: e.target.value})
    }

    render() {
        const { name, ind } = this.props
        const { sw, inputVal } = this.state
      
        return (
            <React.Fragment>
                {
                    !sw ? <TitleText 
                                name={name} 
                                toInpt={ () => this.handleToInput() } /> : 
                          <TitleInput 
                                val={inputVal} 
                                toTxt={ () => this.handleToText(ind) }  
                                change={this.changeTitle.bind(this)} />
                }
            </React.Fragment>
        )
    }
}


const TitleText = ({name, toInpt}) => 
                <span>
                    {name}
                    <Icon 
                        onClick={toInpt} 
                        style={{ cursor: 'pointer' }}
                        type="edit" 
                        theme="twoTone" />
                </span>

const TitleInput = ({val, toTxt, change}) => 
    <React.Fragment>
        <Input 
            type="text" 
            value={val} 
            placeholder="change title..." 
            onChange={change} />
        <Button 
            onClick={toTxt}>ok
        </Button>
    </React.Fragment>



const mapDispatchToProps = {
    changeTit
}

export default connect(null, mapDispatchToProps)(TableTitle)