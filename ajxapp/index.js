const heading = document.querySelector("h2");
const headingText = heading.textContent;

const userId = "foolish-pine";

function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((response) => {
      console.log(response.status);
      if (!response.ok) {
        console.log("エラーレスポンス", response);
      } else {
        return response.json().then((userInfo) => {
          console.log(userInfo);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
