from flask import json, jsonify, send_file, url_for, session
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
                return {'Github': 'Ok!', 'Heroku': 'Ok!'}
            else:
                try:
                    cmd=url_id.split(' ')
                except:                    
                    cmd=[url_id, 'nothing']
                if cmd[0]=='login':    
                    try:                
                        user=cmd[1].split(':')
                        user=user[1]
                        # session['user']=user
                        # session['loged']=False
                        teste='password'
                        return jsonify(teste) 
                    except:
                        return jsonify("You must inform your user like 'login user:<your user>'")
                elif cmd[0][0]=='p' and cmd[0][1]=='w':
                    print(session['user'])
                    if cmd[0][2:]=='2653':
                        # session['loged']=True
                        return jsonify('Successfully login.')
                    else:
                        session.clear()
                        return jsonify('Login or password incorrect.')
                elif cmd[0]=='loged':
                    try:
                        return jsonify(session['loged'])
                    except Exception as E:
                        print(E)
                        return jsonify('False')
                    
                elif cmd[0]=='logout':
                    session.clear() 
                    return jsonify('logout complete')
                else:
                    print(cmd[0])
                    return jsonify('invalid command')
                                    
                
              

    api.add_resource(portfolio, '/api/<string:url_id>')