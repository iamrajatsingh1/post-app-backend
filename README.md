# Mini Forum Backend

This is a simple Node.js and MongoDB backend for a Mini Forum application. The backend provides RESTful APIs for managing posts.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mini-forum-backend.git

2. Navigate to the project directory:

    ```bash
    cd mini-forum-backend

3. Install dependencies:

    ```bash
    npm install

4. Start the server:

    ```bash
    npm start
The server will run on http://localhost:3001 by default.


### APIs
#### 1. Health Check
- **Endpoint:** /
- **Method:** GET
- **Description:** Check the health of the server.
- **Example Response:**
    ```bash
    {
        "status": true,
        "message": "Mini Forum BE is healthy"
    }

#### 2. Posts
- **Endpoint:** /posts
- **Method:** GET
- **Description:** Get all posts.
- **Example Response:**

    ```bash
    [
    {
        "id": 1,
        "username": "john_doe",
        "profileImage": "https://example.com/john_profile.jpg",
        "content": "Lorem ipsum dolor sit amet...",
        "createdAt": "2024-01-07T02:00:00Z",
        "replies": [
        {
            "username": "alice",
            "content": "Great post!",
            "createdAt": "2024-01-07T12:15:00Z"
        }
        ]
    },
    // ... other posts
    ]

- **Endpoint:** /posts/:id
- **Method:** GET
- **Description:** Get a post by ID.
- **Example Response:**

    ```bash
    {
    "id": 1,
    "username": "john_doe",
    "profileImage": "https://example.com/john_profile.jpg",
    "content": "Lorem ipsum dolor sit amet...",
    "createdAt": "2024-01-07T02:00:00Z",
    "replies": [
        {
        "username": "alice",
        "content": "Great post!",
        "createdAt": "2024-01-07T12:15:00Z"
        }
    ]
    }

- **Endpoint:** /posts
- **Method:** POST
- **Description:** Create a new post.
- **Example Response:**

    ```bash
    {
    "username": "john_doe",
    "profileImage": "https://example.com/john_profile.jpg",
    "content": "New post content"
    }

- **Example Response:**

    ```bash
    {
    "id": 4,
    "username": "john_doe",
    "profileImage": "https://example.com/john_profile.jpg",
    "content": "New post content",
    "createdAt": "2024-01-07T14:30:00Z",
    "replies": []
    }

- **Endpoint:** /posts/:id
- **Method:** PUT
- **Description:** Update a post by ID.

- **Example Response:**

    ```bash
    {
    "content": "Updated post content"
    }

- **Example Response:**

    ```bash
    {
    "id": 4,
    "username": "john_doe",
    "profileImage": "https://example.com/john_profile.jpg",
    "content": "Updated post content",
    "createdAt": "2024-01-07T14:30:00Z",
    "replies": []
    }

- **Endpoint:**  /posts/:id
- **Method:** DELETE
- **Description:** Delete a post by ID.
- **Example Response:**

    ```bash
    {
    "id": 4,
    "username": "john_doe",
    "profileImage": "https://example.com/john_profile.jpg",
    "content": "Updated post content",
    "createdAt": "2024-01-07T14:30:00Z",
    "replies": []
    }

### Note:
This application uses hardcoded data by default. For production use, consider integrating a database for persistent storage.

This README.md provides basic information about the application, its APIs, installation, and usage. Feel free to customize it further based on your application's features and requirements.