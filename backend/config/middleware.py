import time
from .settings import RESPONSE_DELAY


class TimeDelayMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response
        self.delay = RESPONSE_DELAY

    def __call__(self, request):
        if '/api/' in request.path:
            time.sleep(self.delay)
        response = self.get_response(request)
        return response
    