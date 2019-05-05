var canFinish = function (numCourses, prerequisites) {
    // convert edge list to adjacency list
    let adjList = convertToAdjList(prerequisites);
    // overwrite numcourses since edge case where an empty array is passed in
    numCourses = Object.keys(adjList).length;
    // initialize new set that stores courses that one can take
    let set = new Set();
    // use topological sort technique, similar to bubble sort
    let visited = true;
    while (visited) {
        // set false initially
        visited = false;
        // iterate thru every course in adjList
        for (let course in adjList) {
            // checks if every prereq has been taken for current course in iteration
            let bool = adjList[course].every(course => set.has(course));
            // if all prereqs taken and the set doesnt have course, add to set
            // 
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