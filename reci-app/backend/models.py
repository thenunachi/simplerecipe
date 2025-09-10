from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class PreparationTime(db.Model):
    __tablename__ = 'preparation_time'
    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.String(100), nullable=False)
    preparation = db.Column(db.String(100), nullable=False)
    cooking = db.Column(db.String(100), nullable=False)
    recipe_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)
    def to_dict(self):
        return {
            "id": self.id,
            "total": self.total,
            "preparation": self.preparation,
            "cooking": self.cooking
        }
class Ingredients(db.Model):
    __tablename__ = 'ingredients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    recipe_id = db.Column(db.Integer,db.ForeignKey('recipes.id'),nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name" : self.name   
        }
class Nutrition(db.Model):
    __tablename__ = 'nutrition'
    id = db.Column(db.Integer,primary_key=True)
    calories = db.Column(db.Integer, nullable=False)
    protein = db.Column(db.Integer, nullable=False)
    carbs = db.Column(db.Integer, nullable=False)
    fat = db.Column(db.Integer, nullable=False)
    recipe_id = db.Column(db.Integer,db.ForeignKey('recipes.id'),nullable=False)
    
    def to_dict(self):
        return{
            "id":self.id,
            "calories":self.calories,
            "protein":self.protein,
            "carbs": self.carbs,
            "fat": self.fat
        }
        
        
class Recipe(db.Model):
    __tablename__ = 'recipes'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)   # title of recipe
    description = db.Column(db.Text, nullable=False)    # recipe description

    # relationships
    ingredients = db.relationship("Ingredients", backref="recipe", lazy=True)
    prep_times = db.relationship("PreparationTime", backref="recipe", lazy=True)
    nutrition = db.relationship("Nutrition",backref="recipe",lazy=True)
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "ingredients": [ing.to_dict() for ing in self.ingredients],
            "prep_times": [pt.to_dict() for pt in self.prep_times],
            "nutrition": [nutri.to_dict() for nutri in self.nutrition]
        }
