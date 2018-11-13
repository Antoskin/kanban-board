import React from 'react'
import { Input, Button } from 'antd'

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

export default TitleInput

 