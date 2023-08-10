# Project "RSS-aggregator"
[![Actions Status](https://github.com/Teihden/frontend-project-11/workflows/hexlet-check/badge.svg)](https://github.com/Teihden/frontend-project-11/actions)
[![CI](https://github.com/Teihden/frontend-project-11/workflows/CI/badge.svg)](https://github.com/Teihden/frontend-project-11/actions/workflows/CI.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/1b3b9d77404f3cf27cd4/maintainability)](https://codeclimate.com/github/Teihden/frontend-project-11/maintainability)

## About

RSS is a specialized format designed to describe news feeds, article announcements and other content. It is the easiest way for sites (usually blogs) to allow users to subscribe to changes. For this purpose, special services called RSS-aggregators are used. These services are able to poll RSS-feeds of sites for new posts and show them in a convenient way, marking read and so on.
**"Rss-aggregator"**  is a service for aggregating RSS feeds, which can be used to read a variety of sources, such as blogs. It allows you to add an unlimited number of RSS feeds, updates them itself and adds new entries to the common stream.

## Usage

You should have Node.js installed before proceeding. Only test JS against v18 and on macOS.

```shell
# Clone the repo
git clone https://github.com/Teihden/frontend-project-11
cd frontend-project-11

# Install dependencies
make install

## CLI

```shell
# Runs Eslint against source code for quality
make lint

# Starts the Webpack development server
make develop

# Starts the project build
make build
```
