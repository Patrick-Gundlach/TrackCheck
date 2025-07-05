# TrackCheck

TrackCheck is a basic platform for tracking audits. The first goal is to verify whether a site implements the required Google Consent Mode and which consent tool is in use.

Current version: **00.00.01**

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Copy `.env.example` to `.env` and edit the values for your environment.
4. Start the server with `npm start`.
5. Run the test suite with `npm test`.

The server listens on port `3000` by default. Visit `/version` to see the active version.

## Configuration

TrackCheck reads two environment variables on startup.

- **PORT**: Port number for the HTTP server. Example: `PORT=3000`.
- **UPDATE_URL**: Location of the latest version information. Use a URL like `file://./config/latest.json` to load a local file or provide an HTTP endpoint returning `{ "version": "00.00.00" }`.

## Update check

When the server starts it loads the resource referenced by `UPDATE_URL`. The file or endpoint should provide JSON like `{ "version": "00.00.00" }`. If the value differs from the running version TrackCheck prints a notice so you know an update is available.

### Setting up an update server

Provide a small service that responds with the latest version. Any HTTP server works as long as it returns the JSON structure above. Alternatively you can update `config/latest.json` and set `UPDATE_URL` to `file://./config/latest.json` to keep the information local. Update the `version` field whenever you release a new build.

## Used packages

- **express**: Minimal web framework for routing and middleware. <https://expressjs.com/>
- **node-fetch**: HTTP client for the update check. <https://github.com/node-fetch/node-fetch>
- **jest**: Test runner to ensure code quality. <https://jestjs.io/>
- **supertest**: HTTP assertions for Express apps. <https://github.com/ladjs/supertest>

## Documentation

Further details about the audit can be found in `docs/audit-details.md`.

## Roadmap

Planned modules include:

- **Audit logic**: core routines for collecting tracking data and detecting issues.
- **PDF generation**: export audit results as a document for sharing.

## Metadata

Ersteller: Patrick Gundlach – person to person Media (<https://patrickgundlach.de> / <https://ptp-media.com>)

