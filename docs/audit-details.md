# Audit Details

This document outlines the information that each audit should provide in the platform.

## Project Overview
- List all projects with current status and last audit date.
- Display audit history with version number, author and timestamp.

## GTM Analysis
- Validate structure of the Google Tag Manager container.
- Check naming conventions for variables, triggers and tags.
- Match tags with assigned triggers and variables.
- Highlight unused or duplicated elements.
- Detect missing events or incorrect triggers.
- Review consent logic for each tag.
- Show multilingual rules for triggers and paths.

## Consent Detection
- Identify if Google Consent Mode is in use.
- Detect the mode: default, v2, advanced or basic.
- Recognise the consent management platform and version.
- Verify that consent signals are passed correctly.
- Check if scripts are blocked until consent is granted.
- Validate the IAB TCF integration when present.

## Tracking Method
- Distinguish client-side and server-side tracking.
- When server-side tracking is used, identify the provider.
- Verify that key requests (GA4, Meta, Ads) go through the server GTM.
- Ensure the server script respects consent information.

## Cookie Check
- Show all cookies set before and after consent.
- Display category and source for each cookie.
- Identify first-party and third-party cookies.
- List known marketing cookies from common providers.
- Include cookie lifetime and flags.

## Conversion Validation
- Detect common conversion events for the project.
- Map each event to the associated tag and campaign.
- Indicate whether each conversion depends on consent.
- Show tag IDs, conversion value and currency when available.

## Recommendations
- Summarise issues by priority (Low, Medium, High).
- Provide clear next steps for each topic.

