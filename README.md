# YouTube API App Backend

This document provides details on the API endpoints and database schema for this application.

## Links
- [Postman Docs](https://documenter.getpostman.com/view/19675500/2sB3WwoweD)
- [Demo App](https://ycd.netlify.app)

## API Endpoints

### Notes

| Method | Endpoint      | Description       |
| :----- | :------------ | :---------------- |
| `POST` | `/api/notes`  | Creates a new note. |
| `GET`  | `/api/notes`  | Retrieves all notes.|

### Logs

| Method | Endpoint     | Description      |
| :----- | :----------- | :--------------- |
| `POST` | `/api/logs`  | Creates a new log. |
| `GET`  | `/api/logs`  | Retrieves all logs.|

## Database Schema

### `Note` Model

The `Note` model stores user-submitted notes.

| Field     | Type           | Description                               |
| :-------- | :------------- | :---------------------------------------- |
| `name`    | String         | The name of the user creating the note.   |
| `email`   | String         | The email of the user.                    |
| `note`    | String         | The content of the note.                  |
| `tags`    | [String]       | An array of tags for categorization.      |
| `userId`  | String         | The unique identifier for the user.       |
| `createdAt` | Date         | Timestamp of when the note was created.   |
| `updatedAt` | Date         | Timestamp of when the note was last updated.|

### `Log` Model

The `Log` model is used for storing application events and actions.

| Field     | Type           | Description                               |
| :-------- | :------------- | :---------------------------------------- |
| `action`  | String         | The type of action being logged.          |
| `message` | String         | A descriptive message for the log entry.  |
| `user`    | Object         | Optional user information.                |
| `videoId` | String         | Optional associated video ID.             |
| `extra`   | Object         | Any extra data to be stored with the log. |
| `createdAt` | Date         | Timestamp of when the log was created.    |
| `updatedAt` | Date         | Timestamp of when the log was last updated. |
