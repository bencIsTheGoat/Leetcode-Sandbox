var cloneGraph = function (node) {
    const queue = [node];
    const obj = {}
    obj[node.val] = new Node(node.val);
    obj[node.val].neighbors = [];
    while (queue.length > 0) {
        const curr = queue.shift();
        for (const child of curr.neighbors) {
            if (!(child.val in obj)) {
                obj[child.val] = new Node(child.val);
                obj[child.val].neighbors = [];
                queue.push(child)
            }
            obj[curr.val].neighbors.push(obj[child.val]);
        }

    }
    return obj[node.val];
};