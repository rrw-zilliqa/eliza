[@elizaos/core v0.1.7-alpha.2](../index.md) / GenerationOptions

# Interface: GenerationOptions

Configuration options for generating objects with a model.

## Properties

### runtime

> **runtime**: [`IAgentRuntime`](IAgentRuntime.md)

#### Defined in

[packages/core/src/generation.ts:1339](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1339)

***

### context

> **context**: `string`

#### Defined in

[packages/core/src/generation.ts:1340](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1340)

***

### modelClass

> **modelClass**: [`ModelClass`](../enumerations/ModelClass.md)

#### Defined in

[packages/core/src/generation.ts:1341](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1341)

***

### schema?

> `optional` **schema**: `ZodType`\<`any`, `ZodTypeDef`, `any`\>

#### Defined in

[packages/core/src/generation.ts:1342](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1342)

***

### schemaName?

> `optional` **schemaName**: `string`

#### Defined in

[packages/core/src/generation.ts:1343](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1343)

***

### schemaDescription?

> `optional` **schemaDescription**: `string`

#### Defined in

[packages/core/src/generation.ts:1344](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1344)

***

### stop?

> `optional` **stop**: `string`[]

#### Defined in

[packages/core/src/generation.ts:1345](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1345)

***

### mode?

> `optional` **mode**: `"auto"` \| `"json"` \| `"tool"`

#### Defined in

[packages/core/src/generation.ts:1346](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1346)

***

### experimental\_providerMetadata?

> `optional` **experimental\_providerMetadata**: `Record`\<`string`, `unknown`\>

#### Defined in

[packages/core/src/generation.ts:1347](https://github.com/elizaos/eliza/blob/main/packages/core/src/generation.ts#L1347)
