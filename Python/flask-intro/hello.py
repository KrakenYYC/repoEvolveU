from flask import Flask, render_template, request

app = Flask(__name__)


people = {1: {'fname': 'Larry', 'lname': 'Shumlich', 'age': 29},
          5: {'fname': 'Lorraine', 'lname': 'Shumlich', 'age': 31},
          12: {'fname': 'Erin', 'lname': 'Shumlich', 'age': 30}
          }


@app.route("/")
def hello():
    return "Hello World<h1>Carrie Nermo</h1>"


@app.route("/admin")
@app.route("/admin/")
@app.route("/admin/<myid>")
@app.route("/admin/<myid>/")
def admin(myid=None):
    return render_template("person.html",
                           testval="Some Value So We know it works",
                           person=people.get(int(myid), {'fname': 'Who Knows'}))


@app.route("/info")
def info():
    print('Args:', request.args)
    return "Hello World! - info - Larry Shumlich " + request.args.get('parm1', 'default1')


if __name__ == '__main__':
    app.run(host='localhost', debug=True)
