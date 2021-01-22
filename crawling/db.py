import MySQLdb

conn = MySQLdb.connect(
    user="root",
    passwd="whdwk584859",
    host="localhost",
    db="test"
    # charset="utf-8"
)
print(type(conn))
# <class 'MySQLdb.connections.Connection'>
cursor = conn.cursor()
print(type(cursor))
# <class 'MySQLdb.cursors.Cursor'>
cursor.execute("CREATE TABLE books (title text, url text)")
conn.commit()
