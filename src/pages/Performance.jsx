import TeacherFeedback from "../components/TeacherFeedback";
import TeacherRatings from "../components/TeacherRatings";
import TeacherAttendance from "../components/TeacherAttendance";

export default function Performance() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">📊 Performance Insights</h1>
      <TeacherFeedback />
      <TeacherRatings />
      <TeacherAttendance />
    </div>
  );
}
