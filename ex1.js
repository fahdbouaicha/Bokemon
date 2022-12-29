function FailedStudent(students) {
  // Filtrer les étudiants sans note
  const studentsWithNotes = students.filter((s) => s.note !== undefined);

  // Calculer la moyenne des notes
  const noteSum = studentsWithNotes.reduce((sum, s) => sum + s.note, 0);
  const averageNote = noteSum / studentsWithNotes.length;

  // Trier les étudiants par note
  const sortedStudents = studentsWithNotes.sort((a, b) => a.note - b.note);

  // Ajouter le champ "mention" à chaque étudiant
  for (const s of sortedStudents) {
    if (s.note >= averageNote) {
      s.mention = "bien";
    } else {
      s.mention = "passable";
    }
  }

  return sortedStudents;
}
