## Fluentd: Open-Source Log Collector

Fluentd collects events from various data sources and writes them to files, RDBMS, NoSQL, IaaS, SaaS, Hadoop and so on. Fluentd helps you unify your logging infrastructure (Learn more about the Unified Logging Layer).

### Event

An `event` consists of `tag`, `time` and `record`. Tag is a string separated with '.' (e.g. myapp.access). It is used to categorize events. Time is a UNIX time recorded at occurrence of an event. Record is a JSON object.

### Node.js support

The `fluent-logger-node` library is used to post records from Node.js applications to Fluentd.

#### Modifying the Config Fule

> Fluentd has 7 types of plugins: Input, Parser, Filter, Output, Formatter, Storage and Buffer.

**Input plugins extend Fluentd to retrieve and pull event logs from external sources. An input plugin typically creates a thread socket and a listen socket. It can also be written to periodically pull data from data sources.**

The `in_forward` Input plugin listens to a TCP socket to receive the event stream. It also listens to an UDP socket to receive heartbeat messages. See also "protocol" section for implementation details.

This plugin is mainly used to receive event logs from other Fluentd instances, the fluent-cat command, or Fluentd client libraries. This is by far the most efficient way to retrieve the records.

#### Config File Location

```shell
$ sudo vi /etc/td-agent/td-agent.conf

```

Next, please configure Fluentd to use the forward Input plugin as its data source.

```shell

```
