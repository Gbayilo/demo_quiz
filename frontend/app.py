from flask import Flask, render_template, url_for, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('index.html')

@app.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    return render_template('dashboard.html')

@app.route('/generalknowledge', methods=['GET', 'POST'])
def generalknowledge():
    return render_template('generalknowledge.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    return render_template('signup.html')

@app.route('/startquiz', methods=['GET', 'POST'])
def startquiz():
    return render_template('startquiz.html')


if __name__ == '__main__':
    app.run(port=5000, debug=True)

