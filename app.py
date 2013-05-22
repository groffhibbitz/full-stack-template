import os
from flask import Flask, request, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/hi')
def hi():
    return 'hi'

def generic_error_handler(error):
    print str(error)
   
error_range = [400, 402] + range(404, 420) + range(500, 506)
for error in error_range:
    app.error_handler_spec[None][error] = generic_error_handler


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)



