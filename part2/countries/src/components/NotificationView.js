/*
 * @Author: Frank Chu
 * @Date: 2023-01-31 10:11:05
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-31 10:11:08
 * @FilePath: /fullstackopen/part2/countries/src/components/NotificationView.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
const NotificationView = ({notification}) => {
    if (notification === false) {
      return null
    }
    return (
      <div>
        No results found
      </div>
    )
}
export default NotificationView