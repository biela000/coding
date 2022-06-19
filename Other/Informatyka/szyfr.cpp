#include <bits/stdc++.h>
using namespace std;

string sort(const int &N, const string &text)
{
    string coded_text = "";
    int array_count = 0;
    while (array_count * N * N < text.length())
    {
        for (int i = 0; i < N; ++i)
        {
            for (int o = 0; o < N; ++o)
            {
                if (coded_text.length() < text.length())
                {
                    coded_text += text[N * N * array_count + (i + N * o)];
                }
                else
                {
                    int r = rand() % 26;
                    coded_text += 'A' + r;
                }
            }
        }
        array_count++;
    }
    return coded_text;
}

int main()
{
    srand(time(NULL));
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int N;
    string TekstJ;
    cin >> N;
    cin.ignore();
    getline(cin, TekstJ);
    cout << sort(N, TekstJ) << "\n";
    return 0;
}