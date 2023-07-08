const getData = async () => {
  try {
    const res = await fetch('https://api.github.com/users');
    // console.log(res);
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();
    // console.log(data);
    domaYaz(data);
  } catch (err) {
    console.log(err);
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = `<img style="width:100px" src="./img/404.png" alt="" />`;
  }
};
const domaYaz = (users) => {
  // console.log(users);
  users.map((user) => {
    console.log(user);
    const { avatar_url } = user;
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML += `<img style="width:100px" src="${avatar_url}" alt="" />`;
  });
};

addEventListener('load', () => {
  getData();
});
