import webapp2

class RedirectHandler(webapp2.RequestHandler):
    def get(self):
        staticFile = self.request.path.split('/')[-1]
        self.redirect('http://groupby.github.io/api-javascript/dist/' + staticFile)

app = webapp2.WSGIApplication([('/.*', RedirectHandler)], debug=True)
