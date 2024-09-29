# Exercise 0.4: Diagram for Creating a New Note

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    Note right of server: Server receives the new note content
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: The browser updates the UI to show the new note
