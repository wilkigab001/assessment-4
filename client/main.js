const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const colorBtn = document.getElementById('colorButton')
const colors = document.getElementById('colors')
const addForm = document.getElementById('addForm')
const addInput = document.getElementById('addInput')

const deleteForm = document.getElementById('deleteColor')
const deleteInput = document.getElementById('deleteInput')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getColors = () => {
    axios.get("http://localhost:4000/api/colors/")
         .then(res => {
               const color = res.data

               for(i = 0; i < color.length; i++){
                let newColor = document.createElement('li')
                newColor.textContent = color[i]
                colors.appendChild(newColor)
               }
        })
    
}

const addColor = (event) => {
    event.preventDefault()

    let body = {
        color : deleteInput.value
    }

    axios.post("http://localhost:4000/api/addcolor/", body)
    .then(res => {
        const color = res.data

        for(i = 0; i < color.length; i++){
         let newColor = document.createElement('li')
         newColor.textContent = color[i]
         colors.appendChild(newColor)
        }

        addInput.value =""
 })

}

const deleteColors = (event) => {
    event.preventDefault()
    axios.delete(`http://localhost:4000/api/deletecolors/${deleteInput.value}`)
    .then(res => {
        const color = res.data

        for(i = 0; i < color.length; i++){
         let newColor = document.createElement('li')
         newColor.textContent = color[i]
         colors.appendChild(newColor)
        }

        deleteInput.value =""
 })
}




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
colorBtn.addEventListener('click', getColors)
addForm.addEventListener('click', addColor)
deleteForm.addEventListener('click', deleteColors)
