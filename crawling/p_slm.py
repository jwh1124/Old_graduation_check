from bs4 import BeautifulSoup
from pprint import pprint
from selenium import webdriver
import MySQLdb
import requests
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


driver = webdriver.Chrome('/Users/ajj/Downloads/chromedriver')
driver.implicitly_wait(20)
# web driver를 통해 브라우저 제어할 수 있게 해줌
# 암묵적으로 웹 자원 로드를 위해 3초까지 기다려줌.
driver.get('http://uis.sejong.ac.kr/app/sys.Login.servj?strCommand=LOGIN&strLoginId=guest2&strLoginPw=guest2')
# 학사정보시스템 들어가는법 : servj? 뒤에 코드를 붙여야 들어갈 수 있음, 안붙이면 로그인정보가 없다고 뜸.
driver.switch_to.frame("contentFrm")
# 세종대 학교는 프레임 별로 나눠줘있는 웹페이지라 내가 선택할 프레임을 먼저 지정해줘야함
driver.switch_to.frame(driver.find_element_by_xpath
                       ("//iframe[@id='riaframe']"))

# 프레임에 들어가고 나선 iframe으로 또 둘러싸여져있어서 iframe에 들어가는 코드 작성

time.sleep(0.6)
# 0.6초를 기다려주는 코드, ajax 요청이 완료될 때 까지 입력한 시간만큼 기다렸다가 다음 코드로 넘어감.
# 대기시간을 주고 원하는 연도/학기 데이터가 올 때 까지 기다려 주는거임
# 단점: ajax요청시간이 요청할 때마다 달라서 0.6초보다 더 걸리면 데이터가 오기전에 실행이되는 것이므로 오류가 뜸
# 0.6 = 11번했을 때 다 성공
driver.find_element_by_xpath(
    '//*[@id="cbbYearSmt_btn"] ').click()
# 데이터가 도착했으면 드롭다운 클릭
driver.find_element_by_xpath(
    '//*[@id="cbbYearSmt_option_3"]/table/tbody/tr/td').click()
# # 데이터를 클릭
time.sleep(0.6)
driver.find_element_by_xpath(
    '//*[@id="cbbDeptCd_btn"]').click()
# 개설학과 전공선택
driver.find_element_by_xpath(
    '//*[@id="cbbDeptCd_option_60"]/table/tbody/tr/td').click()
# 전자정보통신공학과 클릭
driver.find_element_by_xpath(
    '//*[@id="btnSearch_btn"]').click()
# 조회 버튼 클릭

el_lectures = driver.find_elements_by_class_name('GLDataRow')
name = el_lectures.text
print(name)
driver.quit()
# //*[@id= "GridEx"]/div[1]/table/tbody/tr[41]/td[6]/div
# //*[@id= "GridEx"]/div[1]/table/tbody/tr[47]/td[6]/div
# //*[@id= "GridEx"]
# //*[@id = "GridEx"]
# //*[@id = "rptMain"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[42]/td[6]/div
# //*[@id = "rptMain"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[39]
# //*[@id = "rptMain"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]
# //*[@id = "rptMain"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]


# majonr_name = ["전자정보통신공학과",
#                "대양휴머니티칼리지"
#                ]
# cursor = conn.cursor()
# create_table = f'''
#     CREATE TABLE \"{major_name[0]}\"(
#         id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
#         class_name VARCHAR(30) NOT NULL,
#         grade INT NOT NULL,
#         category VARCHAR(10) NOT NULL,
#         credit INT NOT NULL
#     )
# '''
# cursor.execute(create_table)

# cursor.execute()
