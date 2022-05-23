import houses from '../components/houses';
import students from '../components/students';
import studentsOnDom from '../components/studentArray';

const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');
    const createId = '';
    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });
    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};

export default sortStudent;
