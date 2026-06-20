# Agent Workflows Registry

This directory contains the provider-neutral workflow packages used by the Hissab case-maintenance system.

## Packages
- `case-finder` — upstream discovery and triage for new incident candidates and meaningful follow-up leads
- `case-watcher` — read-only watcher that scans tracked cases for material updates and emits queue signals
- `case-editorial` — editorial workflow that claims one queued item at a time, freezes sources, and updates case files
- `case-queue` — shared durable queue used by upstream signal producers and the editorial consumer

## Shared rules
- Upstream packages only emit structured signals.
- Case Editorial remains the only workflow that writes case files.
- The queue is the coupling point between discovery and editorial work.
