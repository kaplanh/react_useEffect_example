fetch('https://api.github.com/users')
  .then((res) => {
    // console.log(res);
    if (!res.ok) {
      throw new Error('hata');
    } else {
      return res.json();
    }
  })
  .then((data) => {
    domaYaz(data);
  })
  .catch((err) => {
    console.log(err);
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = `<img style="width:100px" src="./img/404.png" alt="" />`;
  });

const domaYaz = (users) => {
  // console.log(users);
  users.map((user) => {
    // console.log(user);
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML += `<img style="width:100px" src="${user.avatar_url}" alt="" />`;
  });
};
