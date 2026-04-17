# 并发编程

## 重点

- 线程：`std::thread`
- 互斥：`std::mutex`、`std::lock_guard`
- 条件变量：`std::condition_variable`
- 原子类型：`std::atomic`

## 建议

先保证正确性，再优化性能，避免过早并发化导致复杂度失控。
