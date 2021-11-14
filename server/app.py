from flask import Flask, render_template, jsonify

def create_app():
    app = Flask(__name__)


    @app.route('/')
    def ind():
        return jsonify("Hello, world!")
    
    @app.route('/plotador')
    def plotador():
        return "Plotador... Onde está que eu não tô achando? PERDI?!"

    return app