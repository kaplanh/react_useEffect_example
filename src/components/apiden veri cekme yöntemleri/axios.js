const getData = async () => {
  try {
    const res = await axios('https://api.github.com/users');
    console.log(res.data);
    if (res.status !== 200) {
      throw new Error('HATA');
    }
    domaYaz(res.data);
  } catch (err) {
    console.log(err);
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = `<img style="width:100px" src="./img/404.png" alt="" />`;
  }
};

const domaYaz = (users) => {
  console.log(users);
  users.forEach((user) => {
    const { avatar_url } = user;
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML += `<img style="width:100px" src="${avatar_url}" alt="" />`;
  });
};
addEventListener('load', () => {
  getData();
});
