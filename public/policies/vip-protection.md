# VIP Protection Policy
> GraphShield policy that controls access to VIP-related resources.

## Hide VIPs
GraphShield rule that hides VIPs user profiles.

`Hide VIPs` rule supports the following options:

| Option | Description |
|:-------|:------------|
| Enabled | Defines if the rule is enabled or disabled. |
| Hidden Labels | A list of comma-separated users whose related profiles will be hidden from Microsoft Graph responses. If the response contains multiple users (from a query that requests a collection of resources), the hidden users are simply removed from the results and the results count is updated accordingly. If the response returns a single user (from a query that requests a specific resource from a collection of resources), GraphShield returns an `HTTP 404 Not Found` status code |

:::tip
`Hide VIPs` rule is disabled by default.
:::
