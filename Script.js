function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.bit');
    buttons.forEach((button) => {
      button.addEventListener('click', async function () {
        const { value: city } = await Swal.fire({
          title: 'Оберіть місто',
          input: 'select',
          inputOptions: {
            'Дніпро': 'Дніпро',
            'Першотравенськ': 'Чернігів',
            'Новомосковськ': 'Черкаси',
            'Павлоград': 'Павлоград',
            'Київ': 'Київ',
            'Біла Церква': 'Хмельницький',
            'Бровари': 'Полтава',
            'Запоріжжя': 'Запоріжжя',
            'Харків': 'Харків',
            'Суми': 'Суми',
            'Тернопіль': 'Тернопіль'
          },
          inputPlaceholder: 'Оберіть місто',
          showCancelButton: true,
        });
  
        if (!city) {
          Swal.fire('Please select a city.');
          return; // Stop further execution if the city is not selected.
        }
  
        const { value: formValues } = await Swal.fire({
          title: 'Multiple inputs',
          html:
            '<p>Спосіб доставки :</p>' +
            '<input type="checkbox" id="checkbox1" name="Нова пошта" value="Нова пошта">' +
            '<label for="checkbox1">Нова пошта</label>' +
            '<input type="checkbox" id="checkbox2" name="Justin" value="Justin">' +
            '<label for="checkbox2">Justin</label>' +
            '<input type="checkbox" id="checkbox3" name="Укрпошта" value="Укрпошта">' +
            '<label for="checkbox3">Укрпошта</label>' +
            '<p>Номер відділення:</p>' +
            '<input id="swal-input1" class="swal2-input" placeholder="Input 1">' +
            '<p>ФІО замовника:</p>' +
            '<input id="swal-input2" class="swal2-input" placeholder="Input 2">' +
            '<p>Телефон замовника:</p>' +
            '<input id="swal-input3" class="swal2-input" placeholder="Input 3">',
          focusConfirm: false,
          preConfirm: () => {
            const input1 = document.getElementById('swal-input1').value;
            const input2 = document.getElementById('swal-input2').value;
            const input3 = document.getElementById('swal-input3').value;
            // Check if any of the input fields are empty
          if (!input1 || !input2 || !input3) {
            Swal.fire('Please fill in all input fields.');
            return false; // Prevent the modal from closing
          } else {
            const selectedCheckboxes = [];
            document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
              if (checkbox.checked) {
                selectedCheckboxes.push(checkbox.getAttribute('name'));
              }
            });
            return { input1, input2, input3, selectedCheckboxes };
          }
        }
        });
  
        if (formValues) {
          const { input1, input2, input3, selectedCheckboxes } = formValues;
          Swal.fire(`Пошта: ${selectedCheckboxes.join('\n')}\nНомер: ${input1}\nФІО: ${input2}\nТелефон: ${input3}\n`);
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.dit');
    buttons.forEach((button) => {
      button.addEventListener('click', async function () {
        const { value: city } = await Swal.fire({
          title: 'Оберіть місто',
          input: 'select',
          inputOptions: {
            'Дніпро': 'Дніпро',
            'Першотравенськ': 'Чернігів',
            'Новомосковськ': 'Черкаси',
            'Павлоград': 'Павлоград',
            'Київ': 'Київ',
            'Біла Церква': 'Хмельницький',
            'Бровари': 'Полтава',
            'Запоріжжя': 'Запоріжжя',
            'Харків': 'Харків',
            'Суми': 'Суми',
            'Тернопіль': 'Тернопіль'
          },
          inputPlaceholder: 'Оберіть місто',
          showCancelButton: true,
        });
  
        if (!city) {
          Swal.fire('Please select a city.');
          return; // Stop further execution if the city is not selected.
        }
  
        const { value: formValues } = await Swal.fire({
          title: 'Multiple inputs',
          html:
            '<p>Спосіб доставки :</p>' +
            '<input type="checkbox" id="checkbox1" name="Нова пошта" value="Нова пошта">' +
            '<label for="checkbox1">Нова пошта</label>' +
            '<input type="checkbox" id="checkbox2" name="Justin" value="Justin">' +
            '<label for="checkbox2">Justin</label>' +
            '<input type="checkbox" id="checkbox3" name="Укрпошта" value="Укрпошта">' +
            '<label for="checkbox3">Укрпошта</label>' +
            '<p>Номер відділення:</p>' +
            '<input id="swal-input1" class="swal2-input" placeholder="Input 1">' +
            '<p>ФІО замовника:</p>' +
            '<input id="swal-input2" class="swal2-input" placeholder="Input 2">' +
            '<p>Телефон замовника:</p>' +
            '<input id="swal-input3" class="swal2-input" placeholder="Input 3">',
          focusConfirm: false,
          preConfirm: () => {
            const input1 = document.getElementById('swal-input1').value;
            const input2 = document.getElementById('swal-input2').value;
            const input3 = document.getElementById('swal-input3').value;
            // Check if any of the input fields are empty
          if (!input1 || !input2 || !input3) {
            Swal.fire('Please fill in all input fields.');
            return false; // Prevent the modal from closing
          } else {
            const selectedCheckboxes = [];
            document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
              if (checkbox.checked) {
                selectedCheckboxes.push(checkbox.getAttribute('name'));
              }
            });
            return { input1, input2, input3, selectedCheckboxes };
          }
        }
        });
  
        if (formValues) {
          const { input1, input2, input3, selectedCheckboxes } = formValues;
          Swal.fire(`Пошта: ${selectedCheckboxes.join('\n')}\nНомер: ${input1}\nФІО: ${input2}\nТелефон: ${input3}\n`);
        }
      });
    });
  });