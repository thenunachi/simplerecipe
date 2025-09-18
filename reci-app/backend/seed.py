from models import db, Recipe, Ingredients, PreparationTime, Nutrition, Instruction
from app import app
# from img import egg
with app.app_context():
    db.drop_all()
    db.create_all()

    # ===================== 1. Omelette =====================
    omelette = Recipe(
        title="Omelette",
        description="Quick and fluffy omelette with butter.",
        image_url="https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg"  # Replace with a valid image URL
    )
    db.session.add(omelette)
    db.session.flush()

    db.session.add_all([
        Ingredients(name="2 Eggs", recipe_id=omelette.id),
        Ingredients(name="1 tbsp Butter", recipe_id=omelette.id),
        Ingredients(name="Salt & Pepper", recipe_id=omelette.id),
        PreparationTime(total="10 min", preparation="5 min", cooking="5 min", recipe_id=omelette.id),
        Nutrition(calories=200, protein=12, carbs=2, fat=15, recipe_id=omelette.id),
        Instruction(step_title="Beat Eggs", step_description="Beat the eggs with salt and pepper.", recipe_id=omelette.id),
        Instruction(step_title="Cook", step_description="Melt butter in a pan, add eggs, cook until fluffy.", recipe_id=omelette.id)
    ])

    # ===================== 2. Grilled Chicken =====================
    chicken = Recipe(
        title="Grilled Chicken",
        description="Juicy grilled chicken breast with herbs.",
        image_url="https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    )
    db.session.add(chicken)
    db.session.flush()

    db.session.add_all([
        Ingredients(name="2 Chicken Breasts", recipe_id=chicken.id),
        Ingredients(name="Olive Oil", recipe_id=chicken.id),
        Ingredients(name="Salt & Herbs", recipe_id=chicken.id),
        PreparationTime(total="25 min", preparation="10 min", cooking="15 min", recipe_id=chicken.id),
        Nutrition(calories=300, protein=35, carbs=0, fat=15, recipe_id=chicken.id),
        Instruction(step_title="Marinate", step_description="Marinate chicken with olive oil and herbs.", recipe_id=chicken.id),
        Instruction(step_title="Grill", step_description="Grill chicken for 6–7 minutes per side.", recipe_id=chicken.id)
    ])

    # ===================== 3. Pasta =====================
    pasta = Recipe(
        title="Tomato Pasta",
        description="Classic Italian pasta with tomato sauce.",
        image_url="https://plus.unsplash.com/premium_photo-1664478288635-b9703a502393?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    )
    db.session.add(pasta)
    db.session.flush()

    db.session.add_all([
        Ingredients(name="200g Pasta", recipe_id=pasta.id),
        Ingredients(name="2 Tomatoes", recipe_id=pasta.id),
        Ingredients(name="Garlic & Basil", recipe_id=pasta.id),
        PreparationTime(total="30 min", preparation="10 min", cooking="20 min", recipe_id=pasta.id),
        Nutrition(calories=400, protein=12, carbs=60, fat=10, recipe_id=pasta.id),
        Instruction(step_title="Boil Pasta", step_description="Cook pasta in salted boiling water.", recipe_id=pasta.id),
        Instruction(step_title="Make Sauce", step_description="Cook tomatoes with garlic and basil.", recipe_id=pasta.id),
        Instruction(step_title="Mix", step_description="Combine pasta with sauce and serve hot.", recipe_id=pasta.id)
    ])

    # ===================== 4. Salad =====================
    salad = Recipe(
        title="Fresh Garden Salad",
        description="Crisp and refreshing vegetable salad.",
        image_url="https://plus.unsplash.com/premium_photo-1690561082420-fad21ede2431?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    )
    db.session.add(salad)
    db.session.flush()

    db.session.add_all([
        Ingredients(name="Lettuce", recipe_id=salad.id),
        Ingredients(name="Tomatoes", recipe_id=salad.id),
        Ingredients(name="Cucumber", recipe_id=salad.id),
        Ingredients(name="Olive Oil & Lemon", recipe_id=salad.id),
        PreparationTime(total="10 min", preparation="10 min", cooking="0 min", recipe_id=salad.id),
        Nutrition(calories=120, protein=3, carbs=10, fat=8, recipe_id=salad.id),
        Instruction(step_title="Chop Veggies", step_description="Chop lettuce, tomatoes, cucumber.", recipe_id=salad.id),
        Instruction(step_title="Mix", step_description="Toss with olive oil and lemon juice.", recipe_id=salad.id)
    ])

    # ===================== 5. Pancakes =====================
    pancakes = Recipe(
        title="Pancakes",
        description="Fluffy breakfast pancakes served with syrup.",
        image_url="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
    )
    db.session.add(pancakes)
    db.session.flush()

    db.session.add_all([
        Ingredients(name="1 cup Flour", recipe_id=pancakes.id),
        Ingredients(name="1 Egg", recipe_id=pancakes.id),
        Ingredients(name="1 cup Milk", recipe_id=pancakes.id),
        Ingredients(name="1 tbsp Sugar", recipe_id=pancakes.id),
        PreparationTime(total="20 min", preparation="10 min", cooking="10 min", recipe_id=pancakes.id),
        Nutrition(calories=250, protein=6, carbs=40, fat=8, recipe_id=pancakes.id),
        Instruction(step_title="Mix Batter", step_description="Mix flour, egg, milk, and sugar.", recipe_id=pancakes.id),
        Instruction(step_title="Cook", step_description="Pour batter on pan, cook both sides until golden.", recipe_id=pancakes.id)
    ])

    db.session.commit()
    print("✅ Database seeded with 5 recipes!")