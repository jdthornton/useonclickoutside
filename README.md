# @jdthornton/useonclickoutside

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/useonclickoutside.svg)](https://www.npmjs.com/package/@jdthornton/useonclickoutside)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/useonclickoutside.svg)](https://www.npmjs.com/package/@jdthornton/useonclickoutside)

React on click outside ref target hook.

## Install

```
$ npm install @jdthornton/useonclickoutside
```

## Usage

```js
import useOnClickOutside from "@jdthornton/useonclickoutside";

function App({ handleClickOutside }){
  const ref = useRef();

  useOnClickOutside(ref, handleClickOutside)

  return(
    <div ref={ref}>
      Don't click outside!
    </div>
  )
}
```
