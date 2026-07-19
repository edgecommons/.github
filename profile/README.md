<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/edgecommons-logo-horizontal-reversed.svg">
    <img src="assets/edgecommons-logo-horizontal.svg" alt="EdgeCommons" width="420">
  </picture>
</p>

<p align="center">
  <strong>Build one edge component. Deploy it natively across Greengrass, Host, and Kubernetes.</strong>
</p>

<p align="center">
  <a href="https://docs.edgecommons.mbreissi.com">Docs</a>
  &nbsp;|&nbsp;
  <a href="https://github.com/edgecommons/edgecommons">Core SDK</a>
  &nbsp;|&nbsp;
  <a href="https://github.com/edgecommons/registry">Component registry</a>
  &nbsp;|&nbsp;
  <a href="#get-started">Get started</a>
</p>

<p align="center">
  <img alt="Languages: Java, Python, Rust, TypeScript" src="https://img.shields.io/badge/languages-Java%20%7C%20Python%20%7C%20Rust%20%7C%20TypeScript-3F407A">
  <img alt="Deployment targets: Greengrass, Host, Kubernetes" src="https://img.shields.io/badge/targets-Greengrass%20%7C%20Host%20%7C%20Kubernetes-6F7FBD">
  <img alt="License: Apache 2.0" src="https://img.shields.io/badge/license-Apache--2.0-AFC7C8">
</p>

<p align="center">
  <img src="assets/edgecommons-hero-native-shell.png" alt="Abstract Native Shell illustration: a copper component contained inside a translucent runtime shell with three deployment paths." width="920">
</p>

## Portable components, native targets

EdgeCommons is the portable component SDK for industrial edge teams that want shared component
contracts without flattening every deployment environment into one runtime.

Use EdgeCommons when you want to write component logic once, in Java, Python, Rust, or TypeScript,
then deploy to the target that fits the site: AWS IoT Greengrass, a host process, or Kubernetes.
Each target keeps its native lifecycle, packaging, operations model, and platform capabilities.

## What the core provides

- A common component contract across Java, Python, Rust, and TypeScript.
- Built-in patterns for configuration, messaging, metrics, heartbeat, logging, credentials,
  parameters, and streaming.
- Templates and a CLI for starting components with the same operational shape.
- A registry-driven ecosystem of adapters, processors, sinks, bridges, services, and consoles.

## Core repositories

| Repository | Purpose |
|------------|---------|
| [**edgecommons**](https://github.com/edgecommons/edgecommons) | Core libraries, CLI, component templates, config schema, and documentation site |
| [**registry**](https://github.com/edgecommons/registry) | Machine-readable component catalog used by the CLI and this org profile |

## Components

<!-- COMPONENTS:START — generated from edgecommons/registry by scripts/generate-profile.mjs; do not edit by hand -->

**Adapters** — southbound protocol ingestion

| Component | Language | Protocol | Status | Deployment targets |
|-----------|----------|----------|--------|--------------------|
| [**camera-adapter**](https://github.com/edgecommons/camera-adapter) | Rust | ONVIF / RTSP / GenICam | Experimental | Greengrass · Host · Kubernetes |
| [**ethernet-ip-adapter**](https://github.com/edgecommons/ethernet-ip-adapter) | Rust | EtherNet/IP (Allen-Bradley CIP; explicit polling + class-1 implicit I/O) | Experimental | Greengrass · Host · Kubernetes |
| [**modbus-adapter**](https://github.com/edgecommons/modbus-adapter) | Python | Modbus (TCP / RTU / RTU-over-TCP) | Beta | Greengrass · Host · Kubernetes |
| [**opcua-adapter**](https://github.com/edgecommons/opcua-adapter) | Java | OPC UA | Beta | Greengrass · Host · Kubernetes |

**Processors** — edge compute and stream processing

| Component | Language | Status | Deployment targets |
|-----------|----------|--------|--------------------|
| [**telemetry-processor**](https://github.com/edgecommons/telemetry-processor) | Rust | Experimental | Greengrass · Host · Kubernetes |

**Sinks** — northbound delivery

| Component | Language | Status | Deployment targets |
|-----------|----------|--------|--------------------|
| [**file-replicator**](https://github.com/edgecommons/file-replicator) | Rust | Experimental | Greengrass · Host · Kubernetes |

**Bridges** — site bus and namespace integration

| Component | Language | Status | Deployment targets |
|-----------|----------|--------|--------------------|
| [**uns-bridge**](https://github.com/edgecommons/uns-bridge) | Rust | Experimental | Host · Kubernetes |

**Services** — shared edge runtime services

| Component | Language | Status | Deployment targets |
|-----------|----------|--------|--------------------|
| [**config-component**](https://github.com/edgecommons/config-component) | Rust | Experimental | Greengrass · Host · Kubernetes |

**Consoles** — edge operations and visibility

| Component | Language | Status | Deployment targets |
|-----------|----------|--------|--------------------|
| [**edge-console**](https://github.com/edgecommons/edge-console) | Rust | Experimental | Host · Kubernetes |

**Tools** — developer & operations utilities

| Component | Language | Status | Deployment targets |
|-----------|----------|--------|--------------------|
| [**uns-cmd**](https://github.com/edgecommons/uns-cmd) | Rust | Experimental | Host |

<!-- COMPONENTS:END -->

## Get started

```bash
pipx install edgecommons
edgecommons list-components
edgecommons create-component -n com.example.MyAdapter -l PYTHON
```

Read the full docs at [docs.edgecommons.mbreissi.com](https://docs.edgecommons.mbreissi.com).
Building a component? Start with the org [contributing guide](https://github.com/edgecommons/.github/blob/main/CONTRIBUTING.md).
