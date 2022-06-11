# Use Policies to Protect your Microsoft 365 Environment
> GraphShield helps you to protect you Microsoft 365 environment though easy-to-configure but powerful policies.

## Policies and Rules
At its core, GraphShield provides a set of policies, each policy beeing comprised of one or more rules. In that sense, policies could be seen as a category of rules, useful to navigate rules in a logical manner.

For instance:
```mermaid
graph LR
    subgraph Policies
    classification[Classification]
    conditionalaccess[Conditional Access] 
    end

    subgraph Rules
    hideclassifiedgroups[Hide Classified Groups]
    threatintelligence[Threat Intelligence]
    ipbasedcontrol[IP-based Control]
    locationbasedcontrol[Location-based Control]
    end

    classification --> hideclassifiedgroups

    conditionalaccess --> threatintelligence
    conditionalaccess --> ipbasedcontrol
    conditionalaccess --> locationbasedcontrol
```

## Rules Configurations
Rules could be enabled or disabled individually, and have a specific configuration for each app.

For instance:
```mermaid
graph LR
    subgraph Apps
    app1[App 1]
    app2[App 2] 
    end

    subgraph Configurations
    threatintelligenceAppA[Threat Intelligence]
    threatintelligenceApp2[Threat Intelligence]
    locationbasedcontrolApp2[Location-based Control]
    hideclassifiedgroupsApp2[Hide Classified Groups]
    end

    app1 --> threatintelligenceAppA

    app2 --> threatintelligenceApp2
    app2 --> locationbasedcontrolApp2
    app2 --> hideclassifiedgroupsApp2
```
