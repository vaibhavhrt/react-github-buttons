# react-github-buttons

> React Components for dynamic buttons for github repo's start, fork etc.

[![NPM](https://img.shields.io/npm/v/react-github-buttons.svg)](https://www.npmjs.com/package/react-github-buttons)
[![Build Status](https://travis-ci.com/vaibhavhrt/react-github-buttons.svg?branch=master)](https://travis-ci.com/vaibhavhrt/react-github-buttons)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

Provies GitHub's Star, Fork, Watch etc.(See full list below) buttons with realtime numbers of star, fork etc. as React Components.

## Install

```bash
npm install --save react-github-buttons
```

## Usage

```tsx
import React from 'react';

import { Fork, Star, UsedBy, Watch } from 'react-github-buttons';

function App() {
  return (
    <div>
      <Star owner='facebook' repo='react' />
      <Fork owner='facebook' repo='react' />
      <Watch owner='facebook' repo='react' />
      <UsedBy owner='facebook' repo='react' count={2077841} />
    </div>
  )
}
```

## Issues

Issues, bugs and feature request at [github issues page](https://github.com/vaibhavhrt/react-github-buttons/issues)

-----------------------------------------------------------------------------------------------------------

## License

MIT © [vaibhavhrt](https://github.com/vaibhavhrt)
