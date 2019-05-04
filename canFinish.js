var canFinish = function (numCourses, prerequisites) {
    let adjList = convertToAdjList(prerequisites);
    numCourses = Object.keys(adjList).length;
    let set = new Set();
    let visited = true;

    while (visited) {
        visited = false;
        for (let course in adjList) {
            let bool = adjList[course].every(course => set.has(course));
            if (!set.has(course) && bool) {
                set.add(course);
                visited = true;
            }
        }
    }
    return set.size === numCourses;
};

function convertToAdjList(edgeList) {
    let adj = {};
    edgeList.forEach(node => {
        let [key, value] = node.map(String);
        if (adj[key]) {
            adj[key].push(value);
        } else {
            adj[key] = [value];
        }
        if (!adj[value]) {
            adj[value] = [];
        }
    });
    return adj;
}