import React from 'react'
import { Input, Button } from 'antd'

const TitleInput = ({val, toTxt, change}) => 
    <>
        <Input 
            type="text" 
            value={val} 
            placeholder="change title..." 
            onChange={change} />
        <Button 
            onClick={toTxt}>ok
        </Button>
    </>

export default TitleInput

 