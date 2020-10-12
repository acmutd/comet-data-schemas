/**
 * A series of lectures or lessons in a particular subject.
 *
 * This should not be confused with the concept of a class, which is a specific
 * instance of a course with an associated time, location, and instructor.
 */
interface Course {
  /**
   * A course identifier that exists completely independently of formal course code.
   */
  id: string;

  /**
   * The formal name for this course.
   * 
   * @example Introduction to Data Structures and Algorithsm
   */
  title: string;

  /**
   * The subject identifer for this course code.
   * 
   * @example CS
   */
  subject: string;

  /**
   * The suffix to this course.
   * 
   * @example 3345
   */
  number: string;

  /**
   * A brief overview of the contents of this course.
   */
  description: string;
}


/**
 * All valid semester codes.
 */
export enum SemesterCode {
  /**
   * Fall term
   */
  FALL = 'f',
  /**
   * Spring term
   */
  SPRING = 's',
  /**
   * Summer term
   */
  SUMMER = 'u',
}
