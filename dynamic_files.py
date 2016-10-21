import os
import webapp2

class DynamicHandler(webapp2.RequestHandler):
    def get(self):
        paths = self.request.path.split('/')
        path = os.path.join(os.path.split(__file__)[0], 'projects', paths[-2], 'static', paths[-1]);
        name, ext = os.path.splitext(path)

        if ext == '.js':
            self.response.headers['Content-Type'] = 'application/javascript; charset=UTF-8'
        elif ext == '.html':
            self.response.headers['Content-Type'] = 'text/html; charset=UTF-8'
        elif ext == '.css':
            self.response.headers['Content-Type'] = 'text/css; charset=UTF-8'

        self.response.out.write(open(path).read())

app = webapp2.WSGIApplication([('/.*', DynamicHandler)], debug=True)
