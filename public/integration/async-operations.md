# Async Operations
> Some Microsoft Graph operations require indeterminate time to complete. Instead of waiting until the action is complete before returning a response, Microsoft Graph may use a long running actions pattern. This pattern provides your app a way to poll for status updates on a long running action, without any request waiting for the action to complete.

## Examples
When a Microsoft Graph operation transcends the lifetime of a single API request, it returns a `202 Accepted` response code with a `Location` header, that you can periodically check by making a GET request to this location.

An example is the [Clone a team](https://docs.microsoft.com/en-us/graph/api/team-clone) operation that uses a [teamsAsyncOperation resource type](https://docs.microsoft.com/en-us/graph/api/resources/teamsasyncoperation):

```HTTP{2}
HTTP/1.1 202 Accepted
Location: /teams({id})/operations({opId})
```

Another example is the [Copy a DriveItem](https://docs.microsoft.com/en-us/graph/api/driveitem-copy) operation that uses an [AsyncJobStatus resource](https://docs.microsoft.com/en-us/graph/api/resources/asyncjobstatus):

```HTTP{2}
HTTP/1.1 202 Accepted
Location: https://contoso.sharepoint.com/_api/v2.0/monitor/{id}
```

## How GraphShield makes it transparent?
To make sure that your app doesn't try by accident to bypass GraphShield by automatically following this kind of dynamically generated location URL, GraphShield dynamically rewrites the `Location` HTTP header to replace URLs such as `https://api.onedrive.com/monitor/{id}` by `https://microsoftgraph.graphshield.app?location=https://api.onedrive.com/monitor/{id}`, making this operation entirely transparent for your app.
