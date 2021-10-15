from server.app import create_app
from server.api import create_app as create_api

app=create_app()
create_api(app)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
 