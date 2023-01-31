/*
 * @Author: Frank Chu
 * @Date: 2023-01-31 09:37:16
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-31 09:37:32
 * @FilePath: /fullstackopen/part2/countries/src/components/SearchPartView.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
const SearchPartView = ({handleChanges}) => {
    return (
      <>
        find countries
        <input onChange={handleChanges}>
        </input>
      </>
    )
}

export default SearchPartView