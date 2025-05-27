// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.backgroundColor = '#007BFF';
backToTopButton.style.color = '#fff';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('review-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the name and comment values
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;

  // Create a new review element
  const review = document.createElement('p');
  review.innerHTML = `<strong>${name}:</strong> ${comment}`;

  // Append the review to the reviews section
  document.getElementById('reviews').appendChild(review);

  // Clear the form
  document.getElementById('review-form').reset();
});