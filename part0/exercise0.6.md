# Exercise 0.6: Creating a New Note in SPA

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of browser: User enters note content in the input field
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    Note right of server: Server processes the new note content
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: The SPA updates the UI to display the new note


