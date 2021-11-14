import os
from flask import url_for, render_template
from werkzeug.utils import secure_filename

class Plotador:
    
        
    def __init__(self) -> None:
        self.ALLOWED_EXTENSIONS = {'txt', 'csv'}
        self.UPLOAD_FOLDER = 'C:\\Users\\Eduardo\\Documents\\esalarini3\\app\\static\\uploads'  
        pass    
    def allowed_file(self, filename):
        return '.' in filename and \
            filename.rsplit('.', 1)[1].lower() in self.ALLOWED_EXTENSIONS    
    def run(self, request, x_, y_):
        # check if the post request has the file part
            if 'file' not in request.files:                                
                return render_template('plotador.html', x=x_, y=y_,log=['É necessario o upload de um arquivo para plotagem.', 'alert-danger'])
            file = request.files['file']            
            if file.filename == '':                
                return render_template('plotador.html', x=x_, y=y_,log=['É necessario o upload de um arquivo para plotagem.', 'alert-danger'])
            if file and self.allowed_file(file.filename):                
                log=['Ops. Parece que seu arquivo não está de acordo com nosso layout.', 'alert-danger']
                filename = secure_filename(file.filename)
                file.save(os.path.join(self.UPLOAD_FOLDER, filename)) 
                x,y=self.getCoord(filename)  
                if x!=False:
                    x_=x
                    y_=y
                    log=[ 'Gráfico plotado!', 'alert-primary']
                # if request.form[]
                return render_template('plotador.html', x=x_, y=y_,log=log)                
            return render_template('plotador.html', x=x_, y=y_, log=['Arquivo inválido. Por favor, envie um arquivo .txt', 'alert-danger'])                                        
    def getCoord(self, filename):
        try:
            file = open(self.UPLOAD_FOLDER+'\\'+str(filename), "r")
            x=[]             
            y=[]
            for line in file:   
                valores=['','']  
                # print(str(line.strip()))                              
                pos=0
                for u in str(line.strip()):                    
                    if u==';':
                        pos=1
                    else:
                        valores[pos]+=u
                if valores[0]!='' or valores[1]!='':
                    x.append(float(valores[0]))                    
                    y.append(float(valores[1]))
            return x, y
        except Exception as E:
            print(E)       
            return False, False
    def regressao_linear(self):
        pass
        