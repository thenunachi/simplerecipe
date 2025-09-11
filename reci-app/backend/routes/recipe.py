from flask import Blueprint, request, jsonify
from models import db, Recipe, Ingredients, PreparationTime,Nutrition,Instruction
from flask_cors import cross_origin

recipe_routes = Blueprint('recipe', __name__)

# Get all recipes
@recipe_routes.route('/', methods=["GET"])
def get_all_recipe():
    all_recipes = Recipe.query.all()
    result = []
    for recipe in all_recipes:
        result.append(recipe.to_dict())   # using to_dict from your model
    return jsonify({"recipes": result})


# Add a new recipe
@recipe_routes.route('/', methods=["POST"])
@cross_origin(origins="http://localhost:3000")  # allow React frontend
def add_recipe():
    data = request.get_json()

    # Expecting JSON like:
    # {
    #   "title": "Omelette",
    #   "description": "Quick and easy dish",
    #   "prepTime": { "total": "20 min", "preparation": "10 min", "cooking": "10 min" },
    #   "ingredients": ["Eggs", "Salt", "Butter"]
    # }

    title = data.get("title")
    description = data.get("description")
    image_url = data.get("image_url")
    prep_time = data.get("prepTime")
    ingredients = data.get("ingredients", [])
    nutrition = data.get("nutrition")
    instruction = data.get("instruction",[])
    if not title or not description:
        return {"error": "Title and description are required"}, 400

    # Create recipe
    recipe = Recipe(title=title, description=description,image_url=image_url)
    db.session.add(recipe)
    db.session.flush()  # get recipe.id without committing yet

    # Add preparation time
    if prep_time:
        pt = PreparationTime(
            total=prep_time.get("total"),
            preparation=prep_time.get("preparation"),
            cooking=prep_time.get("cooking"),
            recipe_id=recipe.id
        )
        db.session.add(pt)
    
    # Add ingredients
    for ing_name in ingredients:
        ingredient = Ingredients(name=ing_name, recipe_id=recipe.id)
        db.session.add(ingredient)
    if nutrition:
        nutrition = Nutrition(
            calories = nutrition.get("calories"),
            protein = nutrition.get("protein"),
            fat = nutrition.get("fat"),
            carbs = nutrition.get("carbs"),
            recipe_id = recipe.id
        )
        db.session.add(nutrition)
    if instruction:
        for inst in instruction:
            new_instruction = Instruction(
            step_title=inst.get("step_title"),
            step_description=inst.get("step_description"),
            recipe_id=recipe.id
        )
            
        db.session.add(new_instruction)
        
    db.session.commit()

    return jsonify(recipe.to_dict()), 201