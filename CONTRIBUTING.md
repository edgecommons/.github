# Contributing to edgecommons

Thanks for contributing! This applies to every repo in the org unless a repo overrides it.

## Building a new component

1. **Scaffold** with the CLI:
   `edgecommons component new -n com.example.MyAdapter -l <JAVA|PYTHON|RUST|TYPESCRIPT> -k <service|protocol-adapter|processor|sink>`.
2. **Name** the repo flat and lowercase by what it does — `opcua-adapter`, `s7-adapter`,
   `rollup-processor`, `kafka-sink`. No `edgecommons-` prefix (the org namespaces it).
3. **Wire CI** by calling the reusable workflow:
   ```yaml
   # .github/workflows/ci.yml
   jobs:
     ci:
       uses: edgecommons/.github/.github/workflows/component-ci.yml@main
       with:
         language: PYTHON   # JAVA | PYTHON | RUST | TYPESCRIPT
   ```
4. **Topic** the repo: `edgecommons`, the category topic (`edgecommons-adapter` /
   `edgecommons-processor` / `edgecommons-sink`), `aws-iot-greengrass`, `iiot`, and a protocol topic.
5. **Register** it: open a PR adding an entry to
   [`edgecommons/registry`](https://github.com/edgecommons/registry).

## Standards

- Components build on `edgecommons` and follow its conventions (builders, the standard CLI contract,
  the protobuf message envelope). Adapters follow the
  [southbound contract](https://github.com/edgecommons/edgecommons/blob/main/docs/SOUTHBOUND.md).
- Label complete JSON message examples as human-readable projections of protobuf. Configuration JSON,
  command argument objects and browser protocols retain their own encoding contracts.
- Update status/reference docs with code changes. Distinguish implementation on main, pending branches
  and dated validation evidence. Preserve accepted designs when recording incomplete work.
- Use current files and Git history; CodeGraph and Graphify are disabled in the org workspace.
- Tests required; keep CI green before requesting review.
- Match the surrounding code style of the language/library.

## Pull requests

Use the PR template, keep changes focused, and describe what you verified. By contributing you agree
your work is licensed under the repository's license and that you follow the
[Code of Conduct](CODE_OF_CONDUCT.md).
