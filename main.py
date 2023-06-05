from flask import Flask, render_template

app=Flask(__name__)

@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/services")
def services():
   return render_template("services.html")
        
@app.route("/about")
def about():
   return render_template("about.html")

@app.route("/reviews")
def reviews():
   return render_template("reviews.html")

@app.route("/contact")
def contact():
   return render_template("contact.html")

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)

