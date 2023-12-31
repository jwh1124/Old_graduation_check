import pandas as pd
from sqlalchemy import create_engine

engine = create_engine("mysql+pymysql://root:simpson5378@127.0.0.1:3306/db_jjj", encoding='utf-8-sig')

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.mysql import BIGINT
from sqlalchemy import Column, String, Integer

Base = declarative_base()

#class BillRawTest(Base):
 #   __tablename__ = 'full_class_sheet'
 #   __table_args__ = {'extend_existing': True}
 #   bill_id = Column(BIGINT(20), primary_key  = True)
 #   item = Column(String(20))
 #   amount = Column(Integer)

metadata = Base.metadata
metadata.create_all(engine)

df = pd.read_excel('D:\AMD-RYZEN7\Desktop\cs2.xlsx', sheet_name='Sheet1', header=0)
df.to_sql(name='full_class_sheet', con = engine, if_exists='append', index=False)

# 중복삭제 mysql - DELETE a FROM full_class_sheet a, full_class_sheet b WHERE a.NO > b.NO AND a.학수번호 = b.학수번호;