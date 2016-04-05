import pycurl
from StringIO import StringIO

buffer = StringIO()
c = pycurl.Curl()
c.setopt(c.URL, 'https://opendurham.nc.gov/api/records/1.0/search/?dataset=durham-neighborhoods&facet=name&facet=r_avgyr')
c.setopt(c.WRITEDATA, buffer)
c.perform()
c.close()

body = buffer.getvalue()
# Body is a string in some encoding.
# In Python 2, we can print it without knowing what the encoding is.
print(body)