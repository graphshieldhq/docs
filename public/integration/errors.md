# Error Responses
> Just like the Microsoft Graph, errors in GraphShield are returned using standard HTTP status codes, as well as a JSON error response object.

## HTTP Status Codes

The following table lists and describes the HTTP status codes that can be returned:

| Status code | Status message | Description |
|-------------|----------------|-------------|
| 400 | Bad Request | Cannot process the request because it is malformed or incorrect. |
| 401 | Unauthorized | Required authentication information is either missing or not valid for the resource. |
| 403 | Forbidden | Access is denied to the requested resource. The user or application might not have enough permission.   |
| 429 | Too Many Requests | Client application has been throttled and should not attempt to repeat the request until an amount of time has elapsed. |
| 500 | Internal Server Error | There was an internal server error while processing the request. |
| 509 | Bandwidth Limit Exceeded | Your app has been throttled for exceeding the maximum bandwidth cap. Your app can retry the request again after more time has elapsed. |

The error response is a single JSON object that contains a single property named `error`. This object includes all the details of the error. You can use the information returned here instead of or in addition to the HTTP status code. The following is an example of a full JSON error body.

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Required authentication information is either missing...",
    "innerError": {
      "requestId": "4c15cc1b-2f06-4a5a-86c0-dfe118f74cfe", // UUID v4
      "date": "2021-02-27T15:36:23.972Z"                   // ISO format
    }
  }
}
```

## How GraphShield makes it transparent?
GraphShield generates its errors (internal errors, policy violations...) using exactly the same schema as the Microsoft Graph, making error handling completely transparent for your app. See [Microsoft Graph error responses and resource types](https://docs.microsoft.com/en-us/graph/errors) for reference.
