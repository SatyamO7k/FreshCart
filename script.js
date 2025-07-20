 // Add some interactivity
      document.addEventListener("DOMContentLoaded", function () {
        // Animate progress bars
        const progressBars = document.querySelectorAll(".progress-fill");
        progressBars.forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0";
          setTimeout(() => {
            bar.style.width = width;
          }, 500);
        });

        // Add hover effects to category cards
        const categoryCards = document.querySelectorAll(".category-card");
        categoryCards.forEach((card) => {
          card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-10px)";
          });

          card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
          });
        });

        // Navigation arrows functionality
        const navArrows = document.querySelectorAll(".nav-arrow");
        navArrows.forEach((arrow) => {
          arrow.addEventListener("click", function () {
            // Add navigation logic here
            console.log("Navigation clicked");
          });
        });
      });