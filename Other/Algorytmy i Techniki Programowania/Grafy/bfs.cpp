#include <iostream>
#include <queue>
#include <vector>

using namespace std;

const int MAX_N = 1000007;

int vis[MAX_N] = {};
vector<int> G[1000007];

void BFS(int n)
{
    queue<int> Q;
    vis[n] = 1;
    Q.push(n);
    while (!Q.empty())
    {
        int v = Q.front();
        Q.pop();
        for (int i = 0; i < (int)G[v].size(); i++)
        {
            if (vis[G[v][i]] == 0)
            {
                vis[G[v][i]] = -1 * vis[v];
                Q.push(G[v][i]);
            }
            else if (vis[G[v][i]] == vis[v])
            {
                cout << "NIE"
                     << "\n";
                exit(0);
            }
        }
    }
}

void DFS(int n, int color)
{
    vis[n] = color;
    for (int i = 0; i < G[n].size(); i++)
    {
        if (vis[G[n][i]] == 0)
        {
            DFS(G[n][i], color == 1 ? 2 : 1);
        }
    }
}

int main()
{
    int peak_number, edge_number;
    cin >> peak_number >> edge_number;
    for (int i = 0; i < edge_number; i++)
    {
        int start, end;
        cin >> start >> end;
        G[start].push_back(end);
        G[end].push_back(start);
    }
    for (int i = 0; i < peak_number; i++)
    {
        if (vis[i] == 0)
        {
            BFS[i];
        }
    }
    cout << "TAK"
         << "\n";
    return 0;
}