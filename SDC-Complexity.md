## Analyse and Refactor Functions

The refactored code and the analyses of the refactored code look good!

(1) Can you also show the time complexity of the original implementation?

I think "Time Complexity" here refers to the time complexity of the original implementation, and "Optimal Time Complexity" refers to the time complexity of the refactored version. 



## Improve With Caches

### Sprint-2/improve_with_caches/making_change/making_change.py

Array and tuple creations are relatively costly operations.

From lines _X_ and _Y_,, we know `coins` can only be one of the following 9 tuples:
```
(200, 100, 50, 20, 10, 5, 2, 1)
(100, 50, 20, 10, 5, 2, 1)
(50, 20, 10, 5, 2, 1)
...
(1)
()
```

We could further improve the performance if we can
  - avoid repeatedly creating the same sub-tuples at line _Y_ (e.g. use another cache), and
  - create key as (total, a_unique_integer_identifying_the_subtuple) instead of as (total, tuple of coins)
     - There are only a small number of different sub-tuples. We can easily assign each sub-tuple a unique integer. 

---
Array and tuple creations are relatively costly operations.

From lines _X_ and _Y_, we know `coins` can only be one of the following 9 arrays:
```
[200, 100, 50, 20, 10, 5, 2, 1]
[100, 50, 20, 10, 5, 2, 1]
[50, 20, 10, 5, 2, 1]
...
[1]
[]
```

We could further improve the performance if we can
  - avoid repeatedly creating the same sub-arrays at line _Y_ (e.g. use another cache), and
  - create key as (total, a_unique_integer_identifying_the_subarray) instead of as (total, tuple of coins)
     - There are only a small number of different subarrays. We can easily assign each subarray a unique integer. 

---
Note: Even though tuple construction and dictionary lookup (lines __ and __) are O(1) operations, 
they are still relatively costly than some simple numerical computation and comparisons (lines 18 and 22).

This is unrelated to cache, but if you swap the code on lines 18-23 with the code on lines 13-16,
you can probably notice some slight improvement in performance.

## Improve with Precomputing

Can you use complexity to explain how the new implementation is better than the original implementation? 


### Sprint-2/improve_with_precomputing/common_prefix/common_prefix.py

`strings.sort()` can modify the original list passed into the function by the caller.
How can you prevent this side effect?


---

### LRU Cache

To better adhere to the **Single-Responsibility Principle** (SRP) from SOLID design principles, 
it's preferable to implement the "doubly linked list" and the "LRU Cache" as separate classes, with the linked list used inside LruCache to manage ordering.

Alternatively, `OrderedDict` can be used directly within `LruCache` to maintain order.

Could you update your code using one of these approaches?

### Linked List
Could consider calling `remove(removed)` -- less code to maintain.

Could consider delegating the node removing task to `remove()` -- less code to maintain.


What was the value of `node.next` before this line?

The code in `linked_list_test.py` expects both `.next` and `.previous` properties of the removed node to be assigned `None`. Currently your implementation could not pass the tests.

Note: Do you know the why it is a good practice to assign `.next` and `.previous` of the removed node to `None`? 

