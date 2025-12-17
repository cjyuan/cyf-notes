# Superclass
class Animal:
    def make_sound(self):
        print("Animal makes a sound")

    def eat(self):
        print("Animal is eating")

# Subclass
class Dog(Animal):
    def make_sound(self):
        print("Dog barks")


a = Animal()
a.make_sound()   # Animal makes a sound
a.eat()          # Animal is eating

d = Dog()
d.make_sound()   # Dog barks
d.eat()          # Animal is eating (Inherited from Animal)



# Function that accepts the parent class
def process_animal(animal: Animal):
    animal.make_sound()
    animal.eat()

a = Animal()
process_animal(a)
# Animal makes a sound
# Animal is eating

d = Dog()
process_animal(d)
# Dog barks
# Animal is eating

# Note: Python runtime don't enforce type checking, but we can use separate tools to perform static check
class FakeAnimal:
    def make_sound(self):
      print("Fake sound")
      
    def eat(self):
      print("Fake eat")

process_animal(FakeAnimal())  # ❌ flagged by type checker (and not checked by Python runtime)


