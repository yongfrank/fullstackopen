/*
 * @Author: Frank Chu
 * @Date: 2023-01-30 20:16:38
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-30 21:19:44
 * @FilePath: /fullstackopen/part2/phonebook/src/components/Notification.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */

const Notification = ({ message, isError }) => {
    const inlineStyle = {
        color: isError ? 'red' : 'green',
        background: 'lightgrey',
        padding: '10px',
        // borderStyle: 'solid',
        borderRadius: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
        border: '3px solid',
        margin: '10px'
    }
    if (message === null) {
        return null
    }

    return (
        <div style={inlineStyle}>
            {message}
        </div>
    )
}

export default Notification