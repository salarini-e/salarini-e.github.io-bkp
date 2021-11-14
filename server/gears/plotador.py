import os
from flask import url_for, render_template
from werkzeug.utils import secure_filename
import io

class Plotador:
    
        
    def __init__(self) -> None:
        self.ALLOWED_EXTENSIONS = {'txt', 'csv'}
        self.UPLOAD_FOLDER = 'tmp'  
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
                # file.save(os.path.join(self.UPLOAD_FOLDER, filename)) 
                x,y=self.getCoord(file)  
                if x!=False:
                    x_=x
                    y_=y
                    log=[ 'Gráfico plotado!', 'alert-primary']
                # if request.form[]
                return render_template('plotador.html', x=x_, y=y_,log=log)                
            return render_template('plotador.html', x=x_, y=y_, log=['Arquivo inválido. Por favor, envie um arquivo .txt', 'alert-danger'])                                        
    def getCoord(self, file_):
        try:
            file__ = file_.read()
            import io
            reader = io.BufferedReader(io.BytesIO(file__))
            wrapper = io.TextIOWrapper(reader)
            file=wrapper.readlines()            
            x=[]             
            y=[]
            # print(file)
            # cont=0
            for line in file:  
                # if line!=';'or'\n':
                #     gambiarra=gambiarra+line
                # elif line==';':
                #     cont=1
                # elif line=='\n':
                #     cont=0
                print(line)
                valores=['','']  
                # print(str(line.strip()))                              
                pos=0
                
                for u in line.strip():                    
                    if u==';':
                        pos=1
                    else:                                                
                        valores[pos]+=u
                if valores[0]!='' or valores[1]!='':
                    print('x: ',valores[0])
                    x.append(float(valores[0]))                    
                    y.append(float(valores[1]))
                print(x)
                print(y)
            return x, y
        except Exception as E:
            print(E)       
            return False, False
    def regressao_linear(self):
        pass
        