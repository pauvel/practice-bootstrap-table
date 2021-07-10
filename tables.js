$(document).ready(async function () {

    const getPeople = async ()=>{
        const response = await fetch('https://reqres.in/api/users?page=2');
        return response.json();
    };

    const data = await getPeople();
    $('#myTable').bootstrapTable({
        pagination: true,
        search: true,
        columns: [{
            field: 'id',
            title: 'Id persona'
          }, {
            field: 'first_name',
            title: 'Nombre'
          }, {
            field: 'email',
            title: 'Correo electronico'
          }],
          data: data.data
    });

});