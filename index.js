
// 1ST STEP

var form = `
        <div class="form-group">
        <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="email" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your name">

        </div>
        <div class="form-group mt-3"
        <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="text" class="form-control" id="email" placeholder="Enter your email">
        </div>
        <button type="submit" class="btn btn-primary" onclick="save()">save</button>
        </div>
    `;
    // 2nd step  create data

    document.getElementById("form").innerHTML = form;
    

    details = [];
    getData();
    table(); 
    // last step now get data and insert into local storage

    function getData(){
        let Data = localStorage.getItem("details")
        if(Data){
            details = JSON.parse(Data)
        }else{
            setData();
        };
    }

    function setData(){
        localStorage.setItem("details",JSON.stringify(details));
    }
    //=====================================================
    function save(){
        let name = document.getElementById("name");
        let email = document.getElementById("email");

        if(name.value == 0  ){
            alert("please input valid name")
        }else if(email.value == 0){
            alert("please input valid email")
        }
        else{
            let data = {
                name:name.value,
                email:email.value
            }
            details.push(data)
            setData();
            table();

            
        name.value = "";
        email.value = "";
        }
        // let data = {
        //     name:name.value,
        //     email:email.value
        // }
        // console.log(data)
        // console.log(name.value)
        // console.log(email.value)
            // // insert your data into array = details[]
            // details.push(data)
            // // console.log(details)
            // //table()       ;// if users click the submit using save() it will call table(); 
            // setData();
            // table();

            // name.value = "";
            // email.value = "";


    }
    ///

    
      //     //3rd step insert now your data into table
      function table(){
        let table = `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
          </thead>
          <tbody> 
          `;
                for(let i = 0; i < details.length; i++){
                    table = table + `
                        <tr>
                        <th scopre="row">${i+1} </th>
                        <td>${details[i].name}</td>
                        <td>${details[i].email}</td>
                        <td><button type="button" class="btn btn-warning mt-3"  onclick="edit(${i})" >Edit</button></td>
                        <td><button type="button" class="btn btn-danger mt-3" onclick="Delete(${i})">delete</button></td>
                        </tr>
                    `
                };
                table = table + `
                </tody>
                </table>
                `;
                document.getElementById("table").innerHTML = table;      
    }
    /////

    // function delete
    function Delete(index){
        details.splice(index,1);
        // table();
        setData();
        table();

        
        document.getElementById("form").innerHTML = form;
        

        // console.log(index)
    }
    //

    // edit/update form

  

    function edit(index){

        let editForm = `   

        <div class="mb-3">
        <label for="name" class="form-label">Update Name</label>
        <input type="email" class="form-control" value="${details[index].name}" id="newName" aria-describedby="emailHelp" placeholder="Enter your update name">
        </div>
        <div class="mb-3">
        <label for="email" class="form-label">Update email</label>
        <input type="text" class="form-control" id="newEmail" value="${details[index].email}"  placeholder="Enter your update email">
        <button type="button" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
        </div>`;
        document.getElementById("form").innerHTML = editForm;
    }
    //

    // update the data

    function update(index){
        let newName =   document.getElementById("newName");
        let newEmail = document.getElementById("newEmail");
        console.log(index)

        // now insert your updated data into array
        details[index] = {
            name:newName.value ,
            email:newEmail.value
        };
        setData();
        table();
        document.getElementById("form").innerHTML = form;
        console.log(details)
    }
    //
  

    //