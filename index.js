const features = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Verified Charities & Donors",
    description:
      "Every connection on Lokarth is authentic. We partner with verified charities and genuine individuals, ensuring your donations reach only the right hands."
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Transparent Process",
    description:
      "No more guessing where your contribution goes. Lokarth gives you complete visibility, from donation initiation to fulfillment."
  },
  {
    icon: "fa-solid fa-certificate",
    title: "Instant Certificates",
    description:
      "Whether it’s a financial donation or blood contribution, Lokarth instantly rewards you with verified certificates."
  },
  {
    icon: "fa-solid fa-bell",
    title: "Emergency Alerts",
    description:
      "When urgent needs arise, Lokarth notifies you in real time. Because sometimes, your help can’t wait until tomorrow."
  },
  {
    icon: "fa-solid fa-hand-holding-heart",
    title: "Multiple Ways to Give",
    description:
      "Contribute money, food, clothes, or blood—all through one platform designed to make giving as simple as possible."
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Measurable Impact",
    description:
      "Lokarth provides clear summaries of how your donations are used, helping you witness the change you’re driving forward."
  }
];

const container = document.getElementById("features-container");

features.forEach(feature => {
  const card = document.createElement("div");
  card.classList.add("feature-card");

  card.innerHTML = `
    <i class="${feature.icon}"></i>
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  `;

  container.appendChild(card);
});


  // Example donation data (can be fetched from API later)
  const donations = [
    {
      category: "Education",
      title: "Help Azar to continue his study",
      image: "./images/photo.png",
      goal: 1234,
      collected: 900,
      remaining: 334,
      progressColor: "#16a34a"
    },
    {
      category: "Blood",
      title: "Save Peter life",
      image: "./images/photo (1).png",
      goal: 1234,
      collected: 1100,
      remaining: 134,
      progressColor: "#dc2626"
    },
    {
      category: "Clothes",
      title: "Build School for poor students",
      image: "./images/photo (2).png",
      goal: 1234,
      collected: 600,
      remaining: 634,
      progressColor: "#9333ea"
    },
    {
      category: "Food",
      title: "Make them happy",
      image: "./images/photo (3).png",
      goal: 1234,
      collected: 500,
      remaining: 734,
      progressColor: "#16a34a"
    }
  ];

  const doner = document.getElementById("cardsContainer");

  donations.forEach(donation => {
    // Calculate progress percentage
    const progressPercent = (donation.collected / donation.goal) * 100;

    // Create card element
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-image" style="background-image: url('${donation.image}')"></div>
      <div class="card-body">
        <span class="badge ${donation.category.toLowerCase()}">${donation.category}</span>
        <div class="card-title">${donation.title}</div>

        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%; background: ${donation.progressColor};"></div>
        </div>

        <div class="card-stats">
          <div><strong>Goal:</strong> <p>₹${donation.goal}</p></div>
          <div><strong>Collected:</strong> <p>₹${donation.collected}</p></div>
          <div><strong>Remaining:</strong> <p>₹${donation.remaining}</p></div>
        </div>
        <div class="card-footer">
        <button  class="btn-donate">DONATE</button>
        <span class="material-symbols-outlined share_icon">share</span> 
      </div>
      </div>
      
    `;

    doner.appendChild(card);
  });

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const contactModal = document.getElementById('contactModal');

openModalBtn.onclick = function() {
  contactModal.style.display = 'flex';
};

closeModalBtn.onclick = function() {
  contactModal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = 'none';
  }
};

const contactForm = document.getElementById('contactForm');
contactForm.onsubmit = function(e) {
  e.preventDefault();
  
  alert('Thank you! Your details have been submitted.');
  contactModal.style.display = 'none';
};

document.getElementById('contactForm').onsubmit = function(event) {
  event.preventDefault();

  const submitBtn = event.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true; 
  submitBtn.textContent = 'Sending...'; 

  emailjs.send('service_Lokarth', 'template_yookgyo', {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value
  })
  .then(function(response) {
    alert('Thank you! Your message has been sent.');
    document.getElementById('contactModal').style.display = 'none';
    document.getElementById('contactForm').reset();
  })
  .catch(function(error) {
    alert('Oops! Something went wrong. Please try again later.');
  })
  .finally(function() {
    submitBtn.disabled = false;  // re-enable the button
    submitBtn.textContent = 'Submit'; // reset button text
  });
};

