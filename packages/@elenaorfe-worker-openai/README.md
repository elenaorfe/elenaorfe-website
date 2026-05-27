# OpenAI API Integration

This project uses an `api.http` file to interact with the OpenAI API for managing vector store files. The file contains HTTP requests that can be executed using VS Code's REST Client extension or similar tools.

## Environment Variables

Set the following environment variables in `http-client.private.env.json` file:

```
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_VECTOR_STORE_ID=your_vector_store_id_here
```

## Usage Workflow

1. Set your environment variables
2. Execute the "Get the list of existing files" request to see current files
3. Execute the "Upload a file" request to upload your knowledge file
4. Execute the "Create a vector store file" request to associate the file with your vector store
5. Optionally, execute the delete requests to clean up old files

## Notes

- The `assistant-knowledge.txt` file contains the knowledge base for the assistant
