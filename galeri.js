
document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById("imageUpload");
    const gallery = document.getElementById("gallery");

    // Load gambar dari localStorage saat halaman dibuka
    const savedImages = JSON.parse(localStorage.getItem("galleryImages") || "[]");
    savedImages.forEach(src => addImageToGallery(src));

    // Tambahkan gambar baru dari file input
    imageUpload.addEventListener("change", (event) => {
        const files = event.target.files;
        for (let file of files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const src = e.target.result;
                addImageToGallery(src);
                saveImageToLocalStorage(src);
            };
            reader.readAsDataURL(file);
        }
    });

    function addImageToGallery(src) {
        const container = document.createElement("div");
        container.className = "gallery-item";

        const img = document.createElement("img");
        img.src = src;

        const delBtn = document.createElement("button");
        delBtn.innerText = "Hapus";
        delBtn.className = "delete-btn";
        delBtn.onclick = () => {
            container.remove();
            removeImageFromLocalStorage(src);
        };

        container.appendChild(img);
        container.appendChild(delBtn);
        gallery.appendChild(container);
    }

    function saveImageToLocalStorage(src) {
        const current = JSON.parse(localStorage.getItem("galleryImages") || "[]");
        current.push(src);
        localStorage.setItem("galleryImages", JSON.stringify(current));
    }

    function removeImageFromLocalStorage(src) {
        let current = JSON.parse(localStorage.getItem("galleryImages") || "[]");
        current = current.filter(image => image !== src);
        localStorage.setItem("galleryImages", JSON.stringify(current));
    }
});
