from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/graphs')
def graphs():
    return render_template('graphs.html')

@app.route('/maps')
def maps():
    return render_template('maps.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run()