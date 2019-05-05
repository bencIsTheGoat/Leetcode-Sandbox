var canFinish = function (numCourses, prerequisites) {
    // convert edge list to adjacency list
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
    // convert edge to adjacency list
    let adj = {};
    // edge list is array of pairs
    edgeList.forEach(node => {
        // first convert to string and destructure each pair
        let [key, value] = node.map(String);
        // if key exists in object, add value to existing array of values
        // else, create new array that holds values
        if (adj[key]) {
            adj[key].push(value);
        } else {
            adj[key] = [value];
        }
        // create key, value pair in object for prereq class if doesnt exitst
        if (!adj[value]) {
            adj[value] = [];
        }
    });
    return adj;
}