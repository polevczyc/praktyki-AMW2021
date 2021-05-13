#include <iostream>
using namespace std;

int liczba1;
int liczba2;
int dzialanie;

int main() {
    cout << "Podaj dwie liczby, na ktorych chcesz wykonac dzialanie: " << endl;
    cout << "1: ";
    cin >> liczba1;
    cout << "2: ";
    cin >> liczba2;
    cout << endl << "1 | + | dodawanie"
    << endl << "2 | - | odejmowanie"
    << endl << "3 | * | mnozenie"
    << endl << "4 | / | dzielenie"
    << endl << "Wybierz rodzaj dzialania: " ;
    cin >> dzialanie;
    cout << endl;
    switch (dzialanie) {
        case 1:
            cout << "Dodawanie | " << (liczba1+liczba2);
            break;
        case 2:
            cout << "Odejmowanie | " << (liczba1-liczba2);
            break;
        case 3:
            cout << "Mnozenie | " << (liczba1*liczba2);
            break;
        case 4:
            cout << "Dzielenie | " << (liczba1/liczba2);
            break;
        }
    cout << endl;
    return 0;
}
