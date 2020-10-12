/**
 * The degree type that shows up on the diploma.
 */
export enum PlanType {
  BS = 'Bachelor of Science',
  BA = 'Bachelor of Arts',
  PhD = 'Doctor of Philosophy',
  AuD = 'Doctor of Audiology'
  // TODO: Add rest of degrees
}

/**
 * A category of degree plan.
 *
 * Only used for undergraduate degrees.
 */
export enum PlanCategory {
  major = 'Major',
  minor = 'Minor',
  honors = 'Honors',
  cert = 'Certificate',
}

/**
 * A specific semester term.
 * Should be foramtted [year][SemesterCode].
 *
 * @example 2020f
 */
export type Term = string;
