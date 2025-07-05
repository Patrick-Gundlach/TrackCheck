# TrackCheck

TrackCheck is a basic platform for tracking audits. The first goal is to verify whether a site implements the required Google Consent Mode and which consent tool is in use.

Current version: **00.00.01**

## Installation

1. Clone the repository.
2. Run `npm run setup` to install dependencies. The script also copies `.env.example` to `.env` if needed.
3. Start the server with `npm start`.

The server listens on port `3000` by default. Visit `/version` to see the active version.

## Update check

On startup the server calls the URL in the environment variable `UPDATE_URL`. The endpoint must return JSON in the form `{ "version": "00.00.00" }`. If the version differs from the running version a message is printed to the console.

## Used packages

- **express**: Minimal web framework for routing and middleware. <https://expressjs.com/>
- **node-fetch**: HTTP client for the update check. <https://github.com/node-fetch/node-fetch>

## Documentation

Further details about the audit can be found in `docs/audit-details.md`.

### Audit modules

The following modules are prepared for future checks:

- `gtmAnalysis`: will inspect the Google Tag Manager setup and return a list of issues.
- `consentCheck`: will verify consent mode settings and report detected platforms.
- `cookieCheck`: will list cookies before and after consent with category and source.

## Metadata

Ersteller: Patrick Gundlach – person to person Media (<https://patrickgundlach.de> / <https://ptp-media.com>)


### Troubleshooting
If you see merge conflict markers like <<<<<<< or >>>>>>>, open the listed files and keep the desired lines before committing the result.
