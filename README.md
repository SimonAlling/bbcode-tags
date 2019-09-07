# bbcode-tags

## Installation

```
npm install --save bbcode-tags
```

## Usage

```typescript
import * as BB from "bbcode-tags";

BB.start("i") + "italics" + BB.end("i"); // [i]italics[/i]

BB.start("url", "https://example.com") + "link" + BB.end("url"); // [url="https://example.com"]link[/url]

BB.empty("b"); // [b][/b]
```

## TypeScript

TypeScript declarations are included.
