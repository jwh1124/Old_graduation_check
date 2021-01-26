from sqlalchemy import Column, String, Integer
from sqlalchemy.dialects.mysql import BIGINT
from sqlalchemy.ext.declarative import declarative_base
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine(
    "mysql://root:whdwk584859@localhost:3306/sejong", encoding='utf-8-sig')


Base = declarative_base()

# class BillRawTest(Base):
#   __tablename__ = 'cstest'
#   __table_args__ = {'extend_existing': True}
#   bill_id = Column(BIGINT(20), primary_key  = True)
#   item = Column(String(20))
#   amount = Column(Integer)

metadata = Base.metadata
metadata.create_all(engine)

df = pd.read_excel('lecture_20_2.xlsx',
                   sheet_name='Class Schedule', header=0)
df.to_sql(name='lectures', con=engine,
          if_exists='append', index=False)

# 중복삭제 mysql - DELETE a FROM cstest a, cstest b WHERE a.NO > b.NO AND a.학수번호 = b.학수번호;
