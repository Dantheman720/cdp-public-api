# Change Log
##### All notable changes to this project will be documented in this file.

## [1.2.0](https://github.com/IIP-Design/cdp-public-api/tree/1.2.0) (2018-07-18)

**Features:**

- Updated custom\_taxonomies to be site\_taxonomies.
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

**Features:**

- Fix early exit on promise rejections
- Add New Relic to API

## [1.0.0](https://github.com/IIP-Design/cdp-public-api/tree/1.0.0) (2018-05-29)

**Features:**

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