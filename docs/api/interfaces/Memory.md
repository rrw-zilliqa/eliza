[@elizaos/core v0.1.7-alpha.2](../index.md) / Memory

# Interface: Memory

Represents a stored memory/message

## Properties

### id?

> `optional` **id**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Optional unique identifier

#### Defined in

[packages/core/src/types.ts:335](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L335)

***

### userId

> **userId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Associated user ID

#### Defined in

[packages/core/src/types.ts:338](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L338)

***

### agentId

> **agentId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Associated agent ID

#### Defined in

[packages/core/src/types.ts:341](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L341)

***

### createdAt?

> `optional` **createdAt**: `number`

Optional creation timestamp

#### Defined in

[packages/core/src/types.ts:344](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L344)

***

### content

> **content**: [`Content`](Content.md)

Memory content

#### Defined in

[packages/core/src/types.ts:347](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L347)

***

### embedding?

> `optional` **embedding**: `number`[]

Optional embedding vector

#### Defined in

[packages/core/src/types.ts:350](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L350)

***

### roomId

> **roomId**: \`$\{string\}-$\{string\}-$\{string\}-$\{string\}-$\{string\}\`

Associated room ID

#### Defined in

[packages/core/src/types.ts:353](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L353)

***

### unique?

> `optional` **unique**: `boolean`

Whether memory is unique

#### Defined in

[packages/core/src/types.ts:356](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L356)

***

### similarity?

> `optional` **similarity**: `number`

Embedding similarity score

#### Defined in

[packages/core/src/types.ts:359](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L359)
