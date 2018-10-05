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
	 * @param integer @age The age of the person.
	 * @return void
	 */
	public function __construct( $age ) {
		$this->age = $age;
	}

	/**
	 * Creates an array of people.
	 * 
	 * @param integer $number The number of people to create.
	 * @return array
	 */
	public static function generate_people( $number ) {
		$people = array();

		for ( $i = 0; $i < $number; $i++ ) {
			$people[] = new Person( rand( 1, 100 ) );
		}

		return $people;
	}

	/**
	 * Checks if a person in the list is at least twice as old as another person in the list.
	 * 
	 * @param array $people The list of people.
	 * @return boolean
	 */
	public static function has_twice_as_old( $people ) {
		
	}
}
