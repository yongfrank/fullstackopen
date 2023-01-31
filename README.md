<!--
 * @Author: Frank Chu
 * @Date: 2023-01-21 00:38:13
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-26 18:40:56
 * @FilePath: /fullstackopen/README.md
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
-->
# fullstackopen.com by Helsinki University

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 
```

```mermaid
sequenceDiagram
    participant apple
    participant banana
    apple ->> banana: hello
    activate banana
    banana -->> apple: hi
    deactivate banana
```
