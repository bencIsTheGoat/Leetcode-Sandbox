var findOrder = function (numCourses, prerequisites) {
    const coursesTaken = new Set();
    let output = [];
    const adjList = convertToAdjList(prerequisites);
    let iterationBool = true;
    while (iterationBool) {
        iterationBool = false;
        for (let course in adjList) {
            if (adjList[course].length === 0 && !coursesTaken.has(course)) {
                coursesTaken.add(course);
                output.push(course);
                iterationBool = true;
            } else {
                const courseBool = true;
                for (let prereq of adjList[course]) {
                    if (!coursesTaken.has(prereq)) courseBool = false;
                }
                if (courseBool && !coursesTaken.has(course)) {
                    coursesTaken.add(course);
                    output.push(course);
                    iterationBool = true;
                }
            }

        }
    }
    return output;
};

// edgeList = [[1, 0]]
// adjList = { 1: [0], 0: []}
// i = 0
// course = 1
// prereq = 0
function convertToAdjList(edgeList) {
    const adjList = {};
    for (let i = 0; i < edgeList.length; i++) {
        const course = edgeList[i][0];
        const prereq = edgeList[i][1];
        if (course in adjList) {
            adjList[course].push(prereq);
        } else {
            adjList[course] = [prereq];
        }
        if (!(prereq in adjList)) {
            adjList[prereq] = [];
        }
    }
    return adjList;
}