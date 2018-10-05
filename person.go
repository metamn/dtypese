package main

// https://stackoverflow.com/questions/28999735/what-is-the-shortest-way-to-simply-sort-an-array-of-structs-by-arbitrary-field

import (
	"fmt"
	"math/rand"
	"sort"
)

type Person struct {
	Age int
}

func GeneratePeople(number, min, max int) []Person {
	ret := make([]Person, number)

	for i := 0; i < number; i++ {
		ret[i] = Person{rand.Intn(max-1) + min}
	}

	return ret
}

func HasTwiceAsOld(people []Person) bool {
	sort.Slice(people, func(i, j int) bool {
		return people[i].Age < people[j].Age
	})

	fmt.Println("The age of people in the list: ", people)

	first := people[0]
	last := people[len(people)-1]

	return (2*first.Age <= last.Age)
}

func main() {
	people := GeneratePeople(3, 1, 3)
	fmt.Println("Has twice as old?: ", HasTwiceAsOld(people))
}
