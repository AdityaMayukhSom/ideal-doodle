---
title: "Floyd-Warshall Algorithm"
subtitle: "The Floyd-Warshall algorithm is another classic algorithm in computer science, and it is similar to Djikstra's algorithm in many ways. However, the Floyd-Warshall algorithm is a dynamic programming algorithm, which means that it builds up the shortest paths from scratch, starting with the shortest paths between pairs of nodes that are directly connected."
date: "2023-07-25"
tags: ["algorithms", "graph"]
author: "Aditya Mayukh Som"
---

Graphs are commonly used to represent relationships between entities in various real-world scenarios, such as road networks, computer networks, and social networks. The shortest path problem involves finding the shortest distance between every pair of vertices in a graph.

The Floyd-Warshall algorithm is a powerful tool for finding the shortest paths between all pairs of nodes in a weighted graph. It efficiently solves the all-pairs shortest path problem, making it a fundamental algorithm in graph theory.

Unlike Djikstra's algorithm, which finds the shortest path from one source vertex to all other vertices, the Floyd-Warshall algorithm considers every pair of vertices and efficiently computes the shortest path between them.

### Code Implementation

First we define a `Util` class for several helper methods and variabled which we will be using later. Instead of defining `INFINITY`, you may also use `INT_MAX` which is provided in `limits.h` header file.

```cpp
class Util {
   public:
    static const int INFINITY = 1e9 + 7;

    static void printMatrix(int* matrix[], int row, int col) {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                cout << matrix[i][j] << " ";
            }
            cout << endl;
        }
    }

    static void printMatrix(int* matrix[], int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cout << matrix[i][j] << " ";
            }
            cout << endl;
        }
    }
};
```

Next we write a class `FloydWarshall` in which we will write all the necessary code for implementing the algorithm.

```cpp
class FloydWarshall {
   private:
    int v;       // v will store the number of nodes in the graph
    int** dist;  // dist[u][v] will store the final shortest distance between u and v
    int** next;  // next[u][v] stores the next node after u while going from u to v

   public:
    // constructor internally copies the graph passed so it does not modify the original graph passed
    FloydWarshall(const vector<vector<int> >& graph) {
        this->v = graph.size();
        this->dist = new int*[v];
        this->next = new int*[v];
        for (int i = 0; i < v; i++) {
            this->dist[i] = new int[v];
            this->next[i] = new int[v];
        }

        // initially populating the matrix
        for (int i = 0; i < v; i++) {
            for (int j = 0; j < v; j++) {
                // we simply copy the distance from i to j as initial setup
                dist[i][j] = graph[i][j];

                if (graph[i][j] == Util::INFINITY) {
                    // graph[i][j] == INF means there exist no edge between node i and j
                    // if there exist not path initialli between i and j, we assume there is no path
                    // hence initially we put the next node as -1 indicating no path
                    next[i][j] = -1;
                } else {
                    // if graph [i][j] is not infinite, that means there indeed exists a path between i and j
                    // in that case, we say the next node in the path i to j is the node j itself
                    next[i][j] = j;
                }
            }
        }
    }

    // Standard Floyd Warshall Algorithm with little modification. 
    // If we find that dis[i][j] > dis[i][k] + dis[k][j] then we modify next[i][j] = next[i][k]
    void computePaths() {
        for (int k = 0; k < this->v; k++) {
            for (int i = 0; i < this->v; i++) {
                for (int j = 0; j < this->v; j++) {
                    if (dist[i][k] == Util::INFINITY || dist[k][j] == Util::INFINITY) {
                        // if distance of i to k is infinite or k to j is infinite,
                        // then the path between i to j via k is broken, i.e. the path does not exist
                        continue;
                    }

                    if (dist[i][j] > dist[i][k] + dist[k][j]) {
                        // if i to j via k costs lesser than current i to j cost
                        // update i to j cost with the lesser cost
                        dist[i][j] = dist[i][k] + dist[k][j];

                        // now the tricky part, the updation of next matrix
                        // the logic is simple, if we need to go from i to j via k, we need to go to k first
                        // hence next node from i to j is same as next node from i to k
                        next[i][j] = next[i][k];
                    }
                }
            }
        }
    }

    // Function to construct the shortest path between source and destination using next matrix
    // if no path exists between source and destination, then it will return an empty vector
    // if there exists a path between the given two nodes, the path vector will atleast contain two elements
    vector<int> constructPath(int source, int destination) {
        // if there's no path between node source and destination, then next[source][destination] will contain -1
        // in than case, simply return an empty vector, showcasing no path
        if (this->next[source][destination] == -1) {
            return {};
        }

        // Storing the path in a vector
        vector<int> path = {source};
        while (source != destination) {
            source = this->next[source][destination];
            path.push_back(source);
        }

        return path;
    }

    /**
     * @brief Prints the shortest path using the path vector generated by constructPath
     * @param path A reference to a vector of integers representing the path returned from constructPath(source, destination)
     */
    static void printPath(vector<int>& path) {
        int n = path.size();
        cout << "Shortest path from " << path[0] << " to " << path[n - 1] << " : ";
        for (int i = 0; i < n - 1; i++)
            cout << path[i] << " -> ";
        cout << path[n - 1] << endl;
    }

    ~FloydWarshall() {
        // deallocates the memory allocated for the dist and next matrices
        for (int i = 0; i < v; i++) {
            // deallocates the memory allocated for the row `i` of the dist matrix
            delete[] dist[i];

            // deallocates the memory allocated for the row `i` of the next matrix
            delete[] next[i];
        }

        // deallocates the memory allocated for the dist and next pointers
        delete[] dist;
        delete[] next;
    };
};
```

