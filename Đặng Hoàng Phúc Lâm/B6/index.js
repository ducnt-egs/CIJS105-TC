async function fetchDataUsers(){
    const api = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=68a46a3021c34bd2bac8356d`
    const response = await fetch(api);
    const data = await response.json();
    const usersData=data.data.data
    console.log(usersData)
  
}

async function fetchDataFlags(){
const api = `https://mindx-mockup-server.vercel.app/api/resources/flags?apiKey=68a46a3021c34bd2bac8356d`
    const response = await fetch(api);
    const data = await response.json();
    const flagsData=data.data.data
    console.log(flagsData)
  
}
async function fetchDataTaskStatus(){
    const api = `https://mindx-mockup-server.vercel.app/api/resources/taskStatus?apiKey=68a46a3021c34bd2bac8356d`
    const response = await fetch(api);
    const data = await response.json();
    const taskStatusData=data.data.data
    console.log(taskStatusData)
  
}

async function fetchDataTasks(){
    const api = `https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=68a46a3021c34bd2bac8356d`
    const response = await fetch(api);
    const data = await response.json();
    const tasksData=data.data.data
    console.log(tasksData)
  
}

async function addUsers(newUser) {
    const api = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=68a46a3021c34bd2bac8356d`
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"  // báo cho server biết body là JSON
      },
      body: JSON.stringify(newUser)  // chuyển object JS thành JSON string
    });

    const data = await response.json();
    console.log("User đã thêm:", data);
    return data;
}
fetchDataUsers()
fetchDataFlags()
fetchDataTaskStatus()
fetchDataTasks()
// addUsers(
//     {
//         "userId": 4, 
//         "name": "Phúc Lâm"
//     }
// )
