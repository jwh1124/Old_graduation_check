from bs4 import BeautifulSoup
from pprint import pprint
from selenium import webdrver
import requests

driver = webdriver.Chrome('/Users/ajj/Downloads/chromedriver')
driver = webdriver.PhantomJS(
    '/Users/ajj/Downloads/phantomjs-2.1.1-macosx/bin/phantomjs')
web driver를 통해 브라우저 제어할 수 있게 해줌
driver.implicitly_wait(3)  # 암묵적으로 웹 자원 로드를 위해 3초까지 기다려줌.
driver.get('http://uis.sejong.ac.kr/app/sys.Login.servj?strCommand=LOGIN&amp;strLoginId=guest2&amp;strLoginPw=guest2')  # URL에 접근
driver.find_element_by_xpatch


# 웹페이지 요청, 웹페이지의 소스코드를 볼 수 있음
html = requests.get(
    'http://uis.sejong.ac.kr/app/sys.Login.servj?strCommand=LOGIN&amp;strLoginId=guest2&amp;strLoginPw=guest2')
pprint(html.text)  # html 변수에 저장된 소스코드들 중 텍스트들을 pprint로 정렬한 것을 눈으로 확인

soup = BeautifulSoup(html.text, 'html.parser')
# 파이썬에서 보기 좋게, 다루기 쉽게 파싱작업을 거쳐야 각 요소에 접근이 쉬워진다.
# 이것을 도와주는게 beautifulsoup4 모듈이다.
data1 = soup.find('div', {'class': 'weather_box'})
# soup 모듈의 find 함수를 사용해서 data1에 값을 저장한다.
# 매개변수에는 div 태그명과 class 라는 속성의 값이 weather_box라는 녀석을 딕셔너리로 저장하는 코드이다.
# find 함수를 사용할 때 주의할 점은 같은 웹피이지 소스코드에 같은 소스가 여러가지 있으면 맨 처음 탐색된것만 반환하고 나머지는 무시된다는 점이다.
find_address = data1.find('span', {'class': 'btn_select'}).text
print('현재 위치: '+find_address)
# data1 변수에 저장된 정보중 span 태그명과 btn_select라는 속성값을 갖고 있는 녀석을 딕셔너리로 저장하는 코드이다.
find_currenttemp = data1.find('span', {'class': 'todaytemp'}).text
print('현재 온도: '+find_currenttemp+'℃')
find_dust = data2[0].find('span', {'class': 'num'}).text
find_ultra_dust = data2[1].find('span', {'class': 'num'}).text
find_ozone = data2[2].find('span', {'class': 'num'}).text
print('현재 미세먼지: '+find_dust)
print('현재 초미세먼지: '+find_ultra_dust)
print('현재 오존지수: '+find_ozone)
