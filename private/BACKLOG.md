# BACKLOG

## NOW

### Platforms definition
Describe all supported platforms from a central location
For each api platformm:
For each identity platform:

### Proxy authentication schemes
`PROXY_AUTH_SCHEME` `pass-through` `api-key`
Replace `AUTH_ANONYMOUS_ENABLED`

Map the option from Google Apigee
https://cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec

Replace the anonymous api key by a dynamic proxy app.all?
Create a function returning the list of middlewares

### Hub integration
`HUB_INTEGRATION_ENABLED`
`HUB_API_KEY`
`HUB_HOST_NAME`

From proxy: All in a specific module:
- call to generate api key endpoint
- call to validate api key endpoint
- call to audit endpoint


### Refactor body parsing for different content-types
application/json
application/x-www-form-urlencoded
multipart/form-data
text/plain

### Include all common HTTP methods in integration tests
['GET', 'POST' , 'PUT', 'PATCH', 'DELETE']

## NEXT

### Create performance tests with autocannon
https://www.npmjs.com/package/autocannon?activeTab=readme
Reference URL: /v1.0/me + nock > 200

### Rate limiting and quota policy

https://cloud.google.com/apigee/docs/api-platform/reference/policies/quota-policy

### Review policy documentation:
https://cloud.google.com/apigee/docs/api-platform/develop/policy-attachment-and-enforcement

### Spike prevention
https://cloud.google.com/apigee/docs/api-platform/reference/policies/spike-arrest-policy

### CORS policy
https://cloud.google.com/apigee/docs/api-platform/reference/policies/cors-policy

### Javascript policy
https://cloud.google.com/apigee/docs/api-platform/reference/policies/javascript-policy
https://cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model

### Accept binary uploads

### Support policies configurations
Policies configuration could be done through a `graphshield.policies.yml` YAML file.
The service will look for policies configuration from:
- located at the root of the project (default)
- Loaded from a remote URL if `POLICIES_URL` is defined

N.B: It could also be injected during the build of a custom Docker image:
```docker
FROM guillaumemeyer/graphshield:latest
COPY ./graphshield.policies.yml /app/graphshield.policies.yml
```

Policies configuration should be reloaded automatically in case of change, using the `POLICIES_RELOAD_FREQUENCY` option.

### Support Microsoft Identity platform for virtual tokens generation
Server-side token exchange: Just proxy the request

clientside:
Called from a browser

For v1: application tokens only.

### App fingerprinting

### Anonymization policy

### Classification policy

### Conditional access policy

### VIP protection policy

### Microsoft Teams policy

### Alert policy

### Cache policy

### Throttling policy

### Support Microsoft Graph subscription + webhooks endpoints

### Support for Slack

```js
{
  source: 'https://api.slack.com/specs/openapi/v2/slack_web.json',
  destination: `${SRC_LIBS_DIRECTORY}/gs-enrichment-openapi/data/slack/v2/openapi.json`,
  converted: ''
}
```

```js
{
  platform: 'slack',
  source: `${DATA_DIRECTORY}/slack/v2/openapi.json`,
  version: 'v2'
}
```

### Support for Salesforce Sales Cloud

### Send logs to Microsoft Sentinel
https://docs.microsoft.com/en-us/azure/sentinel/connect-log-forwarder?tabs=rsyslog

### Create incidents in Microsoft Sentinel
https://docs.microsoft.com/en-us/rest/api/securityinsights/stable/incidents/create-or-update

## DONE
