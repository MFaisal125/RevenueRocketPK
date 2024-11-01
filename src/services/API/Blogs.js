export  function ReadBlogs() {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:3000/api/post/";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText)
            return response;
        }
    }
    xhr.send()
}
