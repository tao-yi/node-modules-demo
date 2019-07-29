## Introduction

Node-config organizes hierarchical configurations for your app deployments.

It lets you define a set of default parameters, and extend them for different deployment environments (development, qa, staging, production, etc.).

Configurations are stored in configuration files within your application, and can be overridden and extended by environment variables, command line parameters, or external sources.

This gives your application a consistent configuration interface shared among a growing list of npm modules also using node-config.

### Config 目录

Node-config reads configuration files in the ./config directory for the running process, typically the application root. This can be overridden by setting the \$NODE_CONFIG_DIR environment variable to the directory containing your configuration files. It can also be set from node, before loading Node-config:

```
process.env["NODE_CONFIG_DIR"] = \_\_dirname + "/configDir/";
const config = require("config");
```

\$NODE_CONFIG_DIR can be a full path from your root directory, or a relative path from the process if the value begins with ./ or ../.

### 配置文件加载顺序

Files in the config directory are loaded in the following order:

```
default.EXT
default-{instance}.EXT
{deployment}.EXT
{deployment}-{instance}.EXT
{short_hostname}.EXT
{short_hostname}-{instance}.EXT
{short_hostname}-{deployment}.EXT
{short_hostname}-{deployment}-{instance}.EXT
{full_hostname}.EXT
{full_hostname}-{instance}.EXT
{full_hostname}-{deployment}.EXT
{full_hostname}-{deployment}-{instance}.EXT
local.EXT
local-{instance}.EXT
local-{deployment}.EXT
local-{deployment}-{instance}.EXT
(Finally, custom environment variables can override all files)
```

配置文件 default.json 示例：

```json
{
  // Customer module configs
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Set low for development
      "initialDays": 1
    }
  }
}
```

### 默认的 NODE_ENV 环境

If NODE_ENV is not set in the environment, a default value of `development` is used.
