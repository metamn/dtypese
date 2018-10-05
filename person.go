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

func GeneratePeople(number, min, max int) []int {
	ret := make([]int, number)

	for i := 0; i < number; i++ {
		ret[i] = rand.Intn(max-1) + min
	}

	return ret
}

func HasTwiceAsOld(people []int) bool {
	sort.Slice(people, func(i, j int) bool {
		return people[i] < people[j]
	})

	fmt.Println("The age of people in the list: ", people)

	first := people[0]
	last := people[len(people)-1]

	return (2*first <= last)
}

func main() {
	people := GeneratePeople(30, 1, 10)
	fmt.Println("Has twice as old?: ", HasTwiceAsOld(people))
}
