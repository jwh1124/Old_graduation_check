from bs4 import BeautifulSoup
from pprint import pprint
from selenium import webdriver
import requests
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver = webdriver.Chrome('/Users/ajj/Downloads/chromedriver')
driver.implicitly_wait(20)
# driver = webdriver.PhantomJS(
#   '/Users/ajj/Downloads/phantomjs-2.1.1-macosx/bin/phantomjs')
# web driver를 통해 브라우저 제어할 수 있게 해줌
# 암묵적으로 웹 자원 로드를 위해 3초까지 기다려줌.
driver.get('http://uis.sejong.ac.kr/app/sys.Login.servj?strCommand=LOGIN&strLoginId=guest2&strLoginPw=guest2')


# WebDriverWait(driver, 10).until(
#     EC.frame_to_be_available_and_switch_to_it((By.NAME, "riaframe")))
# WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
#     (By.XPATH, '//*[@id="cbbYearSmt_btn"] '))).click()
# driver.find_element_by_xpath(
#     '//*[@id="cbbYearSmt_btn"] ').click()
driver.find_element_by_xpath(
    '//*[@id="cbbYearSmt_option_3"]/table/tbody/tr/td').click()


# 학사정보시스템 들어가는법 : servj? 뒤에 코드를 붙여야 들어갈 수 있음, 안붙이면 로그인정보가 없다고 뜸.
