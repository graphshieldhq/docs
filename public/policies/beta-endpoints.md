# Beta Endpoints Policy
> GraphShield policy that controls access to Microsoft Graph /beta endpoints.

## Disable Beta Endpoints
GraphShield rule that denies access to the Microsoft Graph /beta endpoints.

`Disable Beta Endpoints` rule supports the following options:

| Option | Description |
|:-------|:------------|
| Enabled | Defines if the rule is enabled or disabled. |
| Deny Beta | Denies access to the Microsoft Graph beta endpoints. Returns an `HTTP 403 Forbidden` status code in case of violation. |

:::tip
`Disable Beta Endpoints` rule is disabled by default.
:::
