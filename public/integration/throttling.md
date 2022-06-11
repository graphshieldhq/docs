# Throttling Guidance
> Throttling limits the number of concurrent calls to a service to prevent overuse of resources. Graphshield is designed to handle a high volume of requests. If an overwhelming number of requests occurs, throttling helps maintain optimal performance and reliability of the service.

## Common Throttling Scenarios
The most common causes of throttling of clients include:
- A large number of requests across all applications in a our environments.
- A large number of requests from a particular application across all environments.

## What Happens when Throttling Occurs?
When a throttling threshold is exceeded, GraphShield limits any further requests from that client for a period of time. When throttling occurs, GraphShield returns HTTP status code 429 (Too many requests), and the requests fail. A suggested wait time is returned in the response header of the failed request.  

GraphShield is conforming to the [IETF ratelimit standardization proposal](https://tools.ietf.org/id/draft-polli-ratelimit-headers-01.html).

## Best Practices to Avoid Throttling

Programming patterns like continuously polling a resource to check for updates and regularly scanning resource collections to check for new or deleted resources are more likely to lead to applications being throttled and degrade overall performances.

Before any throttling, GraphShield provides two useful headers included in every responses so that you can monitor your own activity level:
- `X-RateLimit-Limit`: The limit of requests in a perdiod of time (aka "window")
- `X-RateLimit-Remaining`: The current number of requests that could be made during the current window.

## How to Handle Throttling
The following are best practices for handling throttling:
- Reduce the number of operations per request.
- Reduce the frequency of calls.
- Avoid immediate retries, because all requests accrue against your usage limits.

When you implement error handling, use the HTTP error code 429 to detect throttling. The failed response includes the `Retry-After` response header. Backing off requests using the `Retry-After` delay is the fastest way to recover from throttling because GraphShield continues to log resource usage while a client is being throttled.

1. Wait the number of seconds specified in the `Retry-After` header.
2. Retry the request.
3. If the request fails again with a 429 error code, you are still being throttled. Continue to use the recommended `Retry-After` delay and retry the request until it succeeds.

!!! tip Rule of Thumb
    If no `Retry-After` header is provided in the response, we recommend implementing an exponential backoff retry policy.

In addition to the `Retry-After` header, GraphShield includes `X-RateLimit-Limit` and `X-RateLimit-Remaining` infos in body of the throttled response:

```json
{
  "message": "Too many requests, please try again later...",
  "body": {
    "rateLimitExceeded": {
      "rateLimitWindow": 900000, // In ms
      "ratelimitMax": 90000      // In # of requests
    }
  }
}
```

## How GraphShield makes it transparent?
GraphShield generates its throttling responses using the same schema and headers as the Microsoft Graph, making throttling management transparent for your app. See [Microsoft Graph throttling guidance](https://docs.microsoft.com/en-us/graph/throttling) for reference.
