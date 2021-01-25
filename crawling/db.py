import MySQLdb

conn = MySQLdb.connect(
    user="root",
    passwd="whdwk584859",
    host="localhost",
    db="lecture"
    # charset="utf-8"
)

cursor = conn.cursor()


create_table = f'''
    CREATE TABLE \"{major_name}\"(
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        class_name VARCHAR(30) NOT NULL,
        grade INT NOT NULL,
        category VARCHAR(10) NOT NULL,
        credit INT NOT NULL
    )
'''
cursor.execute("CREATE TABLE EIC (id ")

bookname = "처음으로 시작하는 파이썬"
url_name = "www.wikibook.co.kr"


cursor.execute(f"INSERT INTO books VALUES(\"{bookname}\", \"{url_name}\")")
conn.commit()
conn.close()
