from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

# Form for adding new preparation time
class PrepForm(FlaskForm):
    total = StringField('Total', validators=[DataRequired()])
    preparation = StringField('Preparation', validators=[DataRequired()])
    cooking = StringField('Cooking', validators=[DataRequired()])
    submit = SubmitField('Add')

# Form for updating existing preparation time
class UpdatePrepForm(FlaskForm):
    id = IntegerField('ID', validators=[DataRequired()])
    total = StringField('Total', validators=[DataRequired()])
    preparation = StringField('Preparation', validators=[DataRequired()])
    cooking = StringField('Cooking', validators=[DataRequired()])
    submit = SubmitField('Update')