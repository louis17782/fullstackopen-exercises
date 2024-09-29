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



### Diagram Explanation:
1. **User Input**: The user enters the note content in the input field of the SPA.
2. **POST Request**: The browser sends a `POST` request to the server to create a new note.
3. **Server Response**: The server processes the new note content and responds with a `201 Created` status, indicating the note was successfully created.
4. **Update UI**: The SPA updates the user interface to show the newly created note.

### Steps to Add It:
1. Open the `exercise0.6.md` file you created in Visual Studio Code.
2. Copy and paste the diagram code into the file.
3. Save the file.

Once you've added the diagram and any explanations you'd like, you can commit your changes to Git and push them
