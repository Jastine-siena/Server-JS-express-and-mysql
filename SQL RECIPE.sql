create database dbrecipe


CREATE TABLE tblrecipe(
RID INT PRIMARY KEY AUTO_INCREMENT,
RecipeName VARCHAR(50) NOT NULL,
Ingredientslist VARCHAR(300) NOT NULL,
CookingInstruction VARCHAR(300) NOT NULL,
Category VARCHAR(50) NOT NULL
);

INSERT INTO tblrecipe (RecipeName,Ingredientslist,CookingInstruction,Category)
VALUES
("Egg Omellete", "2 eggs, salt, cheese ","STEP 1: Beat the eggs, Step 2: Melt Butter, STEP 3: Add Eggs, STEP 4: Fill the omelette, STEP 5: Fold and serve","Breakfast"),
("Tortang Talong"," Eggplants, Eggs, salt, ground pepper, cooking oil", "STEP 1: Heat the eggplant, STEP 2: Pell the skin of eggplant, STEP 3: Beat the egg and mix in a bowl with eggplant, STEP 4: Pour the eggplant in a heat oil, STEP 5: Serve and Enjoy", "Dinner"),
("Avocado Shake", "Avocado, milk, crushed ice","Blend the milk, sweetened condensed milk and ice in a blender until very smooth. Add the avocado flesh and blend again until smooth. The mixture will be quite thick; add cold water a few tablespoons at a time, blending after each addition, until the mixture is pourable. Taste and add more sweetened condensed milk if you want it sweeter. Serve in chilled glasses with straws.","Dessert" )

