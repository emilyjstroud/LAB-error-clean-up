// import studentsOnDom from '../components/studentArray';
import voldysArmy from '../components/voldysArmy';
import students from '../components/students';

const events = () => {
  // get form on the DOM on button click
  const form = document.querySelector('#start-sorting').addEventListener('click', () => {
    const filterBtnRow = '';
    const studentAreas = '';
    // put html elements on the DOM on click
    form(); // form
    filterBtnRow(); // filter buttons
    studentAreas();
  });
};

document
  .querySelector('#student-container')
  .addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');
      const index = students.findIndex((student) => student.id === Number(id));
      // move from one array to another
      voldysArmy.push(...students.splice(index, 1));
      // get both sets of students on the DOM
      const studentsOnDom = '';
      studentsOnDom('#students', students);
      studentsOnDom('#voldy', voldysArmy);
    }
  });

document.querySelector('#filter-container').addEventListener('click', (e) => {
  if (e.target.id.includes('filter')) {
    const [, house] = e.target.id.split('--');
    const studentsOnDom = '';
    if (house === 'all') {
      studentsOnDom('#students', students);
    } else if (house) {
      const filter = students.filter((student) => student.house === house);
      studentsOnDom('#students', filter, house);
    }
  }
});

export default events;
