from flask_wtf import FlaskForm
from wtforms import DecimalField, SubmitField
from wtforms.validators import DataRequired, NumberRange

class NutritionForm(FlaskForm):
    calories = DecimalField('Calories', validators=[DataRequired(), NumberRange(min=0)])
    protein = DecimalField('Protein', validators=[DataRequired(), NumberRange(min=0)])
    fat = DecimalField('Fat', validators=[DataRequired(), NumberRange(min=0)])
    carbs = DecimalField('Carbs', validators=[DataRequired(), NumberRange(min=0)])
    submit = SubmitField('Save Nutrition')