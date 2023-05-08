// Function to fetch exercise data from the server
async function fetchExerciseData(exerciseName) {
    try {
        const response = await fetch(
            `http://localhost:3001/api/recommended-exercise?exercise=${encodeURIComponent(exerciseName)}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching exercise data:', error);
    }
}

// Function to handle the click event on the exercise menu items
async function onExerciseClick(exerciseName) {
    const exerciseData = await fetchExerciseData(exerciseName);
  
    if (exerciseData) {
      document.getElementById('exercise-name').value = exerciseData.exerciseName;
      document.getElementById('number-of-sets').value = exerciseData.numberOfSets;
      document.getElementById('number-of-reps').value = exerciseData.reps;
      document.getElementById('duration').value = exerciseData.duration;
      document.getElementById('rest-time').value = exerciseData.restTime;
    }
  }
  
  // Add event listeners for each exercise in the dropdown menu
  const exerciseLinks = document.querySelectorAll('.dropdown-content a[href="#"]');
  
  exerciseLinks[0].addEventListener('click', () => onExerciseClick('Push ups'));
  exerciseLinks[1].addEventListener('click', () => onExerciseClick('Sit ups'));
  exerciseLinks[2].addEventListener('click', () => onExerciseClick('Squats'));
  exerciseLinks[3].addEventListener('click', () => onExerciseClick('Interval running'));