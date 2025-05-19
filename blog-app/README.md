# Blog Application

This project is a blog application built using Angular for the frontend and NestJS for the backend. 

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

- **`frontend/src/app/components`**: Contains reusable Angular components for the UI.
- **`frontend/src/app/pages`**: Contains Angular pages representing different views.
- **`frontend/src/app/app.module.ts`**: The root module of the Angular application.
- **`frontend/src/assets`**: Contains static assets such as images and styles.
- **`frontend/angular.json`**: Configuration file for Angular CLI.
- **`frontend/package.json`**: Lists dependencies and scripts for the Angular project.
- **`frontend/README.md`**: Documentation specific to the frontend.

### Backend

- **`backend/src/app.controller.ts`**: Handles incoming requests and responses for the main application.
- **`backend/src/app.module.ts`**: The root module of the NestJS application.
- **`backend/src/app.service.ts`**: Contains business logic and data handling.
- **`backend/src/posts/posts.controller.ts`**: Handles requests related to blog posts.
- **`backend/src/posts/posts.module.ts`**: Encapsulates posts-related components, controllers, and services.
- **`backend/src/posts/posts.service.ts`**: Manages blog posts, including CRUD operations.
- **`backend/src/main.ts`**: Entry point of the NestJS application.
- **`backend/package.json`**: Lists dependencies and scripts for the NestJS project.
- **`backend/nest-cli.json`**: Configuration file for NestJS CLI.
- **`backend/tsconfig.json`**: Configuration file for TypeScript in the backend.
- **`backend/README.md`**: Documentation specific to the backend.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
3. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
4. Start the frontend and backend servers.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.