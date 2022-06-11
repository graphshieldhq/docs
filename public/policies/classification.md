# Classification Policy
> GraphShield policy that controls access to classified contents.

## Hide Classified Groups
GraphShield rule that hides classified groups (including Microsoft Teams teams and SharePoint sites) based on their sensitivity labels.

`Hide Classified Groups` rule supports the following options:

| Option | Description |
|:-------|:------------|
| Enabled | Defines if the rule is enabled or disabled. |
| Hidden Labels | A list of comma-separated labels whose related groups will be hidden from Microsoft Graph responses. If the response contains multiple groups (from a query that requests a collection of resources), the hidden groups are simply removed from the results and the results count is updated accordingly. If the response returns a single group (from a query that requests a specific resource from a collection of resources), GraphShield returns an `HTTP 404 Not Found` status code |

!!! tip
    `Hide Classified Groups` rule is disabled by default.
