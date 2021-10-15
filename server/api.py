from flask import jsonify, send_file, url_for
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api

def create_app(app):
    api = Api(app)
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    class portfolio(Resource):
        @cross_origin()
        def get(self, url_id):
            if url_id=='port':
                teste={'Github': 'Ok!',
                        'Heroku': 'Ok!'}
                return teste
            else:
                teste={'erro': 'nothing'}
                return jsonify(teste)            
    api.add_resource(portfolio, '/api/<string:url_id>')