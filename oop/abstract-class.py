from abc import ABC, abstractmethod

class AbstractAnimal1(ABC):

    @abstractmethod
    def make_sound(self) -> None:
        pass

    @abstractmethod
    def eat(self) -> None:
        pass


class AbstractAnimal2(ABC):

    @abstractmethod
    def make_sound(self) -> None:
        pass

    def eat(self):
      print("Aniaml is eating")


# Need to override both methods 
class Dog1(AbstractAnimal1):
    def make_sound(self):
        print("Dog 1 barks")

    def eat(self):
        print("Dog 1 is eating")

# Only need to override the abstract method
class Dog2(AbstractAnimal2):
    def make_sound(self):
        print("Dog 2 barks")


dog1 = Dog1()
dog1.make_sound()
dog1.eat()


dog2 = Dog2()
dog2.make_sound()
dog2.eat()


