/** Cargar un fichero JSON */

window.onload = () => {
  let numpage = 1;
  let btn1 = document.querySelector(".btn1");
  let btn2 = document.querySelector(".btn2");
  let lista = document.querySelector("#usuarios");
  cargarPag();

  btn1.addEventListener("click", event => {
    numpage = 1;
    cargarPag(`https://reqres.in/api/users?page=${numpage}`);
  });

  btn2.addEventListener("click", event => {
    numpage = 2;
    cargarPag(`https://reqres.in/api/users?page=${numpage}`);
  });

  function cargarPag(url) {
    lista.innerHTML = "";
    fetch(`https://reqres.in/api/users?page=${numpage}`)
      //fetch(`https://reqres.in/api/users/2`)
      // fetch(url)

      .then(res => res.json())
      .then(res => {
        let lista = document.querySelector("#usuarios");
        let data = res.data;

        data.sort((a, b) => a.first_name.localeCompare(b.first_name));
        data.forEach((user) => {
          let avatar = `https://source.boringavatars.com/bauhaus/50/${user.first_name}%20${user.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
          let item = `<li class="user">
                    <img src="${avatar}" alt="${user.first_name} "/>
                    <span class="name">${user.first_name}</span>
                    <span class="surname"> ${user.last_name} </span>
  
            </li>`;
          lista.innerHTML += item;
        });
      })
      .then(() => {
        let monkeyList = new List('test-list', {
          valueNames: ['name', 'surname']
        });
      });
  }
  // fetch(`https://reqres.in/api/users?page=${numpage}`)
  // .then(res => res.json())
  // .then(res => {
  //    let lista = document.querySelector("#usuarios");
  //    let data = res.data;

  //   //  data.sort((a, b) => a.first_name.localeCompare(b.first_name));
  //    data.forEach((user) => {
  //        let avatar = `https://source.boringavatars.com/bauhaus/50/${user.first_name}%20${user.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
  //        let item=`<li class="user">
  //                 <img src="${avatar}" alt="${user.first_name} "/>
  //                 <span class="name">${user.first_name}</span>
  //                 <span class="surname"> ${user.last_name} </span>

  //         </li>`;
  //      lista.innerHTML += item;
  //    });
  //  })
  // .then(() => {
  //     let monkeyList = new List('test-list', {
  //         valueNames: ['name', 'surname']
  //       });
  // });
  let search = document.querySelector('#btn-search');

  search.addEventListener('click', event => {
    let searchNum = document.querySelector('#search').value;
    if (Number(searchNum) != null || (searchNum <= 0 || searchNum > 12)) {
      cargarPag2(`https://reqres.in/api/users/${searchNum}`);
      function cargarPag2(url) {
        lista.innerHTML = "";
        //fetch(`https://reqres.in/api/users?page=${numpage}`)
        //fetch(`https://reqres.in/api/users/2`)
        fetch(`https://reqres.in/api/users/${searchNum}`)
          .then(res => res.json())
          .then(res => {
            let lista = document.querySelector("#usuarios");
            let data = res.data;


            let avatar = `https://source.boringavatars.com/bauhaus/50/${data.first_name}%20${data.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
            let item = `<li class="user">
                    <img src="${avatar}" alt="${data.first_name} "/>
                    <span class="name">${data.first_name}</span>
                    <span class="surname"> ${data.last_name} </span>
  
            </li>`;
            lista.innerHTML += item;
          })
      }
    }else{
      alert('Introduzca un valor válido, un níumero entre 0 y 13 sin incluir estos');
    }
  })
}






