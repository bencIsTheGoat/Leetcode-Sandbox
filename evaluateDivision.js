var calcEquation = function (equations, values, queries) {
    const graph = createGraph(equations, values);
    console.log(graph)
    const output = [];
    for (const [first, second] of queries) {
        const res = bfs(graph, first, second);
        output.push(res)
    }
    return output;
};

function bfs(graph, first, second, set = new Set()) {
    if (!graph[first]) return -1.0;
    if (!graph[second]) return -1.0;
    const queue = [];
    for (const [key, val] of graph[first]) {
        queue.push([key, val, 1]);
    }
    while (queue.length > 0) {
        const [key, val, multiple] = queue.shift();
        set.add(key);
        if (key === second) return multiple * val;
        for (const [childKey, childVal] of graph[key]) {
            const childMult = multiple * val
            if (!set.has(childKey)) queue.push([childKey, childVal, childMult])
        }
    }
    return -1.0
}

function createGraph(equations, values) {
    const obj = {};
    for (let i = 0; i < equations.length; i++) {
        const [first, second] = equations[i];
        const val = values[i];
        if (obj[first]) {
            obj[first].push([second, val]);
        } else {
            obj[first] = [[second, val]];
        }
        if (obj[second]) {
            obj[second].push([first, 1 / val]);
        } else {
            obj[second] = [[first, 1 / val]];
        }
    }
    return obj
}