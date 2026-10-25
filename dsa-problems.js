/**
 * DSA Sheet Problems - Single Source of Truth
 * Extracted directly from PlacementHub DSA Sheet (dsa.html)
 * Total Problems: 110
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.DSA_PROBLEMS_DATA = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  const problems = [
  {
    "name": "Reverse Array",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 1: Array (Part 1)",
    "category": "Array (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/reverse-string/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/reverse-an-array/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=80auISlKy50",
    "companies": [
      "Google"
    ],
    "id": "reverse-array"
  },
  {
    "name": "Max Subarray Sum (Kadane's)",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 1: Array (Part 1)",
    "category": "Array (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/maximum-subarray/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/largest-sum-contiguous-subarray/",
    "youtubeUrl": "https://www.youtube.com/watch?v=86CQq3pKSUw",
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "id": "max-subarray-sum-kadane-s"
  },
  {
    "name": "Two Sum Problem",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 1: Array (Part 1)",
    "category": "Array (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/two-sum/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/key-pair5616/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=n0m_t12UxYU",
    "companies": [
      "Google",
      "Facebook"
    ],
    "id": "two-sum-problem"
  },
  {
    "name": "3Sum Problem",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 1: Array (Part 1)",
    "category": "Array (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/3sum/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/find-triplets-array-sum-given-number/",
    "youtubeUrl": "https://www.youtube.com/watch?v=DhFbtuKLg1c",
    "companies": [
      "Bloomberg"
    ],
    "id": "3sum-problem"
  },
  {
    "name": "Longest Consecutive Sequence",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 1: Array (Part 1)",
    "category": "Array (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/longest-consecutive/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/0",
    "youtubeUrl": "https://www.youtube.com/watch?v=0HrWktyKIw8",
    "companies": [
      "Apple"
    ],
    "id": "longest-consecutive-sequence"
  },
  {
    "name": "Merge Sorted Arrays",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 1: Array (Part 1)",
    "category": "Array (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/merge-sorted-array/",
    "articleUrl": "https://www.geeksforgeeks.org/merge-two-sorted-arrays/",
    "youtubeUrl": "https://www.youtube.com/watch?v=l0YC3xIUgMM",
    "companies": [
      "Adobe"
    ],
    "id": "merge-sorted-arrays"
  },
  {
    "name": "Reverse String",
    "difficulty": "Easy",
    "duration": 15,
    "section": "Day 2: Strings (Part 1)",
    "category": "Strings (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/reverse-string/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/reverse-string--141628/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=l0YC3xIUgMM",
    "companies": [
      "Google"
    ],
    "id": "reverse-string"
  },
  {
    "name": "Palindrome Check",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 2: Strings (Part 1)",
    "category": "Strings (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/valid-palindrome/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/palindrome-string0817/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=pKO9UjSG7F4",
    "companies": [
      "Amazon"
    ],
    "id": "palindrome-check"
  },
  {
    "name": "Longest Substring Without Repeating",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 2: Strings (Part 1)",
    "category": "Strings (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/length-of-the-longest-substring-without-repeating-characters/",
    "youtubeUrl": "https://www.youtube.com/watch?v=qtVZAJluCNs",
    "companies": [
      "Microsoft"
    ],
    "id": "longest-substring-without-repeating"
  },
  {
    "name": "Anagram Check",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 2: Strings (Part 1)",
    "category": "Strings (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/valid-anagram/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/anagram-1587115620/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=wjFBKEBhyMQ",
    "companies": [
      "Adobe"
    ],
    "id": "anagram-check"
  },
  {
    "name": "Regular Expression Matching",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 2: Strings (Part 1)",
    "category": "Strings (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/regular-expression-matching/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/regular-expressions-in-java/",
    "youtubeUrl": "https://www.youtube.com/watch?v=w6zypH8IvnU",
    "companies": [
      "Google"
    ],
    "id": "regular-expression-matching"
  },
  {
    "name": "Reverse Linked List",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 3: Linked List (Part 1)",
    "category": "Linked List (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/reverse-linked-list/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=a02LXxIr2P4",
    "companies": [
      "Amazon"
    ],
    "id": "reverse-linked-list"
  },
  {
    "name": "Detect Cycle in Linked List",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 3: Linked List (Part 1)",
    "category": "Linked List (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/linked-list-cycle/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/0",
    "youtubeUrl": "https://www.youtube.com/watch?v=zbozWoMgKW0",
    "companies": [
      "Facebook"
    ],
    "id": "detect-cycle-in-linked-list"
  },
  {
    "name": "Merge Two Sorted Lists",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 3: Linked List (Part 1)",
    "category": "Linked List (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/0",
    "youtubeUrl": "https://www.youtube.com/watch?v=71XayU9_FSY",
    "companies": [
      "Google"
    ],
    "id": "merge-two-sorted-lists"
  },
  {
    "name": "LRU Cache",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 3: Linked List (Part 1)",
    "category": "Linked List (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/lru-cache/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/lru-cache-implementation/",
    "youtubeUrl": "https://www.youtube.com/watch?v=kYufX86PT6c",
    "companies": [
      "Amazon",
      "Bloomberg"
    ],
    "id": "lru-cache"
  },
  {
    "name": "Remove Nth Node From End",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 4: Linked List (Part 2)",
    "category": "Linked List (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/remove-nth-node-from-end-of-list/",
    "youtubeUrl": "https://www.youtube.com/watch?v=XVuQxVej6y8",
    "companies": [
      "Amazon"
    ],
    "id": "remove-nth-node-from-end"
  },
  {
    "name": "Palindrome Linked List",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 4: Linked List (Part 2)",
    "category": "Linked List (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/palindrome-linked-list/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=yOzXX-QOF-U",
    "companies": [
      "Microsoft"
    ],
    "id": "palindrome-linked-list"
  },
  {
    "name": "Flatten Multilevel List",
    "difficulty": "Hard",
    "duration": 40,
    "section": "Day 4: Linked List (Part 2)",
    "category": "Linked List (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/flatten-a-linked-list-with-next-and-child-pointers/",
    "youtubeUrl": "https://www.youtube.com/watch?v=0w5kxfQq6Ok",
    "companies": [
      "Google"
    ],
    "id": "flatten-multilevel-list"
  },
  {
    "name": "Copy List with Random Pointer",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 4: Linked List (Part 2)",
    "category": "Linked List (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/a-linked-list-with-next-and-arbit-pointer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=7k-P0N5kD3E",
    "companies": [
      "Amazon"
    ],
    "id": "copy-list-with-random-pointer"
  },
  {
    "name": "Valid Parentheses",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 5: Stacks & Queues",
    "category": "Stacks & Queues",
    "practiceUrl": "https://leetcode.com/problems/valid-parentheses/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/check-for-balanced-parentheses-in-an-expression/",
    "youtubeUrl": "https://www.youtube.com/watch?v=WL_dVH2cPE8",
    "companies": [
      "Amazon"
    ],
    "id": "valid-parentheses"
  },
  {
    "name": "Implement Queue Using Stacks",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 5: Stacks & Queues",
    "category": "Stacks & Queues",
    "practiceUrl": "https://leetcode.com/problems/implement-queue-using-stacks/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/queue-using-stack/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=F8p7FhIo2f8",
    "companies": [
      "Microsoft"
    ],
    "id": "implement-queue-using-stacks"
  },
  {
    "name": "Trapping Rain Water",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 5: Stacks & Queues",
    "category": "Stacks & Queues",
    "practiceUrl": "https://leetcode.com/problems/trapping-rain-water/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/trapping-rain-water/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ZI2z5pq0TqA",
    "companies": [
      "Google"
    ],
    "id": "trapping-rain-water"
  },
  {
    "name": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "duration": 40,
    "section": "Day 5: Stacks & Queues",
    "category": "Stacks & Queues",
    "practiceUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/largest-rectangle-in-histogram/",
    "youtubeUrl": "https://www.youtube.com/watch?v=VNbkzsnllsU",
    "companies": [
      "Amazon"
    ],
    "id": "largest-rectangle-in-histogram"
  },
  {
    "name": "Min Stack",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 5: Stacks & Queues",
    "category": "Stacks & Queues",
    "practiceUrl": "https://leetcode.com/problems/min-stack/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/design-a-stack-that-supports-getmin-in-o-1-time-and-o-1-extra-space/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ZvHeWEeHsPE",
    "companies": [
      "Facebook"
    ],
    "id": "min-stack"
  },
  {
    "name": "Inorder Traversal",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 6: Binary Trees (Part 1)",
    "category": "Binary Trees (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/inorder-traversal/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=nzmtCFNJTbQ",
    "companies": [
      "Amazon"
    ],
    "id": "inorder-traversal"
  },
  {
    "name": "Level Order Traversal",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 6: Binary Trees (Part 1)",
    "category": "Binary Trees (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/level-order-traversal/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=mIX0vj7ZrTs",
    "companies": [
      "Google"
    ],
    "id": "level-order-traversal"
  },
  {
    "name": "Same Tree",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 6: Binary Trees (Part 1)",
    "category": "Binary Trees (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/same-tree/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-two-trees-are-same/",
    "youtubeUrl": "https://www.youtube.com/watch?v=vPqdPEgrn5I",
    "companies": [
      "Microsoft"
    ],
    "id": "same-tree"
  },
  {
    "name": "Invert Binary Tree",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 6: Binary Trees (Part 1)",
    "category": "Binary Trees (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/invert-binary-tree/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/invert-a-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=aJjDM4FCkLk",
    "companies": [
      "Amazon"
    ],
    "id": "invert-binary-tree"
  },
  {
    "name": "Maximum Depth",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 6: Binary Trees (Part 1)",
    "category": "Binary Trees (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=eD3wLu7GEEA",
    "companies": [
      "Facebook"
    ],
    "id": "maximum-depth"
  },
  {
    "name": "Balanced Binary Tree",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 7: Binary Trees (Part 2)",
    "category": "Binary Trees (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/balanced-binary-tree/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/balanced-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=LU4fGD-fgJQ",
    "companies": [
      "Amazon"
    ],
    "id": "balanced-binary-tree"
  },
  {
    "name": "Path Sum",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 7: Binary Trees (Part 2)",
    "category": "Binary Trees (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/path-sum/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/root-to-leaf-path-sum/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=Jq5iMvjgNrQ",
    "companies": [
      "Microsoft"
    ],
    "id": "path-sum"
  },
  {
    "name": "Path Sum II",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 7: Binary Trees (Part 2)",
    "category": "Binary Trees (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/path-sum-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/path-sum-in-a-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=i81V0RLl6d8",
    "companies": [
      "Google"
    ],
    "id": "path-sum-ii"
  },
  {
    "name": "Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 7: Binary Trees (Part 2)",
    "category": "Binary Trees (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/maximum-path-sum-in-a-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=5KUg0IqaVBc",
    "companies": [
      "Amazon"
    ],
    "id": "binary-tree-maximum-path-sum"
  },
  {
    "name": "Number of Islands",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 8: Graphs & DFS",
    "category": "Graphs & DFS",
    "practiceUrl": "https://leetcode.com/problems/number-of-islands/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-number-of-islands/",
    "youtubeUrl": "https://www.youtube.com/watch?v=9FjB1qQSLf4",
    "companies": [
      "Amazon"
    ],
    "id": "number-of-islands"
  },
  {
    "name": "Surrounded Regions",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 8: Graphs & DFS",
    "category": "Graphs & DFS",
    "practiceUrl": "https://leetcode.com/problems/surrounded-regions/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/surrounded-regions-leetcode/",
    "youtubeUrl": "https://www.youtube.com/watch?v=v3Bz9K8C1cE",
    "companies": [
      "Google"
    ],
    "id": "surrounded-regions"
  },
  {
    "name": "Clone Graph",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 8: Graphs & DFS",
    "category": "Graphs & DFS",
    "practiceUrl": "https://leetcode.com/problems/clone-graph/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/clone-a-graph/",
    "youtubeUrl": "https://www.youtube.com/watch?v=4L7Q9NnHl4k",
    "companies": [
      "Microsoft"
    ],
    "id": "clone-graph"
  },
  {
    "name": "Word Search",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 8: Graphs & DFS",
    "category": "Graphs & DFS",
    "practiceUrl": "https://leetcode.com/problems/word-search/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/word-search/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=i1BpIm3sWE4",
    "companies": [
      "Facebook"
    ],
    "id": "word-search"
  },
  {
    "name": "Word Search II",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 8: Graphs & DFS",
    "category": "Graphs & DFS",
    "practiceUrl": "https://leetcode.com/problems/word-search-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/word-search-ii/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=Sc1Qz-6qCrE",
    "companies": [
      "Amazon"
    ],
    "id": "word-search-ii"
  },
  {
    "name": "Course Schedule",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 9: BFS & Graphs (Part 2)",
    "category": "BFS & Graphs (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/course-schedule/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/course-schedule-i/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=Akt3ZpnyG80",
    "companies": [
      "Amazon"
    ],
    "id": "course-schedule"
  },
  {
    "name": "Course Schedule II",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 9: BFS & Graphs (Part 2)",
    "category": "BFS & Graphs (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/course-schedule-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/course-schedule/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=rZNUc-iDg_4",
    "companies": [
      "Google"
    ],
    "id": "course-schedule-ii"
  },
  {
    "name": "Alien Dictionary",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 9: BFS & Graphs (Part 2)",
    "category": "BFS & Graphs (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/alien-dictionary/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=6kTZxOO7Yl8",
    "companies": [
      "Microsoft"
    ],
    "id": "alien-dictionary"
  },
  {
    "name": "Network Delay Time",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 9: BFS & Graphs (Part 2)",
    "category": "BFS & Graphs (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/network-delay-time/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/network-delay-time/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=9Aa7fKLU2Uw",
    "companies": [
      "Facebook"
    ],
    "id": "network-delay-time"
  },
  {
    "name": "Climbing Stairs",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 10: Dynamic Programming (Part 1)",
    "category": "Dynamic Programming (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/climbing-stairs/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/count-ways-to-reach-the-nth-stair/",
    "youtubeUrl": "https://www.youtube.com/watch?v=mDxtMJjdLkE",
    "companies": [
      "Amazon"
    ],
    "id": "climbing-stairs"
  },
  {
    "name": "House Robber",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 10: Dynamic Programming (Part 1)",
    "category": "Dynamic Programming (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/house-robber/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/maximum-money2855/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=xlvznje5Z2o",
    "companies": [
      "Google"
    ],
    "id": "house-robber"
  },
  {
    "name": "House Robber II",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 10: Dynamic Programming (Part 1)",
    "category": "Dynamic Programming (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/house-robber-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/house-robber-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=rq_DbNjZIAE",
    "companies": [
      "Microsoft"
    ],
    "id": "house-robber-ii"
  },
  {
    "name": "Word Break",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 10: Dynamic Programming (Part 1)",
    "category": "Dynamic Programming (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/word-break/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/word-break1352/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=Sx4PiNU-P5w",
    "companies": [
      "Facebook"
    ],
    "id": "word-break"
  },
  {
    "name": "Word Break II",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 10: Dynamic Programming (Part 1)",
    "category": "Dynamic Programming (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/word-break-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/word-break-part-23249/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=qKV29UxKqOQ",
    "companies": [
      "Amazon"
    ],
    "id": "word-break-ii"
  },
  {
    "name": "LIS",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 11: DP (Part 2) - Longest Subsequence",
    "category": "DP (Part 2) - Longest Subsequence",
    "practiceUrl": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/0",
    "youtubeUrl": "https://www.youtube.com/watch?v=BYCFXX7Vw8A",
    "companies": [
      "Amazon"
    ],
    "id": "lis"
  },
  {
    "name": "LCS",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 11: DP (Part 2) - Longest Subsequence",
    "category": "DP (Part 2) - Longest Subsequence",
    "practiceUrl": "https://leetcode.com/problems/longest-common-subsequence/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/0",
    "youtubeUrl": "https://www.youtube.com/watch?v=oxnSaF40Gn8",
    "companies": [
      "Google"
    ],
    "id": "lcs"
  },
  {
    "name": "Edit Distance",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 11: DP (Part 2) - Longest Subsequence",
    "category": "DP (Part 2) - Longest Subsequence",
    "practiceUrl": "https://leetcode.com/problems/edit-distance/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/edit-distance3702/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=Xo2Z7j1hhXY",
    "companies": [
      "Microsoft"
    ],
    "id": "edit-distance"
  },
  {
    "name": "Distinct Subsequences",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 11: DP (Part 2) - Longest Subsequence",
    "category": "DP (Part 2) - Longest Subsequence",
    "practiceUrl": "https://leetcode.com/problems/distinct-subsequences/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/number-of-distinct-subsequences0909/0",
    "youtubeUrl": "https://www.youtube.com/watch?v=VeNp03DhYu0",
    "companies": [
      "Facebook"
    ],
    "id": "distinct-subsequences"
  },
  {
    "name": "Best Time to Buy Stock",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 11: DP (Part 2) - Longest Subsequence",
    "category": "DP (Part 2) - Longest Subsequence",
    "practiceUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/buy-stock-2/0",
    "youtubeUrl": "https://www.youtube.com/watch?v=1Lv1z_3EH7c",
    "companies": [
      "Amazon"
    ],
    "id": "best-time-to-buy-stock"
  },
  {
    "name": "Unique Paths",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 12: DP (Part 3) - 2D DP",
    "category": "DP (Part 3) - 2D DP",
    "practiceUrl": "https://leetcode.com/problems/unique-paths/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/count-the-number-of-ways-to-reach-dest-in-a-maze/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2ZGgKV0KwFw",
    "companies": [
      "Amazon"
    ],
    "id": "unique-paths"
  },
  {
    "name": "Minimum Path Sum",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 12: DP (Part 3) - 2D DP",
    "category": "DP (Part 3) - 2D DP",
    "practiceUrl": "https://leetcode.com/problems/minimum-path-sum/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-path-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=lBRPBjdWt74",
    "companies": [
      "Google"
    ],
    "id": "minimum-path-sum"
  },
  {
    "name": "Maximal Square",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 12: DP (Part 3) - 2D DP",
    "category": "DP (Part 3) - 2D DP",
    "practiceUrl": "https://leetcode.com/problems/maximal-square/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/maximal-square/",
    "youtubeUrl": "https://www.youtube.com/watch?v=M25IBvexA40",
    "companies": [
      "Microsoft"
    ],
    "id": "maximal-square"
  },
  {
    "name": "Interleaving String",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 12: DP (Part 3) - 2D DP",
    "category": "DP (Part 3) - 2D DP",
    "practiceUrl": "https://leetcode.com/problems/interleaving-string/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/check-if-string-is-interleaving-of-two-other-strings/",
    "youtubeUrl": "https://www.youtube.com/watch?v=gh1JgNGVVr4",
    "companies": [
      "Facebook"
    ],
    "id": "interleaving-string"
  },
  {
    "name": "Jump Game",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 13: Greedy Algorithms",
    "category": "Greedy Algorithms",
    "practiceUrl": "https://leetcode.com/problems/jump-game/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/jump-game/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=UZUUiZiM65s",
    "companies": [
      "Amazon"
    ],
    "id": "jump-game"
  },
  {
    "name": "Jump Game II",
    "difficulty": "Hard",
    "duration": 40,
    "section": "Day 13: Greedy Algorithms",
    "category": "Greedy Algorithms",
    "practiceUrl": "https://leetcode.com/problems/jump-game-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/jump-game-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=SFzJLfh8Hus",
    "companies": [
      "Google"
    ],
    "id": "jump-game-ii"
  },
  {
    "name": "Gas Station",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 13: Greedy Algorithms",
    "category": "Greedy Algorithms",
    "practiceUrl": "https://leetcode.com/problems/gas-station/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/circular-tour-1587115620/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=D7yc0QKGW2w",
    "companies": [
      "Microsoft"
    ],
    "id": "gas-station"
  },
  {
    "name": "Hand of Straights",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 13: Greedy Algorithms",
    "category": "Greedy Algorithms",
    "practiceUrl": "https://leetcode.com/problems/hand-of-straights/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/hand-of-straights/",
    "youtubeUrl": "https://www.youtube.com/watch?v=aAMcJTJzVnE",
    "companies": [
      "Facebook"
    ],
    "id": "hand-of-straights"
  },
  {
    "name": "Candy",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 13: Greedy Algorithms",
    "category": "Greedy Algorithms",
    "practiceUrl": "https://leetcode.com/problems/candy/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/candy/0",
    "youtubeUrl": "https://www.youtube.com/watch?v=U6v3wyJ6k-E",
    "companies": [
      "Amazon"
    ],
    "id": "candy"
  },
  {
    "name": "Permutations",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 14: Backtracking (Part 1)",
    "category": "Backtracking (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/permutations/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/write-a-c-program-to-print-all-permutations-of-a-given-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=RJVL80ecg0s",
    "companies": [
      "Amazon"
    ],
    "id": "permutations"
  },
  {
    "name": "Permutations II",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 14: Backtracking (Part 1)",
    "category": "Backtracking (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/permutations-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/permute-a-string-by-changing-case/",
    "youtubeUrl": "https://www.youtube.com/watch?v=6v6xqN8THVM",
    "companies": [
      "Google"
    ],
    "id": "permutations-ii"
  },
  {
    "name": "Combinations",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 14: Backtracking (Part 1)",
    "category": "Backtracking (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/combinations/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/print-all-possible-combinations-of-r-elements-in-a-given-array-of-n-elements/",
    "youtubeUrl": "https://www.youtube.com/watch?v=8bKv1_6xHx8",
    "companies": [
      "Microsoft"
    ],
    "id": "combinations"
  },
  {
    "name": "Combination Sum",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 14: Backtracking (Part 1)",
    "category": "Backtracking (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/combination-sum/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/combination-sum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=MAJxWM8_pxo",
    "companies": [
      "Facebook"
    ],
    "id": "combination-sum"
  },
  {
    "name": "Combination Sum II",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 14: Backtracking (Part 1)",
    "category": "Backtracking (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/combination-sum-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/combination-sum-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=I2BVL8J4qUU",
    "companies": [
      "Amazon"
    ],
    "id": "combination-sum-ii"
  },
  {
    "name": "Subsets",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 15: Backtracking (Part 2)",
    "category": "Backtracking (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/subsets/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/print-all-subsets-of-given-size/",
    "youtubeUrl": "https://www.youtube.com/watch?v=bP2E9lпочаток",
    "companies": [
      "Amazon"
    ],
    "id": "subsets"
  },
  {
    "name": "Subsets II",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 15: Backtracking (Part 2)",
    "category": "Backtracking (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/subsets-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/subsets-ii/",
    "youtubeUrl": "https://www.youtube.com/watch?v=CFx1G1c8Jvw",
    "companies": [
      "Google"
    ],
    "id": "subsets-ii"
  },
  {
    "name": "Sudoku Solver",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 15: Backtracking (Part 2)",
    "category": "Backtracking (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/sudoku-solver/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/sudoku-backtracking-7/",
    "youtubeUrl": "https://www.youtube.com/watch?v=K3Y_eKScSXE",
    "companies": [
      "Microsoft"
    ],
    "id": "sudoku-solver"
  },
  {
    "name": "N-Queens",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 15: Backtracking (Part 2)",
    "category": "Backtracking (Part 2)",
    "practiceUrl": "https://leetcode.com/problems/n-queens/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/n-queen-problem0315/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=wGbuCyNpxIQ",
    "companies": [
      "Facebook"
    ],
    "id": "n-queens"
  },
  {
    "name": "Single Number",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 16: Bit Manipulation",
    "category": "Bit Manipulation",
    "practiceUrl": "https://leetcode.com/problems/single-number/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-element-that-appears-once/",
    "youtubeUrl": "https://www.youtube.com/watch?v=zL-u5nsBPsE",
    "companies": [
      "Amazon"
    ],
    "id": "single-number"
  },
  {
    "name": "Single Number II",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 16: Bit Manipulation",
    "category": "Bit Manipulation",
    "practiceUrl": "https://leetcode.com/problems/single-number-ii/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/find-the-element-that-appears-once-in-array-where-every-other-element-appears-twice/",
    "youtubeUrl": "https://www.youtube.com/watch?v=K8JfK3sJi9c",
    "companies": [
      "Google"
    ],
    "id": "single-number-ii"
  },
  {
    "name": "Sum of Two Integers",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 16: Bit Manipulation",
    "category": "Bit Manipulation",
    "practiceUrl": "https://leetcode.com/problems/sum-of-two-integers/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/add-two-numbers-without-using-arithmetic-operator/",
    "youtubeUrl": "https://www.youtube.com/watch?v=IXzakKDAMAw",
    "companies": [
      "Microsoft"
    ],
    "id": "sum-of-two-integers"
  },
  {
    "name": "Number of 1 Bits",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 16: Bit Manipulation",
    "category": "Bit Manipulation",
    "practiceUrl": "https://leetcode.com/problems/number-of-1-bits/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=XC70t_c6aXc",
    "companies": [
      "Facebook"
    ],
    "id": "number-of-1-bits"
  },
  {
    "name": "Reverse Bits",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 16: Bit Manipulation",
    "category": "Bit Manipulation",
    "practiceUrl": "https://leetcode.com/problems/reverse-bits/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/reverse-bits-of-an-integer/",
    "youtubeUrl": "https://www.youtube.com/watch?v=YM7pSKiJzJU",
    "companies": [
      "Amazon"
    ],
    "id": "reverse-bits"
  },
  {
    "name": "Search Insert Position",
    "difficulty": "Easy",
    "duration": 20,
    "section": "Day 17: Sorting & Searching (Part 1)",
    "category": "Sorting & Searching (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/search-insert-position/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/search-insert-position/",
    "youtubeUrl": "https://www.youtube.com/watch?v=0pqLK60-DhI",
    "companies": [
      "Amazon"
    ],
    "id": "search-insert-position"
  },
  {
    "name": "Search 2D Matrix",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 17: Sorting & Searching (Part 1)",
    "category": "Sorting & Searching (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/search-a-2d-matrix/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/search-a-2d-matrix/",
    "youtubeUrl": "https://www.youtube.com/watch?v=ZH0e7b8nXXU",
    "companies": [
      "Google"
    ],
    "id": "search-2d-matrix"
  },
  {
    "name": "First Bad Version",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 17: Sorting & Searching (Part 1)",
    "category": "Sorting & Searching (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/first-bad-version/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/first-bad-version/",
    "youtubeUrl": "https://www.youtube.com/watch?v=XdXQAaVX8a4",
    "companies": [
      "Microsoft"
    ],
    "id": "first-bad-version"
  },
  {
    "name": "Find First & Last Position",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 17: Sorting & Searching (Part 1)",
    "category": "Sorting & Searching (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/find-first-and-last-occurrence-of-element-in-sorted-array/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Vks_NqBEL3s",
    "companies": [
      "Facebook"
    ],
    "id": "find-first-last-position"
  },
  {
    "name": "Search in Rotated Array",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 17: Sorting & Searching (Part 1)",
    "category": "Sorting & Searching (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=QdVrUwfzfMs",
    "companies": [
      "Amazon"
    ],
    "id": "search-in-rotated-array"
  },
  {
    "name": "Validate BST",
    "difficulty": "Medium",
    "duration": 30,
    "section": "Day 18: BST (Part 1)",
    "category": "BST (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/validate-binary-search-tree/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/validate-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=f-sj7I5oH6c",
    "companies": [
      "Amazon"
    ],
    "id": "validate-bst"
  },
  {
    "name": "Kth Smallest in BST",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 18: BST (Part 1)",
    "category": "BST (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=BkrdLo-nkrw",
    "companies": [
      "Google"
    ],
    "id": "kth-smallest-in-bst"
  },
  {
    "name": "Lowest Common Ancestor BST",
    "difficulty": "Easy",
    "duration": 25,
    "section": "Day 18: BST (Part 1)",
    "category": "BST (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=m8eWfvSGWQ4",
    "companies": [
      "Microsoft"
    ],
    "id": "lowest-common-ancestor-bst"
  },
  {
    "name": "BST Iterator",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 18: BST (Part 1)",
    "category": "BST (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/binary-search-tree-iterator/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/binary-search-tree-iterator/",
    "youtubeUrl": "https://www.youtube.com/watch?v=P3n1j37BZ5Q",
    "companies": [
      "Facebook"
    ],
    "id": "bst-iterator"
  },
  {
    "name": "Inorder Successor in BST",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 18: BST (Part 1)",
    "category": "BST (Part 1)",
    "practiceUrl": "https://leetcode.com/problems/inorder-successor-in-bst/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/inorder-successor-in-binary-search-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=DvI6b1cqzqw",
    "companies": [
      "Amazon"
    ],
    "id": "inorder-successor-in-bst"
  },
  {
    "name": "Kth Largest Element",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 19: Heaps & Priority Queues",
    "category": "Heaps & Priority Queues",
    "practiceUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/kth-largest-element5034/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=XEmy13g1Qxc",
    "companies": [
      "Amazon"
    ],
    "id": "kth-largest-element"
  },
  {
    "name": "Merge K Sorted Lists",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 19: Heaps & Priority Queues",
    "category": "Heaps & Priority Queues",
    "practiceUrl": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-k-sorted-linked-lists/",
    "youtubeUrl": "https://www.youtube.com/watch?v=gA_i1Z03SXQ",
    "companies": [
      "Google"
    ],
    "id": "merge-k-sorted-lists"
  },
  {
    "name": "Top K Frequent Elements",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 19: Heaps & Priority Queues",
    "category": "Heaps & Priority Queues",
    "practiceUrl": "https://leetcode.com/problems/top-k-frequent-elements/",
    "articleUrl": "https://www.geeksforgeeks.org/problems/top-k-frequent-elements-in-array/1",
    "youtubeUrl": "https://www.youtube.com/watch?v=YPTqKIgVk-k",
    "companies": [
      "Microsoft"
    ],
    "id": "top-k-frequent-elements"
  },
  {
    "name": "Find Median from Data Stream",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 19: Heaps & Priority Queues",
    "category": "Heaps & Priority Queues",
    "practiceUrl": "https://leetcode.com/problems/find-median-from-data-stream/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/find-median-in-stream/",
    "youtubeUrl": "https://www.youtube.com/watch?v=itmhHiLZclw",
    "companies": [
      "Facebook"
    ],
    "id": "find-median-from-data-stream"
  },
  {
    "name": "Reorganize String",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 19: Heaps & Priority Queues",
    "category": "Heaps & Priority Queues",
    "practiceUrl": "https://leetcode.com/problems/reorganize-string/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/reorganize-string/",
    "youtubeUrl": "https://www.youtube.com/watch?v=2g_K5UQJsZE",
    "companies": [
      "Amazon"
    ],
    "id": "reorganize-string"
  },
  {
    "name": "Implement Trie",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 20: Trie & Hashing",
    "category": "Trie & Hashing",
    "practiceUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/trie-insert-and-search/",
    "youtubeUrl": "https://www.youtube.com/watch?v=zIjfhVPRZCg",
    "companies": [
      "Amazon"
    ],
    "id": "implement-trie"
  },
  {
    "name": "Search Suggestions System",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 20: Trie & Hashing",
    "category": "Trie & Hashing",
    "practiceUrl": "https://leetcode.com/problems/search-suggestions-system/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/search-suggestions-system/",
    "youtubeUrl": "https://www.youtube.com/watch?v=xBjzJQw5i8c",
    "companies": [
      "Google"
    ],
    "id": "search-suggestions-system"
  },
  {
    "name": "Design Autocomplete System",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 20: Trie & Hashing",
    "category": "Trie & Hashing",
    "practiceUrl": "https://leetcode.com/problems/design-search-autocomplete-system/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/design-search-autocomplete-system/",
    "youtubeUrl": "https://www.youtube.com/watch?v=xCi24yrW3R8",
    "companies": [
      "Microsoft"
    ],
    "id": "design-autocomplete-system"
  },
  {
    "name": "Group Anagrams",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 20: Trie & Hashing",
    "category": "Trie & Hashing",
    "practiceUrl": "https://leetcode.com/problems/group-anagrams/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/group-anagrams/",
    "youtubeUrl": "https://www.youtube.com/watch?v=auf7JjLzhOo",
    "companies": [
      "Facebook"
    ],
    "id": "group-anagrams"
  },
  {
    "name": "Construct BT from Traversal",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 21-23: Advanced Trees & Intervals",
    "category": "Advanced Trees & Intervals",
    "practiceUrl": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/construct-tree-from-given-inorder-and-preorder-traversal/",
    "youtubeUrl": "https://www.youtube.com/watch?v=aZNaLrVebKc",
    "companies": [
      "Amazon"
    ],
    "id": "construct-bt-from-traversal"
  },
  {
    "name": "Merge Intervals",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 21-23: Advanced Trees & Intervals",
    "category": "Advanced Trees & Intervals",
    "practiceUrl": "https://leetcode.com/problems/merge-intervals/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/merge-overlapping-intervals/",
    "youtubeUrl": "https://www.youtube.com/watch?v=46mHiPcAF9c",
    "companies": [
      "Google"
    ],
    "id": "merge-intervals"
  },
  {
    "name": "Insert Interval",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 21-23: Advanced Trees & Intervals",
    "category": "Advanced Trees & Intervals",
    "practiceUrl": "https://leetcode.com/problems/insert-interval/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/insert-interval/",
    "youtubeUrl": "https://www.youtube.com/watch?v=9FtbVzFfaFg",
    "companies": [
      "Microsoft"
    ],
    "id": "insert-interval"
  },
  {
    "name": "Sliding Window Maximum",
    "difficulty": "Hard",
    "duration": 45,
    "section": "Day 24-25: Sliding Window & Hash Maps",
    "category": "Sliding Window & Hash Maps",
    "practiceUrl": "https://leetcode.com/problems/sliding-window-maximum/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/sliding-window-maximum/",
    "youtubeUrl": "https://www.youtube.com/watch?v=xNULqtNpwkE",
    "companies": [
      "Amazon"
    ],
    "id": "sliding-window-maximum"
  },
  {
    "name": "Minimum Window Substring",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 24-25: Sliding Window & Hash Maps",
    "category": "Sliding Window & Hash Maps",
    "practiceUrl": "https://leetcode.com/problems/minimum-window-substring/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/minimum-window-substring/",
    "youtubeUrl": "https://www.youtube.com/watch?v=jSto0O90qUE",
    "companies": [
      "Google"
    ],
    "id": "minimum-window-substring"
  },
  {
    "name": "Substring Concatenation",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 24-25: Sliding Window & Hash Maps",
    "category": "Sliding Window & Hash Maps",
    "practiceUrl": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/substring-with-concatenation-of-all-words/",
    "youtubeUrl": "https://www.youtube.com/watch?v=EJj-OsH0SBU",
    "companies": [
      "Microsoft"
    ],
    "id": "substring-concatenation"
  },
  {
    "name": "LRU Cache",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 24-25: Sliding Window & Hash Maps",
    "category": "Sliding Window & Hash Maps",
    "practiceUrl": "https://leetcode.com/problems/lru-cache/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/lru-cache-implementation/",
    "youtubeUrl": "https://www.youtube.com/watch?v=kYufX86PT6c",
    "companies": [
      "Facebook"
    ],
    "id": "lru-cache-2"
  },
  {
    "name": "Set Matrix Zeroes",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 26-27: Matrix & Advanced Topics",
    "category": "Matrix & Advanced Topics",
    "practiceUrl": "https://leetcode.com/problems/set-matrix-zeroes/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/set-matrix-zeroes/",
    "youtubeUrl": "https://www.youtube.com/watch?v=oKthBP-8TiU",
    "companies": [
      "Amazon"
    ],
    "id": "set-matrix-zeroes"
  },
  {
    "name": "Rotate Image",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 26-27: Matrix & Advanced Topics",
    "category": "Matrix & Advanced Topics",
    "practiceUrl": "https://leetcode.com/problems/rotate-image/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/rotate-matrix-90-degree-clockwise/",
    "youtubeUrl": "https://www.youtube.com/watch?v=PNz0qvtRKcQ",
    "companies": [
      "Google"
    ],
    "id": "rotate-image"
  },
  {
    "name": "Game of Life",
    "difficulty": "Medium",
    "duration": 40,
    "section": "Day 26-27: Matrix & Advanced Topics",
    "category": "Matrix & Advanced Topics",
    "practiceUrl": "https://leetcode.com/problems/game-of-life/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/game-of-life/",
    "youtubeUrl": "https://www.youtube.com/watch?v=W13QNegRIKU",
    "companies": [
      "Microsoft"
    ],
    "id": "game-of-life"
  },
  {
    "name": "Spiral Matrix",
    "difficulty": "Medium",
    "duration": 35,
    "section": "Day 26-27: Matrix & Advanced Topics",
    "category": "Matrix & Advanced Topics",
    "practiceUrl": "https://leetcode.com/problems/spiral-matrix/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/spiral-matrix/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Si8OnqtxX_s",
    "companies": [
      "Facebook"
    ],
    "id": "spiral-matrix"
  },
  {
    "name": "Serialize/Deserialize BT",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 28-30: Final Hard Problems & Review",
    "category": "Final Hard Problems & Review",
    "practiceUrl": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/serialize-deserialize-binary-tree/",
    "youtubeUrl": "https://www.youtube.com/watch?v=nnpR7hQ4jvA",
    "companies": [
      "Amazon"
    ],
    "id": "serialize-deserialize-bt"
  },
  {
    "name": "Wildcard Matching",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 28-30: Final Hard Problems & Review",
    "category": "Final Hard Problems & Review",
    "practiceUrl": "https://leetcode.com/problems/wildcard-matching/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/wildcard-pattern-matching/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Sp9-KjMWEb0",
    "companies": [
      "Google"
    ],
    "id": "wildcard-matching"
  },
  {
    "name": "Basic Calculator",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 28-30: Final Hard Problems & Review",
    "category": "Final Hard Problems & Review",
    "practiceUrl": "https://leetcode.com/problems/basic-calculator/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/basic-calculator/",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z3tHr1x-cJY",
    "companies": [
      "Microsoft"
    ],
    "id": "basic-calculator"
  },
  {
    "name": "Alien Dictionary (Revisit)",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 28-30: Final Hard Problems & Review",
    "category": "Final Hard Problems & Review",
    "practiceUrl": "https://leetcode.com/problems/alien-dictionary/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/alien-dictionary/",
    "youtubeUrl": "https://www.youtube.com/watch?v=6kTZxOO7Yl8",
    "companies": [
      "Facebook"
    ],
    "id": "alien-dictionary-revisit"
  },
  {
    "name": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "duration": 50,
    "section": "Day 28-30: Final Hard Problems & Review",
    "category": "Final Hard Problems & Review",
    "practiceUrl": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "articleUrl": "https://www.geeksforgeeks.org/dsa/median-of-two-sorted-arrays/",
    "youtubeUrl": "https://www.youtube.com/watch?v=LPUQwUULn0E",
    "companies": [
      "Amazon"
    ],
    "id": "median-of-two-sorted-arrays"
  }
];

  return {
    getAll: function () {
      return problems;
    },
    getById: function (id) {
      return problems.find(function (p) { return p.id === id || p.name.toLowerCase() === id.toLowerCase(); }) || null;
    },
    getByName: function (name) {
      return problems.find(function (p) { return p.name.toLowerCase() === name.toLowerCase(); }) || null;
    },
    getByDifficulty: function (difficulty) {
      if (!difficulty || difficulty.toLowerCase() === 'all') return problems;
      return problems.filter(function (p) {
        return p.difficulty.toLowerCase() === difficulty.toLowerCase();
      });
    },
    getByCategory: function (category) {
      return problems.filter(function (p) {
        return p.category.toLowerCase().includes(category.toLowerCase());
      });
    },
    getRandom: function (difficulty) {
      const list = this.getByDifficulty(difficulty);
      if (!list.length) return null;
      const idx = Math.floor(Math.random() * list.length);
      return list[idx];
    },
    validateId: function (id) {
      return problems.some(function (p) { return p.id === id || p.name.toLowerCase() === id.toLowerCase(); });
    }
  };
});
