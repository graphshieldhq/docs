# Conditional Access Policy
> GraphShield policy that controls access to the Microsoft Graph based on conditional access rules.

## Threat Intelligence
GraphShield threat intelligence database includes over 620M malicious IP addresses. Among others, we track Tor nodes and open proxies. Data is checked and updated continuously. Updates occur as changes are detected to reduce false positives to their minimum.

`Threat Intelligence` rule supports the following options:

| Option | Description |
|:-------|:------------|
| Enabled | Defines if the rule is enabled or disabled. |
| Deny Bogon | Deny IP Addresses known as [Bogon](https://en.wikipedia.org/wiki/Bogon_filtering): an unassigned, unaddressable IP address. Returns an `HTTP 403 Forbidden` status code in case of violation. |
| Deny Tor | Deny IP addresses known as Tor relays (exit relay node, middle relay node or a bridge). Returns an `HTTP 403 Forbidden` status code in case of violation. |
| Deny Proxy | Deny IP addresses known as a proxy. It includes HTTP/HTTPS/SSL/SOCKS/CONNECT and transparent proxies. Returns an `HTTP 403 Forbidden` status code in case of violation. |
| Deny Abuser | Deny IP addresses that are a known source of abuse (e.g. spam, harvesters, registration bots). Returns an `HTTP 403 Forbidden` status code in case of violation. |
| Deny Attacker | Deny IP addresses that are a known source of malicious activity (e.g. attacks, malware, botnet activity). Returns an `HTTP 403 Forbidden` status code in case of violation. |

:::tip Secure by Default
All GraphShield `Threat Intelligence` options are enabled by default.
:::

## IP-based Control
Controls access to the target API based on IP-based conditional access rules.

`IP-based Control` rule supports the following options:

| Option | Description |
|:-------|:------------|
| Enabled | Defines if the rule is enabled or disabled. |
| Allowed IPs | Authorized IP Addresses as a list of comma-separated IPs or IP ranges. It handles IPv6, IPv4, and IPv4-mapped over IPv6 addresses. Returns an `HTTP 403 Forbidden` status code in case of violation. |

:::tip
`IP-based Control` rule is disabled by default.
:::

## Location-based Control
Controls access to the target API based on location conditional access rules.

`Location-based Control` rule supports the following options:

| Option | Description |
|:-------|:------------|
| Enabled | Defines if the rule is enabled or disabled. |
| Allowed Countries | Authorized countries as a list of comma-separated country codes (The 2 letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code associated with this IP.) Returns an `HTTP 403 Forbidden` status code in case of violation. |

:::tip
`Location-based Control` rule is disabled by default.
:::
