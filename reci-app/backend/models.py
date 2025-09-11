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
        
class Instruction(db.Model):
    __tablename__ = "instructions"
    id = db.Column(db.Integer, primary_key=True)
    step_title = db.Column(db.String(200), nullable=False)   # e.g. "Beat the eggs"
    step_description = db.Column(db.Text, nullable=False)    # e.g. "In a bowl, beat the eggs..."
    recipe_id = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "step_title": self.step_title,
            "step_description": self.step_description
            }
class Recipe(db.Model):
    __tablename__ = 'recipes'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)   # title of recipe
    description = db.Column(db.Text, nullable=False)    # recipe description
    image_url = db.Column(db.String(500)) 

    # relationships
    ingredients = db.relationship("Ingredients", backref="recipe", lazy=True)
    prep_times = db.relationship("PreparationTime", backref="recipe", lazy=True)
    nutrition = db.relationship("Nutrition",backref="recipe",lazy=True)
    instructions = db.relationship("Instruction", backref="recipe", lazy=True)
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "image_url": self.image_url,
            "ingredients": [ing.to_dict() for ing in self.ingredients],
            "prep_times": [pt.to_dict() for pt in self.prep_times],
            "nutrition": [nutri.to_dict() for nutri in self.nutrition],
            "instructions": [instruction.to_dict()  for instruction in self.instructions]
        }
