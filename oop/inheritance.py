# Superclass (Parent class)
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def make_sound(self):
        print(f"{self.name} makes a sound.")

    def info(self):
        print(f"{self.name} is a {self.species}.")


# Subclass (Child class) inheriting from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, species="Dog")  # Call the superclass constructor
        self.breed = breed

    # Overriding the make_sound method
    def make_sound(self):
        print(f"{self.name} barks!")

    def dog_info(self):
        print(f"{self.name} is a {self.breed} breed.")


# Subclass (another example)
class Cat(Animal):
    def make_sound(self):
        print(f"{self.name} meows!")


# Using the classes
animal = Animal("Generic Animal", "Unknown")
animal.info()
animal.make_sound()

dog = Dog("Buddy", "Golden Retriever")
dog.info()          # Inherited method
dog.make_sound()    # Overridden method
dog.dog_info()      # Subclass-specific method

cat = Cat("Whiskers", "Cat")
cat.info()
cat.make_sound()
