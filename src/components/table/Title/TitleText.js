import React from 'react'
import { Icon } from 'antd'


const TitleText = ({ name, toInpt }) => 
    <>
        {name}
        <Icon 
            onClick={toInpt} 
            type="edit" 
            theme="twoTone" />
    </>

export default TitleText
