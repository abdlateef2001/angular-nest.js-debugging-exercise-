# Blog Application Backend

This is the backend part of the Blog Application built using NestJS. The backend is responsible for handling API requests, managing data, and serving the frontend application.

## Project Structure

- **src/**: Contains the source code for the application.
  - **app.controller.ts**: Main controller for handling requests.
  - **app.module.ts**: Root module of the application.
  - **app.service.ts**: Service containing business logic.
  - **posts/**: Module for managing blog posts.
    - **posts.controller.ts**: Controller for handling blog post requests.
    - **posts.module.ts**: Module encapsulating posts-related components.
    - **posts.service.ts**: Service for managing blog post data.
  - **main.ts**: Entry point of the application.

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Running the Application

To start the application, use the following command:

```
npm run start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

- **GET /posts**: Retrieve all blog posts.
- **POST /posts**: Create a new blog post.
- **GET /posts/:id**: Retrieve a specific blog post by ID.
- **PUT /posts/:id**: Update a blog post by ID.
- **DELETE /posts/:id**: Delete a blog post by ID.

## License

This project is licensed under the MIT License.