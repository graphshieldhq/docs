# Integrate your apps with GraphShield
> GraphShield was designed so that you can integrate your app with almost zero change to your code. **No external agent, nothing to install, nada, zero!**

**ABSTRACT**

Under the hood, you access GraphShield simply by calling `microsoftgraph.graphshield.app` instead of the regular `graph.microsoft.com` URL. It means that you can integrate your app with GraphShield easily, in a snap, in a very transparent way.

```js
'https://graph.microsoft.com/v1.0/me'            // Instead of this
'https://microsoftgraph.graphshield.app/v1.0/me' // Use this
```
Yes, it's that simple!

To understand more deeply what a full transaction looks like and how a request is processed, see [how does it works](/how-does-it-work).

## How to integrate your app with GraphShield?

### If you're using a REST client
Using any REST-compatible client, just include the GraphShield base URL in your requests:
```js
const GRAPHSHIELD_URL = 'https://microsoftgraph.graphshield.app'
request
  .get(GRAPHSHIELD_URL + '/v1.0/me')
  .set('Authorization', 'Bearer ' + accessToken)
  .end((err, res) => {
```
!!! tip Note
    This technique applies to any REST-compatible client, such as `fetch`, `node-fetch`, `axios`... in any language.

### If you're using the Microsoft Graph Client
If you're using the Microsoft Graph Client SDK, just include the `baseUrl` option to your Microsoft Graph client constructor, as highlighted:
```js
const options = {
  authProvider,
  baseUrl: 'https://microsoftgraph.graphshield.app/'
}
const client = Client.init(options)
let res = await client.api('/me')
  .get()
```
!!! tip Note
    This technique should work with the Microsoft Graph Client in any language, `Javascript`, `C#`, `Java`...


!!! warning

    Using a specific Microsoft Graph environment?
    
    The Microsoft Graph API is available from different environments, and you have to use a different URL for each of them, for instance:
    - Microsoft Graph for US Government L4: `https://graph.microsoft.us`
    - Microsoft Graph for US Government L5 (DOD): `https://dod-graph.microsoft.us`
    - Microsoft Graph Germany: `https://graph.microsoft.de`

    See [Microsoft Graph root endpoints](https://docs.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints) for reference.

    If you're in the situation where you need to access one of these specific Microsoft Graph environments, just [contact us](https://www.graphshield.io/#contact).


### If you're using Power Automate or PowerApps
If you're using Power Automate or PowerApps to access the Microsoft Graph, we've got you covered too! Just include the GraphShield base URL in the `URI` field of your `HTTP` action.

## Next Steps
Well... you're good to go! Once you've updated your base URL, GraphShield take care of everything so that you don't have to. 

But if you want to understand how GraphShield handles "edge cases", please refer to the following articles:
- [Authentication](/integration/authentication)
- [Async Operations](/integration/async-operations)
- [Subscriptions](/integration/subscriptions)
- [Errors Management](/integration/errors)
- [Throttling](/integration/throttling)
