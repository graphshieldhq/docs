# Salesforce

## Generate the OpenAPI definition

There is no public OpenAPI definition for Salesforce Sales Cloud, as the schema may vary from one environment to another.
The solution we're using is to generate a "standard" OpenAPI definition from a developer environment.

Procedure:
1. Open [JSforce](https://jsforce.github.io/) and signin to your Salesforce developer environment.
2. Open the browser console and get an access token from the `Application > Local Storage > jsforce0_access_token` key.
3. Make a `GET` request to `https://{YOUR_ORGANIZATION_NAME}.my.salesforce.com/services/data/v54.0/async/specifications/oas3` using the access token as `Authorization: Bearer {ACCESS_TOKEN}`
4. Retrieve the `locator id` from the `href` property
5. To get the OpenAPI definition as a json payload, make a second `GET` request as `https://{YOUR_ORGANIZATION_NAME}.my.salesforce.com/services/data/v54.0/async/specifications/oas3/{LOCATOR_ID}` using the access token as `Authorization: Bearer {ACCESS_TOKEN}`

Reference: [Generating an OpenAPI 3.0 Specification for sObjects REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/openapi_beta.htm)

## Introspecting access tokens
https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oidc_token_introspection_endpoint.htm&type=5


## OpenID discovery endpoint
Reference: https://help.salesforce.com/s/articleView?id=sf.remoteaccess_using_openid_discovery_endpoint.htm&type=5

```js
fetch(`https://${orgName}.my.salesforce.com/.well-known/openid-configuration`)
```

## Retrieve organization
Call with access token https://login.salesforce.com/services/oauth2/userinfo to retrieve org infos
Then get the url.profile URL
https://bridge365-dev-ed.my.salesforce.com/services/data/v54.0
https://bridge365-dev-ed.my.salesforce.com/00520000003j3nEAAQ

## Retrieve identity information from an access token
Using the access token, `GET` on `/services/data/v54.0`, then locate the identity property > Get url
  {
    "id": "https://login.salesforce.com/id/00D20000000oV19EAE/00520000003j3nEAAQ",
    "asserted_user": true,
    "user_id": "00520000003j3nEAAQ",
    "organization_id": "00D20000000oV19EAE",
    "username": "guillaume.meyer@outlook.com",
    "nick_name": "gmeyer",
    "display_name": "Guillaume Meyer",
    "email": "gmeyer@salestim.com",
    "email_verified": true,
    "first_name": "Guillaume",
    "last_name": "Meyer",
    "timezone": "Europe/Paris",
    "photos": {
        "picture": "https://bridge365-dev-ed--c.eu33.content.force.com/profilephoto/005/F",
        "thumbnail": "https://bridge365-dev-ed--c.eu33.content.force.com/profilephoto/005/T"
    },
    "addr_street": null,
    "addr_city": null,
    "addr_state": null,
    "addr_country": "FR",
    "addr_zip": null,
    "mobile_phone": "+33 659763058",
    "mobile_phone_verified": true,
    "is_lightning_login_user": false,
    "status": {
        "created_date": null,
        "body": null
    },
    "urls": {
        "enterprise": "https://bridge365-dev-ed.my.salesforce.com/services/Soap/c/{version}/00D20000000oV19",
        "metadata": "https://bridge365-dev-ed.my.salesforce.com/services/Soap/m/{version}/00D20000000oV19",
        "partner": "https://bridge365-dev-ed.my.salesforce.com/services/Soap/u/{version}/00D20000000oV19",
        "rest": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/",
        "sobjects": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/sobjects/",
        "search": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/search/",
        "query": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/query/",
        "recent": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/recent/",
        "tooling_soap": "https://bridge365-dev-ed.my.salesforce.com/services/Soap/T/{version}/00D20000000oV19",
        "tooling_rest": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/tooling/",
        "profile": "https://bridge365-dev-ed.my.salesforce.com/00520000003j3nEAAQ",
        "feeds": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/chatter/feeds",
        "groups": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/chatter/groups",
        "users": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/chatter/users",
        "feed_items": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/chatter/feed-items",
        "feed_elements": "https://bridge365-dev-ed.my.salesforce.com/services/data/v{version}/chatter/feed-elements",
        "custom_domain": "https://bridge365-dev-ed.my.salesforce.com"
    },
    "active": true,
    "user_type": "STANDARD",
    "language": "en_US",
    "locale": "en_US",
    "utcOffset": 3600000,
    "last_modified_date": "2020-02-07T22:31:34Z"
}