# 内存管理

## 重点

- 栈与堆
- 智能指针：`unique_ptr`、`shared_ptr`、`weak_ptr`
- RAII 与异常安全

## 实践建议

默认使用 `std::unique_ptr` 表达所有权，必要时再引入共享所有权。
