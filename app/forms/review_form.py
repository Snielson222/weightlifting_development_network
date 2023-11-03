from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField, StringField, IntegerField, TextAreaField, SelectField

from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    rating = IntegerField("Star Rating", validators=[DataRequired()])
    description = TextAreaField("Review Description", validators=[DataRequired()])
    exercise_id = IntegerField("exercise id", validators=[DataRequired()])