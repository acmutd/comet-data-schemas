import { Course } from '../courses';
import { Term } from './extras';

/**
 * A wrapper for degree plan information used to validate a four-year plan.
 *
 * Stores all the requirements for a particular degree plan. For example, this
 * would store all information on how to graduate with a Bachelor of Science in
 * Comuter Science.
 */
export interface CoursePlan {
  /**
   * The subject of the plan, such as "Computer Science".
   */
  name: string;

  /**
   * The formal type, such as "Bachelor of Science".
   */
  type: string;

  /**
   * The category of plan.
   */
  category: string;

  /**
   * All required courses for this plan.
   */
  requirements: Array<PlanRequirement>;
}

/**
 * A collection of courses to be taken in a semester.
 *
 * Used in schedule planning.
 */
export interface ScheduleSemester {
  /**
   * When these courses will be taken.
   */
  term: Term;

  /**
   * The planned courses to enroll in this semester.
   */
  courses: Array<Course>;
}

/**
 * A grouping of courses required to satisfy a degree requirements.
 */
export interface PlanRequirement {
  /**
   * The formal title of this requirement, like "Major Preparatory Courses".
   */
  name: string;

  /**
   * A list of required course IDs to satisfy this requirement.
   */
  courses: Array<Course>;
  // TODO: Store ID instead of whole course
}
