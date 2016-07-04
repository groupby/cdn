import urlparse

from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

class NotFoundPageHandler(webapp.RequestHandler):
    def get(self):
        self.error(404)
        url = urlparse.urlparse(self.request.uri).path
        self.response.out.write('Unable to retrieve file ' + url)

application = webapp.WSGIApplication([('/.*', NotFoundPageHandler)],
                                     debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
