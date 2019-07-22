function copyRandomList(head, visited = {}) {
    if (!head) return null;
    if (visited[head.val]) return visited[head.val];
    const copy = new Node(head.val);
    visited[copy.val] = copy;
    visited[copy.val].next = copyRandomList(head.next, visited);
    visited[copy.val].random = copyRandomList(head.random, visited);
    return visited[copy.val]
}