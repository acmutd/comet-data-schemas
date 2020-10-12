/**
 * The registrar-determined year classification based on credit hours.
 */
export enum YearClassification {

  /**
   * Less than or equal to 30 credit hours.
   */
  Freshman = 'freshman',

  /**
   * At least 30 but no more than 59 credit hours.
   */
  Sophomore = 'sophomore',

  /**
   * At least 60 but no more than 89 credit hours.
   */
  Junior = 'junior',

  /**
   * Greater 90 credit hours.
   */
  Senior = 'senior',

  /**
   * Only for graduate students.
   */
  Graduate = 'graduate',
}


/**
 * Mappings of letter grades to grade points.
 *
 * Grades with values of -1 should not be factored into GPA calculations.
 */
export enum Grade {
  'A+' = 4.0,
  'A' = 4.0,
  'A-' = 3.67,
  'B+' = 3.33,
  'B' = 3.0,
  // TOOD: Insert rest of grades
  'F' = 0.0,
  /**
   * Indicates credit was not recieved for a course, only used in undergraduate
   * courses.
   * This grade should not be factored into GPA calculations.
   */
  'NC' = -1,
  /**
   * Indicates credit was recieved for a course, only used in undergraduate
   * courses.
   * This grade should not be factored into GPA calculations.
   */
  'CR' = -1,
  /**
   * Indicates course requirements were not complete at the end of a semester.
   * This grade should not be factored into GPA calculations.
   */
  'I' = -1,
  /**
   * Indicates a passing grade, only used in graduate courses.
   * This grade should not be factored into GPA calculations.
   */
  'P' = -1,
  /**
   * Indicates a withdrawn course. Not factored into GPA but may imply other
   * consequences.
   */
  'W' = -1,
  /**
   * Indicates a course withdrawn after census day.
   */
  'WL' = -1,
  /**
   * Non-recorded, used for ONLY grades that indicate the student grade awaits
   * review from the Office of Community Standards and Conduct for academic
   * dishonesty.
   */
  'NR' = -1,
  /**
   * Indicates a midterm grade that has does not enough information for a normal
   * letter grade.
   */
  'MN' = -1,
}