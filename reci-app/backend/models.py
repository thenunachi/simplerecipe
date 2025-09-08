from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class PreparationTime(db.Model):
    __tablename__ = 'preparation_time'
    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.String(100), nullable=False)
    preparation = db.Column(db.String(100), nullable=False)
    cooking = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "total": self.total,
            "preparation": self.preparation,
            "cooking": self.cooking
        }