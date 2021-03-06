# Change Log

##### All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 3.0.0

**Features Added:**
- Added visibility property to files.
- Worker thread responsible for fielding requests from publisher via RabbitMQ.
- Delete video functionality.

**Changed:**
- Video schema accepts string based post_id
- Updated download endpoint to accomodate filename at the end of the URL instead of built into the encoded JSON to prevent encode errors caused by non-latin characters.
- Added backwards compatability to the download endpoint.
- Added thumbnail to unit items in the video schema so that it is accepted in incoming data.
- Added supportFiles to video schema.
- Updated download route with regex in order to accomodate a parameter argument that can have slashes.
- Updated the download controller to also look for unnamed parameters captured by a regex matched request route.
- Updated env var key names.
- Updated dependencies.

## 1.4.1

**Changed:**

- Owner and Language endpoints sorted alphabetically

## 1.4.0

**Features Added:**

- Show notification when OpenNet is detected.

**Changed:**

- Import method for dotenv.

## 1.3.3

**Changed:**

- Dependencies updated.
- Added max age 1 year and preload to response headers
- Added check for thumbnail.sizes to video model.

## 1.3.2

**Security:**

- Updated dependencies with security vulnerabilities

## 1.3.1

**Changed:**

- Updated getAssets functions to retrieve thumbnail images based on new schema
- Added console log when thumbnail data is missing in validate function.

## 1.3.0

**Features Added:**

- Update thumbnail schema to move all sizes into a `sizes` object and add `name`, `alt`, `caption`, and `longdesc` properties.
- Adds language detection routes
- Adds linting package and corrects errors

**Changed:**

- Made callback error more verbose

## [1.2.0](https://github.com/IIP-Design/cdp-public-api/tree/1.2.0) (2018-07-18)

**Features Added:**

- Updated custom_taxonomies to be site_taxonomies.
- Updated the API to include the "web" or "broadcast" video property.
- Fixed tags getting duplicated after multiple updates.
- Added Vimeo implementation.
- Uncommented /auth routes so we can use /auth/vimeo.
- Added env var for enabling/disabling /auth/register: ALLOW_REGISTER=false/true
- Added vimeo auth routes (/auth/vimeo and /auth/vimeo/callback).
- Added getUnit function to abstractModel.
- Added vimeo service for making various requests against the vimeo API using the Vimeo SDK.
- Added site property to the stream object (to specify vimeo or cloudflare).
- Added logic and functionality to the transfer ctrl that uploads to vimeo instead of cloudflare when an access token is on the header.
- Added delete functionality when a vimeo token is on the header and a post is deleted.

## [1.0.1](https://github.com/IIP-Design/cdp-public-api/tree/1.0.1) (2018-06-15)

**Features Added:**

- Fix early exit on promise rejections
- Add New Relic to API

## [1.0.0](https://github.com/IIP-Design/cdp-public-api/tree/1.0.0) (2018-05-29)

**Features Added:**

- Delete files from CloudFlare when a video is deleted
- Update S3 file naming convention
- Implement PUT controller for post updates
- Save assets to S3 into a folder based on publish date
- Update taxonomy import to include translations
- Upload large videos \(1G\) to S3 only \(not to CloudFlare\)
- Create zip archive creation endpoint
- Copy thumbnails \(featured images\) into S3
- Create missing validation schemas and move schemas to schema directory
- Create post validation schema
- Store the burnedInCaptions as a Boolean and not a string
- Add taxonomy term synonym mapping support
- Accept thumbnail property on content root
- Update streamUrl property to be an array of { url, site } objects
- Move .csv files into a 'imports' folder at the root, remove unnecessary json, i.e. tax.json
- Map keywords to CDP taxonomy terms
- Create owners index
- Import language content into Elastic index
- Separate Cloudflare from the rest of the sync process
- Use encodeURI on download and HEAD requests (to avoid issues with special characters)
- Create bulk taxonomy term import endpoint
- Add language specific categories for a post
- Use mediainfo to populate the size property
- Improve handling of temp files by tracking them with a request ID
- Integrate CloudFlare Stream
- Switch constructTree methods to regular from static
- Update uploadAsset method to use dynamic type property from document
- Restructure generateController function
- Write language endpoints
- Add language specific categories for video
- Write taxonomy endpoints
- Add fallback for when content-type is application/octet-stream that looks up the content type by extension
- Allow various doc types for the transcript field
- Check md5 \(if present\) before downloading in case a download is not necessary
- Copy SRT and transcript files to the same folder that its corresponding video is in
- Only process \(download/transfer to S3\) allowed format types
- Validate video content type schema for processes
- Create Course routes, endpoints and models
- If a property value is false/null, just return it instead of trying to filter it further
- Validate video content type schema for processes
- Removed replacement of dots with dashes in UUIDs
- Ensure that document fetches only once
- Add post routes
