<?php
/**
 * Doctype.se test
 *
 * You have a list of Person objects, each Person has a numeric Age attribute.
 * Write a function that returns true if there is a person who is at least twice as old as another person in the list,
 * otherwise returns false.
 */
class Person {
    /**
     * The age attribute.
     */
    public $age = 0;

    /**
     * Creates a person with an age.
     *
     * @param integer $age The age of the person.
     * @return void
     */
    public function __construct( $age ) {
        $this->age = $age;
    }

    /**
     * Creates an array of people.
     *
     * Setting `$min` and `$max` low will help to test the algorithm.
     *
     * @param  integer $number The number of people to create.
     * @param  integer $min    The minimum age of a person.
     * @param  integer $max    The maximum age of a person.
     * @return array
     */
    public static function generate_people( $number, $min = 1, $max = 100 ) {
        $people = array();

        for ( $i = 0; $i < $number; $i++ ) {
            $people[] = new Person( rand( $min, $max ) );
        }

        return $people;
    }

    /**
     * Checks if a person in the list is at least twice as old as another person in the list.
     *
     * PHP's `sort` uses the Quicksort algorithm which has an average of O(n log n) complexity.
     *
     * @link https://duckduckgo.com/?q=php+sort&t=canonical&atb=v92-1&ia=web PHP sort
     * @link https://en.wikipedia.org/wiki/Quicksort
     *
     * @param array $people The list of people.
     * @return boolean
     */
    public static function has_twice_as_old( $people ) {
        sort( $people );

        echo 'The age of people in the list: ';
        echo implode(
            ', ',
            array_map(
                function ( $person ) {
                    return $person->age;
                },
                $people
            )
        );

        $first = reset($people);
        $last  = end($people);

        echo PHP_EOL;
        echo 'Has twice as old?: ';

        return ( 2 * $first->age <= $last->age );
    }
}
