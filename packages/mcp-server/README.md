# Dinari TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export DINARI_API_KEY_ID="My API Key ID"
export DINARI_API_SECRET_KEY="My API Secret Key"
export DINARI_ENVIRONMENT="production"
npx -y @dinari/api-sdk-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "dinari_api_sdk_api": {
      "command": "npx",
      "args": ["-y", "@dinari/api-sdk-mcp"],
      "env": {
        "DINARI_API_KEY_ID": "My API Key ID",
        "DINARI_API_SECRET_KEY": "My API Secret Key",
        "DINARI_ENVIRONMENT": "production"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40dinari%2Fapi-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBkaW5hcmkvYXBpLXNkay1tY3AiXSwiZW52Ijp7IkRJTkFSSV9BUElfS0VZX0lEIjoiTXkgQVBJIEtleSBJRCIsIkRJTkFSSV9BUElfU0VDUkVUX0tFWSI6Ik15IEFQSSBTZWNyZXQgS2V5In19)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40dinari%2Fapi-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40dinari%2Fapi-sdk-mcp%22%5D%2C%22env%22%3A%7B%22DINARI_API_KEY_ID%22%3A%22My%20API%20Key%20ID%22%2C%22DINARI_API_SECRET_KEY%22%3A%22My%20API%20Secret%20Key%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add dinari_api_sdk_mcp_api --env DINARI_API_KEY_ID="My API Key ID" DINARI_API_SECRET_KEY="My API Secret Key" -- npx -y @dinari/api-sdk-mcp
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------ | ------------------------ | --------------- |
| `X-API-Key-Id` | `apiKeyID` | ApiKeyId |
| `X-API-Secret-Key` | `apiSecretKey` | ApiSecretKey |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "dinari_api_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "X-API-Key-Id": "My API Key ID"
      }
    }
  }
}
```
