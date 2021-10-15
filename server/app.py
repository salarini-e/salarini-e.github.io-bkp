from flask import Flask, render_template, jsonify

def create_app():
    app = Flask(__name__)


    @app.route('/')
    def ind():
        return jsonify("Hello, world!")

    return app