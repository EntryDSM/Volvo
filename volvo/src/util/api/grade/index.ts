import uri from '../../../constance/uri';
import { GradeState } from '../../../types';
import { getRequestWithAccessToken } from '../default';

export const setGrade = async (gradeRequest: GradeState) => {
  try {
    const access_token = localStorage.getItem('access_token');
    const request = getRequestWithAccessToken(access_token as string);
    await request.patch(uri.grade, {
      volunteer_time: gradeRequest.volunteerTime,
      day_absence_count: gradeRequest.absence,
      lecture_absence_count: gradeRequest.truancy,
      lateness_count: gradeRequest.lateness,
      early_leave_count: gradeRequest.leave,
      korean_grade: gradeRequest.grade.korean,
      social_grade: gradeRequest.grade.social,
      history_grade: gradeRequest.grade.history,
      math_grade: gradeRequest.grade.math,
      science_grade: gradeRequest.grade.science,
      english_grade: gradeRequest.grade.english,
      tech_and_home_grade: gradeRequest.grade.technical,
    });
  } catch (error) {
    throw error;
  }
};

export const getGradeApi = async () => {
  try {
    const access_token = localStorage.getItem('access_token');
    const request = getRequestWithAccessToken(access_token as string);
    return await request.get(uri.grade);
  } catch (error) {
    throw error;
  }
};
