from flask import Flask, render_template, request

app=Flask(__name__)


reviews_list = []

@app.route('/reviews', methods=['GET', 'POST'])
def reviews():
    if request.method == 'POST':
        # Handle form submission and store the new review
        new_review = request.form['review']
        reviews_list.append(new_review)
    # Render the reviews page template with the reviews_list passed as a variable
    return render_template('reviews.html', reviews=reviews_list)


@app.route("/")
def homepage():
    return render_template("homepage.html")

@app.route("/services")
def services():
   return render_template("services.html")
        
@app.route("/about")
def about():
   return render_template("about.html")


@app.route("/contact")
def contact():
   return render_template("contact.html")

if __name__ == '__main__':
  app.run(host='0.0.0.0', debug=True)

