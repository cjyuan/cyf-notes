## Improve With Caches

### Sprint-2/improve_with_caches/making_change/making_change.py

Array creation is a relatively costly operation.

From line 29, we know `coins` can only be one of the following 9 tuples:
```
(200, 100, 50, 20, 10, 5, 2, 1)
(100, 50, 20, 10, 5, 2, 1)
(50, 20, 10, 5, 2, 1)
...
(1)
()
```

We could further improve the performance if we can
  - avoid repeatedly creating the same sub-tuples at line 29 (e.g. use another cache), and
  - create key as (total, a_unique_integer_identifying_the_subarray) instead of as (total, tuple of coins)
     - There are only a small number of different subarrays. We can map each subarray to a unique integer. 

---
Array creation is a relatively costly operation.

From line 41, we know `coins` can only be one of the following 8 arrays:
```
[200, 100, 50, 20, 10, 5, 2, 1]
[100, 50, 20, 10, 5, 2, 1]
[50, 20, 10, 5, 2, 1]
...
[1]
```

We could further improve the performance if we can
  - avoid repeatedly creating the same sub-arrays at line 41 (e.g. use another cache), and
  - create key as (total, a_unique_integer_identifying_the_subarray) instead of as (total, tuple of coins)
     - There are only a small number of different subarrays. We can map each subarray to a unique integer. 


## Improve with Precomputing

### Sprint-2/improve_with_precomputing/common_prefix/common_prefix.py

`strings.sort()` can modify the original list passed into the function by the caller.
How can you prevent this side effect?

---





