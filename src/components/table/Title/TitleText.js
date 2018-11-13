import React from 'react'
import { Icon } from 'antd'


const TitleText = ({ name, toInpt }) => 
    <React.Fragment>
        {name}
        <Icon 
            onClick={toInpt} 
            type="edit" 
            theme="twoTone" />
    </React.Fragment>

export default TitleText
