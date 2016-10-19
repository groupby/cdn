class RedirectHandler(webapp.RequestHandler):
    def get(self):
        staticFile = self.request.path.split('/')[-1]
        self.redirect('http://groupby.github.io/api-javascript/dist' + staticFile)
