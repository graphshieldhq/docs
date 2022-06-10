# Subscriptions
> Subscriptions enables you to receive change notifications when a specific type of changes occur to the specified resource in Microsoft Graph.

## Example
A typical example of a subscription is to listen for the arrival of new messanges in an inbox. To create this kind of subscription, you will typically post:
```HTTP{1}
POST https://microsoftgraph.graphshield.app/v1.0/subscriptions
Content-type: application/json
```

With the following body:
```json
{
   "changeType": "created",
   "notificationUrl": "https://webhook.azurewebsites.net/api/send/myNotifyClient",
   "resource": "me/mailFolders('Inbox')/messages",
}
```

Then when a new message is received, you'll receive a `POST` request to your `notificationUrl` with this kind of payload:
```json
{
  "value": [
    {
      "id": "lsgTZMr9KwAAA",
      "subscriptionId":"{subscription_guid}",
      "subscriptionExpirationDateTime":"2016-03-19T22:11:09.952Z",
      "clientState":"secretClientValue",
      "changeType":"created",
      "resource":"users/{user_guid}@{tenant_guid}/messages/{long_id_string}",
      "tenantId": "{tenant_id}",
      "resourceData":
      {
        "@odata.type":"#Microsoft.Graph.Message",
        "@odata.id":"Users/{user_guid}@{tenant_guid}/Messages/{long_id_string}",
        "@odata.etag":"W/\"CQAAABYAAADkrWGo7bouTKlsgTZMr9KwAAAUWRHf\"",
        "id":"{long_id_string}"
      }
    }
  ]
}
```

## How GraphShield makes it transparent?
To make sure that your app doesn't bypass GraphShield by accident by receiving direct change notifications from the Microsoft Graph, GraphShield dynamically replaces your original `notificationUrl` by a GraphShield-specific one.

Then, when the Microsoft Graph emits a webhook request (could be the initial [endpoint validation](https://docs.microsoft.com/en-us/graph/webhooks#notification-endpoint-validation) or a [change notification](https://docs.microsoft.com/en-us/graph/webhooks#change-notifications)), GraphShield dynamically relays the request to your original `locationUrl`.
