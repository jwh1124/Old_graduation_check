from bs4 import BeautifulSoup
from pprint import pprint
from selenium import webdriver
import requests
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver = webdriver.Chrome('/Users/ajj/Downloads/chromedriver')
driver.implicitly_wait(5)


# driver = webdriver.PhantomJS(
#   '/Users/ajj/Downloads/phantomjs-2.1.1-macosx/bin/phantomjs')
# web driver를 통해 브라우저 제어할 수 있게 해줌
# 암묵적으로 웹 자원 로드를 위해 3초까지 기다려줌.
driver.get('https://kupis.konkuk.ac.kr/sugang/acd/cour/time/SeoulTimetableInfo.jsp')
driver.find_element_by_xpath(
    "//select[@name='ltYy']/option[text()='2020']").click()
driver.find_element_by_xpath(
    "//select[@name='openSust']/option[@value='006751']").click()
driver.find_element_by_xpath(
    "//select[@name='pobtDiv']/option[@value='ALL']").click()
driver.find_element_by_xpath(
    '/html/body/form/table[1]/tbody/tr[2]/td/input[3]').click()

# emailFieldElement = wait.until(
#     lambda driver: driver.find_element_by_xpath("//input[@class='Default_ComboBox_Button_Class  and @id='cbbYearSmt_btn']"))
# driver.find_element_by_xpath(
#     "//input[@class='Default_ComboBox_Button_Class and @id='cbbYearSmt_btn']").click()


# WebDriverWait(driver, 20).until(EC.frame_to_be_available_and_switch_to_it(
#     (By.XPATH, "//frame[@name='contentFrm']")))
# WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
#     (By.XPATH, "//input[@class='Default_ComboBox_Button_Class ' and @id='cbbYearSmt_btn']"))).click()
# driver.find_element_by_xpath(
#     "//input[@class='Default_ComboBox_Button_Class ' and @id='cbbYearSmt_btn']").click()


# WebDriverWait(driver, timeout=5000).until(EC.presence_of_element_located(
#   driver.find_element_by_xpath('/html/body/div[2]/div[6]/div[7]/input[2]')))
# driver.find_element_by_xpath(
#   '/html/body/div[2]/div[6]/div[7]/input[2]').click()

# 학사정보시스템 들어가는법 : servj? 뒤에 코드를 붙여야 들어갈 수 있음, 안붙이면 로그인정보가 없다고 뜸.
# driver.implicitly_wait(40)
# driver.find_element_by_xpath("/html/body/div[2]/div[6]/div[7]").click()


# driver.find_element_by_xpath(
# "//a[@href='http://uis.sejong.ac.kr/app/sys.Login.servj?strCommand=LOGIN&strLoginId=guest2&strLoginPw=guest2']").click()

# '//div[@class='language-text highlighter-rouge']/pre[@class='highlight']/code'
# p_tag = WebDriverWait(browser,timeout=5).until(EC.presence_of_element_located((By.TAG_NAME, "p")))
