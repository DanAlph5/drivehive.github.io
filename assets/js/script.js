document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.fade-in');
    var options = {
        threshold: 0.5
    };
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });

    // Form submission
    document.getElementById('waitlist-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var firstName = document.getElementById('first-name').value;
        var email = document.getElementById('email').value;

        // Create CSV data
        var csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "First Name,Email\n";
        csvContent += firstName + "," + email + "\n";

        // Create download link
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "waitlist.csv");
        document.body.appendChild(link);

        // Download the CSV file
        link.click();
    });
});

