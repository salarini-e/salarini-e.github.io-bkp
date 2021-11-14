from flask import Flask, render_template, jsonify, request
from .gears import Plotador

def create_app():
    app = Flask(__name__)
    UPLOAD_FOLDER = 'C:\\Users\\Eduardo\\Documents\\esalarini3\\app\\static\\uploads'    
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER        
    

    @app.route('/')
    def index():
        return jsonify("Hello, world!")
    
    @app.route('/plotador', methods=['GET', 'POST'])
    def plotador():
        x_=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        y_=[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
        if request.method == 'POST':
            plotador=Plotador()
            return plotador.run(request, x_, y_)
        return render_template('plotador.html', x=x_, y=y_, log=['',''])

    return app