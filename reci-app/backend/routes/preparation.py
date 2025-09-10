from flask import Blueprint,request,jsonify
from forms.prepForm import PrepForm, UpdatePrepForm
from models import PreparationTime, db
from flask_cors import cross_origin


prep_routes = Blueprint('prep', __name__)

# Get all preparation times
@prep_routes.route('/', methods=["GET"])
def get_all_prep():
    all_prep = PreparationTime.query.all()
    return {"prep_times": [prep.to_dict() for prep in all_prep]}


@prep_routes.route('/<int:id>/', methods=["GET"])
def get_prep(id):
    prep_time = PreparationTime.query.get_or_404(id)
    return prep_time.to_dict()


@prep_routes.route('/', methods=["POST"])
@cross_origin(origins="http://localhost:3000")
def add_prep():
    data = request.json
    title = data.get("title")
    description = data.get("description")
    prep_time = data.get("prepTime")
    ingredients = data.get("ingredients", [])

    if not title or not description:
        return jsonify({"error": "Title and description are required"}), 400

    recipe = Recipe(title=title, description=description)
    db.session.add(recipe)
    db.session.commit()  # so recipe.id is available

    # Save preparation time
    if prep_time:
        pt = PreparationTime(
            total=prep_time.get("total"),
            preparation=prep_time.get("preparation"),
            cooking=prep_time.get("cooking"),
            recipe_id=recipe.id
        )
        db.session.add(pt)

    # Save ingredients
    for ing in ingredients:
        ingredient = Ingredient(name=ing, recipe_id=recipe.id)
        db.session.add(ingredient)

    db.session.commit()
    return jsonify(recipe.to_dict()), 201


@prep_routes.route('/<int:id>', methods=['PUT'])
@cross_origin(origins="http://localhost:3000")
def update_prep(id):
    data = request.json
    prep = PreparationTime.query.get(id)
    if prep:
        prep.total = data['total']
        prep.preparation = data['preparation']
        prep.cooking = data['cooking']
        db.session.commit()
        return jsonify(prep.to_dict())
    return {"error": "Not found"}, 404

@prep_routes.route('/<int:id>', methods=['DELETE'])
@cross_origin(origins="http://localhost:3000")
def delete_prep(id):
    prep = PreparationTime.query.get(id)
    if prep:
        db.session.delete(prep)
        db.session.commit()
        return {"message": "Deleted successfully"}
    return {"error": "Not found"}, 404