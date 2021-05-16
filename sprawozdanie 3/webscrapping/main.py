import requests
from bs4 import BeautifulSoup

def f(a):
    result = requests.get("https://pl.wikipedia.org/wiki/Lista_najszybszych_samochod%C3%B3w_osobowych")
    src = result.content
    soup = BeautifulSoup(src, "html.parser")

    table = soup.find("table")
    rows = table.find_all("tr")[1:a+11]

    for row in rows:
        year = row.find("td").text.strip()
        country = row.find_all("td")[1].text.strip()
        name = row.find_all("td")[2].text.strip()
        vmax = row.find_all("td")[3].text.strip()
        print("Vehicle name: ", name, " | Production year: ", year, " | Country: ", country," | Maximum speed: ", vmax)

f(309)