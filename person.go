package main

import (
	"fmt"
	"math/rand"
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

func main() {
	people := GeneratePeople(10, 1, 100)
	fmt.Println("The age of people in the list: ", people)
	fmt.Println("Has twice as old?: ")
}
