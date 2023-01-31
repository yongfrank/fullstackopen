/*
 * @Author: Frank Chu
 * @Date: 2023-01-26 20:25:18
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-26 20:25:23
 * @FilePath: /fullstackopen/part2/courseinfo/src/components/header.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}

export default Header