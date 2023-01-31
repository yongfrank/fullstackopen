/*
 * @Author: Frank Chu
 * @Date: 2023-01-30 20:09:33
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-30 20:13:01
 * @FilePath: /fullstackopen/part2/lecture/src/components/Footer.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }

    return (
        <div style={footerStyle}>
            <br />
            <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
        </div>
    )
}

export default Footer