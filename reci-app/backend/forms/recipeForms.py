from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, FieldList, FormField
from wtforms.validators import DataRequired

# Form for a single ingredient
class IngredientForm(FlaskForm):
    name = StringField('Ingredient', validators=[DataRequired()])

# Form for a recipe
class RecipeForm(FlaskForm):
    name = StringField('Recipe Name', validators=[DataRequired()])
    ingredients = FieldList(FormField(IngredientForm), min_entries=1) #FormField = Embeds IngredientForm inside RecipeForm. fieldList = dynamic list of subforms
    submit = SubmitField('Save Recipe')