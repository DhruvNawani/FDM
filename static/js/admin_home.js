try {
    const profile_img = document.getElementById("profile_img");
    const dropdown = document.getElementById("dropdown");
    profile_img.onclick = () => {
        dropdown.style.display = "flex";
    }
    dropdown.onmouseleave = () => {
        dropdown.style.display = "none";
    }
} catch (error) {

}