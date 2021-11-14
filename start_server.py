from server.app import create_app
from server.api import create_app as create_api
from flask_sqlalchemy import SQLAlchemy

app=create_app()
create_api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:secret@localhost/flask_login'
db = SQLAlchemy(app)

if __name__ == '__main__':
    app.secret_key='teste'
    app.run(host='127.0.0.1', port=8000, debug=True)
 