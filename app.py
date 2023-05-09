from flask import Flask, render_template

app=Flask(__name__)

@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/services")
def services():
   return render_template("services.html")
        


if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)