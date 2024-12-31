[@elizaos/core v0.1.7-alpha.2](../index.md) / Action

# Interface: Action

Represents an action the agent can perform

## Properties

### similes

> **similes**: `string`[]

Similar action descriptions

#### Defined in

[packages/core/src/types.ts:406](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L406)

***

### description

> **description**: `string`

Detailed description

#### Defined in

[packages/core/src/types.ts:409](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L409)

***

### examples

> **examples**: [`ActionExample`](ActionExample.md)[][]

Example usages

#### Defined in

[packages/core/src/types.ts:412](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L412)

***

### handler

> **handler**: [`Handler`](../type-aliases/Handler.md)

Handler function

#### Defined in

[packages/core/src/types.ts:415](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L415)

***

### name

> **name**: `string`

Action name

#### Defined in

[packages/core/src/types.ts:418](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L418)

***

### validate

> **validate**: [`Validator`](../type-aliases/Validator.md)

Validation function

#### Defined in

[packages/core/src/types.ts:421](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L421)

***

### suppressInitialMessage?

> `optional` **suppressInitialMessage**: `boolean`

Whether to suppress the initial message when this action is used

#### Defined in

[packages/core/src/types.ts:424](https://github.com/elizaos/eliza/blob/main/packages/core/src/types.ts#L424)
