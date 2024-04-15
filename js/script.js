document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("legendput");
    const cards = document.querySelectorAll(".col");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        cards.forEach(function (card) {
            const cardname = card.querySelector('.leg_card_name').textContent.trim().toLowerCase();
            if (cardname.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});