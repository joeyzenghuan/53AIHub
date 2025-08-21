# Prompt Token 计算器

## 概述

本组件使用原生JavaScript实现了一个GPT token计算器，替代了原来的`tiktoken`库依赖。

## 实现原理

### Token计算规则

基于GPT tokenizer的工作原理，我们实现了以下规则：

1. **中文字符**: 每个中文字符对应1个token
2. **英文单词**:
   - 短单词(≤3字符): 1个token
   - 中等单词(4-6字符): 1.5个token
   - 长单词(>6字符): 按长度比例计算
3. **数字**: 连续数字按3.5个字符对应1个token
4. **标点符号**: 每个字符0.3个token
5. **空白字符**: 不计入token

### 算法特点

- **性能优化**: 使用单次遍历，避免重复计算
- **准确性**: 提供相对准确的token估算
- **轻量级**: 无外部依赖，减少包体积
- **可维护**: 纯JavaScript实现，易于调试和优化

## 使用方式

```typescript
import { calculateTokens } from "./input.vue"

const text = "Hello 世界！123"
const tokenCount = calculateTokens(text)
console.log(`Token数量: ${tokenCount}`)
```

## 注意事项

1. 这是一个**估算值**，与实际的GPT tokenizer可能有差异
2. 对于大多数业务场景，这个估算已经足够准确
3. 如果需要精确的token计算，建议使用官方的tokenizer

## 性能对比

- **tiktoken**: 精确但体积大(~1MB)，加载慢
- **原生实现**: 快速估算，体积小，加载快

## 未来优化

- 可以添加更多语言支持
- 优化特殊字符的处理逻辑
- 添加缓存机制提高性能
