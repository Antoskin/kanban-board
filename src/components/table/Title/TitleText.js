import React from 'react'
import { Icon } from 'antd'

const TitleText = ({name, toInpt}) => 
                <span>
                    {name}
                    <Icon 
                        onClick={toInpt} 
                        type="edit" 
                        theme="twoTone" />
                </span>


export default TitleText