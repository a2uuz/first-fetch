
let output = document.getElementById("output");

const loadApi = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

loadApi().then((data) => {
  let answer = "";
  data.map((x) => {
    answer += `<div class="inner">
                    <h1>Fake Data</h1>
                   <p>Name: ${x.name}</p>
                   <p>Username: ${x.username}</p>
                   <p>Email: ${x.email}</p>
                 </div>`;
    output.innerHTML = answer;
  });
});
