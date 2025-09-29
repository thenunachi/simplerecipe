import sqlite3  #interact with the SQLite database.
from flask import Flask, request, jsonify #flask to create web server,request to handle HTTp req and jsonify to convert python data to fronend json response
from flask_cors import CORS #connect with frontend
from models import db,PreparationTime,Recipe,Ingredients,Nutrition
from forms.prepForm import PrepForm, UpdatePrepForm
from routes.preparation import prep_routes
from routes.recipe import recipe_routes
from forms.recipeForms import IngredientForm,RecipeForm


app = Flask(__name__)#new flask app instance
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# CORS(app)
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) # prevents browser error
CORS(app, origins=[
    "http://localhost:3000",  # local React dev server
    "https://simplerecipe-a4wl-o52bmatc9-thenunachis-projects.vercel.app"
])

db.init_app(app)
with app.app_context():
    db.create_all()  # Creates tables based on models if not exist

app.register_blueprint(prep_routes, url_prefix ='/preparation')
app.register_blueprint(recipe_routes, url_prefix='/recipes')
# app.register_blueprint()

if __name__ == "__main__":
    app.run(debug=True,port=8000)