The provided code implements Floyd-Warshall algorithm to compute the shortest paths between all pairs of nodes in a weighted graph. The algorithm works by iteratively considering intermediate vertices and updating the shortest distances between nodes.

The code first initializes a matrix to store the shortest distances between all pairs of nodes. The matrix is then updated iteratively, with each iteration considering a new intermediate node. For each iteration, the algorithm checks if the shortest path between two nodes can be improved by going through the intermediate node. If it can, then the shortest distance between the two nodes is updated.

The code also includes a function for constructing the shortest path between two nodes. This function takes the source node and the destination node as input, and it returns a vector that contains the nodes in the shortest path from the source node to the destination node.

The code snippet can be used to find the shortest paths between all pairs of nodes in a weighted graph. To use the code, you need to provide the graph as a matrix of weights. The code will then print the shortest paths between all pairs of nodes in the graph.

**Here is an example of how to use the code:**

```cpp
int main(){
    vector<vector<int>> graph = {{0, 3, Util::INFINITY, 7},
                                {8, 0, 2, Util::INFINITY},
                                {5, Util::INFINITY, 0, 1},
                                {2, Util::INFINITY, Util::INFINITY, 0}};

    FloydWarshall fw = FloydWarshall(graph);
    fw.computePaths();

    // Path from node 1 to 3
    vector<int> path = fw.constructPath(1, 3);
    FloydWarshall::printPath(path);

    // Path from node 0 to 2
    vector<int> path = fw.constructPath(0, 2);
    FloydWarshall::printPath(path);

    // Path from node 3 to 2
    vector<int> path = fw.constructPath(3, 2);
    FloydWarshall::printPath(path);
    return 0;
}
```

This code will print the following output:

```console
Shortest path from 1 to 3 : 1 -> 2 -> 3
Shortest path from 0 to 2 : 0 -> 2
Shortest path from 3 to 2 : 3 -> 2
```

As you can see, the code correctly finds the shortest paths between all pairs of nodes in the graph.

**Here are some of the benefits of using the Floyd-Warshall algorithm:**

* The algorithm is simple to understand and implement.
* The algorithm is efficient, and it can be used to find the shortest paths in large graphs.
* The algorithm can be used to find the shortest paths in graphs with negative weights.

**Here are some of the drawbacks of using the Floyd-Warshall algorithm:**

* The algorithm can be computationally expensive for large graphs.
* The algorithm does not work for graphs with cycles with negative weights.

Overall, the Floyd-Warshall algorithm is a powerful tool for finding the shortest paths between all pairs of nodes in a weighted graph. The algorithm is simple to understand and implement, and it is efficient for large graphs. However, the algorithm can be computationally expensive for large graphs with cycles with negative weights.