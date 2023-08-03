# Speer Tech

This project is a web application built with React 18, Vite, and Tailwind CSS. It's an implementation of a call center application, featuring an activity feed, call detail view, and an archiving functionality.

## Table of Contents

- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [API Documentation](#api-documentation)

## Technologies

The project was created with:

- React 18
- Vite
- Tailwind CSS
- TypeScript

## Features

- **Activity Feed**: A simple list of calls.
- **Activity Detail**: Detailed view of a call.
- **Archive**: Users can archive (and unarchive) calls. Archived calls will no longer be displayed on the Activity Feed and are moved to a separate Archived Tab.
- **Archive All**: A button that allows users to archive all calls in the activity feed.
- **Unarchive All**: A button that allows users to unarchive all calls in the archived calls tab.

## Installation

The project can be installed with:

- npm install
- npm run dev

## API Documentation

### Routes

The API address is: https://cerulean-marlin-wig.cyclic.app/

If you run into a CORS error, prepend the base URL with this CORS Anywhere server URL: https://charming-bat-singlet.cyclic.app/

The API includes the following routes:

- **GET** - BASE_URL/activities: Get calls to display in the Activity Feed.
- **GET** - BASE_URL/activities/<call_id>: Retrieve a specific call's details.
- **PATCH** - BASE_URL/activities/<call_id>: Update a call. The only field updatable is `is_archived (bool)`.
- **PATCH** - BASE_URL/reset: Reset all calls to their initial state.

### Call Object

A call object includes:

- **id**: Unique ID of call.
- **created_at**: Creation date.
- **direction**: `inbound` or `outbound` call.
- **from**: Caller's number.
- **to**: Callee's number.
- **via**: Aircall number used for the call.
- **duration**: Duration of a call (in seconds).
- **is_archived**: Whether the call is archived or not.
- **call_type**: Can be a `missed`, `answered`, or `voicemail` call.
