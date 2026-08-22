// Saved page JavaScript
// Features and behavior are kept the same.

// Comprehensive Solutions Database
const solutionsDatabase = {
  'Reverse Array': {
    approach: 'Two-Pointer Technique',
    description: 'Use two pointers starting from both ends and swap elements while moving towards the center. This is the most efficient approach with O(n) time and O(1) space.',
    code: `#include <iostream>
#include <vector>
using namespace std;

// Method 1: Using STL swap
void reverseArray(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}

// Method 2: Manual swap (works with arrays too)
void reverseArray(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};
    reverseArray(arr);

    for (int num : arr) {
        cout << num << " ";  // Output: 5 4 3 2 1
    }
    return 0;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Two pointers from both ends',
      'Swap and move inward',
      'Continue until pointers meet',
      'In-place reversal',
      'No extra space needed'
    ]
  },

  'Max Subarray Sum (Kadane\'s)': {
    approach: 'Dynamic Programming (Kadane\'s Algorithm)',
    description: 'At each position, decide whether to extend the existing subarray or start a new one. Track both current sum and maximum sum seen so far.',
    code: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];

    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }

    return maxSum;
}

pair<int, int> maxSubArrayIndices(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    int start = 0, tempStart = 0, end = 0;

    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            tempStart = i;
        } else {
            currentSum += nums[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return {start, end};
}

int main() {
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

    cout << "Max sum: " << maxSubArray(nums) << endl;

    auto indices = maxSubArrayIndices(nums);
    cout << "Subarray from index " << indices.first
         << " to " << indices.second << endl;

    return 0;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Single pass through array',
      'Compare: extend or restart',
      'Track overall maximum',
      'Optimal greedy DP approach'
    ]
  },

  'Two Sum Problem': {
    approach: 'Hash Map Single Pass',
    description: 'Store seen numbers in hash map and check for complement in O(1) time. This is optimal compared to sorting which would be O(n log n).',
    code: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numMap;

    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];

        if (numMap.find(complement) != numMap.end()) {
            return {numMap[complement], i};
        }

        numMap[nums[i]] = i;
    }

    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;

    vector<int> result = twoSum(nums, target);

    cout << "Indices: " << result[0]
         << ", " << result[1] << endl;

    return 0;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    keyPoints: [
      'Hash map gives O(1) lookup',
      'Store value and index',
      'Check complement before storing',
      'Single pass solution'
    ]
  },

  '3Sum Problem': {
    approach: 'Two Pointer + Sorting',
    description: 'Sort array and use two pointers to find triplets that sum to zero.',
    code: `vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> result;

    for (int i = 0; i < nums.size() - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1])
            continue;

        int left = i + 1;
        int right = nums.size() - 1;

        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];

            if (sum == 0) {
                result.push_back({
                    nums[i],
                    nums[left],
                    nums[right]
                });

                while (left < right &&
                       nums[left] == nums[left + 1])
                    left++;

                while (left < right &&
                       nums[right] == nums[right - 1])
                    right--;

                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result;
}`,
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Sort first',
      'Fix one element',
      'Use two pointers for other two',
      'Handle duplicates'
    ]
  },

  'Longest Consecutive Sequence': {
    approach: 'Hash Set',
    description: 'Use hash set for O(1) lookup to find consecutive sequences.',
    code: `int longestConsecutive(vector<int>& nums) {
    unordered_set<int> numSet(nums.begin(), nums.end());

    int longest = 0;

    for (int num : numSet) {
        if (numSet.find(num - 1) == numSet.end()) {

            int currentNum = num;
            int streak = 1;

            while (numSet.find(currentNum + 1)
                   != numSet.end()) {
                currentNum++;
                streak++;
            }

            longest = max(longest, streak);
        }
    }

    return longest;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    keyPoints: [
      'Use hash set',
      'Start only from sequence beginning',
      'Extend sequence',
      'Track maximum'
    ]
  },

  'Merge Sorted Arrays': {
    approach: 'Two Pointer Merge',
    description: 'Merge two sorted arrays using two pointers from end to avoid overwriting.',
    code: `void merge(vector<int>& nums1, int m,
            vector<int>& nums2, int n) {

    int i = m - 1;
    int j = n - 1;
    int k = m + n - 1;

    while (i >= 0 && j >= 0) {
        nums1[k--] =
            (nums1[i] > nums2[j])
            ? nums1[i--]
            : nums2[j--];
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}`,
    timeComplexity: 'O(m+n)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Merge from end to avoid overwrite',
      'Two pointers',
      'In-place merge',
      'Handle remaining elements'
    ]
  },

  'Reverse String': {
    approach: 'Two Pointer Swap',
    description: 'Swap characters from both ends moving towards center.',
    code: `void reverseString(vector<char>& s) {
    int left = 0;
    int right = s.size() - 1;

    while (left < right) {
        swap(s[left], s[right]);
        left++;
        right--;
    }
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Two pointers approach',
      'Swap in place',
      'Meet in middle',
      'Simple and efficient'
    ]
  },

  'Palindrome Check': {
    approach: 'Two Pointer Validation',
    description: 'Check characters from both ends moving towards center.',
    code: `bool isPalindrome(string s) {
    int left = 0;
    int right = s.length() - 1;

    while (left < right) {

        while (left < right &&
               !isalnum(s[left]))
            left++;

        while (left < right &&
               !isalnum(s[right]))
            right--;

        if (tolower(s[left]) != tolower(s[right]))
            return false;

        left++;
        right--;
    }

    return true;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Skip non-alphanumeric',
      'Compare both ends',
      'Case insensitive',
      'Two pointers'
    ]
  },

  'Longest Substring Without Repeating': {
    approach: 'Sliding Window with Hash Map',
    description: 'Use sliding window with hash map to track character positions.',
    code: `int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> charIndex;

    int maxLen = 0;
    int left = 0;

    for (int right = 0; right < s.length(); right++) {

        if (charIndex.count(s[right]) &&
            charIndex[s[right]] >= left) {

            left = charIndex[s[right]] + 1;
        }

        charIndex[s[right]] = right;

        maxLen = max(
            maxLen,
            right - left + 1
        );
    }

    return maxLen;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(min(n,charset))',
    keyPoints: [
      'Sliding window',
      'Track character positions',
      'Move left pointer on duplicate',
      'Update max length'
    ]
  },

  'Anagram Check': {
    approach: 'Character Frequency Counting',
    description: 'Compare sorted strings or character frequencies.',
    code: `bool isAnagram(string s, string t) {

    if (s.length() != t.length())
        return false;

    vector<int> count(26, 0);

    for (int i = 0; i < s.length(); i++) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }

    for (int c : count) {
        if (c != 0)
            return false;
    }

    return true;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Same length required',
      'Count frequencies',
      'Compare counts',
      'Or sort and compare'
    ]
  },

  'Reverse Linked List': {
    approach: 'Iterative Pointer Reversal',
    description: 'Reverse links by maintaining three pointers (prev, curr, next) while traversing the list. This iterative approach is more efficient than recursion.',
    code: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;

    ListNode(int x)
        : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {

        ListNode* prev = nullptr;
        ListNode* curr = head;

        while (curr) {

            ListNode* next = curr->next;

            curr->next = prev;

            prev = curr;
            curr = next;
        }

        return prev;
    }
};`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Three pointers: prev, curr, next',
      'Save next before reversing link',
      'Update curr->next = prev',
      'Move pointers forward',
      'Return prev as new head'
    ]
  },

  'Detect Cycle in Linked List': {
    approach: 'Floyd\'s Cycle Detection (Tortoise & Hare)',
    description: 'Use slow (1 step) and fast (2 steps) pointers. If they meet, there\'s a cycle. If fast reaches null, no cycle.',
    code: `bool hasCycle(ListNode* head) {

    if (!head || !head->next)
        return false;

    ListNode* slow = head;
    ListNode* fast = head->next;

    while (slow != fast) {

        if (!fast || !fast->next)
            return false;

        slow = slow->next;
        fast = fast->next->next;
    }

    return true;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Slow pointer moves 1 step',
      'Fast pointer moves 2 steps',
      'If cycle exists, they will meet',
      'If fast reaches null, no cycle',
      'Works even if cycle starts not at head'
    ]
  },

  'Merge Two Sorted Lists': {
    approach: 'Two Pointer Merge',
    description: 'Merge two sorted linked lists by comparing nodes.',
    code: `ListNode* mergeTwoLists(
    ListNode* l1,
    ListNode* l2
) {

    ListNode dummy(0);
    ListNode* current = &dummy;

    while (l1 && l2) {

        if (l1->val < l2->val) {
            current->next = l1;
            l1 = l1->next;
        }
        else {
            current->next = l2;
            l2 = l2->next;
        }

        current = current->next;
    }

    current->next = l1 ? l1 : l2;

    return dummy.next;
}`,
    timeComplexity: 'O(n+m)',
    spaceComplexity: 'O(1)',
    keyPoints: [
      'Compare node values',
      'Build new list',
      'Attach remaining list',
      'Dummy node helps'
    ]
  },

  'Valid Parentheses': {
    approach: 'Stack Data Structure',
    description: 'Use a stack to match opening brackets with their corresponding closing brackets. For each closing bracket, verify it matches the most recent opening bracket.',
    code: `#include <iostream>
#include <stack>
#include <unordered_map>
using namespace std;

bool isValid(string s) {

    stack<char> st;

    unordered_map<char, char> pairs = {
        {')', '('},
        {']', '['},
        {'}', '{'}
    };

    for (char c : s) {

        if (c == '(' ||
            c == '[' ||
            c == '{') {

            st.push(c);
        }
        else {

            if (st.empty() ||
                st.top() != pairs[c]) {

                return false;
            }

            st.pop();
        }
    }

    return st.empty();
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    keyPoints: [
      'Push all opening brackets to stack',
      'Match closing with top of stack',
      'Stack must be empty at end',
      'Handle (), [], {} types'
    ]
  },

  'Climbing Stairs': {
    approach: 'Dynamic Programming (Fibonacci-like)',
    description: 'At each stair, you can come from the previous stair (1 step) or 2 stairs below (2 steps). So ways to reach n = ways to reach (n-1) + ways to reach (n-2).',
    code: `int climbStairs(int n) {

    if (n <= 2)
        return n;

    int prev2 = 1;
    int prev1 = 2;

    for (int i = 3; i <= n; i++) {

        int curr = prev1 + prev2;

        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) optimized or O(n) with full array',
    keyPoints: [
      'dp[i] = dp[i-1] + dp[i-2]',
      'Base cases: dp[1]=1, dp[2]=2',
      'Fibonacci sequence',
      'Space optimization: keep only last 2 values'
    ]
  },

  'House Robber': {
    approach: 'Dynamic Programming',
    description: 'At each house, decide whether to rob it or skip it. You can\'t rob adjacent houses. dp[i] = max(rob previous, rob current + rob up to i-2).',
    code: `int rob(vector<int>& nums) {

    if (nums.size() == 0)
        return 0;

    if (nums.size() == 1)
        return nums[0];

    int prev2 = nums[0];
    int prev1 = max(nums[0], nums[1]);

    for (int i = 2; i < nums.size(); i++) {

        int curr = max(
            prev1,
            prev2 + nums[i]
        );

        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) optimized or O(n) with full array',
    keyPoints: [
      'Can\'t rob adjacent houses',
      'dp[i] = max(dp[i-1], dp[i-2] + nums[i])',
      'At each house: rob or skip',
      'Space can be optimized to O(1)'
    ]
  },

  'Number of Islands': {
    approach: 'DFS/BFS Graph Traversal',
    description: 'Mark visited cells and count connected components.',
    code: `int numIslands(vector<vector<char>>& grid) {

    if (grid.empty())
        return 0;

    int count = 0;

    for (int i = 0; i < grid.size(); i++) {

        for (int j = 0; j < grid[0].size(); j++) {

            if (grid[i][j] == '1') {

                dfs(grid, i, j);
                count++;
            }
        }
    }

    return count;
}

void dfs(
    vector<vector<char>>& grid,
    int i,
    int j
) {

    if (
        i < 0 ||
        i >= grid.size() ||
        j < 0 ||
        j >= grid[0].size() ||
        grid[i][j] == '0'
    ) {
        return;
    }

    grid[i][j] = '0';

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}`,
    timeComplexity: 'O(m×n)',
    spaceComplexity: 'O(m×n)',
    keyPoints: [
      'DFS for connected components',
      'Mark visited',
      'Explore 4 directions',
      'Count components'
    ]
  }
};


// =====================================================
// VIEW SOLUTION
// =====================================================

function viewSolution(problemName) {

    let solution = solutionsDatabase[problemName];

    // 1. Exact match ignoring uppercase/lowercase
    if (!solution) {

        const matchedKey = Object.keys(solutionsDatabase).find(
            key =>
                key.toLowerCase().trim() ===
                problemName.toLowerCase().trim()
        );

        if (matchedKey) {
            solution = solutionsDatabase[matchedKey];
        }
    }

    // 2. Flexible match
    // Example:
    // "Two Sum" -> "Two Sum Problem"
    // "Reverse Array " -> "Reverse Array"
    if (!solution) {

        const normalize = name =>
            name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '');

        const normalizedName = normalize(problemName);

        const matchedKey = Object.keys(solutionsDatabase).find(key => {

            const normalizedKey = normalize(key);

            return (
                normalizedKey.includes(normalizedName) ||
                normalizedName.includes(normalizedKey)
            );
        });

        if (matchedKey) {
            solution = solutionsDatabase[matchedKey];
        }
    }

    // 3. If no solution exists
    if (!solution) {

        alert(
            `Solution for "${problemName}" will be added soon!`
        );

        return;
    }

    // =================================================
    // OPEN SOLUTION MODAL
    // =================================================

    const modal =
        document.getElementById('solutionModal');

    const title =
        document.getElementById('solutionTitle');

    const body =
        document.getElementById('solutionBody');

    title.textContent =
        `${problemName} - Solution`;

    body.innerHTML = `

        <h3>
            ${solution.approach}
        </h3>

        <p>
            ${solution.description}
        </p>


        <h4>
            Code Solution:
        </h4>

        <div class="code-block">
            ${solution.code
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')}
        </div>


        <h4>
            Complexity Analysis:
        </h4>

        <div class="complexity">

            <div class="complexity-item">

                <div class="complexity-label">
                    Time Complexity
                </div>

                <div class="complexity-value">
                    ${solution.timeComplexity}
                </div>

            </div>


            <div class="complexity-item">

                <div class="complexity-label">
                    Space Complexity
                </div>

                <div class="complexity-value">
                    ${solution.spaceComplexity}
                </div>

            </div>

        </div>


        <h4>
            Key Points:
        </h4>

        <ul>

            ${solution.keyPoints
                .map(
                    point => `<li>${point}</li>`
                )
                .join('')}

        </ul>
    `;

    modal.classList.add('active');
}


// =====================================================
// CLOSE SOLUTION
// =====================================================

function closeSolution() {

    const modal =
        document.getElementById('solutionModal');

    modal.classList.remove('active');
}


// =====================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =====================================================

document.addEventListener('click', function(e) {

    const modal =
        document.getElementById('solutionModal');

    if (e.target === modal) {
        closeSolution();
    }

});