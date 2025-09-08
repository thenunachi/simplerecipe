from flask import Blueprint,request
from forms.prepForm import PrepForm, UpdatePrepForm
from models import PreparationTime, db
from flask_cors import cross_origin


prep_routes = Blueprint('prep', __name__)

# Get all preparation times
@prep_routes.route('/', methods=["GET"])
def get_all_prep():
    all_prep = PreparationTime.query.all()
    return {"prep_times": [prep.to_dict() for prep in all_prep]}

@prep_routes.route('/', methods=["POST"])
@cross_origin(origins="http://localhost:3000")
def add_prep():
    data = request.get_json()
    prep_time = PreparationTime(
        total = data["total"],
        preparation = data["preparation"],
        cooking = data["cooking"]
    )
    db.session.add(prep_time)
    db.session.commit()
    return{"prep_time": prep_time.to_dict()} , 201


# @prep_routes.route('/<int:id>', methods=['PUT'])
# def update_prep(id):
#     data = request.json
#     prep = PreparationTime.query.get(id)
#     if prep:
#         prep.total = data['total']
#         prep.preparation = data['preparation']
#         prep.cooking = data['cooking']
#         db.session.commit()
#         return jsonify(prep.to_dict())
#     return {"error": "Not found"}, 404

# @prep_routes.route('/<int:id>', methods=['DELETE'])
# def delete_prep(id):
#     prep = PreparationTime.query.get(id)
#     if prep:
#         db.session.delete(prep)
#         db.session.commit()
#         return {"message": "Deleted successfully"}
#     return {"error": "Not found"}, 404