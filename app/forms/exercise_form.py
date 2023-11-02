from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField, StringField, IntegerField, TextAreaField, SelectField
from ..api.aws_helpers import ALLOWED_EXTENSIONS
from wtforms.validators import DataRequired

class ExerciseForm(FlaskForm):
    name = StringField("Name of Exercise", validators=[DataRequired()])
    type = SelectField("type of Exercise", choices=["Upper Body", "Lower Body", "Warm Up"])
    description = TextAreaField("Description of Exercise", validators=[DataRequired()])
    experience = SelectField("Experience level of exercise", choices=["Beginner", "Intermediate", "Advanced"])
    target_muscles = StringField("Muscles Targeted By Exercise")
    image = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("Create Post")