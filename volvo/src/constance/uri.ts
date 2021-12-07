enum uri {
  schedule = '/schedules',
  signup = '/user',
  signin = '/user/auth',
  status = '/user/status',
  sendVertify = '/user/email/verify',
  resetPassword = '/user/password',
  sendPasswordVertify = '/user/password/email/verify',
  finalSubmission = '/application',
  introduction = '/application/intro',
  studyPlan = '/application/study-plan',
  selectType = '/application/users/type',
  information = '/application/users',
  graduateInformation = '/application/users/graduation',
  userPhoto = '/application/users/photo',
  searchSchool = '/application/schools',
  gedScore = '/score/qualification',
  grade = '/score/graduation',
  preview = '/pdf/preview',
  final = '/pdf/final',
}

export default uri;
