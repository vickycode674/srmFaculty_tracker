// script.js

document.addEventListener('DOMContentLoaded', () => {
    const timetableForm = document.getElementById('timetableForm');
    const facultyData = document.getElementById('facultyData');

    timetableForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const day = document.getElementById('day').value;
        const period = document.getElementById('period').value;

        try {
            const response = await fetch(`http://127.0.0.1:5000/faculty?day=${day}&period=${period}`);  //ajax /fetch /axios
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Display the faculty data
            facultyData.innerHTML = `<p>Faculty for  Cloud computing 3rd year is ${day}, Period ${period}:</p>
                                      <ul>
                                          ${data.map(faculty => `<li>Faculty Name:${faculty.faculty_name}</li>`).join('')} 
                                          <br>
                                          ${data.map(faculty => `<li>Faculty Number:${faculty.faculty_number}</li>`).join('')}
                                        <br>
                                          ${data.map(faculty => `<li>Faculty Suject:${faculty.faculty_subject_name}</li>`).join('')}

                                      </ul>`;
        } catch (error) {
            console.error('Error fetching data:', error);
            facultyData.innerHTML = '<p>Error fetching data</p>';
        }
    });
});
