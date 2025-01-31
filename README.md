# API Documentation

## Description
This API provides user information, including their email, the current date and time in ISO 8601 format (UTC), and their GitHub repository URL. The API responds to GET requests and provides the requested data in JSON format.

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Project Locally**
   ```bash
   npm start
   ```

## Endpoint

- **Method:** `GET`
- **URL:** `<your-url>`

## Request

- **Method:** `GET`
- **Endpoint:** `<your-url>`

There are no request body parameters required for this API.

## Response Format (200 OK)

The response will be in JSON format with the following structure:

   ```json
   {
     "email": "your-email@example.com",
     "current_datetime": "2025-01-30T09:30:00Z",
     "github_url": "https://github.com/yourusername/your-repo"
   }
   ```

## Usage
   ```bash
   curl http://<your-url>
   ```


## Backlink
https://hng.tech/hire/nodejs-developers
